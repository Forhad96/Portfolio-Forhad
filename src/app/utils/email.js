// utils/email.js

import emailjs from "@emailjs/browser";

export const sendEmail = async (templateParams) => {
  try {
    const response = await emailjs.send(
      "service_jdlco6j", // Replace with your Email.js service ID
      "template_sbfb9sc", // Replace with your Email.js template ID
      templateParams,
      "VPi2ac1VouHqcj81G" // Replace with your Email.js user ID
    );

    console.log("Email sent successfully:", response);
    return response;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};
