import type { NextApiRequest, NextApiResponse } from 'next';

type ContactData = {
  name: string;
  email: string;
  message: string;
};

type ResponseData = {
  success: boolean;
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    // Parse the request body
    const { name, email, message } = req.body as ContactData;

    // Validate the input
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: 'Missing required fields' });
    }

    if (!email.includes('@')) {
      return res.status(400).json({ success: false, message: 'Invalid email address' });
    }

    // Store the contact info (in a real app, you would send an email or store in a database)
    console.log('Contact form submission:', { name, email, message });

    // Return success response
    return res.status(200).json({ 
      success: true, 
      message: 'Thank you for your message! We will get back to you soon.' 
    });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'An error occurred while processing your request. Please try again later.' 
    });
  }
} 