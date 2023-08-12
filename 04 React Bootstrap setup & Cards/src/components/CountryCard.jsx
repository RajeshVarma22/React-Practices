import React from "react";
import image1 from '../assets/Images/bird eating.jpg'
import image2 from '../assets/Images/Birds.jpg'
import image3 from '../assets/Images/Fly.jpg'
import image4 from '../assets/Images/Glacier.jpg'

let Countrycard = () => {
    return (
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-3">
                        <div className="card shadow-lg">
                            <img src={image1} alt="" />
                            <div className="card-body">
                                <h3>Beautiful Bird</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, ipsum nisi. Ea sed ipsum amet ducimus, nostrum culpa ex dolorem tenetur quisquam, dignissimos ipsam deleniti distinctio voluptatum minus adipisci excepturi.</p>
                                <button className="btn btn-primary btn-sm">Read more</button>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="col-md-3">
                        <div className="card shadow-lg">
                            <img src={image2} alt="" />
                            <div className="card-body">
                                <h3>Beautiful Sparrows</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, ipsum nisi. Ea sed ipsum amet ducimus, nostrum culpa ex dolorem tenetur quisquam, dignissimos ipsam deleniti distinctio voluptatum minus adipisci excepturi.</p>
                                <button className="btn btn-primary btn-sm">Read more</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card shadow-lg">
                            <img src={image3} alt="" />
                            <div className="card-body">
                                <h3>Beautiful Fly</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, ipsum nisi. Ea sed ipsum amet ducimus, nostrum culpa ex dolorem tenetur quisquam, dignissimos ipsam deleniti distinctio voluptatum minus adipisci excepturi.</p>
                                <button className="btn btn-primary btn-sm">Read more</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card shadow-lg">
                            <img src={image4} alt="" />
                            <div className="card-body">
                                <h3>Glacier</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, ipsum nisi. Ea sed ipsum amet ducimus, nostrum culpa ex dolorem tenetur quisquam, dignissimos ipsam deleniti distinctio voluptatum minus adipisci excepturi.</p>
                                <button className="btn btn-primary btn-sm">Read more</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )

}

export default Countrycard;