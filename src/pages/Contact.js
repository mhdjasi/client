import React from "react";
import Layout from "../components/Layout/Layout";
import { BiSupport, BiPhoneCall, BiMailSend } from "react-icons/bi";

const Contact = () => {
  return (
    <Layout title={'Contact us - Ecommerce Zone'}>
      <div className="row  contactus">
        <div className="col-md-6">
          <img className="mt-5 ms-3"
            src="/images/contactusbg.jpg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-4 mt-5 ms-3">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
        <p className="text-justify mt-2 fs-5">any query and info about product feel free to call anytime we 24X7 available</p>
        <p className="mt-3"><BiMailSend/> : ckjasir369@gmail.com</p>
        <p className="mt-3"><BiPhoneCall/> : 9567517474</p>
        <p className="mt-3"><BiSupport/> : 1300-0000-0001 (toll free)</p>
        </div>
        <div className="col-md-1"></div>
      </div>
    </Layout>
  );
};

export default Contact;
