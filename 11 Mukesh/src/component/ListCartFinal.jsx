import React, { useEffect, useState } from "react";
import ProductService from "../services/ProductService";
import ListCartTableFinal from "./ListCartTableFinal";

const ListCartFinal = () => {
    let [state , setState] = useState({
        products : ProductService.getProducts()
    })

    let {products} = state;
    const [btn,setbtn] = useState(false)
    const [localProducts,setLocaProducts] = useState([])

    useEffect(()=>{
        setLocaProducts(JSON.parse(localStorage.getItem("products")))
    },[localStorage.getItem("products")])

    return(
        <React.Fragment>
            <div className="container">
                {/* <button onClick={e => {
                    setbtn(!btn)
                }}>click</button> */}
                <div className="row">
                    {
                        products.map( (product) => (
                            <ListCartTableFinal product={product} />
                            
                            
                        ))
                    }
                </div>
            </div>
            <div className="container mt-3">
                {
                    localProducts.map(l =>( 
                        <p>{l.sno}</p>
                    ))
                }
            </div>
        </React.Fragment>
    )
}


export default ListCartFinal;