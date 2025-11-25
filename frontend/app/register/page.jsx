"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import { useAuth } from "@/context/AuthContext";
import toast from "react-hot-toast";
import styled from "styled-components";
import Link from "next/link";

export default function RegisterPage() {
  const { register } = useAuth();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await register(form.name, form.email, form.password);
      toast.success("Registration successful!");
    } catch (err) {
      setError(err.message);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-[calc(100vh-56px)] flex items-center justify-center px-4">
        <StyledWrapper>
          <form className="form" onSubmit={handleSubmit}>
            <p className="title">Register </p>
            <p className="message">Register now and get full access to our app. </p>

            {error && (
              <p className="text-sm text-red-500 bg-red-100 rounded-md px-3 py-2 mb-2">
                {error}
              </p>
            )}

            <label>
              <input
                required
                placeholder=" "
                type="text"
                className="input"
                name="name"
                value={form.name}
                onChange={handleChange}
              />
              <span>Name</span>
            </label>

            <label>
              <input
                required
                placeholder=" "
                type="email"
                className="input"
                name="email"
                value={form.email}
                onChange={handleChange}
              />
              <span>Email</span>
            </label>

            <label>
              <input
                required
                placeholder=" "
                type="password"
                className="input"
                name="password"
                value={form.password}
                onChange={handleChange}
                minLength={6}
              />
              <span>Password</span>
            </label>

            <button className="submit" disabled={loading}>
              {loading ? "Creating account..." : "Submit"}
            </button>
            <p className="signin">Already have an acount ? <Link href="/login">Login</Link> </p>
          </form>
        </StyledWrapper>
      </main>
    </>
  );
}

const StyledWrapper = styled.div`
  .form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 450px;
    width: 100%;
    background-color: #fff;
    padding: 20px;
    border-radius: 20px;
    position: relative;
  }

  .title {
    font-size: 28px;
    color: royalblue;
    font-weight: 600;
    letter-spacing: -1px;
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 30px;
  }

  .title::before,.title::after {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    border-radius: 50%;
    left: 0px;
    background-color: royalblue;
  }

  .title::before {
    width: 18px;
    height: 18px;
    background-color: royalblue;
  }

  .title::after {
    width: 18px;
    height: 18px;
    animation: pulse 1s linear infinite;
  }

  .message, .signin {
    color: rgba(88, 87, 87, 0.822);
    font-size: 14px;
  }

  .signin {
    text-align: center;
  }

  .signin a {
    color: royalblue;
  }

  .signin a:hover {
    text-decoration: underline royalblue;
  }

  .flex {
    display: flex;
    width: 100%;
    gap: 6px;
  }

  .form label {
    position: relative;
  }

  .form label .input {
    width: 100%;
    padding: 10px 10px 20px 10px;
    outline: 0;
    border: 1px solid rgba(105, 105, 105, 0.397);
    border-radius: 10px;
    color: #333;
  }

  .form label .input + span {
    position: absolute;
    left: 10px;
    top: 15px;
    color: grey;
    font-size: 0.9em;
    cursor: text;
    transition: 0.3s ease;
    pointer-events: none;
  }

  .form label .input:placeholder-shown + span {
    top: 15px;
    font-size: 0.9em;
  }

  .form label .input:focus + span,
  .form label .input:not(:placeholder-shown) + span {
    top: 30px;
    font-size: 0.7em;
    font-weight: 600;
    transform: translateY(-25px);
  }

  .form label .input:valid + span {
    color: green;
  }

  .submit {
    border: none;
    outline: none;
    background-color: royalblue;
    padding: 10px;
    border-radius: 10px;
    color: #fff;
    font-size: 16px;
    transform: .3s ease;
    cursor: pointer;
  }

  .submit:hover {
    background-color: rgb(56, 90, 194);
  }

  .submit:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  @keyframes pulse {
    from {
      transform: scale(0.9);
      opacity: 1;
    }

    to {
      transform: scale(1.8);
      opacity: 0;
    }
  }`;
