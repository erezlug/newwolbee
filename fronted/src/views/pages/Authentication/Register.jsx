
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Applogo } from "../../../Routes/ImagePath";
import { emailrgx } from "../Authentication/RegEx";
// import { Applogo } from "../../../Routes/ImagePath";

const schema = yup.object({
  email: yup
    .string()
    .matches(emailrgx, "Email is required")
    .required("Email is required")
    .trim(),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(20, "Password must be at most 20 characters")
    .required("Password is required")
    .trim(),
  id: yup
    .string()
    .required("ID is required")
    .trim(),
});

const Register = (props) => {
  const [passwordEye, setPasswordEye] = useState(true);
  const [checkUser, setCheckUser] = useState(false);
  const [repeatPasswordEye, setRepeatPasswordEye] = useState(true);
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await axios.post("https://wolbee-mvp-2.onrender.com/register", data);
      console.log(response.data); // אולי תרצה להציג הודעה למשתמש שההרשמה הצליחה
      setCheckUser(true);
      const managerId = data.id;
      localStorage.setItem('managerId', managerId);
      navigate("/");
    } catch (error) {
      console.error("Error registering user:", error.response.data);
      setCheckUser(false);
    }
  };


  return (
    <div className="account-page" style={{ background: 'linear-gradient(to right, white, #FFC502, #FFEA00)' }}>
      <div className="main-wrapper">
        <div className="account-content">
          <div className="container">
            {/* Account Logo */}
            <div className="account-logo">
              <Link to="#">
                <img src={Applogo} alt="Dreamguy's Technologies" />
              </Link>
            </div>
            {/* /Account Logo */}
            <div className="account-box">
              <div className="account-wrapper">
                <h3 className="account-title">Register</h3>
                <p className="account-subtitle">Access to our dashboard</p>
                {/* Account Form */}
                <div>
                  <form>
                    <div className="input-block mb-3">
                      <label className="col-form-label">Email</label>
                      <Controller
                        name="email"
                        control={control}
                        render={({ field: { value, onChange } }) => (
                          <input
                            className={`form-control ${errors?.email ? "error-input" : ""
                              }`}
                            type="text"
                            value={value}
                            onChange={onChange}
                            autoComplete="false"
                          />
                        )}
                      />

                      <span className="text-danger">
                        {errors?.email?.message}
                      </span>
                      <span className="text-danger">
                        {checkUser ? "This Email is Already exist" : ""}
                      </span>
                    </div>

                    <div className="input-block mb-3">
                      <label className="col-form-label">Password</label>
                      <Controller
                        name="password"
                        control={control}
                        render={({ field: { value, onChange } }) => (
                          <div
                            className="pass-group"
                            style={{ position: "relative" }}
                          >
                            <input
                              type={passwordEye ? "password" : "text"}
                              className={`form-control  ${errors?.password ? "error-input" : ""
                                }`}
                              value={value}
                              onChange={onChange}
                              autoComplete="false"
                            />
                            <span
                              style={{
                                position: "absolute",
                                right: "5%",
                                top: "30%",
                              }}
                              onClick={() => setPasswordEye(!passwordEye)}
                              className={`fa toggle-password ${passwordEye ? "fa-eye-slash" : "fa-eye"
                                }`}
                            />
                          </div>
                        )}
                        defaultValue=""
                      />

                      <span className="text-danger">
                        {errors?.password?.message}
                      </span>
                    </div>

                    <div className="input-block mb-3">
                      <label className="col-form-label">Repeat Password</label>
                      <Controller
                        name="repeatepassword"
                        control={control}
                        render={({ field: { value, onChange } }) => (
                          <div
                            className="pass-group"
                            style={{ position: "relative" }}
                          >
                            <input
                              type={repeatPasswordEye ? "password" : "text"}
                              className={`form-control  ${errors?.repeatPassword ? "error-input" : ""
                                }`}
                              value={value}
                              onChange={onChange}
                              autoComplete="false"
                            />
                            <span
                              style={{
                                position: "absolute",
                                right: "5%",
                                top: "30%",
                              }}
                              onClick={() =>
                                setRepeatPasswordEye(!repeatPasswordEye)
                              }
                              className={`fa toggle-password ${repeatPasswordEye ? "fa-eye-slash" : "fa-eye"
                                }`}
                            />
                          </div>
                        )}
                        defaultValue=""
                      />

                      <span className="text-danger">
                        {errors?.repeatPassword?.message}
                      </span>
                    </div>

                    <div className="input-block mb-3">
                      <label className="col-form-label">ID</label>
                      <Controller
                        name="id"
                        control={control}
                        render={({ field: { value, onChange } }) => (
                          <input
                            className={`form-control ${errors?.id ? "error-input" : ""
                              }`}
                            type="text"
                            value={value}
                            onChange={onChange}
                            autoComplete="false"
                          />
                        )}
                      />
                      <span className="text-danger">
                        {errors?.id?.message}
                      </span>
                    </div>

                    <div className="input-block text-center"  style={{ background: 'linear-gradient(to right, white, #FFC502, #FFEA00)'}}>
                      <Link
                        to="#"
                        className="btn btn-primary account-btn"
                        onClick={handleSubmit(onSubmit)}
                      >
                        Register
                      </Link>
                    </div>
                  </form>

                  <div className="account-footer">
                    <p>
                      Already have an account? <Link to="/">Login</Link>
                    </p>
                  </div>
                </div>
                {/* /Account Form */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register
