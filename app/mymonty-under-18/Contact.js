'use client';
import React, { useState, useEffect, useRef } from 'react';
import { useAppContext } from '../AppContext';

const Contact = () => {

  const { geoData } = useAppContext();
  const apiUrl = process.env.apiUrl;

  const [selectedCountry, setSelectedCountry] = useState(null);
  const initialFormData = {
    full_name: '',
    email: '',
    code: selectedCountry ? selectedCountry.code : '', // Default code value based on selected country
    mobile: '',
    message: '',
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
    const requiredFields = ['full_name', 'email', 'code', 'mobile', 'message'];
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

    if (validateForm()) {
      try {
        setLoading(true);

        const response = await fetch(`${apiUrl}/youth`, {
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
            setFormData({
              ...initialFormData,
              code: selectedCountry ? selectedCountry.code : '',
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
    <form onSubmit={handleSubmit}>
      <div className='flex flex-col max-lg:gap-6 gap-4'>
        <div className='flex flex-col md:flex-row gap-10 max-lg:gap-6'>
          <div className='flex flex-col gap-1 w-full'>
            <input
              id='full_name'
              name='full_name'
              value={formData.full_name}
              onChange={handleChange}
              placeholder='Full Name'
              className={`px-3.5 py-2.5 border w-full border-[#EBEBEB] bg-[#F2F2F2] rounded-xl ${errors.full_name ? 'border-red-500' : ''
                }`}
            />
            <span className='self-start text-red-500'>{errors.full_name}</span>
          </div>
        </div>

          <div className='flex flex-col md:flex-row gap-10 max-lg:gap-6'>
          <div className='flex flex-col gap-1 w-full'>
            <input
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              placeholder='Email Address'
              className={`px-3.5 py-2.5 border w-full border-[#EBEBEB] bg-[#F2F2F2] rounded-xl ${errors.email ? 'border-red-500' : ''
                }`}
            />
            <span className='self-start text-red-500'>{errors.email}</span>
          </div>
        </div>

        <div className='flex flex-col md:flex-row max-lg:gap-6 gap-10'>
          <div className='flex flex-col gap-1 w-full'>
            <div className='relativee flex flex-col justify-center md:flex-row'>
              <div className='w-full flex flex-col'>
                <div className="flex w-full">
                  <div className="calling_code">
                    <div className="flex h-full justify-between items-center">
                      <div id="calling_code" onClick={(e) => { setOpenCountry(!openCountry) }} className="select border-[#EBEBEB] bg-[#F2F2F2] border border-e-0 p-2.5 rounded-xl rounded-e-none flex justify-between items-center text-gray-400  ">
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
                    placeholder="Mobile number"
                    className={`outline-0 w-full border-[#EBEBEB] bg-[#F2F2F2] border border-s-0 pl-1 pr-3.5 py-2.5 rounded-xl rounded-s-none ${errors.mobile ? 'border-s-2 border-red-500' : ''}`} />
                </div>
                <span className='self-start text-red-500'>{errors.mobile}</span>
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-col md:flex-row max-lg:gap-6 gap-10'>
          <div className='flex flex-col gap-1 w-full'>
            <textarea
              id='message'
              name='message'
              value={formData.message}
              onChange={handleChange}
              placeholder='Message'
              className={`px-3.5 py-2.5 border w-full h-[200px] border-[#EBEBEB] bg-[#F2F2F2] rounded-xl resize-none ${errors.message ? 'border-red-500' : ''
                }`}
            ></textarea>
            <span className='self-start text-red-500'>{errors.message}</span>
          </div>
        </div>

        <div className='flex flex-col md:flex-row max-lg:gap-6 gap-10'>
          <div className='flex flex-row gap-1 w-full justify-center'>
            <input type='submit' className='inline-block mm-button blue !px-20' value='Submit' disabled={loading} />
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
  );
};

export default Contact;
