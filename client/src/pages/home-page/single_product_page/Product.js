import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axiosInstance from "../../../config/axios-instance";

const Product = () => {
    const prodId = useParams().id;
    const [prod, setProd] = useState();
    useEffect(() => {
        const data = axiosInstance({
            method: "get",
            url: "/product/" + prodId
        }).then(res => {
            setProd(res.data);
        })
        console.log(data);
    }, []);
    return (
        <div className="product">
            {prod ?
                <div className="">
                    <h1>{prod.productName}</h1>
                    <p>{prod.category}</p>
                    <img src={prod.imageUrl} alt={prod.productName} />

                </div>

                :
                <div>
                    <p>no Records</p>
                </div>
            }
        </div>
    );
};



export default Product;
