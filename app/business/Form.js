'use client';
import React, { useState, useEffect, useRef } from 'react';
import { useAppContext } from '../AppContext';

const Contact = () => {

    const { geoData } = useAppContext();
    const apiUrl = process.env.apiUrl;

    const [selectedCountry, setSelectedCountry] = useState(null);
    const initialFormData = {
        name: '',
        address: '',
        email: '',
        code: selectedCountry ? selectedCountry.code : '', // Default code value based on selected country
        mobile: '',
        country_id: selectedCountry ? selectedCountry.id : '',
        employees: '',
        industry: '',
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
        const requiredFields = ['name', 'address', 'email', 'code', 'mobile', 'employees', 'industry'];
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

        // Limit mobile number field to a maximum of 16 characters
        if (id === 'mobile' && value.length >= 12) {
            return;
        }

        setFormData((prevData) => ({ ...prevData, [id]: value }));

        // Clear the error message when the user starts typing in a field
        setErrors((prevErrors) => ({ ...prevErrors, [id]: '' }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateForm()) {
            try {
                setLoading(true);

                const response = await fetch(`${apiUrl}/salary-domiciliation`, {
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
        <div className='container'>
            <h2 className='uppercase leading-none font-black text-center text-3xl sm:text-4xl md:text-[2.875rem'>
                Contact Us
            </h2>
            <form onSubmit={handleSubmit}>
                <div className='flex flex-col gap-10 px-10 py-20 bg-gray-100 mt-20 rounded-[1.875rem]'>
                    <div className='flex flex-col md:flex-row gap-10'>
                        <div className='flex flex-col gap-1 w-full'>
                            <label htmlFor='name'>Company Name</label>
                            <input
                                id='name'
                                name='name'
                                value={formData.name}
                                onChange={handleChange}
                                placeholder='Company Name'
                                className={`px-3.5 py-2.5 border-2 w-full border-gray-300 rounded-xl ${errors.name ? 'border-red-500' : ''}`}
                            />
                            <span className='text-red-500'>{errors.name}</span>
                        </div>
                        <div className='flex flex-col gap-1 w-full'>
                            <label htmlFor='address'>Company Address</label>
                            <input
                                id='address'
                                name='address'
                                value={formData.address}
                                onChange={handleChange}
                                placeholder='Company Address'
                                className={`px-3.5 py-2.5 border-2 w-full border-gray-300 rounded-xl ${errors.address ? 'border-red-500' : ''}`}
                            />
                            <span className='text-red-500'>{errors.address}</span>
                        </div>
                    </div>

                    <div className='flex flex-col md:flex-row gap-10'>
                        <div className='flex flex-col gap-1 w-full'>
                            <label htmlFor='email'>Email</label>
                            <input
                                id='email'
                                name='email'
                                value={formData.email}
                                onChange={handleChange}
                                placeholder='Email'
                                className={`px-3.5 py-2.5 border-2 w-full border-gray-300 rounded-xl ${errors.email ? 'border-red-500' : ''
                                    }`}
                            />
                            <span className='text-red-500'>{errors.email}</span>
                        </div>
                        <div className='flex flex-col gap-1 w-full'>
                            <label htmlFor='mobile-number'>Mobile Number / Landline</label>
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
                                            <div className="search-wrapper bg-white border-b border-gray-100 !sticky top-0 left-0 flex justify-between items-center">
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
                    </div>

                    <div className='flex flex-col md:flex-row gap-10'>
                        <div className='flex flex-col gap-1 w-full'>
                            <label htmlFor='employees'>Number of employees</label>
                            <select
                                name='employees'
                                id='employees'
                                value={formData.employees}
                                onChange={handleChange}
                                className={`px-3.5 py-2.5 border-2 w-full border-gray-300 rounded-xl ${errors.employees ? 'border-red-500' : ''}`}>
                                <option>Select</option>
                                <option value='1-9'>1-9</option>
                                <option value='10-49'>10-49</option>
                                <option value='50-99'>50-99</option>
                                <option value='100+'>100+</option>
                            </select>
                            <span className='text-red-500'>{errors.employees}</span>
                        </div>
                        <div className='flex flex-col gap-1 w-full'>
                            <label htmlFor='industry'>Industry</label>
                            <select
                                name='industry'
                                id='industry'
                                value={formData.industry}
                                onChange={handleChange}
                                className={`px-3.5 py-2.5 border-2 w-full border-gray-300 rounded-xl ${errors.industry ? 'border-red-500' : ''}`}>
                                <option>Select</option>
                                <option value="Selling alcoholic beverages, non-cigarettes tobacco products and drugs substance">Selling alcoholic beverages, non-cigarettes tobacco products and drugs substance</option>
                                <option value="Insurance companies">Insurance companies</option>
                                <option value="Real estate, car dealers, gas stations">Real estate, car dealers, gas stations</option>
                                <option value="Money service business (exchange dealers and money remitter)">Money service business (exchange dealers and money remitter)</option>
                                <option value="Gaming, lottery business">Gaming, lottery business</option>
                                <option value="Dealing in gold, diamonds, jewels, and antiques">Dealing in gold, diamonds, jewels, and antiques</option>
                                <option value="NGOs and NPOs">NGOs and NPOs</option>
                                <option value="Banks">Banks</option>
                                <option value="Pension or similar scheme">Pension or similar scheme</option>
                                <option value="Credit / financial institutions">Credit / financial institutions</option>
                                <option value="Electronic money">Electronic money</option>
                                <option value="Secretaries and administrative positions">Secretaries and administrative positions</option>
                                <option value="Development/sale/licensing of software">Development/sale/licensing of software</option>
                                <option value="Import/export activities (excluding industries and goods identified as higher risk)">Import/export activities (excluding industries and goods identified as higher risk)</option>
                                <option value="Educational/training providers">Educational/training providers</option>
                                <option value="Agriculture of vegetables, fruits and crops">Agriculture of vegetables, fruits and crops</option>
                                <option value="Farming of poultry">Farming of poultry</option>
                                <option value="Farming of cattle, dairy farming">Farming of cattle, dairy farming</option>
                                <option value="Fishing">Fishing</option>
                                <option value="Operations of fish hatcheries and farms">Operations of fish hatcheries and farms</option>
                                <option value="Manufacturing of fruit and vegetable juice">Manufacturing of fruit and vegetable juice</option>
                                <option value="Manufacturing of textile goods">Manufacturing of textile goods</option>
                                <option value="Manufacturing of refined oils and fats">Manufacturing of refined oils and fats</option>
                                <option value="Manufacturing of dairies and cheese making">Manufacturing of dairies and cheese making</option>
                                <option value="Manufacturing of footwear">Manufacturing of footwear</option>
                                <option value="Services to oil and gas">Services to oil and gas</option>
                                <option value="Extraction of petroleum and natural gas">Extraction of petroleum and natural gas</option>
                                <option value="Mining of coal">Mining of coal</option>
                                <option value="Mining of stone">Mining of stone</option>
                                <option value="Recycling of metals and scrap">Recycling of metals and scrap</option>
                                <option value="Recycling of plastic bottles">Recycling of plastic bottles</option>
                                <option value="Recycling of waste">Recycling of waste</option>
                                <option value="Electricity distribution">Electricity distribution</option>
                                <option value="Gas manufacture and supply">Gas manufacture and supply</option>
                                <option value="Water purification">Water purification</option>
                                <option value="Water supply">Water supply</option>
                                <option value="Construction of roads">Construction of roads</option>
                                <option value="Construction of buildings">Construction of buildings</option>
                                <option value="Plumbing">Plumbing</option>
                                <option value="Insulation work activities">Insulation work activities</option>
                                <option value="Installation of electrical wiring">Installation of electrical wiring</option>
                                <option value="Sale of motor vehicles">Sale of motor vehicles</option>
                                <option value="Maintenance and repairs of motors">Maintenance and repairs of motors</option>
                                <option value="Wholesale of grain, animal feeds">Wholesale of grain, animal feeds</option>
                                <option value="Clothing stores">Clothing stores</option>
                                <option value="Wholesale in flower and plants">Wholesale in flower and plants</option>
                                <option value="Retail stores">Retail stores</option>
                                <option value="Wholesale of meat and meat products">Wholesale of meat and meat products</option>
                                <option value="Agents in textiles">Agents in textiles</option>
                                <option value="Agents in sale of fuels">Agents in sale of fuels</option>
                                <option value="Agents in property sales">Agents in property sales</option>
                                <option value="Agents in sale of variety of goods">Agents in sale of variety of goods</option>
                                <option value="Travel Agencies">Travel Agencies</option>
                                <option value="Tourist Agencies">Tourist Agencies</option>
                                <option value="Cafe, Lounge bar and Restaurant">Cafe, Lounge bar and Restaurant</option>
                                <option value="Hotel chain">Hotel chain</option>
                                <option value="Catering Services">Catering Services</option>
                                <option value="Canteen">Canteen</option>
                                <option value="Taxi operation">Taxi operation</option>
                                <option value="Freight Transportation and Logistics">Freight Transportation and Logistics</option>
                                <option value="Medical field">Medical field</option>
                                <option value="Professional service providers (lawyers and custom officers)">Professional service providers (lawyers and custom officers)</option>
                                <option value="Scheduled air-transport services">Scheduled air-transport services</option>
                                <option value="Storage & Warehousing">Storage & Warehousing</option>
                                <option value="Cargo handling">Cargo handling</option>
                                <option value="Stock brokerage and telecommunication trading">Stock brokerage and telecommunication trading</option>
                                <option value="Investment Services">Investment Services</option>
                                <option value="Security broking and fund management">Security broking and fund management</option>
                                <option value="Pension fund management">Pension fund management</option>
                                <option value="Development and sell real estate">Development and sell real estate</option>
                                <option value="Letting of own property/ies">Letting of own property/ies</option>
                                <option value="Research & development on natural science and engineering">Research & development on natural science and engineering</option>
                                <option value="Marker research and opinion polling">Marker research and opinion polling</option>
                                <option value="Fair and Amusement Park Activities">Fair and Amusement Park Activities</option>
                                <option value="Gambling and betting activities">Gambling and betting activities</option>
                                <option value="Sporting activities">Sporting activities</option>
                                <option value="Art Gallery">Art Gallery</option>
                                <option value="Trade Unions">Trade Unions</option>
                                <option value="Political Parties">Political Parties</option>
                                <option value="Legal Services">Legal Services</option>
                                <option value="Accounting and Taxation services">Accounting and Taxation services</option>
                                <option value="Business and Management consultancy">Business and Management consultancy</option>
                                <option value="IT Consultancy">IT Consultancy</option>
                                <option value="HR Consultancy">HR Consultancy</option>
                                <option value="Marketing and Advertising">Marketing and Advertising</option>
                                <option value="Architectural & Technical consult">Architectural & Technical consult</option>
                                <option value="Graphics and Design">Graphics and Design</option>
                                <option value="Cleaning Services">Cleaning Services</option>
                                <option value="Beauty and hair salon Services">Beauty and hair salon Services</option>
                                <option value="Physical and well-being services">Physical and well-being services</option>
                                <option value="Radio and Television activities">Radio and Television activities</option>
                                <option value="Water Board">Water Board</option>
                                <option value="Electricity">Electricity</option>
                                <option value="Securities Exchange Commission">Securities Exchange Commission</option>
                                <option value="Oil Consultant">Oil Consultant</option>
                                <option value="Computing">Computing</option>
                                <option value="Binary Options">Binary Options</option>
                                <option value="Professional services">Professional services</option>
                                <option value="Holding of licenses">Holding of licenses</option>
                                <option value="Holding of investments">Holding of investments</option>
                                <option value="Traders and Dealers in oil">Traders and Dealers in oil</option>
                                <option value="Management Company">Management Company</option>
                                <option value="Leasing of aircrafts">Leasing of aircrafts</option>
                                <option value="Shipping related activities">Shipping related activities</option>
                                <option value="Periodental Hygiene">Periodental Hygiene</option>
                                <option value="Private banking">Private banking</option>
                                <option value="Narcotics, pharmaceuticals and healthcare">Narcotics, pharmaceuticals and healthcare</option>
                                <option value="Arms trade and defence, public procurement">Arms trade and defence, public procurement</option>
                                <option value="Public administrations or enterprises">Public administrations or enterprises</option>
                                <option value="Non-profit organisation/charity">Non-profit organisation/charity</option>
                                <option value="Boat building and repairing">Boat building and repairing</option>
                                <option value="Business trading via the internet /second hand dealership">Business trading via the internet /second hand dealership</option>
                                <option value="Financial services registered via offshore centres or financial services on the internet">Financial services registered via offshore centres or financial services on the internet</option>
                                <option value="Food markets, including local markets, etc.">Food markets, including local markets, etc.</option>
                                <option value="Notaries">Notaries</option>
                                <option value="Investment advisors">Investment advisors</option>
                                <option value="Trusts and company service providers">Trusts and company service providers</option>
                                <option value="Government departments">Government departments</option>
                                <option value="Government owned companies">Government owned companies</option>
                                <option value="Regulators and statutory bodies">Regulators and statutory bodies</option>
                                <option value="Not Applicable">Not Applicable</option>
                                <option value="Insurance sector">Insurance sector</option>
                                <option value="Arms trade and defence">Arms trade and defence</option>
                                <option value="Arms producer">Arms producer</option>
                                <option value="Ministers">Ministers</option>
                                <option value="Ambassador">Ambassador</option>
                                <option value="Sports club owner">Sports club owner</option>
                                <option value="Lawyer">Lawyer</option>
                                <option value="CEO">CEO</option>
                                <option value="Accountant">Accountant</option>
                                <option value="Asset/Fund Manager">Asset/Fund Manager</option>
                                <option value="Investment Banker">Investment Banker</option>
                                <option value="Financial Consultant">Financial Consultant</option>
                                <option value="BOD Central Banks">BOD Central Banks</option>
                                <option value="Stock exchange trader">Stock exchange trader</option>
                                <option value="Forex traders">Forex traders</option>
                                <option value="Investor">Investor</option>
                                <option value="Developer">Developer</option>
                                <option value="Gambler">Gambler</option>
                                <option value="Traders and Dealers in oil and gas">Traders and Dealers in oil and gas</option>
                                <option value="Construction">Construction</option>
                                <option value="Bars and restaurants">Bars and restaurants</option>
                                <option value="Food markets, including local markets">Food markets, including local markets</option>
                                <option value="Second hand car dealership">Second hand car dealership</option>
                                <option value="Secretary/lower rank employees and administrative positions">Secretary/lower rank employees and administrative positions</option>
                                <option value="Architect">Architect</option>
                                <option value="Engineer">Engineer</option>
                                <option value="Industrial Designer">Industrial Designer</option>
                                <option value="Distributor">Distributor</option>
                                <option value="Officer in Armed Forces">Officer in Armed Forces</option>
                                <option value="Head of state/government">Head of state/government</option>
                                <option value="Member of Parliament">Memer of Parliament</option>
                                <option value="Member of trade unions">Member of trade unions</option>
                                <option value="Political party member">Political party member</option>
                                <option value="Charge d' Affaires">Charge d' Affaires</option>
                                <option value="R&D researcher">R&D researcher</option>
                                <option value="Lobbyist">Lobbyist</option>
                                <option value="Promoter">Promoter</option>
                                <option value="Tour Operator">Tour Operator</option>
                                <option value="Travel Agent">Travel Agent</option>
                                <option value="Agent/Intermediary">Agent/Intermediary</option>
                                <option value="Hospitality owner">Hospitality owner</option>
                                <option value="Hospitality manager">Hospitality manager</option>
                                <option value="Computer Programmer">Computer Programmer</option>
                                <option value="IT consultant">IT consultant</option>
                                <option value="Member of supreme court/judicial body">Member of supreme court/judicial body</option>
                                <option value="CFO">CFO</option>
                                <option value="COO">COO</option>
                                <option value="Manager">Manager</option>
                                <option value="Business Development Manager">Business Development Manager</option>
                                <option value="Managing Director">Managing Director</option>
                                <option value="Company Director">Company Director</option>
                                <option value="Business Consultant">Business Consultant</option>
                                <option value="Auditor">Auditor</option>
                                <option value="Tax Adviser">Tax Adviser</option>
                                <option value="Banker">Banker</option>
                                <option value="Rentier">Rentier</option>
                                <option value="Retailer">Retailer</option>
                                <option value="Salesman">Salesman</option>
                                <option value="Wholesaler">Wholesaler</option>
                                <option value="Commodities trader">Commodities trader</option>
                                <option value="Farmer">Farmer</option>
                                <option value="Fisherman">Fisherman</option>
                                <option value="University Professor">University Professor</option>
                                <option value="Pilot">Pilot</option>
                                <option value="Composer">Composer</option>
                                <option value="Artist">Artist</option>
                                <option value="Pensioner">Pensioner</option>
                                <option value="Other - please specify">Other - please specify</option>
                                <option value="Marine Consultant">Marine Consultant</option>
                                <option value="MARKETING">MARKETING</option>
                                <option value="Business Advisor">Business Advisor</option>
                                <option value="Civil engineer">Civil engineer</option>
                                <option value="Enterpreneur">Enterpreneur</option>
                                <option value="Police Officer">Police Officer</option>
                            </select>
                            <span className='text-red-500'>{errors.industry}</span>
                        </div>
                    </div>

                    <div className='flex flex-col md:flex-row gap-10'>
                        <div className='flex flex-row gap-1 w-full justify-center'>
                            <input type='submit' className='inline-block cursor-pointer mm-button !px-20 blue' value='Submit' disabled={loading} />
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
    );
};

export default Contact;
