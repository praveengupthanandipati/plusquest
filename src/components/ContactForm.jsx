import React, { useState } from "react"
const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      const [errors, setErrors] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
        // Clear error when user starts typing
        if (errors[name]) {
          setErrors({
            ...errors,
            [name]: ''
          });
        }
      };
      const validateForm = () => {
        let valid = true;
        const newErrors = { ...errors };
    
        // Name validation
        if (!formData.name.trim()) {
          newErrors.name = 'Name is required';
          valid = false;
        }
    
        // Email validation
        if (!formData.email.trim()) {
          newErrors.email = 'Email is required';
          valid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          newErrors.email = 'Please enter a valid email address';
          valid = false;
        }
    
      // Phone validation - simplified but effective
    if (formData.phone.trim()) {
        // Remove all non-digit characters (keep numbers only for validation)
        const digitsOnly = formData.phone.replace(/\D/g, '');
        
        // Validate we have between 7-15 digits
        if (digitsOnly.length < 7 || digitsOnly.length > 15) {
          newErrors.phone = 'Phone number must be 7-15 digits';
          valid = false;
        }
      } else {
        newErrors.phone = 'Phone number is required';
        valid = false;
      }
    
        // Message validation
        if (!formData.message.trim()) {
          newErrors.message = 'Message is required';
          valid = false;
        } else if (formData.message.trim().length < 10) {
          newErrors.message = 'Message should be at least 10 characters';
          valid = false;
        }
    
        setErrors(newErrors);
        return valid;
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
          // Form is valid, proceed with submission
          console.log('Form submitted:', formData);
          // Here you would typically send the data to your backend
          alert('Thank you for your message! We will get back to you soon.');
          // Reset form
          setFormData({
            name: '',
            email: '',
            phone: '',
            message: ''
          });
        }
      };
  return (
    <>
        <div className="card shadow p-3">
            <div className="card-body">
                    <h4 className="card-title font-bold pb-0 mb-0">Get in Touch</h4>
                    <p>You can reach us anytime</p>

                    <form onSubmit={handleSubmit}>
                        <div className="form-group mb-2">
                            <label htmlFor="name" className="form-label">Name*</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                            />
                            {errors.name && <span className="error-message">{errors.name}</span>}
                        </div>

                        <div className="form-group mb-2">
                            <label htmlFor="email" className="form-label">Email*</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                            />
                            {errors.email && <span className="error-message">{errors.email}</span>}
                        </div>

                        <div className="form-group mb-2">
                            <label htmlFor="phone" className="form-label">Phone Number*</label>
                            <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className={`form-control ${errors.phone ? 'is-invalid' : ''}`}                            
                            />
                            {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                        </div>


                        <div className="form-group mb-2">
                            <label htmlFor="message" className="form-label">Message*</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="4"
                                className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                            />
                            {errors.message && <span className="error-message">{errors.message}</span>}
                        </div>

                        <button type="submit" className="btn btn-green mt-2 w-100 text-white">
                            Send Message
                        </button>
                    </form> 
            </div>
        </div>
    </>
  )
}

export default ContactForm
