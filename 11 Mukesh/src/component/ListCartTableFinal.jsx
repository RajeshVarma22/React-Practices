import React, { useState } from "react";

let ListCartTableFinal = ({product}) => {
let selectedProduct = (product) => {
    if(!localStorage.getItem("products")){
        localStorage.setItem("products" , JSON.stringify([product]))
    }
    else{
        const data = [...JSON.parse(localStorage.getItem("products"))]
        data.push(product)
        // console.log(data)
        localStorage.setItem("products" , JSON.stringify(data))
    }
}
    return (
        <>
            <div className="col-4 my-3" key={product.sno}>
                <div className="card text-center shadow-lg">
                    <div className="card-header bg-primary text-white">
                        <h1>{product.name}</h1>
                    </div>
                    <div className="card-body">
                        <img src={product.image} alt="" className="w-50" />
                        <h4 className="mt-2"><b className="text-success">Price:</b> ₹{product.price}</h4>
                        <button className="btn btn-success" onClick={() => { selectedProduct(product) }}>Buy</button>
                    </div>
                </div>
            </div>

            
        </>
    )
}


export default ListCartTableFinal;