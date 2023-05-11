import React from "react";
import Layout from "../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={'About us - Ecommerce Zone'}>
      <div className="row w-100  aboutus">
        <div className="col-md-6">
          <img
            className="mt-5 ms-3"
            src="/images/aboutusbg.jpg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-4 mt-5 ms-3">
          <h1 className="bg-dark p-2 text-white text-center">ABOUT US</h1>
          <p className="text-center mt-4 fs-5">
            At E-commerce Zone Store, we are passionate about providing
            high-quality products and exceptional customer service. Our mission
            is to create a one-stop-shop for all your shopping needs, offering a
            wide selection of products at competitive prices.
          </p>
          <p className="text-center mt-4 fs-5">
          Founded in 2023 by Mohammed Jasir, E-commerce Zone Store started as a small business selling products online from a garage. Over the years, we have grown into a thriving eCommerce company, with a team of dedicated professionals who are committed to providing the best shopping experience for our customers.
          </p>
        </div>
        <div className="col-md-1"></div>
      </div>
    </Layout>
  );
};



export default About;
