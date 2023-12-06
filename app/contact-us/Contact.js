'use client';
import React, { useState, useEffect, useRef } from 'react';
import { countries } from '@/app/countries';

const Contact = () => {
  const [errors, setErrors] = useState({});
  const [submissionStatus, setSubmissionStatus] = useState(null); // 'success' or 'error'
  const [loading, setLoading] = useState(false);

  const [openCountry, setOpenCountry] = useState(false)
  const [userInfo, setUserInfo] = useState({});

  const [searchInput, setSearchInput] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedCountryCode, setSelectedCountryCode] = useState('');
  const dropdownRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    profession: '',
    code: '',
    mobile: '',
    subject: '',
    message: '',
  });

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleCountryClick = (country) => {
    setOpenCountry(!openCountry);
    setSearchInput('');
    setSelectedCountry(country);

    // Update the formData state with the selected code
    setFormData((prevData) => ({
      ...prevData,
      code: country.code,
    }));
  };

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target) && !document.getElementById('calling_code').contains(event.target)) {
        setOpenCountry(false);
        setSearchInput('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Required fields validation
    const requiredFields = ['name', 'email', 'mobile', 'subject', 'message'];
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

  const handleChange = (e) => {
    const { id, value } = e.target;

    // Limit mobile number field to a maximum of 16 characters
    if (id === 'mobile' && value.length >= 12) {
      return;
    }

    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));

    // Clear the error message when the user starts typing in a field
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

        const response = await fetch('https://staging.mymonty.com/api/contact-us', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (response.ok) {
          // Successful response from the API
          setSubmissionStatus('success');
          setTimeout(() => {
            setFormData({
              name: '',
              email: '',
              company: '',
              profession: '',
              code: userInfo.calling_code,
              mobile: '',
              subject: '',
              message: '',
            });
            setErrors({});
            setSubmissionStatus(null); 
          }, 2000);
        } else {
          // Error response from the API
          setSubmissionStatus('error');
          setErrors(data.data || {});
        }
      } catch (error) {
        // console.error('Error submitting form:', error);
        setSubmissionStatus('error');
        setErrors({ message: 'An error occurred while submitting the form.' });
      } finally {
        setLoading(false);
      }
    } else {
      setSubmissionStatus(null);
    }
  };

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await fetch('https://staging.mymonty.com/api/user-ip');
        if (response.ok) {
          const data = await response.json();
          // console.log(data)
          setUserInfo(data);

          // Initialize formData with calling_code from user info
          setFormData((prevData) => ({
            ...prevData,
            code: data.calling_code || '', // Use an empty string as a fallback
          }));
        } else {
          // console.error('Error fetching user information:', response.status);
        }
      } catch (error) {
        // console.error('Error fetching user information:', error);
      }
    };

    fetchUserInfo();
  }, []);

  return (
    <div>
      <section className='pt-14 pb-14 lg:pt-28 lg:pb-20'>
        <div className='container'>
          <h2 className='text-center uppercase font-black text-3xl sm:text-5xl md:text-[2.875rem] leading-none'>
            Fill out this form to reach us
          </h2>
          <form onSubmit={handleSubmit}>
            <div className='flex flex-col gap-10 px-10 py-20 bg-gray-100 mt-20 rounded-[1.875rem]'>
              <div className='flex flex-col md:flex-row gap-10'>
                <div className='flex flex-col gap-1 w-full'>
                  <label htmlFor='full-name'>Full Name</label>
                  <input
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    placeholder='Full Name'
                    className={`px-3.5 py-2.5 border-2 w-full border-gray-300 rounded-xl ${errors.name ? 'border-red-500' : ''
                      }`}
                  />
                  <span className='text-red-500'>{errors.name}</span>
                </div>
                <div className='flex flex-col gap-1 w-full'>
                  <label htmlFor='email'>Email Address</label>
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
                  <label htmlFor='company-name'>Company Name <span className='text-gray-500'>(Optional)</span></label>
                  <input
                    id='company'
                    name='company'
                    value={formData.company}
                    onChange={handleChange}
                    placeholder='Company Name'
                    className={`px-3.5 py-2.5 border-2 w-full border-gray-300 rounded-xl ${errors.company ? 'border-red-500' : ''
                      }`}
                  />
                  <span className='text-red-500'>{errors.company}</span>
                </div>
                <div className='flex flex-col gap-1 w-full'>
                  <label htmlFor='Profession'>Profession <span className='text-gray-500'>(Optional)</span></label>
                  <input
                    id='profession'
                    name='profession'
                    value={formData.profession}
                    onChange={handleChange}
                    placeholder='Profession'
                    className={`px-3.5 py-2.5 border-2 w-full border-gray-300 rounded-xl ${errors.profession ? 'border-red-500' : ''
                      }`}
                  />
                  <span className='text-red-500'>{errors.profession}</span>
                </div>
              </div>

              <div className='flex flex-col md:flex-row gap-10'>
                <div className='flex flex-col gap-1 w-full'>
                  <label htmlFor='mobile-number'>Mobile Number</label>
                  <div className='relativee flex flex-col justify-center md:flex-row'>
                    <div className='w-full flex flex-col'>
                      <div className="flex w-full">
                        <div className="calling_code">
                          <div className="flex h-full justify-between items-center">
                            <div id="calling_code" onClick={(e) => { setOpenCountry(!openCountry) }} className="select bg-gray-100 border-gray-300 border-2 border-e-0 p-2.5 rounded-xl rounded-e-none flex justify-between items-center text-gray-400  ">
                              {selectedCountry ? (
                                <>
                                  <div className="country_flag text-3xl">
                                    {selectedCountry.flag}
                                  </div>
                                  <div>
                                    +{selectedCountry.code}
                                  </div>
                                </>
                              ) : (
                                <>
                                  <div className="country_flag text-3xl">
                                    {userInfo.country_flag_emoji}
                                  </div>
                                  <div>+{userInfo.calling_code}</div>
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
                            <input type="text" id="search-country" placeholder="Search" className="search-country outline-0 w-full px-3.5 py-2.5 bg-gray-100 border-0 text-sm" value={searchInput} onChange={handleSearchChange} />
                            {searchInput && (
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24" className='px-1 cursor-pointer' onClick={() => { setSearchInput(''); }}>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                              </svg>
                            )}
                            {searchInput === '' && (
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-5-5m2-5a8 8 0 1 0-16 0 8 8 0 0 0 16 0z"></path>
                              </svg>
                            )}
                          </div>

                          <ul id="country-ul">
                            {filteredCountries.map((country, index) => (
                              <li key={index} className="my-1 rounded-md cursor-pointer px-2.5 hover:bg-gray-300" data-code={country.code} data-name={country.name} data-iso={country.iso2} onClick={() => handleCountryClick(country)}>
                                <span className="flex items-center">
                                  {country.flag}
                                  <span className="ms-1 text-sm">{country.name}</span>
                                  <span className="ms-1 text-sm">+{country.code}</span>
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

                        <input type="hidden" name="code" value={selectedCountryCode} className="onboarding-code" />
                        <input
                          id="mobile"
                          type="tel"
                          name="mobile"
                          value={formData.mobile}
                          onChange={handleChange}
                          placeholder="XXXXXXXX"
                          className={`outline-0 w-full border-gray-300 border-2 border-s-0 pl-1 pr-3.5 py-2.5 rounded-xl rounded-s-none ${errors.mobile ? 'border-s-2 border-red-500' : ''}`} />
                      </div>
                      <span className='text-red-500 text-base'>{errors.mobile}</span>
                    </div>
                  </div>
                </div>
                <div className='flex flex-col gap-1 w-full'>
                  <label htmlFor='subject'>Subject</label>
                  <input
                    id='subject'
                    name='subject'
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder='Subject'
                    className={`px-3.5 py-2.5 border-2 w-full border-gray-300 rounded-xl ${errors.subject ? 'border-red-500' : ''}`}
                  />
                  <span className='text-red-500'>{errors.subject}</span>
                </div>
              </div>

              <div className='flex flex-col md:flex-row gap-10'>
                <div className='flex flex-col gap-1 w-full'>
                  <label htmlFor='message'>Your Message</label>
                  <textarea
                    id='message'
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    placeholder='Write your message'
                    className={`px-3.5 py-2.5 border-2 w-full h-[200px] border-gray-300 rounded-xl ${errors.message ? 'border-red-500' : ''
                      }`}
                  ></textarea>
                  <span className='text-red-500'>{errors.message}</span>
                </div>
              </div>

              <div className='flex flex-col md:flex-row gap-10'>
                <div className='flex flex-col gap-1'>
                  <input type='submit' className='cursor-pointer mm-button !px-20' value='Submit' disabled={loading} />
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

export default Contact;
