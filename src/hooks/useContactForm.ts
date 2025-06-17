
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { sendContactEmail, ContactFormData } from '@/lib/emailjs';
import { useToast } from '@/hooks/use-toast';

export const useContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const submitContactForm = async (formData: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // Save to database
      const { error: dbError } = await supabase
        .from('contact_messages')
        .insert([formData]);

      if (dbError) {
        throw dbError;
      }

      // Send email via EmailJS
      const emailSent = await sendContactEmail(formData);
      
      if (emailSent) {
        toast({
          title: "Message sent successfully!",
          description: "We'll get back to you within 24 hours.",
        });
        return true;
      } else {
        toast({
          title: "Message saved",
          description: "Your message was saved but email notification failed. We'll still get back to you!",
          variant: "default",
        });
        return true;
      }
    } catch (error) {
      console.error('Contact form error:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact us directly.",
        variant: "destructive",
      });
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    submitContactForm,
    isSubmitting,
  };
};
