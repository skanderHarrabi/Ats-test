import React from 'react';
import axios from 'axios';
import axiosInstance from "../../config/axios-instance";
import './Home.scss';

const Home = (props) => {
    const handlClick = async () => {
        const data = await axios(
            {
                method: 'get',
                dataType: 'jsonp',
                url: 'http://test.ats-digital.com:3000/products?size=100',
            });
        console.log(data);
    }
    return (
        <div>
            <button onClick={handlClick}>Load Data</button>
        </div>
    )
}
export default Home;
