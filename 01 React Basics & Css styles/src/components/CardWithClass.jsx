import React from "react";


class CardWithClass extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="card">
                    <h2>Component by usig Class</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, natus at! Molestias illum vitae qui ipsum iusto eum quibusdam dignissimos facilis doloribus eius fuga, nobis perferendis, libero cupiditate quos odit?</p>
                </div>
            </React.Fragment>
        )
    }
}

export default CardWithClass;