import React from "react";
import Layout from "../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={'Policy - Ecommerce Zone'}>
      <div className="row w-100  policy">
        <div className="col-md-6">
          <img
            className="mt-5 ms-3"
            src="/images/policybg.jpg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-4 mt-5 ms-3">
          <p className=" mt-4 fs-5">
            <ul>
              <li>
              This privacy policy describes how E-commerce Zone Store collects, uses, and protects personal information collected from users of our eCommerce website.
              </li>
              <li>
              We may share personal information with third-party service providers who assist us with order fulfillment, payment processing, or other aspects of our business. We do not sell or share personal information with third-party advertisers.
              </li>
              <li>
                We use cookies to enhance the user experience on our website and
                improve the functionality of our website. Cookies are small text
                files that are stored on your device when you visit our website.
              </li>

            </ul>
          </p>
        </div>
        <div className="col-md-1"></div>
      </div>
    </Layout>
  );
};

export default Policy;
