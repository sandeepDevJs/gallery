import React from "react"

export default function Searchbox(props){
    
    return (
            <div className="form-group">
                <input className="form-control" type="text" placeholder="Enter Text To Search" onChange={(e) => props.searchfilter(e)} />
            </div>    
    )
    
}