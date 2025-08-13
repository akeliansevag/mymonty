"use client";

import { useState, useRef, useEffect } from "react";
import { useAppContext } from '../AppContext';

export default function ContactUs() {
    const { geoData } = useAppContext();

    const [selectedCountry, setSelectedCountry] = useState(null);
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        position: "",
        code: selectedCountry ? selectedCountry.code : '', // Default code value based on selected country
        mobile: '',
        company: ""
    });

  const [errors, setErrors] = useState({});
  const [statusMessage, setStatusMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
const [searchTerm, setSearchTerm] = useState('');
  const dropdownRef = useRef(null);
  const [countries, setCountries] = useState([]);
  const [openCountry, setOpenCountry] = useState(false);

  const validate = () => {
    let newErrors = {};

    if (!formData.first_name.trim()) newErrors.first_name = "First name is required";
    if (!formData.last_name.trim()) newErrors.last_name = "Last name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.position.trim()) newErrors.position = "Position is required";

    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^\+?[0-9]{7,15}$/.test(formData.mobile)) {
      newErrors.mobile = "Invalid mobile number";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const sanitizedValue = e.target.id === 'mobile' ? e.target.value.replace(/[^\d]/g, '') : e.target.value;

    // Limit mobile number field to a maximum of 16 characters
    if (e.target.id === 'mobile' && sanitizedValue.length >= 12) {
      return;
    }

    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage("");
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const res = await fetch("https://leb-backend.mymonty.com/api/salary", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      console.log("API Response:", data);

      if (res.ok) {
        setStatusMessage("We’ve received your details and will be in touch soon!");
        setFormData({
          first_name: "",
          last_name: "",
          email: "",
          position: "",
          code: selectedCountry ? selectedCountry.code : '',
          mobile: "",
          company: ""
        });
      } else {
        setStatusMessage("Failed to submit form. Please try again.");
      }
    } catch (error) {
      console.error("API Error:", error);
      setStatusMessage("Something went wrong.");
    }

    setIsSubmitting(false);
  };

    useEffect(() => {
        if (geoData && geoData.countries) {
            const countriesList = geoData.countries;
            const countriesMap = new Map(countriesList.map(country => [country.iso2, country]));
            setCountries(countriesList);
    
            const userCountryIso2 = geoData?.iso2;
            const userCountry = countriesMap.get(userCountryIso2);
    
            if (userCountry) {
            setSelectedCountry(userCountry);
    
            setFormData(prevFormData => ({
                ...prevFormData,
                code: userCountry.code,
            }));
            }
        }
    }, [geoData]);

    const handleCountryClick = (country) => {
        setSelectedCountry(country);

        // Update formData values when a country is selected
        setFormData(prevFormData => ({
        ...prevFormData,
        code: country.code,
        }));

        setOpenCountry(!openCountry);
        setSearchTerm('');
    };

    const filteredCountries = countries.filter(country =>
        country.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <section id="contact-us" className='lg:py-32 max-lg:py-16 bg-[#091111]'>
        
        <div className="container">
            <h2 className="section-title text-balance text-center">Kindly share your information AND our team will contact you</h2>
            <div className="lg:bg-black lg:rounded-2xl lg:p-8 mt-10">

                <form onSubmit={handleSubmit} className="space-y-10 max-lg:space-y-6">
                    {/* Row 1 */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                        <label className="text-[18px] block text-white mb-1">First Name</label>
                        <input
                        type="text"
                        name="first_name"
                        placeholder="Enter first name"
                        className="w-full rounded-xl p-3 bg-white text-black"
                        value={formData.first_name}
                        onChange={handleChange}
                        />
                        {errors.first_name && <p className="text-red-500 text-sm mt-1">{errors.first_name}</p>}
                    </div>
                    <div>
                        <label className="text-[18px] block text-white mb-1">Last Name</label>
                        <input
                        type="text"
                        name="last_name"
                        placeholder="Enter last name"
                        className="w-full rounded-xl p-3 bg-white text-black"
                        value={formData.last_name}
                        onChange={handleChange}
                        />
                        {errors.last_name && <p className="text-red-500 text-sm mt-1">{errors.last_name}</p>}
                    </div>
                    </div>

                    {/* Row 2 */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                        <label className="text-[18px] block text-white mb-1">Email</label>
                        <input
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        className="w-full rounded-xl p-3 bg-white text-black"
                        value={formData.email}
                        onChange={handleChange}
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>
                    <div>
                        <label className="text-[18px] block text-white mb-1">Position</label>
                        <input
                        type="text"
                        name="position"
                        placeholder="Enter position"
                        className="w-full rounded-xl p-3 bg-white text-black"
                        value={formData.position}
                        onChange={handleChange}
                        />
                        {errors.position && <p className="text-red-500 text-sm mt-1">{errors.position}</p>}
                    </div>
                    </div>

                    {/* Row 3 */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                        <div className='flex flex-col w-full'>
                            <label className="text-[18px] block text-white mb-1">Mobile Number</label>
                            <div className='relativee flex flex-col justify-center md:flex-row'>
                                <div className='w-full flex flex-col'>
                                <div className="flex w-full">
                                    <div className="calling_code">
                                        <div className="flex h-full justify-between items-center">
                                            <div id="calling_code" onClick={(e) => { setOpenCountry(!openCountry) }} className="select bg-white rounded-xl p-3 bg-white text-black rounded-e-none flex justify-between items-center text-gray-400">
                                            {selectedCountry && (
                                                <>
                                                <div className="text-lg">
                                                    <img src={`/flags/${selectedCountry.iso2}.svg`} alt={selectedCountry.name} />
                                                </div>
                                                <div className='text-black'>
                                                    +{selectedCountry.code}
                                                </div>
                                                </>
                                            )}
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6 9L12 15L18 9" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            </div>
                                        </div>
                                    </div>

                                    <div id="calling_code-drop" className={`dropdown !shadow-none bg-white px-1 ${openCountry ? 'visible' : 'hidden'}`} ref={dropdownRef}>
                                        <div className="search-wrapper border-b border-gray-100 !sticky top-0 left-0 flex justify-between items-center">
                                            <input type="text" id="search-country" placeholder="Search" className="search-country outline-0 w-full px-3.5 py-2.5 bg-white border-0 text-sm text-black" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                                            {searchTerm && (
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="black" width="24" height="24" className='px-1 cursor-pointer' onClick={(e) => { setSearchTerm(''); }}>
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                            </svg>
                                            )}
                                            {searchTerm === '' && (
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="black" width="24" height="24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-5-5m2-5a8 8 0 1 0-16 0 8 8 0 0 0 16 0z"></path>
                                            </svg>
                                            )}
                                        </div>

                                        <ul id="country-ul">
                                            {filteredCountries.map((country, index) => (
                                            <li key={index} className="my-1 rounded-md cursor-pointer py-2 px-2.5 hover:bg-gray-300 text-black" onClick={() => handleCountryClick(country)}>
                                                <span className="flex items-center">
                                                <img src={`/flags/${country.iso2}.svg`} alt={country.name} />
                                                <span className="ms-4 text-sm">{country.name}</span>
                                                <span className="ms-4 text-sm">{country.code}</span>
                                                </span>
                                            </li>
                                            ))}
                                        </ul>

                                        <div className={`no-items p-3 text-center flex flex-col items-center ${filteredCountries.length === 0 ? 'visible' : 'hidden'}`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="black" width="24" height="24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-5-5m2-5a8 8 0 1 0-16 0 8 8 0 0 0 16 0z"></path>
                                            </svg>
                                            <p className="mt-1 fs-md text-black">No items</p>
                                        </div>
                                    </div>

                                    <input
                                    id="mobile"
                                    type="tel"
                                    name="mobile"
                                    value={formData.mobile}
                                    onChange={handleChange}
                                    placeholder="Mobile number"
                                    className={`outline-0 w-full rounded-xl rounded-s-none p-3 bg-white text-black`} />
                                </div>
                                {errors.mobile && <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label className="text-[18px] block text-white mb-1">Company Name (Optional)</label>
                        <input
                        type="text"
                        name="company"
                        placeholder="Enter company name"
                        className="w-full rounded-xl p-3 bg-white text-black"
                        value={formData.company}
                        onChange={handleChange}
                        />
                    </div>
                    </div>

                    {/* Submit */}
                    <div>
                    <button
                        type="submit"
                        className="rounded-full text-md block mx-auto px-10 py-2 mt-10 bg-[var(--mm-blue)] text-white hover:bg-white hover:text-black transition-all"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "Submitting..." : "Submit"}
                    </button>
                    </div>

                    
                </form>
                {statusMessage && (
                    <p
                        className={`mt-5 text-base text-center text-white`}
                    >
                        {statusMessage}
                    </p>
                    )}
            </div>
        </div>
    </section>
    
  );
}