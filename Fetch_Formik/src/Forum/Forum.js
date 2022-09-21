import axios from 'axios'
import React, { useEffect, useState } from 'react'

import { useFormik } from 'formik';

import "./Forum.css"
const Form = () => {

  const [category, setCategory] = useState([]);

  useEffect(() => {

    axios.get('https://northwind.vercel.app/api/categories')
      .then(res => {
        setCategory(res.data);
      })

  }, [])


  const formik = useFormik({
    initialValues: {
      Categories: '',
      productName: '',
      unitPrice: '',
      unitsInStock: '',
      discontinued: '',
      quantityPerUnit: ''
    },
    onSubmit: values => {
      // alert(JSON.stringify(values, null, 2));
      axios.post('https://northwind.vercel.app/api/products', values)
        .then(res => {
          alert("send");
        })
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>

      <div className='Item'>
        <label htmlFor="categoryId">Category Id</label>
        <select
          id="Categories"
          name="Categories"
          onChange={formik.handleChange}
          value={formik.values.name}
          className="input-item"
        >

          <option >Select Category</option>
          {category.map(item =>
            <option key={item.id} value={item.name}>{item.name}</option>
          )}
        </select>
      </div>

      <div className='Item'>
        <label htmlFor="productName">Product Name</label>
        <input
          id="name"
          name="productName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
          className="input-item"
        />
      </div>

      <div className='Item'>
        <label htmlFor="unitPrice">unitPrice</label>
        <input
          id="unitPrice"
          name="unitPrice"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.unitPrice}
          className="input-item"
        />
      </div>
      <div className='Item'>
        <label htmlFor="unitsInStock">unitsInStock</label>
        <input
          id="unitsInStock"
          name="unitsInStock"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.unitsInStock}
          className="input-item"
        />
      </div>
      <div className='Item'>
        <label htmlFor="discontinued">discontinued</label>
        <input
          id="discontinued"
          name="discontinued"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.discontinued}
          className="input-item"
        />
      </div>
      <div className='Item'>
        <label htmlFor="quantityPerUnit">quantityPerUnit</label>
        <input
          id="quantityPerUnit"
          name="quantityPerUnit"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.quantityPerUnit}
          className="input-item"
        />
      </div>


      <div className='Item'>
        <button type="submit">Submit</button>
      </div>
    </form >
  );
};

export default Form