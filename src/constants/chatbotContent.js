import { contactContent } from './contactContent';

export const defaultWelcome = {
  id: 1,
  from: 'bot',
  text: "Hi — I'm GraminSetu Assistant. How can I help you today?",
  time: Date.now(),
};

export const initialQuestions = [
  'How do I register?',
  'What are the pricing plans?',
  'How can I contact support?',
  'Tell me about GraminSetu features.',
  "What is GraminSetu's mission?",
];

export const generateReply = (userText) => {
  const lowered = userText.toLowerCase();

  if (
    lowered.includes('register') ||
    lowered.includes('sign up') ||
    lowered.includes('registration')
  ) {
    return 'To register, please visit our Contact Us page or click the "Sign Up" button on our homepage. We offer different registration options for villagers, businesses, and NGOs. Which one applies to you?';
  }
  if (lowered.includes('pricing') || lowered.includes('price') || lowered.includes('plans')) {
    return 'GraminSetu offers free basic features for villagers. For businesses and NGOs, we have tailored plans. You can find more details on our Schemes page or contact sales@graminsetu.in for custom solutions. What kind of plan are you interested in?';
  }
  if (lowered.includes('support') || lowered.includes('help') || lowered.includes('contact')) {
    return `Our support team is available via WhatsApp at ${contactContent.whatsapp}, phone at ${contactContent.phone}, or email at ${contactContent.email}. You can also visit our office at ${contactContent.address}. What specific issue do you need assistance with?`;
  }
  if (lowered.includes('features') || lowered.includes('capabilities')) {
    return 'GraminSetu provides a range of features including village search, detailed business model insights, government scheme information, and community forums. You can explore more on our Features Overview page. Which feature would you like to know more about?';
  }
  if (lowered.includes('about') || lowered.includes('mission') || lowered.includes('vision')) {
    return "GraminSetu's mission is to empower rural India by bridging the digital divide, fostering economic growth, and improving access to essential services. We aim to create a self-reliant and digitally inclusive rural ecosystem. Learn more on our About Us page.";
  }
  if (lowered.includes('hello') || lowered.includes('hi') || lowered.includes('hey')) {
    return "Hello! I'm GraminSetu Assistant. How can I help you today? Feel free to ask about registration, pricing, support, features, or our mission.";
  }
  if (lowered.includes('thank you') || lowered.includes('thanks')) {
    return "You're welcome! Is there anything else I can assist you with?";
  }
  if (lowered.includes('bye') || lowered.includes('goodbye')) {
    return 'Goodbye! Have a great day. Feel free to reach out if you have more questions.';
  }

  // Default fallback response
  return "I'm still learning, but I can help with common questions about registration, pricing, support, features, and our mission. Please try rephrasing your question or choose from the quick replies below.";
};

export const generateQuickReplies = (context) => {
  if (context === 'registration') {
    return ['How do I register?', 'What documents are needed?', 'Can I register as a business?'];
  }
  if (context === 'pricing') {
    return ['What are the pricing plans?', 'Is there a free trial?', 'Do you offer discounts?'];
  }
  if (context === 'support') {
    return ['How can I contact support?', 'What is the support email?', 'Is live chat available?'];
  }
  return ['How do I register?', 'What are the pricing plans?', 'How can I contact support?'];
};
