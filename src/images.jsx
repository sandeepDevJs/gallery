import React from "react"

export default function Images({data}) {
    return(
        <div className="col-md-4">
            <div className="card text-left">
                <img className="card-img-top" src={data.userImageURL} alt={data.tags} />
                <div className="card-body">
                    <h4 className="card-title">User : {data.user}</h4>
                    <p className="card-text">Like: {data.likes}</p>
                </div>
            </div>            
        </div>
    )
}