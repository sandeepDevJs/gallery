import React from "react"

export default function Categories({WhenChanged}) {
    return (
        <React.Fragment>
            <h1 className="h1"> Categories </h1>
            <div className=" custom-radio">
                <input type="radio" value="flower"  id="category" name="category" onChange={(e)=> WhenChanged(e)}/>
                <label className="-label" htmlFor="category">Flower</label>
            </div>  

            <div className=" custom-radio">
                <input type="radio" value="car"  id="category" name="category" onChange={(e)=> WhenChanged(e)} />
                <label className="-label" htmlFor="category1">Car</label>
            </div>

            <div className=" custom-radio">
                <input type="radio" value="truck"  id="category" name="category" onChange={(e)=> WhenChanged(e)} />
                <label className="-label" htmlFor="category2">Truck</label>
            </div>
        </React.Fragment>
    )
}