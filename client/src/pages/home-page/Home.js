import React, { useEffect, useState } from 'react';
import { Table, Tag, Space } from 'antd';
import { Link } from 'react-router-dom';
import axiosInstance from "../../config/axios-instance";
import './Home.scss';

const Home = (props) => {
    const [prods, setProds] = useState();
    useEffect(() => {
        const data = axiosInstance({
            method: "get",
            url: "/products"
        }).then(res => {
            console.log(res.data);
            res.data.map(p => p.key = p._id);
            setProds(res.data);
        })
        console.log(data);
    }, []);


    const columns = [
        {
            title: 'productName',
            dataIndex: 'productName',
            key: 'productName',
            render: productName => <a>{productName}</a>,
        },
        {
            title: 'category',
            dataIndex: 'category',
            key: 'category',
            render: category => <a>{category}</a>,
        },
        {
            title: 'imageUrl',
            dataIndex: 'imageUrl',
            key: 'imageUrl',
            render: imageUrl => <img src={imageUrl} alt='' className="image" />,

        },
        {
            title: 'reviews',
            key: 'reviews',
            dataIndex: 'reviews',
            render: (imageUrl, record) => <Link to={`/product/${record._id}`}>View Product</Link>,
        }
    ];


    const handlClick = async () => {
        const data = await axiosInstance({
            method: "post",
            url: "/products"
        });
    }
    const handlClickprod = async (record) => {
        console.log(record);
    }
    // const data = prods.map(p => p.key = p._id);
    return (
        <div>
            <button onClick={handlClick}>Load Data</button>
            {prods && <Table pagination={{ pageSize: 20 }} columns={columns} dataSource={prods} onRow={(record, rowIndex) => {
                return {
                    onClick: event => { console.log(event.target) },
                };
            }} />}
        </div>
    )
}
export default Home;
