'use client';
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    profession: '',
    mobile: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submissionStatus, setSubmissionStatus] = useState(null); // 'success' or 'error'
  const [loading, setLoading] = useState(false);

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
    if (id === 'mobile' && value.length > 16) {
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
          setFormData({
            name: '',
            email: '',
            company: '',
            profession: '',
            mobile: '',
            subject: '',
            message: '',
          });
        } else {
          // Error response from the API
          setSubmissionStatus('error');
          setErrors(data.data || {});
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        setSubmissionStatus('error');
        setErrors({ message: 'An error occurred while submitting the form.' });
      } finally {
        setLoading(false);
      }
    } else {
      setSubmissionStatus(null);
    }
  };


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
                  <input
                    id='mobile'
                    name='mobile'
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder='Mobile Number'
                    maxLength='16'
                    className={`px-3.5 py-2.5 border-2 w-full border-gray-300 rounded-xl ${errors.mobile ? 'border-red-500' : ''
                      }`}
                  />
                  <span className='text-red-500'>{errors.mobile}</span>
                </div>
                <div className='flex flex-col gap-1 w-full'>
                  <label htmlFor='subject'>Subject</label>
                  <input
                    id='subject'
                    name='subject'
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder='Subject'
                    className={`px-3.5 py-2.5 border-2 w-full border-gray-300 rounded-xl ${errors.subject ? 'border-red-500' : ''
                      }`}
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
