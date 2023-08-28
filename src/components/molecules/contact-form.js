import React from "react";
import { Button } from "../cva/buttonCVA";

const ContactForm = () => {
  return (
    <div
      className="border border-primary-100 p-8 max-w-2xl self-center"
      style={{ boxShadow: "-9px  10px #C2C6EC" }}
    >
      <form class="w-full  mt-6">
        <div class="flex items-center mb-4">
          <input
            class="appearance-none bg-transparent border-b border-primary-100 w-full text-primary-500 mr-3 py-1 px-2 focus:outline-none leading-relaxed text-base font-serif"
            type="text"
            placeholder="First Name"
            aria-label="firstname"
          />
          <input
            class="appearance-none bg-transparent border-b border-primary-100 w-full text-primary-500 py-1 pl-2 focus:outline-none leading-relaxed text-base font-serif"
            type="text"
            placeholder="Last Name"
            aria-label="lastname"
          />
        </div>
        <div class="flex items-center mb-4">
          <input
            class="appearance-none bg-transparent border-b border-primary-100 w-full text-primary-500 mr-3 py-1 px-2 focus:outline-none leading-relaxed text-base font-serif"
            type="text"
            placeholder="Email"
            aria-label="email"
          />
          <input
            class="appearance-none bg-transparent border-b border-primary-100 w-full text-primary-500 py-1 pl-2 focus:outline-none leading-relaxed text-base font-serif"
            type="text"
            placeholder="Phone Number"
            aria-label="phonenumber"
          />
        </div>
        <input
          class="appearance-none bg-transparent border-b border-primary-100 w-full text-primary-500 mr-3 py-1 pl-2 focus:outline-none leading-relaxed text-base font-serif"
          type="text"
          placeholder="Subject"
          aria-label="subject"
        />
        <textarea
          id="message"
          rows="3"
          class="appearance-none bg-transparent border border-primary-100 w-full text-primary-500 mr-3 py-1 px-2 focus:outline-none leading-relaxed text-base font-serif mt-6"
          type="text"
          placeholder="Message"
        />

        <Button size="medium" intent="primary" className="mb-6 mt-6">
          Send
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
