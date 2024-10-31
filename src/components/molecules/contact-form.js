import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage, useFormikContext } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Button } from "../cva/buttonCVA";

const ContactForm = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const initialValues = {
    name: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    phoneNumber: Yup.string().required("Required"),
    subject: Yup.string().required("Required"),
    message: Yup.string().required("Required"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const response = await axios.post("/api/send-email", values);
      console.log(response.data.message); // Email sent successfully
      resetForm(); // Clear the form
    } catch (error) {
      console.error("Error sending email", error);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ touched, errors }) => (
        <Form className="mb-4 w-full">
          <div className="relative w-full h-11">
            <label
              className="text-base block antialiased font-sans leading-relaxed text-inherit font-bold"
              for="name"
            >
              Enter your name
            </label>
            <Field
              name="name"
              className={`appearance-none bg-transparent border  ${
                touched.name && errors.name
                  ? "border-secondary-300"
                  : "border-primary-300"
              } w-full text-gray-600 capitalize py-1 px-2 focus:outline-none leading-relaxed text-base font-serif`}
              type="text"
              placeholder=""
            />
          </div>
          <div className="relative w-full h-11 mt-8">
            <label
              className="text-base block antialiased font-sans leading-relaxed text-inherit font-bold"
              for="email"
            >
              Enter your email
            </label>
            <Field
              name="email"
              className={`appearance-none bg-transparent border  ${
                touched.email && errors.email
                  ? "border-secondary-300"
                  : "border-primary-300"
              } w-full text-gray-600 capitalize py-1 px-2 focus:outline-none leading-relaxed text-base font-serif`}
              type="email"
              placeholder=""
            />
          </div>
          <div className="relative w-full h-11 mt-8">
            <label
              className="text-base block antialiased font-sans leading-relaxed text-inherit font-bold"
              for="phoneNumber"
            >
              Enter your phone number
            </label>
            <Field
              name="phoneNumber"
              className={`appearance-none bg-transparent border  ${
                touched.phoneNumber && errors.phoneNumber
                  ? "border-secondary-300"
                  : "border-primary-300"
              } w-full text-gray-600 capitalize py-1 px-2 focus:outline-none leading-relaxed text-base font-serif`}
              type="text"
              placeholder=""
            />
          </div>

          <div className="relative w-full h-11 mt-8">
            <label
              className="text-base mb-2 block antialiased font-sans leading-relaxed text-inherit font-bold"
              for="subject"
            >
              Enter your subject
            </label>
            <Field
              name="subject"
              className={`appearance-none bg-transparent border  ${
                touched.subject && errors.subject
                  ? "border-secondary-300"
                  : "border-primary-300"
              } w-full text-gray-600 capitalize py-1 px-2 focus:outline-none leading-relaxed text-base font-serif`}
              type="text"
              placeholder=""
            />
          </div>

          <div className="w-full mt-8">
            <label
              className="text-base mb-2 block antialiased font-sans leading-relaxed text-inherit font-bold"
              for="message"
            >
              Message
            </label>
            <Field
              name="message"
              as="textarea"
              rows="2"
              className={`appearance-none bg-transparent border ${
                touched.message && errors.message
                  ? "border-secondary-300"
                  : "border-primary-300"
              } w-full text-gray-600 py-1 px-2 focus:outline-none leading-relaxed text-base font-serif`}
              type="text"
              placeholder="Your message..."
            />
          </div>
          <div className="relative w-full">
            <Button
              type="submit"
              intent="primary"
              className="bg-primary-300 text-white py-2 px-4 rounded mt-4 w-full "
            >
              Send Enquiry
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
