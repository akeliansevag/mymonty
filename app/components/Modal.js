'use client';
import { useCookies } from 'react-cookie';
import { useEffect, useRef, useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react'
import Link from 'next/link';

const Modal = () => {
  const [open, setOpen] = useState(true)
  const cancelButtonRef = useRef(null)

  // Use cookies to track whether the user has accepted the cookie
  const [cookies, setCookie] = useCookies(['cookieAccepted']);
  const hasAcceptedCookie = cookies.cookieAccepted;

  // Check if the user has already accepted the cookie
  useEffect(() => {
    if (hasAcceptedCookie) {
      setOpen(false);
    }
  }, [hasAcceptedCookie]);

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    mobile: '',
    email: '',
  });

  const [errors, setErrors] = useState({});
  const [submissionStatus, setSubmissionStatus] = useState(null); // 'success' or 'error'
  const [loading, setLoading] = useState(false);

const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Required fields validation
    const requiredFields = ['first_name', 'last_name', 'mobile', 'email'];
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

        const response = await fetch('https://staging.mymonty.com/api/early-access', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (response.ok) {
          // Successful response from the API
            setOpen(false);
            setSubmissionStatus('success');
            setCookie('cookieAccepted', true, { path: '/' });

            setFormData({
                first_name: '',
                last_name: '',
                mobile: '',
                email: '',
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
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" initialFocus={cancelButtonRef} onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center py-4 text-center sm:items-center sm:px-0 w-full">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
            <div className='container'>
                <Dialog.Panel className="relative transform overflow-hidden rounded-3xl bg-white text-left shadow-xl transition-all sm:my-8 w-full md:w-4/5 mx-auto">

                    <div className='absolute top-[15px] right-[15px] md:top-[30px] md:right-[30px]' onClick={() => setOpen(false)}>
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M27 9L9 27M9 9L27 27" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <div className="bg-white gap-10 px-4 md:px-10 py-10 md:py-20" >
                        <div className="flex items-center justify-center w-full">
                            <div className="mt-3 sm:mt-0">                      
                                <Dialog.Title as="h2" className="uppercase leading-none font-black text-center text-3xl sm:text-5xl md:text-[2.875rem">
                                    Get your early access now
                                </Dialog.Title>
                                <form onSubmit={handleSubmit}>
                                    <div className='flex flex-col gap-4 md:gap-10 mt-10 md:mt-20 rounded-[1.875rem]'>
                                        <div className='flex flex-col md:flex-row gap-4 md:gap-10'>
                                            <div className='flex flex-col gap-1 w-full'>
                                                <label htmlFor='first_name'>First Name</label>
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
                                            <div className='flex flex-col gap-1 w-full'>
                                                <label htmlFor='last_name'>Last Name</label>
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
                                        </div>

                                        <div className='flex flex-col md:flex-row gap-4 md:gap-10'>
                                            <div className='flex flex-col gap-1 w-full'>
                                                <label htmlFor='mobile'>Mobile Number</label>
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

                                        <div className='flex flex-col justify-center md:flex-row gap-4 md:gap-10'>
                                            <div className='flex flex-col gap-1'>
                                                <p className='leading-8 text-center w-full mx-auto'>If you are an European citizen or resident, skip this form and follow this <Link href="google.com">link</Link> </p>
                                            </div>
                                        </div>

                                        <div className='flex flex-col justify-center md:flex-row gap-4 md:gap-10'>
                                            <div className='flex flex-col gap-1'>
                                                <input type='submit'  className='cursor-pointer mm-button !px-20' value='Submit' disabled={loading} />
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
                        </div>
                    </div>
                    {/* <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                        <button
                            type="button"
                            className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                            onClick={() => setOpen(false)}
                        >
                            Cancel
                        </button>
                        <button
                            type="button"
                            className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                            onClick={handleAcceptCookie}
                            ref={cancelButtonRef}
                        >
                            Submit
                        </button>
                    </div> */}
                </Dialog.Panel>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default Modal;