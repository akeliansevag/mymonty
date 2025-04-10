'use client';
import React, { useState, useEffect, useRef } from 'react';
import { useAppContext } from '../AppContext';

const PayrollForm = () => {

	const { geoData } = useAppContext();
	const apiUrl = process.env.apiUrl;

	const [selectedPersonCountry, setSelectedPersonCountry] = useState(null);
	const [selectedCompanyCountry, setSelectedCompanyCountry] = useState(null);
	const initialFormData = {
		name: '',
		email: '',
		code: selectedPersonCountry ? selectedPersonCountry.code : '', // Default code value based on selected country
		mobile: '',
		company_name: '',
		company_address: '',
		company_code: selectedCompanyCountry ? selectedCompanyCountry.code : '', // Default code value based on selected country
		company_mobile: '',
		employees: '',
		employment_type_yes_no: '',
		employment_type: '',
		employees_nationality_yes_no: '',
		employees_nationality: '',
		currency: '',
		salary_range: '',
		payment_method: '',
		digital_payment: '',
		preferences: '',
		country_id: selectedPersonCountry ? selectedPersonCountry.id : '',
	}

	const [loading, setLoading] = useState(false);
	const [openPersonCountry, setOpenPersonCountry] = useState(false);
	const [openCompanyCountry, setOpenCompanyCountry] = useState(false);
	const [errors, setErrors] = useState({});
	const [countries, setCountries] = useState([]);
	const [submissionStatus, setSubmissionStatus] = useState(null);
	const [searchTerm, setSearchTerm] = useState('');
	const dropdownPersonRef = useRef(null);
	const dropdownCompanyRef = useRef(null);
	const [formData, setFormData] = useState(initialFormData);

	const validateForm = () => {
		let isValid = true;
		const newErrors = {};

		// Required fields validation
		const requiredFields = ['name', 'email', 'code', 'mobile', 'company_name', 'company_address', 'company_code', 'company_mobile', 'employees', 'employment_type_yes_no', 'employees_nationality_yes_no', 'currency', 'salary_range', 'payment_method', 'digital_payment', 'preferences'];

		if (formData.employment_type_yes_no === 'No' && !formData.employment_type.trim()) {
			requiredFields.push('employment_type')
		}

		if (formData.employees_nationality_yes_no === 'No' && !formData.employees_nationality_yes_no.trim()) {
			requiredFields.push('employees_nationality')
		}

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

	const handleClickOutsidePerson = (event) => {
		if (
			dropdownPersonRef.current &&
			!dropdownPersonRef.current.contains(event.target) &&
			!event.target.closest('.calling_code')
		) {
			setOpenPersonCountry(false);
			setSearchTerm('');
		}
	};

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutsidePerson);
		return () => {
			document.removeEventListener('mousedown', handleClickOutsidePerson);
		};
	}, [dropdownPersonRef]);

	const handleClickOutsideCompany = (event) => {
		if (
			dropdownCompanyRef.current &&
			!dropdownCompanyRef.current.contains(event.target) &&
			!event.target.closest('.calling_code')
		) {
			setOpenCompanyCountry(false);
			setSearchTerm('');
		}
	};

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutsideCompany);
		return () => {
			document.removeEventListener('mousedown', handleClickOutsideCompany);
		};
	}, [dropdownCompanyRef]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		const sanitizedValue = name === 'mobile' || name === 'company_mobile' ? value.replace(/[^\d]/g, '') : value;

		// Limit mobile number field to a maximum of 16 characters
		if ((name === 'mobile' || name === 'company_mobile') && sanitizedValue.length >= 12) {
			return;
		}

		setFormData((prevData) => ({ ...prevData, [name]: sanitizedValue }));

		// Clear the error message when the user starts typing in a field
		setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		// Create a copy of formData to modify it
		const modifiedFormData = { ...formData };
		console.log(modifiedFormData)

		// Set the employment_type based on employment_type_yes_no
		if (formData.employment_type_yes_no === 'Yes') {
			modifiedFormData.employment_type = 'Yes';
		} else if (formData.employment_type_yes_no === 'No') {
			modifiedFormData.employment_type = formData.employment_type;
		}

		if (formData.employees_nationality_yes_no === 'Yes') {
			modifiedFormData.employees_nationality = 'Yes';
		} else if (formData.employees_nationality_yes_no === 'No') {
			modifiedFormData.employees_nationality = formData.employees_nationality;
		}

		// Remove the employment_type_yes_no and employees_nationality_yes_no fields
		delete modifiedFormData.employment_type_yes_no;
		delete modifiedFormData.employees_nationality_yes_no;

		// console.log(modifiedFormData)

		if (validateForm()) {
			try {
				setLoading(true);

				const response = await fetch(`${apiUrl}/payroll`, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(modifiedFormData),
				});

				const data = await response.json();

				if (response.ok) {
					setSubmissionStatus('success');
					setTimeout(() => {
						setFormData({
							...initialFormData,
							code: selectedPersonCountry ? selectedPersonCountry.code : '',
							company_code: selectedCompanyCountry ? selectedCompanyCountry.code : '',
							country_id: selectedPersonCountry ? selectedPersonCountry.id : '',
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
				setSelectedPersonCountry(userCountry);
				setSelectedCompanyCountry(userCountry);

				setFormData(prevFormData => ({
					...prevFormData,
					code: userCountry.code,
					company_code: userCountry.code,
					country_id: userCountry.id,
				}));
			}
		}
	}, [geoData]);

	const handlePersonCountryClick = (country) => {
		setSelectedPersonCountry(country);

		// Update formData values when a country is selected
		setFormData(prevFormData => ({
			...prevFormData,
			code: country.code,
			country_id: country.id,
		}));

		setOpenPersonCountry(!openPersonCountry);
		setSearchTerm('');
	};

	const handleCompanyCountryClick = (country) => {
		setSelectedCompanyCountry(country);

		// Update formData values when a country is selected
		setFormData(prevFormData => ({
			...prevFormData,
			company_code: country.code,
		}));

		setOpenCompanyCountry(!openCompanyCountry);
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
						<div className='flex flex-col gap-10 px-10 py-20 bg-gray-100 mt-20 rounded-[1.875rem]'>
							<div className='flex flex-col md:flex-row gap-10'>
								<div className='flex flex-col gap-1 w-full'>
									<label htmlFor='name'>Contact Person Name</label>
									<input
										id='name'
										name='name'
										value={formData.name}
										onChange={handleChange}
										placeholder='Contact Person Name'
										className={`px-3.5 py-2.5 border-2 w-full border-gray-300 rounded-xl ${errors.name ? 'border-red-500' : ''
											}`}
									/>
									<span className='text-red-500'>{errors.name}</span>
								</div>
								<div className='flex flex-col gap-1 w-full'>
									<label htmlFor='email'>Contact Person Email Address</label>
									<input
										id='email'
										name='email'
										value={formData.email}
										onChange={handleChange}
										placeholder='Contact Person Email Address'
										className={`px-3.5 py-2.5 border-2 w-full border-gray-300 rounded-xl ${errors.email ? 'border-red-500' : ''
											}`}
									/>
									<span className='text-red-500'>{errors.email}</span>
								</div>
							</div>

							<div className='flex flex-col md:flex-row gap-10'>
								<div className='flex flex-col gap-1 w-full'>
									<label htmlFor='mobile-number'>Contact Person Phone Number</label>
									<div className='relativee flex flex-col justify-center md:flex-row'>
										<div className='w-full flex flex-col'>
											<div className="flex w-full">
												<div className="calling_code">
													<div className="flex h-full justify-between items-center">
														<div id="calling_code-person" onClick={(e) => { setOpenPersonCountry(!openPersonCountry) }} className="select bg-white border-gray-300 border-2 border-e-0 p-2.5 rounded-xl rounded-e-none flex justify-between items-center text-gray-400  ">
															{selectedPersonCountry && (
																<>
																	<div className="text-lg">
																		<img src={`/flags/${selectedPersonCountry.iso2}.svg`} alt={selectedPersonCountry.name} />
																	</div>
																	<div className='text-black'>
																		+{selectedPersonCountry.code}
																	</div>
																</>
															)}
															<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M6 9L12 15L18 9" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
															</svg>
														</div>
													</div>
												</div>

												<div id="calling_code-drop-person" className={`dropdown bg-white px-1 ${openPersonCountry ? 'visible' : 'hidden'}`} ref={dropdownPersonRef}>
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

													<ul id="country-ul-person">
														{filteredCountries.map((country, index) => (
															<li key={index} className="my-1 rounded-md cursor-pointer py-2 px-2.5 hover:bg-gray-300" onClick={() => { handlePersonCountryClick(country) }}>
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
													placeholder="Contact Person Phone Number"
													className={`outline-0 w-full border-gray-300 border-2 border-s-0 pl-1 pr-3.5 py-2.5 rounded-xl rounded-s-none ${errors.mobile ? 'border-s-2 border-red-500' : ''}`} />
											</div>
											<span className='text-red-500'>{errors.mobile}</span>
										</div>
									</div>
								</div>
								<div className='flex flex-col gap-1 w-full'>
									<label htmlFor='company_name'>Company Name</label>
									<input
										id='company_name'
										name='company_name'
										value={formData.company_name}
										onChange={handleChange}
										placeholder='Company Name'
										className={`px-3.5 py-2.5 border-2 w-full border-gray-300 rounded-xl ${errors.company_name ? 'border-red-500' : ''
											}`}
									/>
									<span className='text-red-500'>{errors.company_name}</span>
								</div>
							</div>

							<div className='flex flex-col md:flex-row gap-10'>
								<div className='flex flex-col gap-1 w-full'>
									<label htmlFor='company_address'>Company Address</label>
									<input
										id='company_address'
										name='company_address'
										value={formData.company_address}
										onChange={handleChange}
										placeholder='Company Address'
										className={`px-3.5 py-2.5 border-2 w-full border-gray-300 rounded-xl ${errors.company_address ? 'border-red-500' : ''
											}`}
									/>
									<span className='text-red-500'>{errors.company_address}</span>
								</div>

								<div className='flex flex-col gap-1 w-full'>
									<label htmlFor='company-number'>Company Phone Number</label>
									<div className='relativee flex flex-col justify-center md:flex-row'>
										<div className='w-full flex flex-col'>
											<div className="flex w-full">
												<div className="calling_code">
													<div className="flex h-full justify-between items-center">
														<div id="calling_code-company" onClick={(e) => { setOpenCompanyCountry(!openCompanyCountry) }} className="select bg-white border-gray-300 border-2 border-e-0 p-2.5 rounded-xl rounded-e-none flex justify-between items-center text-gray-400  ">
															{selectedCompanyCountry && (
																<>
																	<div className="text-lg">
																		<img src={`/flags/${selectedCompanyCountry.iso2}.svg`} alt={selectedCompanyCountry.name} />
																	</div>
																	<div className='text-black'>
																		+{selectedCompanyCountry.code}
																	</div>
																</>
															)}
															<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M6 9L12 15L18 9" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
															</svg>
														</div>
													</div>
												</div>

												<div id="calling_code-drop-company" className={`dropdown bg-white px-1 ${openCompanyCountry ? 'visible' : 'hidden'}`} ref={dropdownCompanyRef}>
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

													<ul id="country-ul-company">
														{filteredCountries.map((country, index) => (
															<li key={index} className="my-1 rounded-md cursor-pointer py-2 px-2.5 hover:bg-gray-300" onClick={() => handleCompanyCountryClick(country)}>
																<span className="flex items-center">
																	<img src={`/flags/${country.iso2}.svg`} alt={country.name} />
																	<span className="ms-4 text-sm">{country.name}</span>
																	<span className="ms-4 text-sm">{country.code}</span>
																</span>
															</li>
														))}
													</ul>
													person
													<div className={`no-items p-3 text-center flex flex-col items-center ${filteredCountries.length === 0 ? 'visible' : 'hidden'}`}>
														<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
															<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-5-5m2-5a8 8 0 1 0-16 0 8 8 0 0 0 16 0z"></path>
														</svg>
														<p className="mt-1 fs-md">No items</p>
													</div>
												</div>

												<input
													id="company_mobile"
													type="tel"
													name="company_mobile"
													value={formData.company_mobile}
													onChange={handleChange}
													placeholder="Company Phone Number"
													className={`outline-0 w-full border-gray-300 border-2 border-s-0 pl-1 pr-3.5 py-2.5 rounded-xl rounded-s-none ${errors.company_mobile ? 'border-s-2 border-red-500' : ''}`} />
											</div>
											<span className='text-red-500'>{errors.company_mobile}</span>
										</div>
									</div>
								</div>
							</div>

							<div className='flex flex-col md:flex-row gap-10'>
								<div className='flex flex-col gap-1 w-full'>
									<label htmlFor='employees'>Number of Employees</label>
									<div className="flex gap-2">
										<label className="flex items-center mr-10">
											<input
												type="radio"
												id="employees-0-50"
												name="employees"
												value="0-50"
												checked={formData.employees === '0-50'}
												onChange={handleChange}
												className={`mr-2 ${errors.employees ? 'border-red-500' : ''}`}
											/>
											0-50
										</label>
										<label className="flex items-center mr-10">
											<input
												type="radio"
												id="employees-50-100"
												name="employees"
												value="50-100"
												checked={formData.employees === '50-100'}
												onChange={handleChange}
												className={`mr-2 ${errors.employees ? 'border-red-500' : ''}`}
											/>
											50-100
										</label>
										<label className="flex items-center">
											<input
												type="radio"
												id="employees-above-100"
												name="employees"
												value="Above 100"
												checked={formData.employees === 'Above 100'}
												onChange={handleChange}
												className={`mr-2 ${errors.employees ? 'border-red-500' : ''}`}
											/>
											Above 100
										</label>
									</div>
									<span className='text-red-500'>{errors.employees}</span>
								</div>
							</div>

							<div className='flex flex-col md:flex-row gap-10'>
								<div className='flex flex-col gap-1 w-full'>
									<label htmlFor='employment_type_yes_no'>Are all your employees permanent? If not, please specify the number of contractual ones</label>
									<div className="flex gap-2">
										<label className="flex items-center mr-10">
											<input
												type="radio"
												id="employment_type-yes"
												name="employment_type_yes_no"
												value="Yes"
												checked={formData.employment_type_yes_no === 'Yes'}
												onChange={handleChange}
												className={`mr-2 ${errors.employment_type_yes_no ? 'border-red-500' : ''}`}
											/>
											Yes
										</label>
										<label className="flex items-center">
											<input
												type="radio"
												id="employment_type-no"
												name="employment_type_yes_no"
												value="No"
												checked={formData.employment_type_yes_no === 'No'}
												onChange={handleChange}
												className={`mr-2 ${errors.employment_type_yes_no ? 'border-red-500' : ''}`}
											/>
											No
										</label>
									</div>
									<span className='text-red-500'>{errors.employment_type_yes_no}</span>

									{formData.employment_type_yes_no === 'No' && (
										<div className='flex flex-col gap-1 mt-4'>
											<label htmlFor='employment_type'>Specify the number of contractual employees:</label>
											<input
												type="text"
												id="employment_type-number"
												name="employment_type"
												value={formData.employment_type || ''}
												onChange={handleChange}
												placeholder='Number of contractual employees'
												className={`px-3.5 py-2.5 border-2 w-full border-gray-300 rounded-xl ${errors.employment_type ? 'border-red-500' : ''}`}
											/>
											<span className='text-red-500'>{errors.employment_type}</span>
										</div>
									)}
								</div>
							</div>

							<div className='flex flex-col md:flex-row gap-10'>
								<div className='flex flex-col gap-1 w-full'>
									<label htmlFor='employees_nationality_yes_no'>Are all your employees Lebanese? If not, please specify the number of the Lebanese ones</label>
									<div className="flex gap-2">
										<label className="flex items-center mr-10">
											<input
												type="radio"
												id="employees_nationality-yes"
												name="employees_nationality_yes_no"
												value="Yes"
												checked={formData.employees_nationality_yes_no === 'Yes'}
												onChange={handleChange}
												className={`mr-2 ${errors.employees_nationality_yes_no ? 'border-red-500' : ''}`}
											/>
											Yes
										</label>
										<label className="flex items-center">
											<input
												type="radio"
												id="employees_nationality-no"
												name="employees_nationality_yes_no"
												value="No"
												checked={formData.employees_nationality_yes_no === 'No'}
												onChange={handleChange}
												className={`mr-2 ${errors.employees_nationality_yes_no ? 'border-red-500' : ''}`}
											/>
											No
										</label>
									</div>
									<span className='text-red-500'>{errors.employees_nationality_yes_no}</span>

									{formData.employees_nationality_yes_no === 'No' && (
										<div className='flex flex-col gap-1 mt-4'>
											<label htmlFor='employees_nationality'>Specify the number of Lebanese employees:</label>
											<input
												type="text"
												id="employees_nationality-number"
												name="employees_nationality"
												value={formData.employees_nationality || ''}
												onChange={handleChange}
												placeholder='Number of Lebanese employees'
												className={`px-3.5 py-2.5 border-2 w-full border-gray-300 rounded-xl ${errors.employees_nationality ? 'border-red-500' : ''}`}
											/>
											<span className='text-red-500'>{errors.employees_nationality}</span>
										</div>
									)}
								</div>
							</div>

							<div className='flex flex-col md:flex-row gap-10'>
								<div className='flex flex-col gap-1 w-full'>
									<label htmlFor='currency'>In which currency are employee salaries disbursed?</label>
									<div className="flex gap-2">
										<label className="flex items-center mr-10">
											<input
												type="radio"
												id="currency-fresh-usd"
												name="currency"
												value="Fresh USD"
												checked={formData.currency === 'Fresh USD'}
												onChange={handleChange}
												className={`mr-2 ${errors.currency ? 'border-red-500' : ''}`}
											/>
											Fresh USD
										</label>
										<label className="flex items-center">
											<input
												type="radio"
												id="currency-fresh-lbp"
												name="currency"
												value="Fresh LBP"
												checked={formData.currency === 'Fresh LBP'}
												onChange={handleChange}
												className={`mr-2 ${errors.currency ? 'border-red-500' : ''}`}
											/>
											Fresh LBP
										</label>
									</div>
									<span className='text-red-500'>{errors.currency}</span>
								</div>
							</div>

							<div className='flex flex-col md:flex-row gap-10'>
								<div className='flex flex-col gap-1 w-full'>
									<label htmlFor='salary_range'>In what range do the average salaries fall, in USD (or their equivalent in LBP)?</label>
									<div className="flex gap-2">
										<label className="flex items-center mr-10">
											<input
												type="radio"
												id="salary_range-below-500"
												name="salary_range"
												value="< $500"
												checked={formData.salary_range === '< $500'}
												onChange={handleChange}
												className={`mr-2 ${errors.salary_range ? 'border-red-500' : ''}`}
											/>
											&lt; $500
										</label>
										<label className="flex items-center mr-10">
											<input
												type="radio"
												id="salary_range-between-500-1500"
												name="salary_range"
												value="$500 - $1500"
												checked={formData.salary_range === '$500 - $1500'}
												onChange={handleChange}
												className={`mr-2 ${errors.salary_range ? 'border-red-500' : ''}`}
											/>
											$500 - $1500
										</label>
										<label className="flex items-center mr-10">
											<input
												type="radio"
												id="salary_range-between-1500-3000"
												name="salary_range"
												value="$1500 - $3000"
												checked={formData.salary_range === '$1500 - $3000'}
												onChange={handleChange}
												className={`mr-2 ${errors.salary_range ? 'border-red-500' : ''}`}
											/>
											$1500 - $3000
										</label>
										<label className="flex items-center">
											<input
												type="radio"
												id="salary_range-over-3000"
												name="salary_range"
												value="> $3000"
												checked={formData.salary_range === '> $3000'}
												onChange={handleChange}
												className={`mr-2 ${errors.salary_range ? 'border-red-500' : ''}`}
											/>
											&gt; $3000
										</label>
									</div>
									<span className='text-red-500'>{errors.salary_range}</span>
								</div>
							</div>

							<div className='flex flex-col md:flex-row gap-10'>
								<div className='flex flex-col gap-1 w-full'>
									<label htmlFor='payment_method'>How are you currently paying your employees?</label>
									<div className="flex gap-2">
										<label className="flex items-center mr-10">
											<input
												type="radio"
												id="payment_method-cash"
												name="payment_method"
												value="Cash"
												checked={formData.payment_method === 'Cash'}
												onChange={handleChange}
												className={`mr-2 ${errors.payment_method ? 'border-red-500' : ''}`}
											/>
											Cash
										</label>
										<label className="flex items-center mr-10">
											<input
												type="radio"
												id="payment_method-through-bank"
												name="payment_method"
												value="Through Bank"
												checked={formData.payment_method === 'Through Bank'}
												onChange={handleChange}
												className={`mr-2 ${errors.payment_method ? 'border-red-500' : ''}`}
											/>
											Through Bank
										</label>
										<label className="flex items-center">
											<input
												type="radio"
												id="payment_method-through-ewallet"
												name="payment_method"
												value="Through eWallet"
												checked={formData.payment_method === 'Through eWallet'}
												onChange={handleChange}
												className={`mr-2 ${errors.payment_method ? 'border-red-500' : ''}`}
											/>
											Through eWallet
										</label>
									</div>
									<span className='text-red-500'>{errors.payment_method}</span>
								</div>
							</div>

							<div className='flex flex-col md:flex-row gap-10'>
								<div className='flex flex-col gap-1 w-full'>
									<label htmlFor='digital_payments'>Are employees open to digital payment methods, such as mobile wallets?</label>
									<div className="flex gap-2">
										<label className="flex items-center mr-10">
											<input
												type="radio"
												id="digital_payment-yes"
												name="digital_payment"
												value="Yes"
												checked={formData.digital_payment === 'Yes'}
												onChange={handleChange}
												className={`mr-2 ${errors.digital_payment ? 'border-red-500' : ''}`}
											/>
											Yes
										</label>
										<label className="flex items-center mr-6">
											<input
												type="radio"
												id="digital_payment-no"
												name="digital_payment"
												value="No"
												checked={formData.digital_payment === 'No'}
												onChange={handleChange}
												className={`mr-2 ${errors.digital_payment ? 'border-red-500' : ''}`}
											/>
											No
										</label>
										<label className="flex items-center">
											<input
												type="radio"
												id="digital_payment-open-to-discussion"
												name="digital_payment"
												value="Open to Discussion"
												checked={formData.digital_payment === 'Open to Discussion'}
												onChange={handleChange}
												className={`mr-2 ${errors.digital_payment ? 'border-red-500' : ''}`}
											/>
											Open to Discussion
										</label>
									</div>
									<span className='text-red-500'>{errors.digital_payment}</span>
								</div>
							</div>

							<div className='flex flex-col gap-1 w-full'>
								<label htmlFor='preferences'>Do you have any suggestions or preferences related to the payroll service that you would like to share?</label>
								<textarea
									id='preferences'
									name='preferences'
									value={formData.preferences}
									onChange={handleChange}
									placeholder='Suggestions or Preferences'
									className={`px-3.5 py-2.5 border-2 w-full h-[200px] border-gray-300 rounded-xl ${errors.preferences ? 'border-red-500' : ''
										}`}
								></textarea>
								<span className='text-red-500'>{errors.preferences}</span>
							</div>

							<div className='flex flex-col md:flex-row gap-10'>
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
		</div>
	);
};

export default PayrollForm;
