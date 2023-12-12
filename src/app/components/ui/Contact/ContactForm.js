"use client"
import { sendEmail } from "@/app/utils/email";
import { useRef, useState } from "react";

const ContactForm = () => {
  const [emailData, setEmailData] = useState({
    user_name: "",
    user_email: "",
    message: "",
    // Add more fields as needed
  });
     const handleSendEmail = async (e) => {
        e.PreventDefault()
       try {
         await sendEmail(emailData);
         // Optionally, update your UI or redirect after sending the email
       } catch (error) {
         console.error("Error sending email:", error);
         // Handle the error, e.g., show an error message
       }
     };
    //  console.log(emailData);
const handleChange = (e) => {
    e.PreventDefault()
  setEmailData({ ...emailData, [e.target.name]: e.target.value });
};

    return (
      <div>
        <form className="card-body ">
          <div className="flex gap-5">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text text-white">Your Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name="user_name"
                onChange={handleChange}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text text-white">Your Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                name="user_email"
                onChange={handleChange}
                className="input input-bordered "
                required
              />
            </div>
          </div>
          <label className="form-control">
            <div className="label">
              <span className="label-text text-white">Your Message</span>
            </div>
            <textarea
              className="textarea textarea-bordered h-[280px]"
              placeholder="Message"
              name="message"
              onChange={handleChange}
            ></textarea>
          </label>
          <div className=" mt-6">
            <button
              onClick={handleSendEmail}
              // type="submit"
              className="btn border-none text text-white btn-md bg-primary "
            >
              Send Message
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={30}
                height={32}
                viewBox="0 0 30 32"
                fill="none"
              >
                <g filter="url(#filter0_d_25_10046)">
                  <path
                    d="M25 2.5L14 13.5"
                    stroke="#EEEEEE"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M25 2.5L18 22.5L14 13.5L5 9.5L25 2.5Z"
                    stroke="#EEEEEE"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_25_10046"
                    x={-1}
                    y="0.5"
                    width={32}
                    height={32}
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy={4} />
                    <feGaussianBlur stdDeviation={2} />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_25_10046"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_25_10046"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </button>
          </div>
        </form>
      </div>
    );
};
export default ContactForm;