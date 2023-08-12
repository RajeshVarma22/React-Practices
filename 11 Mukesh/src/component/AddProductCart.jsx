import React, { useState } from "react";
// import image1 from '../assets/Images/Mobile.jpg'



let AddProductCart = () => {
    let [state , setState] = useState({
        product : {
            sno : 'AO22MB',
            image : 'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=800',
            name : "Laptop",
            price : 80000,
            qty : 2
            
        }
    });
    let incr = () => {
        setState( (state) => ({
            // product : {
            //     sno : 'AO22MB',
            //     image : 'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=800',
            //     name : "Laptop",
            //     price : 80000,
            //     qty : state.product.qty + 1
            // }

            // You can use spread operator to copy the same date

            product : {
                ...state.product,
                qty : state.product.qty + 1
            }
        }));
    };

    let decr = () => {
        setState( (state) => ({
            product : {
                ...state.product,
                qty : state.product.qty - 1 > 0 ? state.product.qty -1 : 1
            }
        }))
    }
    let {product} = state;
    return(
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <p className="display-1">Add Product to Cart</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus soluta expedita molestiae repellat, neque ducimus omnis, deleniti molestias accusamus necessitatibus tenetur aperiam a atque tempora!</p>
                    </div>
                </div>
            </div>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <table className="table table-striped text-center table-hover">
                            <thead className="bg-success text-white">
                                <tr>
                                    <th>SNO</th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Qty</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{product.sno}</td>
                                    <td><img src={product.image} alt="" width={70} height={50}/></td>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td>
                                        <i onClick={decr} className="fa fa-minus-circle mx-2" ></i>
                                            {product.qty}
                                        <i onClick={incr} className="fa fa-plus-square mx-2"></i>    
                                        </td>
                                    <td>{product.price * product.qty}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default AddProductCart;