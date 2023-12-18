'use client';
import React, { useEffect, useRef, useState, Fragment } from 'react';

const Form = () => {

    const apiUrl = process.env.apiUrl;

    const [openCountry, setOpenCountry] = useState(false);
    const [countries, setCountries] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCountry, setSelectedCountry] = useState(null);
    const dropdownRef = useRef(null);
    const [errors, setErrors] = useState({});
    const [submissionStatus, setSubmissionStatus] = useState(null);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        code: selectedCountry ? selectedCountry.code : '',
        country_id: selectedCountry ? selectedCountry.id : '',
        mobile: '',
        phone_number: '',
    });

    const validateForm = () => {
        let isValid = true;
        const newErrors = {};

        const requiredFields = ['code', 'mobile'];
        requiredFields.forEach((field) => {
            if (!formData[field].trim()) {
                newErrors[field] = 'This field is required';
                isValid = false;
            }
        });

        setErrors(newErrors);
        return isValid;
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target) &&
                !document.getElementById('calling_code').contains(event.target)
            ) {
                setOpenCountry(false);
                setSearchTerm('')
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRef]);

    const handleChange = (e) => {
        const { id, value } = e.target;

        if (id === 'mobile' && value.length >= 12) {
            return;
        }

        setFormData((prevData) => {
            let updatedData = {
                ...prevData,
                [id]: value,
            };

            // If the changed field is 'mobile', update 'phone_number'
            if (id === 'mobile') {
                updatedData = {
                    ...updatedData,
                    phone_number: `+${prevData.code}${value}`,
                };
            }

            return updatedData;
        });

        setErrors((prevErrors) => ({
            ...prevErrors,
            [id]: '',
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateForm()) {
            try {
                setLoading(true);

                const response = await fetch(`${apiUrl}/early-access`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });

                const data = await response.json();

                if (response.ok) {
                    setSubmissionStatus('success');
                    setTimeout(() => {
                        handleCloseModal();

                        setFormData({
                            code: selectedCountry ? selectedCountry.code : '',
                            country_id: selectedCountry ? selectedCountry.id : '',
                            mobile: '',
                            phone_number: '',
                        });
                        setErrors({});
                        setSubmissionStatus(null);
                    }, 2000);
                } else {
                    setSubmissionStatus('error');
                    setErrors(data.data || {});
                }
            } catch (error) {
                setSubmissionStatus('error');
                setErrors(error || {});
                // setErrors({ message: 'An error occurred while submitting the form.' });
            } finally {
                setLoading(false);
            }
        } else {
            setSubmissionStatus(null);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                // const countriesResponse = await fetch(`${apiUrl}/get-countries`);
                const userResponse = await fetch(`${apiUrl}/user-ip`);

                if (userResponse.ok) {
                    const userData = await userResponse.json();

                    const countriesList = userData.countries
                    const countriesMap = new Map(countriesList.map(country => [country.iso2, country]));
                    setCountries(countriesList);

                    const userCountryIso2 = userData?.iso2;
                    const userCountry = countriesMap.get(userCountryIso2);

                    if (userCountry) {
                        setSelectedCountry(userCountry);

                        setFormData(prevFormData => ({
                            ...prevFormData,
                            code: userCountry.code,
                            country_id: userCountry.id,
                        }));
                    }
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleCountryClick = (country) => {
        setSelectedCountry(country);

        // Update formData values when a country is selected
        setFormData(prevFormData => ({
            ...prevFormData,
            code: country.code,
            country_id: country.id,
        }));

        setOpenCountry(!openCountry);
        setSearchTerm('');
    };

    const filteredCountries = countries.filter(country =>
        country.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <form onSubmit={handleSubmit}>
            <div className='flex flex-col gap-4 md:gap-7 mt-10 md:mt-10 rounded-[1.875rem]'>
                <h2 className='uppercase leading-none font-black text-center text-3xl sm:text-4xl md:text-[2.875rem'>
                    Get your early access now
                </h2>
                <div className='w-full relativee flex flex-col justify-center md:flex-row gap-4 md:gap-10 mx-auto'>
                    <div className='w-full flex flex-col'>
                        <div className="flex w-full">
                            <div className="calling_code">
                                <div className="flex h-full justify-between items-center">
                                    <div id="calling_code" onClick={() => setOpenCountry(!openCountry)} className="select bg-gray-100 border-gray-300 border-2 border-e-0 py-2.5 pl-5 pr-2 rounded-xl rounded-e-none flex justify-between items-center text-gray-400 text-base">
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

                            <div id="calling_code-drop" className={`dropdown px-1 ${openCountry ? 'visible' : 'hidden'}`} ref={dropdownRef}>
                                <div className="search-wrapper !sticky top-0 left-0 flex justify-between items-center">
                                    <input type="text" id="search-country" placeholder="Search" className="search-country outline-0 w-full px-3.5 py-2.5 bg-gray-100 border-0 text-sm" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                                    {searchTerm && (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24" className='px-1 cursor-pointer' onClick={(e) => { setSearchTerm(''); }}>
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                        </svg>
                                    )}
                                    {searchTerm === '' && (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-5-5m2-5a8 8 0 1 0-16 0 8 8 0 0 0 16 0z"></path>
                                        </svg>
                                    )}
                                </div>

                                <ul id="country-ul">
                                    {filteredCountries.map((country, index) => (
                                        <li key={index} className="my-1 rounded-md cursor-pointer py-2 px-2.5 hover:bg-gray-300" onClick={() => handleCountryClick(country)}>
                                            <span className="flex items-center">
                                                <img src={`/flags/${country.iso2}.svg`} alt={country.name} />
                                                <span className="ms-4 text-sm">{country.name}</span>
                                                <span className="ms-4 text-sm">{country.code}</span>
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                <div className={`no-items p-3 text-center flex flex-col items-center ${filteredCountries.length === 0 ? 'visible' : 'hidden'}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-5-5m2-5a8 8 0 1 0-16 0 8 8 0 0 0 16 0z"></path>
                                    </svg>
                                    <p className="mt-1 fs-md">No items</p>
                                </div>
                            </div>

                            <input
                                id="mobile"
                                type="tel"
                                name="mobile"
                                value={formData.mobile}
                                onChange={handleChange}
                                placeholder="Mobile number"
                                className={`focus:outline-none onboarding-mobile outline-0 w-full bg-gray-100 border-gray-300 border-2 border-s-0 pl-1 pr-3.5 py-2.5 rounded-xl rounded-s-none text-lg ${errors.mobile ? 'border-s-2 border-red-500 selection:' : ''}`} />
                        </div>
                        <span className='text-red-500 text-base'>{errors.mobile}</span>
                        <span className='text-red-500 text-base'>{errors.phone_number}</span>
                    </div>
                </div>

                <div className='flex flex-col justify-center md:flex-row gap-4 md:gap-10'>
                    <div className='flex flex-col gap-1'>
                        <p className='leading-8 text-center w-full mx-auto'>By hitting submit, you agree on receiving an SMS and being among the first to know when the app is ready.</p>
                    </div>
                </div>

                <div className='flex flex-col justify-center md:flex-row gap-4 md:gap-10'>
                    <div className='flex flex-col gap-1'>
                        <input type='submit' className='cursor-pointer mm-button !px-20 mm-button blue' value='Submit' disabled={loading} />
                    </div>
                </div>

                {loading && <div className='text-gray-600 mt-4 text-base'>Submitting...</div>}

                {submissionStatus === 'success' && (
                    <div className='text-green-600 mt-4 text-base'>Form submitted successfully!</div>
                )}

                {submissionStatus === 'error' && (
                    <div className='text-red-500 mt-4 text-base'>An error occurred while submitting the form.</div>
                )}
            </div>
        </form>
    )
}

export default Form