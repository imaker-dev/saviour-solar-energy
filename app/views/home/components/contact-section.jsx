"use client";

import { useState } from "react";
import Image from "next/image";
import PageWrapper from "@/app/components/page-wrapper";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Check } from "lucide-react";
import emailjs from "@emailjs/browser";

const TABS = ["Residential", "Housing", "Commercial"];

export default function ContactSection() {
  const [activeTab, setActiveTab] = useState("Residential");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const getValidationSchema = () => {
    let base = {
      fullName: Yup.string().required("Required"),
      phone: Yup.string()
        .matches(/^[0-9]{10}$/, "Enter valid 10-digit number")
        .required("Required"),
      pincode: Yup.string()
        .matches(/^[0-9]{6}$/, "Enter valid 6-digit pincode")
        .required("Required"),
      bill: Yup.string().required("Required"),
    };

    if (activeTab === "Housing") {
      base = {
        ...base,
        societyName: Yup.string().required("Required"),
        designation: Yup.string().required("Required"),
        agmStatus: Yup.string().required("Required"),
      };
    }

    if (activeTab === "Commercial") {
      base = {
        ...base,
        companyName: Yup.string().required("Required"),
        city: Yup.string().required("Required"),
      };
    }

    return Yup.object().shape(base);
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      fullName: "",
      phone: "",
      pincode: "",
      bill: "",
      societyName: "",
      designation: "",
      agmStatus: "",
      companyName: "",
      city: "",
    },
    validationSchema: getValidationSchema(),
    onSubmit: async (values, { resetForm }) => {
      setIsSubmitting(true);

      try {
        const templateParams = {
          fullName: values.fullName,
          phone: values.phone,
          pincode: values.pincode,
          bill: values.bill,
          type: activeTab,

          // Only send relevant fields
          societyName: activeTab === "Housing" ? values.societyName : "",
          designation: activeTab === "Housing" ? values.designation : "",
          agmStatus: activeTab === "Housing" ? values.agmStatus : "",

          companyName: activeTab === "Commercial" ? values.companyName : "",
          city: activeTab === "Commercial" ? values.city : "",
        };

        await emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          templateParams,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        );

        setSubmitSuccess(true);
        resetForm();

        setTimeout(() => setSubmitSuccess(false), 4000);
      } catch (error) {
        console.error("EmailJS Error:", error);
        alert("Something went wrong. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  return (
    <PageWrapper className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* LEFT - Image */}
        <div className="relative h-[250px] lg:h-[600px] rounded-3xl overflow-hidden">
          <Image
            src="/Images/project-2.webp"
            alt="Contact us"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 text-white">
            <h3 className="text-2xl lg:text-3xl font-semibold leading-tight">
              Schedule a FREE
              <br />
              consultation today
            </h3>
          </div>
        </div>

        {/* RIGHT - Form */}
        <div>
          {/* Header */}
          <div className="mb-8">
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">
              CONTACT US
            </p>
            <h2 className="text-3xl lg:text-4xl font-normal text-gray-900 mb-3">
              Let's talk about your future project
            </h2>
            <p className="text-gray-600">
              Fill in your details and we'll get back to you within 24 hours.
            </p>
          </div>

          {/* Success Message */}
          {submitSuccess && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Check className="w-3 h-3 text-white" />
              </div>
              <p className="text-green-800 text-sm">
                Thank you! We'll contact you shortly.
              </p>
            </div>
          )}

          {/* Tabs */}
          <div className="flex gap-8 border-b border-gray-200 mb-8">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  formik.resetForm();
                }}
                className={`pb-3 text-base transition-colors relative
                    ${
                      activeTab === tab
                        ? "text-primary-500 font-medium"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
              >
                {tab}
                {activeTab === tab && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-500" />
                )}
              </button>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={formik.handleSubmit} className="space-y-5">
            {/* Common Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <InputField
                label="Full Name"
                name="fullName"
                type="text"
                placeholder="Your full name"
                formik={formik}
              />

              <InputField
                label="WhatsApp Number"
                name="phone"
                type="tel"
                placeholder="Your phone number"
                formik={formik}
              />

              <InputField
                label="Pin Code"
                name="pincode"
                type="text"
                placeholder="Enter your pin code"
                formik={formik}
              />

              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  Monthly Bill <span className="text-red-500">*</span>
                </label>
                <select
                  name="bill"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.bill}
                  className="w-full px-0 py-2 border-b border-gray-300 focus:border-gray-900 focus:outline-none bg-transparent text-gray-900"
                >
                  <option value="" className="text-gray-400">
                    Select bill range
                  </option>
                  <option value="<1500">Less than ₹2,500</option>
                  <option value="1500-2500">₹2,500 - ₹5,500</option>
                  <option value="5500-10000">₹5,500 - ₹10,000</option>
                  <option value="10000-50000">₹10,000 - ₹50,000</option>
                  <option value=">50000">More than ₹50,000</option>
                </select>
                {formik.touched.bill && formik.errors.bill && (
                  <p className="text-red-500 text-xs mt-1">
                    {formik.errors.bill}
                  </p>
                )}
              </div>
            </div>

            {/* Housing Fields */}
            {activeTab === "Housing" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
                <InputField
                  label="Society Name"
                  name="societyName"
                  type="text"
                  placeholder="Society name"
                  formik={formik}
                />

                <InputField
                  label="Your Designation"
                  name="designation"
                  type="text"
                  placeholder="Secretary / Chairman"
                  formik={formik}
                />

                <div className="md:col-span-2">
                  <InputField
                    label="AGM Approval Status"
                    name="agmStatus"
                    type="text"
                    placeholder="Approved / Pending / Not Required"
                    formik={formik}
                  />
                </div>
              </div>
            )}

            {/* Commercial Fields */}
            {activeTab === "Commercial" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
                <InputField
                  label="Company Name"
                  name="companyName"
                  type="text"
                  placeholder="Your company name"
                  formik={formik}
                />

                <InputField
                  label="City"
                  name="city"
                  type="text"
                  placeholder="Your city"
                  formik={formik}
                />
              </div>
            )}

            {/* Submit */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary w-full md:w-auto  disabled:opacity-50"
              >
                {isSubmitting ? "Submitting..." : "Submit Request"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </PageWrapper>
  );
}

// Clean Input Component
function InputField({ label, name, type, placeholder, formik }) {
  const hasError = formik.touched[name] && formik.errors[name];

  return (
    <div>
      <label className="block text-sm text-gray-600 mb-2">
        {label} <span className="text-red-500">*</span>
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[name]}
        className={`w-full px-0 py-2 border-b transition-colors placeholder:text-gray-400 focus:outline-none
          ${
            hasError
              ? "border-red-300 focus:border-red-500"
              : "border-gray-300 focus:border-gray-900"
          }`}
      />
      {hasError && (
        <p className="text-red-500 text-xs mt-1">{formik.errors[name]}</p>
      )}
    </div>
  );
}
