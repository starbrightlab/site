// components/molecules/ContactForm.tsx
import React, { useState, FormEvent } from 'react';
import RetroButton from '../atoms/RetroButton';
import { motion, AnimatePresence } from 'framer-motion';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formState, setFormState] = useState<'idle' | 'success' | 'error'>('idle');
  
  // Form validation
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }
    
    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };
  
  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Validate form before submission
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Netlify form submission
      const formData = new FormData(e.target as HTMLFormElement);
      
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      });
      
      if (response.ok) {
        // Reset form on success
        setFormData({ name: '', email: '', message: '' });
        setFormState('success');
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setFormState('idle');
        }, 5000);
      } else {
        setFormState('error');
      }
    } catch (error) {
      setFormState('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div>
      <h3 className="font-retroScript text-2xl text-coral mb-6">Send a Transmission</h3>
      
      {/* Form validation summary for accessibility */}
      {Object.keys(errors).length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 bg-coral/10 border-2 border-coral rounded-lg"
          role="alert"
          aria-labelledby="validation-summary"
        >
          <h4 id="validation-summary" className="text-coral font-medium mb-2">
            Please correct the following errors:
          </h4>
          <ul className="list-disc pl-5">
            {Object.entries(errors).map(([field, message]) => (
              <li key={field}>
                <a href={`#${field}`} className="text-coral hover:underline">
                  {message}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
      
      {/* Form state messages */}
      <AnimatePresence>
        {formState === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mb-6 p-4 bg-teal/10 border-2 border-teal rounded-lg"
          >
            <div className="flex items-center">
              <div className="flex-shrink-0 mr-3">
                <div className="w-8 h-8 bg-teal rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <p className="text-teal font-medium">
                Message transmission successful! We&apos;ll respond to your signal soon.
              </p>
            </div>
          </motion.div>
        )}
        
        {formState === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mb-6 p-4 bg-coral/10 border-2 border-coral rounded-lg"
          >
            <div className="flex items-center">
              <div className="flex-shrink-0 mr-3">
                <div className="w-8 h-8 bg-coral rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <p className="text-coral font-medium">
                Transmission error! Please try again or contact us directly.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Netlify form with hidden form-name input */}
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        {/* Hidden input for Netlify form handling */}
        <input type="hidden" name="form-name" value="contact" />
        
        <div>
          <label 
            htmlFor="name" 
            className="block text-charcoal mb-2"
            id="name-label"
          >
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-3 border-2 rounded-lg transition-colors min-h-[44px] ${
              errors.name 
                ? 'border-coral bg-coral/5 focus:border-coral focus:ring-coral' 
                : 'border-mustard focus:border-teal focus:ring-teal'
            } focus:outline-none focus:ring-2 focus:ring-opacity-50`}
            placeholder="Captain John Doe"
            aria-describedby={errors.name ? 'name-error' : undefined}
            aria-invalid={errors.name ? 'true' : 'false'}
            aria-labelledby="name-label"
            aria-required="true"
          />
          {errors.name && (
            <p id="name-error" className="mt-1 text-coral text-sm" role="alert">
              {errors.name}
            </p>
          )}
        </div>
        
        <div>
          <label 
            htmlFor="email" 
            className="block text-charcoal mb-2"
            id="email-label"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 border-2 rounded-lg transition-colors min-h-[44px] ${
              errors.email 
                ? 'border-coral bg-coral/5 focus:border-coral focus:ring-coral' 
                : 'border-mustard focus:border-teal focus:ring-teal'
            } focus:outline-none focus:ring-2 focus:ring-opacity-50`}
            placeholder="john@futuremail.com"
            aria-describedby={errors.email ? 'email-error' : undefined}
            aria-invalid={errors.email ? 'true' : 'false'}
            aria-labelledby="email-label"
            aria-required="true"
            inputMode="email"
            autoComplete="email"
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-coral text-sm" role="alert">
              {errors.email}
            </p>
          )}
        </div>
        
        <div>
          <label 
            htmlFor="message" 
            className="block text-charcoal mb-2"
            id="message-label"
          >
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className={`w-full px-4 py-3 border-2 rounded-lg transition-colors ${
              errors.message 
                ? 'border-coral bg-coral/5 focus:border-coral focus:ring-coral' 
                : 'border-mustard focus:border-teal focus:ring-teal'
            } focus:outline-none focus:ring-2 focus:ring-opacity-50`}
            placeholder="Tell us about your mission..."
            aria-describedby={errors.message ? 'message-error' : undefined}
            aria-invalid={errors.message ? 'true' : 'false'}
            aria-labelledby="message-label"
            aria-required="true"
          ></textarea>
          {errors.message && (
            <p id="message-error" className="mt-1 text-coral text-sm" role="alert">
              {errors.message}
            </p>
          )}
        </div>
        
        <div className="text-center md:text-left">
          <RetroButton
            type="submit"
            variant="primary"
            size="lg"
            label={isSubmitting ? "Transmitting..." : "Transmit Message"}
            disabled={isSubmitting}
            aria-disabled={isSubmitting}
            className="min-h-[44px] min-w-[120px]"
            icon={
              isSubmitting ? (
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : null
            }
          />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;