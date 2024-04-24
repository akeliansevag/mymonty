'use client';
import React, { useEffect, useRef, useState, Fragment } from 'react';
import { useAppContext } from '../AppContext';
import Image from 'next/image';

const Form = () => {
    const { geoData } = useAppContext();
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
        <form onSubmit={handleSubmit}>
            <div className='flex flex-col items-center gap-4 md:gap-7 mt-10 md:mt-10 rounded-[1.875rem]'>
                <h2 className='uppercase leading-none font-black text-center text-2xl sm:text-3xl md:text-[2.25rem]'>
                    Get the MyMonty app
                </h2>

                <p>Scan the QR code to download the app</p>

                <img src="/qr-code.svg" className='w-1/2' alt='Car Loan' />



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