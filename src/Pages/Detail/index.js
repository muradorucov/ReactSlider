import axios from 'axios';

import { Space, Spin } from 'antd';

import { useState, useEffect } from 'react';

import { useNavigate, useParams } from "react-router-dom";

import "./style.css";

const Detail = () => {

    const [detail, setdetail] = useState({});
    const [status, setStatus] = useState(true);
    let { postId } = useParams();
    const navigate = useNavigate();


    useEffect(() => {

        axios.get('https://northwind.vercel.app/api/suppliers/' + postId)
            .then(res => {
                setdetail(res.data);
                setStatus(false)
            })


    }, [postId, navigate])


    return (
        <div className='container detailHG'>
           {status 
           ? 
          <div className='loader'> 
            <Space size="middle">
                <Spin size="small" />
                <Spin />
                <Spin size="large" />
            </Space>
        </div>
            :
           <>
            <h1>{detail?.id}. {detail?.companyName}</h1>
            <div className='supplierDetail '>
                <div className='row'>
                    <div className='detail-item'>Contact Title:<span>{detail?.contactTitle}</span>
                    </div>
                    <div className='detail-item'>Contact Name:<span>{detail?.contactName}</span>
                    </div>
                    <div className='detail-item'>Country:<span>{detail?.address?.country}</span>
                    </div>
                    <div className='detail-item'>City:<span>{detail?.address?.city}</span>
                    </div>
                </div>
                <div className='row'>
                    <div className='detail-item'>Region:<span>{detail?.address?.region}</span>
                    </div>
                    <div className='detail-item'>Street:<span>{detail?.address?.street}</span>
                    </div>
                    <div className='detail-item'>Phone:<span>{detail?.address?.phone}</span>
                    </div>
                    <div className='detail-item'>Postal Code:<span>{detail?.address?.postalCode}</span>
                    </div>
                </div>
            </div>
            </>
           }
        </div >
    );
}

export default Detail;
