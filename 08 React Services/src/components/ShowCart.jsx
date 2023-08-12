import React, { useState } from "react";
import ProductServices from "../services/ProductServices";

let ShowCart = () => {

    let [state , setState] = useState({
        products : ProductServices.getAllProducts()
    });

    let {products} = state;

    
    return(
        <React.Fragment>
            {/* <pre>{JSON.stringify(state.products)}</pre> */}
            <div className="container mt-4">
                <div className="row">
                    {
                        products.map( (product) => {
                            return(
                                <div className="col-4">
                                    <div className="card m-2">
                                        <div className="card-body ">
                                            <img src={product.image} alt="" className="img-fluid text-center    "/>
                                            <div className="p-2">
                                                <h3>{product.name}</h3>
                                                <h3>{product.sno}</h3>
                                                <h3>{product.price}</h3>
                                                <button className="btn btn-success" >Buy</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </React.Fragment>
    )
}


export default ShowCart;