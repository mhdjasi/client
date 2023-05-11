import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../styles/AuthStyles.css";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [answer, setAnswer] = useState("");
  
    const navigate = useNavigate();
  
    // form function
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const res = await axios.post("/api/v1/auth/forgot-password", {
          email,
          newPassword,
          answer
        });
        if (res && res.data.success) {
          toast.success(res.data && res.data.message);
       
          setTimeout(() => {
            navigate( "/login");
          }, 0);
        } else {
          toast.error(res.data.message);
        }
      } catch (error) {
        console.log(error);
        toast.error("something went wrong");
      }
    };
  
  return (
    <Layout title={"Forgot Password - ECommerce Zone"}>
              <div className="login form-container">
        <form onSubmit={handleSubmit} className="form col-lg-3 mt-4">
          <h3 className="mb-3 text-center text-light">Reset Password</h3>
          <div className="mb-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Email"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="form-control"
              id="exampleInputAnswer"
              placeholder="Enter Your Favorite Food"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter New Password"
              required
            />
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-success">
              Reset
            </button>
            
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default ForgotPassword