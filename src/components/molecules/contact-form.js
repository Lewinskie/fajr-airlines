import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage, useFormikContext } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Button } from "../cva/buttonCVA";

const ContactForm = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
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
    <div className="border border-gray-400 px-12 py-20 max-w-3xl self-center">
      {/* <h4 className="text-primary-450 text-center leading-relaxed font-serif text-lg">
        We are here to help and answer any queries you might have. We look
        forward to hear from you
      </h4> */}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ touched, errors }) => (
          <Form className="w-full mt-6">
            <div className="flex items-center mb-4">
              <div className="w-full mr-3">
                <label
                  class=" text-gray-500 text-base font-bold mb-2"
                  for="firstName"
                >
                  First Name
                </label>
                <Field
                  name="firstName"
                  className={`appearance-none bg-transparent border  ${
                    touched.firstName && errors.firstName
                      ? "border-red-500"
                      : "border-gray-600"
                  } w-full text-gray-500 py-1 px-2 focus:outline-none leading-relaxed text-base font-serif`}
                  type="text"
                  placeholder="John"
                />
              </div>
              <div className="w-full">
                <label
                  class=" text-primary-400 text-base font-bold mb-2"
                  for="lastName"
                >
                  Last Name
                </label>
                <Field
                  name="lastName"
                  className={`appearance-none bg-transparent border ${
                    touched.lastName && errors.lastName
                      ? "border-red-500"
                      : "border-primary-100"
                  } w-full text-primary-500  py-1 px-2 focus:outline-none leading-relaxed text-base font-serif`}
                  type="text"
                  placeholder="Doe"
                />
              </div>
            </div>
            <div className="flex items-center mb-4">
              <div className="w-full mr-3">
                <label
                  class=" text-primary-400 text-base font-bold mb-2"
                  for="email"
                >
                  Email
                </label>
                <Field
                  name="email"
                  className={`appearance-none bg-transparent border ${
                    touched.email && errors.email
                      ? "border-red-500"
                      : "border-primary-100"
                  } w-full text-primary-500 py-1 px-2 focus:outline-none leading-relaxed text-base font-serif`}
                  type="email"
                  placeholder="johndoe@gmail.com"
                />
              </div>
              <div className="w-full">
                <label
                  class=" text-primary-400 text-base font-bold mb-2"
                  for="phoneNumber"
                >
                  Phone Number
                </label>
                <Field
                  name="phoneNumber"
                  className={`appearance-none bg-transparent border ${
                    touched.phoneNumber && errors.phoneNumber
                      ? "border-red-500"
                      : "border-primary-100"
                  } w-full text-primary-500 py-1 px-2 focus:outline-none leading-relaxed text-base font-serif`}
                  type="text"
                  placeholder="+254 701234567"
                />
              </div>
            </div>
            <div className="w-full">
              <label
                class=" text-primary-400 text-base font-bold mb-2"
                for="subject"
              >
                Subject
              </label>
              <Field
                name="subject"
                className={`appearance-none bg-transparent border ${
                  touched.subject && errors.subject
                    ? "border-red-500"
                    : "border-primary-100"
                } w-full text-primary-500 py-1 px-2 focus:outline-none leading-relaxed text-base font-serif`}
                type="text"
                placeholder="i.e Request for charter services"
              />
            </div>
            <div className="w-full mt-5">
              <label
                class="text-primary-400 text-base font-bold mb-2"
                for="lastName"
              >
                Message
              </label>
              <Field
                name="message"
                as="textarea"
                rows="4"
                className={`appearance-none bg-transparent border ${
                  touched.message && errors.message
                    ? "border-red-500"
                    : "border-primary-100"
                } w-full text-primary-500  mr-3 py-1 px-2 focus:outline-none leading-relaxed text-base font-serif`}
                type="text"
                placeholder="Your message..."
              />
            </div>

            <Button
              type="submit"
              size="medium"
              intent="primary"
              className="bg-primary-500 text-white py-2 px-4 rounded mt-4"
            >
              Send Enquiry
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
