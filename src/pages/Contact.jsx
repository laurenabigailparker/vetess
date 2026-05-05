import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Contact</h1>

      <form onSubmit={handleSubmit}>
        <input name="firstName" onChange={handleChange} placeholder="First Name" />
        <input name="lastName" onChange={handleChange} placeholder="Last Name" />
        <input name="email" onChange={handleChange} placeholder="Email" />
        <textarea name="message" onChange={handleChange} placeholder="Message" />

        <button type="submit">Send</button>
      </form>
    </div>
  );
}