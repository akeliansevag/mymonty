'use client';
import React, { useState, useEffect, useRef } from 'react';
import { useAppContext } from '../AppContext';

const Complaint = () => {

  const { geoData } = useAppContext();
  const apiUrl = process.env.apiUrl;

  const [selectedCountry, setSelectedCountry] = useState(null);
  const initialFormData = {
    title: '',
    first_name: '',
    last_name: '',
    address: '',
    code: selectedCountry ? selectedCountry.code : '', // Default code value based on selected country
    mobile: '',
    email: '',
    method: '',
    time: '',
    relation: '',
    complaint: '',
    previous_complaint: '',
    outcome: '',
    country_id: selectedCountry ? selectedCountry.id : '',
  }

  const [loading, setLoading] = useState(false);
  const [openCountry, setOpenCountry] = useState(false);
  const [errors, setErrors] = useState({});
  const [countries, setCountries] = useState([]);
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownRef = useRef(null);
  const [formData, setFormData] = useState(initialFormData);

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Required fields validation
    const requiredFields = ['title', 'first_name', 'last_name', 'address', 'code', 'mobile', 'email', 'method', 'time', 'relation', 'complaint'];
    requiredFields.forEach((field) => {
      if (!formData[field].trim()) {
        newErrors[field] = 'This field is required';
        isValid = false;
      }
    });

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email.trim() && !emailPattern.test(formData.email)) {
      newErrors.email = 'Invalid email address';
      isValid = false;
    }

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
    const sanitizedValue = id === 'mobile' ? value.replace(/[^\d]/g, '') : value;

    // Limit mobile number field to a maximum of 16 characters
    if (id === 'mobile' && sanitizedValue.length >= 12) {
      return;
    }

    setFormData((prevData) => ({ ...prevData, [id]: sanitizedValue }));

    // Clear the error message when the user starts typing in a field
    setErrors((prevErrors) => ({ ...prevErrors, [id]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Concatenate first_name and last_name into a single name field
    const updatedFormData = {
      ...formData,
      name: `${formData.first_name} ${formData.last_name}`
    };

    if (validateForm()) {
      try {
        setLoading(true);

        const response = await fetch(`${apiUrl}/complaints`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedFormData),
        });

        const data = await response.json();

        if (response.ok) {
          setSubmissionStatus('success');
          setTimeout(() => {
            setFormData({
              ...initialFormData,
              code: selectedCountry ? selectedCountry.code : '',
              country_id: selectedCountry ? selectedCountry.id : '',
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
          country_id: userCountry.id,
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
      country_id: country.id,
    }));

    setOpenCountry(!openCountry);
    setSearchTerm('');
  };

  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <section id="complaints_form" className='pt-14 pb-14 lg:pt-28 lg:pb-20'>
        <div className='container'>
          <h2 className='uppercase font-black text-3xl sm:text-5xl md:text-[2.875rem] leading-none'>
            Complaints Form
          </h2>
          <p className='leading-8 mt-4'><span className="text-red-500">* </span>Indicates mandatory fields.</p>
          <form onSubmit={handleSubmit}>
            <div className='flex flex-col gap-10 px-10 py-20 bg-gray-100 mt-10 rounded-[1.875rem]'>
              <div className='flex flex-col md:flex-row gap-10'>
                <div className='flex flex-col gap-1 w-full'>
                  <label htmlFor='title'><span className="text-red-500">* </span>Title</label>
                  <input
                    id='title'
                    name='title'
                    value={formData.title}
                    onChange={handleChange}
                    placeholder='Title'
                    className={`px-3.5 py-2.5 border-2 w-full border-gray-300 rounded-xl ${errors.title ? 'border-red-500' : ''
                      }`}
                  />
                  <span className='text-red-500'>{errors.title}</span>
                </div>

                <div className='flex flex-col gap-1 w-full'>
                  <label htmlFor='first-name'><span className="text-red-500">* </span>First Name</label>
                  <input
                    id='first_name'
                    name='first_name'
                    value={formData.first_name}
                    onChange={handleChange}
                    placeholder='First Name'
                    className={`px-3.5 py-2.5 border-2 w-full border-gray-300 rounded-xl ${errors.first_name ? 'border-red-500' : ''
                      }`}
                  />
                  <span className='text-red-500'>{errors.first_name}</span>
                </div>
              </div>

              <div className='flex flex-col md:flex-row gap-10'>
                <div className='flex flex-col gap-1 w-full'>
                  <label htmlFor='last-name'><span className="text-red-500">* </span>Last Name</label>
                  <input
                    id='last_name'
                    name='last_name'
                    value={formData.last_name}
                    onChange={handleChange}
                    placeholder='Last Name'
                    className={`px-3.5 py-2.5 border-2 w-full border-gray-300 rounded-xl ${errors.last_name ? 'border-red-500' : ''
                      }`}
                  />
                  <span className='text-red-500'>{errors.last_name}</span>
                </div>
                <div className='flex flex-col gap-1 w-full'>
                  <label htmlFor='address'><span className="text-red-500">* </span>Address</label>
                  <input
                    id='address'
                    name='address'
                    value={formData.address}
                    onChange={handleChange}
                    placeholder='Address'
                    className={`px-3.5 py-2.5 border-2 w-full border-gray-300 rounded-xl ${errors.address ? 'border-red-500' : ''
                      }`}
                  />
                  <span className='text-red-500'>{errors.address}</span>
                </div>
              </div>

              <div className='flex flex-col md:flex-row gap-10'>
                <div className='flex flex-col gap-1 w-full'>
                  <label htmlFor='contact-number'><span className="text-red-500">* </span>Contact Number</label>
                  <div className='relativee flex flex-col justify-center md:flex-row'>
                    <div className='w-full flex flex-col'>
                      <div className="flex w-full">
                        <div className="calling_code">
                          <div className="flex h-full justify-between items-center">
                            <div id="calling_code" onClick={(e) => { setOpenCountry(!openCountry) }} className="select bg-white border-gray-300 border-2 border-e-0 p-2.5 rounded-xl rounded-e-none flex justify-between items-center text-gray-400  ">
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

                        <div id="calling_code-drop" className={`dropdown bg-white px-1 ${openCountry ? 'visible' : 'hidden'}`} ref={dropdownRef}>
                          <div className="search-wrapper border-b border-gray-100 !sticky top-0 left-0 flex justify-between items-center">
                            <input type="text" id="search-country" placeholder="Search" className="search-country outline-0 w-full px-3.5 py-2.5 bg-white border-0 text-sm" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
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
                          placeholder="Contact number"
                          className={`outline-0 w-full border-gray-300 border-2 border-s-0 pl-1 pr-3.5 py-2.5 rounded-xl rounded-s-none ${errors.mobile ? 'border-s-2 border-red-500' : ''}`} />
                      </div>
                      <span className='text-red-500'>{errors.mobile}</span>
                    </div>
                  </div>
                </div>
                <div className='flex flex-col gap-1 w-full'>
                  <label htmlFor='email'><span className="text-red-500">* </span>Email Address</label>
                  <input
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    placeholder='Email Address'
                    className={`px-3.5 py-2.5 border-2 w-full border-gray-300 rounded-xl ${errors.email ? 'border-red-500' : ''
                      }`}
                  />
                  <span className='text-red-500'>{errors.email}</span>
                </div>
              </div>

              <div className='flex flex-col md:flex-row gap-10'>
                <div className='flex flex-col gap-1 w-full'>
                  <label htmlFor='method'><span className="text-red-500">* </span>Preferred contact method</label>
                  <select
                    name='method'
                    id='method'
                    value={formData.method}
                    onChange={handleChange}
                    className={`px-3.5 py-2.5 border-2 w-full border-gray-300 rounded-xl ${errors.method ? 'border-red-500' : ''}`}>
                    <option>Select</option>
                    <option value='Email'>Email</option>
                    <option value='Phone/Mobile'>Phone/Mobile</option>
                    <option value='Regular Mail'>Regular Mail</option>
                    <option value='Other (to specify)'>Other (to specify)</option>
                  </select>
                  <span className='text-red-500'>{errors.method}</span>
                </div>

                <div className='flex flex-col gap-1 w-full'>
                  <label htmlFor='time'><span className="text-red-500">* </span>Preferred contact time</label>
                  <select
                    name='time'
                    id='time'
                    value={formData.time}
                    onChange={handleChange}
                    className={`px-3.5 py-2.5 border-2 w-full border-gray-300 rounded-xl ${errors.time ? 'border-red-500' : ''}`}>
                    <option>Select</option>
                    <option value='9 AM to 12 PM'>9 AM to 12 PM</option>
                    <option value='12 PM to 5 PM'>12 PM to 5 PM</option>
                  </select>
                  <span className='text-red-500'>{errors.time}</span>
                </div>
              </div>

              <div className='flex flex-col md:flex-row gap-10'>
                <div className='flex flex-col gap-1 w-full'>
                  <label htmlFor='relation'><span className="text-red-500">* </span>Is your complaint related to?</label>
                  <select
                    name='relation'
                    id='relation'
                    value={formData.relation}
                    onChange={handleChange}
                    className={`px-3.5 py-2.5 border-2 w-full border-gray-300 rounded-xl ${errors.relation ? 'border-red-500' : ''}`}>
                    <option>Select</option>
                    <option value='Staff Performance'>Staff Performance</option>
                    <option value='Partner Performance'>Partner Performance</option>
                    <option value='Quality Of Service'>Quality Of Service</option>
                    <option value='Transparency'>Transparency</option>
                    <option value='Products'>Products</option>
                    <option value='Transactions'>Transactions</option>
                    <option value='Other (To specify)'>Other (To specify)</option>
                  </select>
                  <span className='text-red-500'>{errors.relation}</span>
                </div>
              </div>

              <div className='flex flex-col md:flex-row gap-10'>
                <p className='leading-8'><strong>NOTE</strong><br /><strong>FOR YOUR SECURITY</strong> Do not include personal information such as account number or password in this form.</p>
              </div>

              <div className='flex flex-col md:flex-row gap-10'>
                <div className='flex flex-col gap-1 w-full'>
                  <label htmlFor='complaint'><span className="text-red-500">* </span>Your Complaint</label>
                  <textarea
                    id='complaint'
                    name='complaint'
                    value={formData.complaint}
                    onChange={handleChange}
                    className={`px-3.5 py-2.5 border-2 w-full border-gray-300 rounded-xl ${errors.complaint ? 'border-red-500' : ''
                      }`}
                    rows="7"
                  ></textarea>
                  <span className='text-red-500'>{errors.complaint}</span>
                </div>
              </div>

              <div className='flex flex-col md:flex-row gap-10'>
                <div className='flex flex-col gap-1 w-full'>
                  <label htmlFor='previous-complaint'>Have you previously raised this issue with us?</label>
                  <p className='leading-8 text-gray-400 text-base'>Please provide as many details as you can, such as reference number and method of contact.</p>
                  <textarea
                    id='previous_complaint'
                    name='previous_complaint'
                    value={formData.previous_complaint}
                    onChange={handleChange}
                    className={`px-3.5 py-2.5 border-2 w-full border-gray-300 rounded-xl ${errors.previous_complaint ? 'border-red-500' : ''
                      }`}
                    rows="7"
                  ></textarea>
                  <span className='text-red-500'>{errors.previous_complaint}</span>
                </div>
              </div>

              <div className='flex flex-col md:flex-row gap-10'>
                <div className='flex flex-col gap-1 w-full'>
                  <label htmlFor='outcome'>What outcome would you like to be achieved?</label>
                  <textarea
                    id='outcome'
                    name='outcome'
                    value={formData.outcome}
                    onChange={handleChange}
                    className={`px-3.5 py-2.5 border-2 w-full border-gray-300 rounded-xl ${errors.outcome ? 'border-red-500' : ''
                      }`}
                    rows="7"
                  ></textarea>
                  <span className='text-red-500'>{errors.outcome}</span>
                </div>
              </div>

              <div className='flex flex-col md:flex-row gap-10'>
                <div className='flex flex-row gap-1 w-full'>
                  <input type='submit' className='inline-block mm-button !px-8' value='Submit complaint' disabled={loading} />
                </div>
              </div>

              {loading && <div className='text-gray-600 mt-4'>Submitting...</div>}

              {submissionStatus === 'success' && (
                <div className='text-green-600 mt-4'>Form submitted successfully!</div>
              )}

              {submissionStatus === 'error' && (
                <div className='text-red-500 mt-4'>An error occurred while submitting the form.</div>
              )}
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Complaint;
