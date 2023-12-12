'use client'
import Image from "next/image";
import contactImg from '@/asset/contactImg.png'
import ContactForm from "./ContactForm";
const Contact = () => {

    return (
      <div className="grid md:grid-cols-2  gap-5">
        <div className="">
          <h2 className="text-white text-6xl">
            Got a project in <br /> <span className="text-primary">mind?</span>
          </h2>
          <Image
            className="object-contain h-[350px]"
            src={contactImg}
            width={250}
            height={350}
            alt="contact image"
          />
        </div>
        <ContactForm></ContactForm>
      </div>
    );
};
export default Contact;