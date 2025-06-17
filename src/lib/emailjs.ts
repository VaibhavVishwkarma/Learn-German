
import emailjs from '@emailjs/browser';

// EmailJS configuration
const SERVICE_ID = 'service_xzu9ehu';
const TEMPLATE_ID = 'template_el0f05c';
const PUBLIC_KEY = 'XCVL8ylKqlXhZkoE3';

// Initialize EmailJS
emailjs.init(PUBLIC_KEY);

export interface ContactFormData {
  full_name: string;
  email: string;
  phone?: string;
  level?: string;
  message: string;
}

export const sendContactEmail = async (formData: ContactFormData): Promise<boolean> => {
  try {
    const templateParams = {
      to_name: 'ApnaGerman Team',
      from_name: formData.full_name,
      from_email: formData.email,
      phone: formData.phone || 'Not provided',
      level: formData.level || 'Not specified',
      message: formData.message,
    };

    await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams);
    return true;
  } catch (error) {
    console.error('Failed to send email:', error);
    return false;
  }
};
