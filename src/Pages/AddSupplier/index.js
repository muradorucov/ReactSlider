import axios from 'axios';

import React, { useState } from 'react';

import "./style.css"
const AddSupplier = () => {
    const [data, setData] = useState(
        {
            companyName:'',
            contactName: '',
            contactTitle:'',
            address: {
                country:'',
                city:'',
                region:'',
                street:'',
                phone:'',
                postalCode:'',
            }
        }
    )


   const supplierAdd = async (data) => {
        try {
            await axios.post('https://northwind.vercel.app/api/suppliers', data)
        } catch (error) {
            throw error;
        }
    }
    
    const sumbitData = (e) =>{
        e.preventDefault();
        if (data.companyName
            && data.contactName
            && data.contactTitle
            && data.address.country
            && data.address.city
            && data.address.region
            && data.address.street
            && data.address.phone
            && data.address.postalCode) {
            supplierAdd(data);
            window.alert('Successful 🥳🥳🥳🥳🥳')
        } else {
            window.alert('Was unsuccessful !!!!')
        }
        supplierAdd(data);
    }

    return (
        <div className='container supplier-add'>
            <h2>Suplier Add</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="companyName">Company Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="companyName"
                        placeholder="Enter Company Name"
                        value={data?.companyName}
                        onChange={(e) => setData({...data,companyName: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="contactName">Contact Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="contactName"
                        placeholder="Enter Contact Name..."
                        value={data?.contactName}
                        onChange={(e) => setData({...data, contactName: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="contactTitle">Contact Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="contactTitle"
                        placeholder="Enter Contact Title....."
                        value={data?.contactTitle}
                        onChange={(e) => setData({ ...data, contactTitle: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="country">Country</label>
                    <input
                        type="text"
                        className="form-control"
                        id="country"
                        placeholder="Enter Country....."
                        value={data?.address?.country}
                        onChange={(e) => setData({ ...data, address:{...data.address, country: e.target.value} })}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input
                        type="text"
                        className="form-control"
                        id="city"
                        placeholder="Enter City....."
                        value={data?.address?.city}
                        onChange={(e) => setData({...data, address: { ...data.address, city: e.target.value }})}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="region">Region</label>
                    <input
                        type="text"
                        className="form-control"
                        id="region"
                        placeholder="Enter Region....."
                        value={data?.address?.region}
                        onChange={(e) => setData({ ...data, address: {...data.address, region: e.target.value }})}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="street">Street</label>
                    <input
                        type="text"
                        className="form-control"
                        id="street"
                        placeholder="Enter street....."
                        value={data?.address?.street}
                        onChange={(e) => setData({ ...data, address: {...data.address, street: e.target.value }})}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                        type="text"
                        className="form-control"
                        id="phone"
                        placeholder="Enter Phone....."
                        value={data?.address?.phone}
                        onChange={(e) => setData({  ...data, address: { ...data.address, phone: e.target.value } })}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="postalCode">Postal Code</label>
                    <input
                        type="text"
                        className="form-control"
                        id="postalCode"
                        placeholder="Enter Postal Code....."
                        value={data?.address?.postalCode}
                        onChange={(e) => setData({ ...data, address: { ...data.address, postalCode: e.target.value }})}
                    />
                </div>
                <button onClick={sumbitData} type="submit" className="btn btn-primary mb-5 col-12 pt-2 pb-2">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default AddSupplier;
