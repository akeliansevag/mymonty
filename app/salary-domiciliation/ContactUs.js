"use client";

import { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    position: "",
    mobileNumber: "",
    companyName: ""
  });

  const [errors, setErrors] = useState({});
  const [statusMessage, setStatusMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    let newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.position.trim()) newErrors.position = "Position is required";

    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = "Mobile number is required";
    } else if (!/^\+?[0-9]{7,15}$/.test(formData.mobileNumber)) {
      newErrors.mobileNumber = "Invalid mobile number";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage("");
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const res = await fetch("https://leb-backend.mymonty.com/api/salary", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      console.log("API Response:", data);

      if (res.ok) {
        setStatusMessage("Form submitted successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          position: "",
          mobileNumber: "",
          companyName: ""
        });
      } else {
        setStatusMessage("Failed to submit form. Please try again.");
      }
    } catch (error) {
      console.error("API Error:", error);
      setStatusMessage("Something went wrong.");
    }

    setIsSubmitting(false);
  };

  return (
    <section className='lg:py-32 max-lg:py-16 bg-[#091111]'>
        
        <div className="container">
            <h2 className="section-title text-balance text-center">Kindly share your information AND our team will contact you</h2>
            <div className="bg-black rounded-2xl p-8 mt-10">

                <form onSubmit={handleSubmit} className="space-y-10 max-lg:space-y-6">
                    {/* Row 1 */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                        <label className="text-[18px] block text-white mb-1">First Name</label>
                        <input
                        type="text"
                        name="firstName"
                        placeholder="Enter first name"
                        className="w-full rounded-xl p-3 bg-white text-black"
                        value={formData.firstName}
                        onChange={handleChange}
                        />
                        {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                    </div>
                    <div>
                        <label className="text-[18px] block text-white mb-1">Last Name</label>
                        <input
                        type="text"
                        name="lastName"
                        placeholder="Enter last name"
                        className="w-full rounded-xl p-3 bg-white text-black"
                        value={formData.lastName}
                        onChange={handleChange}
                        />
                        {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                    </div>
                    </div>

                    {/* Row 2 */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                        <label className="text-[18px] block text-white mb-1">Email</label>
                        <input
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        className="w-full rounded-xl p-3 bg-white text-black"
                        value={formData.email}
                        onChange={handleChange}
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>
                    <div>
                        <label className="text-[18px] block text-white mb-1">Position</label>
                        <input
                        type="text"
                        name="position"
                        placeholder="Enter position"
                        className="w-full rounded-xl p-3 bg-white text-black"
                        value={formData.position}
                        onChange={handleChange}
                        />
                        {errors.position && <p className="text-red-500 text-sm mt-1">{errors.position}</p>}
                    </div>
                    </div>

                    {/* Row 3 */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                        <label className="text-[18px] block text-white mb-1">Mobile Number</label>
                        <input
                        type="tel"
                        name="mobileNumber"
                        placeholder="Enter mobile number"
                        className="w-full rounded-xl p-3 bg-white text-black"
                        value={formData.mobileNumber}
                        onChange={handleChange}
                        />
                        {errors.mobileNumber && <p className="text-red-500 text-sm mt-1">{errors.mobileNumber}</p>}
                    </div>
                    <div>
                        <label className="text-[18px] block text-white mb-1">Company Name (Optional)</label>
                        <input
                        type="text"
                        name="companyName"
                        placeholder="Enter company name"
                        className="w-full rounded-xl p-3 bg-white text-black"
                        value={formData.companyName}
                        onChange={handleChange}
                        />
                    </div>
                    </div>

                    {/* Submit */}
                    <div>
                    <button
                        type="submit"
                        className="rounded-full text-md block mx-auto px-10 py-2 mt-10 bg-[var(--mm-blue)] text-white hover:bg-white hover:text-black transition-all"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "Submitting..." : "Submit"}
                    </button>
                    </div>

                    
                </form>
                {statusMessage && (
                    <p
                        className={`mt-5 text-base text-center ${
                        statusMessage.startsWith("✅") ? "text-green-500" : "text-red-500"
                        }`}
                    >
                        {statusMessage}
                    </p>
                    )}
            </div>
        </div>
    </section>
    
  );
}