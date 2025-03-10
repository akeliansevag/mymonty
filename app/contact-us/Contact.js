'use client';
import React, { useState, useEffect, useRef } from 'react';
import { useAppContext } from '../AppContext';

const Contact = () => {

  const { geoData } = useAppContext();
  const apiUrl = process.env.apiUrl;

  const [selectedCountry, setSelectedCountry] = useState(null);
  const initialFormData = {
    name: '',
    email: '',
    company: '',
    profession: '',
    code: selectedCountry ? selectedCountry.code : '', // Default code value based on selected country
    mobile: '',
    country_id: selectedCountry ? selectedCountry.id : '',
    subject: '',
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
    const requiredFields = ['name', 'email', 'code', 'mobile', 'subject', 'message'];
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

        const response = await fetch(`${apiUrl}/contact-us`, {
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
      <section className='pt-14 pb-14 lg:pt-28 lg:pb-20'>
        <div className='container'>
          <h2 className='text-center uppercase font-black text-3xl sm:text-5xl md:text-[2.875rem] leading-none'>
            Fill out this form to reach us
          </h2>
          <form onSubmit={handleSubmit}>
            <div className='flex flex-col max-lg:gap-6 gap-10 max-lg:px-5 px-10 max-lg:mt-10 max-lg:py-10 py-20 bg-gray-100 mt-20 rounded-[1.875rem]'>
              <div className='flex flex-col md:flex-row gap-10 max-lg:gap-6'>
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

              <div className='flex flex-col md:flex-row max-lg:gap-6 gap-10'>
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

              <div className='flex flex-col md:flex-row max-lg:gap-6 gap-10'>
                <div className='flex flex-col gap-1 w-full'>
                  <label htmlFor='mobile-number'>Mobile Number</label>
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
                          placeholder="Mobile number"
                          className={`outline-0 w-full border-gray-300 border-2 border-s-0 pl-1 pr-3.5 py-2.5 rounded-xl rounded-s-none ${errors.mobile ? 'border-s-2 border-red-500' : ''}`} />
                      </div>
                      <span className='text-red-500'>{errors.mobile}</span>
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

              <div className='flex flex-col md:flex-row max-lg:gap-6 gap-10'>
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

              <div className='flex flex-col md:flex-row max-lg:gap-6 gap-10'>
                <div className='flex flex-row gap-1 w-full justify-center'>
                  <input type='submit' className='inline-block mm-button !px-20' value='Submit' disabled={loading} />
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

      <section className='pt-14 pb-14 lg:pt-28 lg:pb-20'>
        <div className='container'>
          <h2 className='text-center uppercase font-black text-3xl sm:text-5xl md:text-[2.875rem] leading-none'>
            Find our Stores
          </h2>
          <div className='flex gap-4 max-lg:px-5 px-10 py-10 bg-gray-100 mt-10 rounded-[1.875rem]'>
            <div className='flex flex-col gap-8'>
              <svg className="max-lg:hidden" width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="48" cy="48" r="46.5" stroke="black" strokeWidth="3"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M48 46.7916C45.9978 46.7916 44.375 45.1688 44.375 43.1666C44.375 41.1644 45.9978 39.5416 48 39.5416C50.0022 39.5416 51.625 41.1644 51.625 43.1666C51.625 45.1688 50.0022 46.7916 48 46.7916ZM48 37.125C44.6638 37.125 41.9583 39.8292 41.9583 43.1666C41.9583 46.504 44.6638 49.2083 48 49.2083C51.3362 49.2083 54.0417 46.504 54.0417 43.1666C54.0417 39.8292 51.3362 37.125 48 37.125ZM48 63.7083C45.9905 63.7192 35.9167 48.2187 35.9167 43.1666C35.9167 36.4942 41.3264 31.0833 48 31.0833C54.6736 31.0833 60.0833 36.4942 60.0833 43.1666C60.0833 48.151 49.978 63.7192 48 63.7083ZM48 28.6666C39.9924 28.6666 33.5 35.159 33.5 43.1666C33.5 49.23 45.5894 67.3466 48 67.3333C50.3732 67.3466 62.5 49.1479 62.5 43.1666C62.5 35.159 56.0076 28.6666 48 28.6666Z" fill="black"/>
              </svg>
            </div>
            <div className='flex flex-col gap-8'>
              <h2 className='uppercase font-black text-3xl sm:text-5xl md:text-[2.5rem] leading-none'>Address</h2>
              <div className='flex flex-col gap-2'>
                <p className='uppercase font-bold leading-none'>ABC Dbayeh</p>
                <p className='font-bold leading-none'>Level L1</p>
                <p className='leading-none'>Monday to Sunday 10:00 am – 10:00 pm</p>
              </div>
              <div className='flex flex-col gap-2'>
                <p className='uppercase font-bold leading-none'>Gefinor Center</p>
                <p className='font-bold leading-none'>Bloc E – Level LG</p>
                <p className='leading-none'>Monday to Friday 9:30 am – 4:00 pm (Excluding Holidays)</p>
              </div>
            </div>
          </div>
          <div className='grid lg:grid-cols-2 gap-8 mt-8'>
            <div>
              <div className='flex gap-4 max-lg:px-5 px-10 py-10 bg-gray-100 rounded-[1.875rem]'>
                <div className='flex flex-col gap-8'>
                  <svg className="max-lg:hidden" width="96" height="97" viewBox="0 0 96 97" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1.5" y="2" width="93" height="93" rx="46.5" stroke="black" strokeWidth="3"/>
                    <path d="M54.5128 54.5491L55.3304 53.7412L53.4321 51.8439L52.6147 52.6517L54.5128 54.5491ZM58.0756 53.4029L61.5045 55.2555L62.7902 52.9048L59.3613 51.0522L58.0756 53.4029ZM62.1646 58.9375L59.6149 61.457L61.5131 63.3544L64.0627 60.8349L62.1646 58.9375ZM58.0614 62.2683C55.4592 62.5093 48.7268 62.2945 41.4376 55.091L39.5394 56.9884C47.4938 64.8492 55.0646 65.2331 58.3112 64.9323L58.0614 62.2683ZM41.4376 55.091C34.4894 48.2246 33.3385 42.4495 33.1952 39.944L30.5074 40.0958C30.6877 43.2492 32.1129 49.6493 39.5394 56.9884L41.4376 55.091ZM43.9059 44.0669L44.4207 43.5582L42.5225 41.6609L42.0078 42.1696L43.9059 44.0669ZM44.8304 37.0739L42.5673 34.0694L40.4122 35.6728L42.6753 38.6774L44.8304 37.0739ZM34.9558 33.4154L32.1387 36.1993L34.0369 38.0966L36.854 35.3127L34.9558 33.4154ZM42.9569 43.1182C42.0078 42.1696 42.0065 42.1708 42.0052 42.1721C42.0048 42.1726 42.0035 42.1739 42.0026 42.1747C42.0008 42.1765 41.999 42.1783 41.9972 42.1801C41.9936 42.1838 41.9898 42.1876 41.9859 42.1916C41.9782 42.1996 41.9699 42.2083 41.9613 42.2177C41.944 42.2363 41.925 42.2577 41.9046 42.2818C41.8639 42.3301 41.8178 42.3895 41.7694 42.4606C41.6722 42.6031 41.5664 42.7915 41.4765 43.0285C41.2932 43.512 41.195 44.1493 41.3182 44.9385C41.5591 46.482 42.6286 48.5207 45.3683 51.2281L47.2664 49.3307C44.7026 46.7971 44.0919 45.2552 43.9784 44.5283C43.9244 44.1824 43.9804 44.0122 43.9958 43.9718C44.0052 43.9469 44.0097 43.9444 43.9982 43.9614C43.9924 43.9697 43.9829 43.9828 43.968 44.0003C43.9607 44.0091 43.9519 44.0191 43.9416 44.0302C43.9364 44.0357 43.931 44.0415 43.9249 44.0477C43.9221 44.0507 43.919 44.0539 43.9158 44.0571C43.9142 44.0587 43.9126 44.0603 43.9109 44.0619C43.9102 44.0628 43.909 44.064 43.9084 44.0644C43.9072 44.0657 43.9059 44.0669 42.9569 43.1182ZM45.3683 51.2281C48.1088 53.9364 50.1698 54.9904 51.7253 55.2276C52.5201 55.3488 53.161 55.2521 53.6472 55.0721C53.8856 54.9838 54.0755 54.8798 54.219 54.7842C54.2908 54.7364 54.3508 54.6909 54.3994 54.6508C54.4238 54.6308 54.4454 54.6121 54.4642 54.5949C54.4737 54.5864 54.4825 54.5784 54.4906 54.5707C54.4947 54.5668 54.4985 54.563 54.5023 54.5594C54.5041 54.5577 54.5058 54.5559 54.5076 54.5541C54.5085 54.5532 54.51 54.552 54.5103 54.5516C54.5116 54.5503 54.5128 54.5491 53.5638 53.6003C52.6147 52.6517 52.616 52.6505 52.6172 52.6492C52.6176 52.6489 52.6189 52.6476 52.6198 52.6467C52.6214 52.6451 52.623 52.6435 52.6246 52.6419C52.628 52.6389 52.6311 52.6359 52.6341 52.6328C52.6404 52.6269 52.6463 52.6216 52.6519 52.6164C52.663 52.6064 52.6731 52.5977 52.682 52.5905C52.6996 52.5759 52.7127 52.5666 52.7208 52.5611C52.7375 52.5501 52.7341 52.555 52.7075 52.5649C52.6635 52.5811 52.4875 52.6369 52.1336 52.5829C51.3918 52.47 49.8295 51.8635 47.2664 49.3307L45.3683 51.2281ZM42.5673 34.0694C40.7379 31.6406 37.1406 31.2563 34.9558 33.4154L36.854 35.3127C37.8082 34.3697 39.5029 34.4657 40.4122 35.6728L42.5673 34.0694ZM33.1952 39.944C33.1599 39.3267 33.4448 38.6818 34.0369 38.0966L32.1387 36.1993C31.1744 37.1523 30.4163 38.5013 30.5074 40.0958L33.1952 39.944ZM59.6149 61.457C59.1217 61.9445 58.593 62.219 58.0614 62.2683L58.3112 64.9323C59.6297 64.8101 60.7099 64.1482 61.5131 63.3544L59.6149 61.457ZM44.4207 43.5582C46.1876 41.8121 46.319 39.0501 44.8304 37.0739L42.6753 38.6774C43.3994 39.6388 43.2918 40.9007 42.5225 41.6609L44.4207 43.5582ZM61.5045 55.2555C62.9722 56.0485 63.2008 57.9133 62.1646 58.9375L64.0627 60.8349C66.4682 58.4577 65.7264 54.4911 62.7902 52.9048L61.5045 55.2555ZM55.3304 53.7412C56.0195 53.0602 57.1289 52.8915 58.0756 53.4029L59.3613 51.0522C57.4166 50.0014 55.003 50.2916 53.4321 51.8439L55.3304 53.7412Z" fill="#091111"/>
                  </svg>

                </div>
                <div className='flex flex-col gap-8'>
                  <h2 className='uppercase font-black text-3xl sm:text-5xl md:text-[2.5rem] leading-none'>Phone</h2>
                  <div className='flex flex-col gap-2'>
                    <p className='uppercase font-bold leading-none'>Call Center - 24/7</p>
                    <p className='leading-none'><a href="tel:+9611734020">+961 1 734 020</a></p>
                  </div>
                  <div className='flex flex-col gap-2'>
                    <p className='uppercase font-bold leading-none'>WhatsApp</p>
                    <p className='leading-none'><a href="tel:+96171871871">+961 71 871 871</a></p>
                  </div>
                </div>
              </div>
              <div className='flex gap-4 max-lg:px-5 px-10 py-10 bg-gray-100 rounded-[1.875rem] mt-8'>
                <div className='flex flex-col gap-8'>
                  <svg className="max-lg:hidden" width="96" height="97" viewBox="0 0 96 97" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="48" cy="48.5" r="46.5" stroke="black" strokeWidth="3"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M31.9583 35.5L30.5 36.9444V60.0556L31.9583 61.5H64.0417L65.5 60.0556V36.9444L64.0417 35.5H31.9583ZM33.4167 40.2099V58.6111H62.5833V40.2094L47.9998 53.341L33.4167 40.2099ZM60.2693 38.3889H35.7303L47.9998 49.4368L60.2693 38.3889Z" fill="#091111"/>
                  </svg>
                </div>
                <div className='flex flex-col gap-8'>
                  <h2 className='uppercase font-black text-3xl sm:text-5xl md:text-[2.5rem] leading-none'>Email</h2>
                  <div className='flex flex-col gap-2'>
                    <p className='uppercase font-bold leading-none'>Send us an email at</p>
                    <p className='leading-none'><a href="mailto:supportlb@mymonty.com">supportlb@mymonty.com</a></p>
                  </div>
                </div>
              </div>
            </div>
            <iframe className="w-full h-96 lg:w-full lg:h-full rounded-[1.875rem]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d587.147155212771!2d35.48664895411466!3d33.89796187508457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f17f8b3f2f191%3A0x62f62de8b111dd99!2sMonty%20Mobile%20Lebanon!5e0!3m2!1sen!2slb!4v1741610691774!5m2!1sen!2slb" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            {/* <iframe className="w-full h-96 lg:w-full lg:h-full rounded-[1.875rem]" src="https://www.google.com/maps/d/embed?mid=1jxiB6ebKG7OaUCbnS791g07APxzhT5I&ehbc=2E312F&noprof=1"></iframe> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
