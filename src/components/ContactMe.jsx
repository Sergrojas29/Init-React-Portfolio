import React, { useState } from 'react';

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted will be handled later:', formData);
  };

  return (
    <>
      <form id='formContainer' onSubmit={handleSubmit}>
        <h1>Contact Form</h1>
        <label className='lableForm'>
          Name:
          <input id='inputArea' type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <br />
        <label className='lableForm'>
          Email:
          <input id='inputArea' type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <br />
        <label className='lableForm'>
          Message:
          <textarea id='inputArea' name="message" value={formData.message} onChange={handleChange} />
        </label>
        <br />
        <button className='btn' type="submit">Submit</button>
      </form>
    </>
  );
};

export default ContactMe;
