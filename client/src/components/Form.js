// client/src/components/Form.js

import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
  const [formData, setFormData] = useState({
    lastname: '',
    firstname: '',
    email: '',
    typeofproject: '',
    image1: '',
    image2: '',
    image3: '',
    size: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to your Node.js server endpoint
      const response = await axios.post('/newclient', formData);

      // Handle the response as needed
      console.log('Server response:', response.data);
    } catch (error) {
      console.error('Error submitting form:', error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Add input fields for each column in your PostgreSQL table */}
      <label>
        Last Name:
        <input type="text" name="lastname" value={formData.lastname} onChange={handleChange} />
      </label>
      <br />
      <label>
        First Name:
        <input type="text" name="firstname" value={formData.firstname} onChange={handleChange} />
      </label>
      <br />
      <label>
        Email:
        <input type="text" name="email" value={formData.email} onChange={handleChange} />
      </label>
      <br />
      <label>
        Type of Project:
        <input type="text" name="typeofproject" value={formData.typeofproject} onChange={handleChange} />
      </label>
      <br />
      <label>
        Image 1:
        <input type="text" name="image1" value={formData.image1} onChange={handleChange} />
      </label>
      <br />
      <label>
        Image 2:
        <input type="text" name="image2" value={formData.image2} onChange={handleChange} />
      </label>
      <br />
      <label>
        Image 3:
        <input type="text" name="image3" value={formData.image3} onChange={handleChange} />
      </label>
      <br />
      <label>
        Size:
        <input type="text" name="size" value={formData.size} onChange={handleChange} />
      </label>
      <br />
      <label>
        Description:
        <input type="text" name="description" value={formData.description} onChange={handleChange} />
      </label>
      {/* Add other input fields similarly */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
