import React from "react"
import Image from "./images"
import "bootstrap/dist/css/bootstrap.min.css"
import Container from "./Container"
import Searchbox from  "./searchbox"
import Categories from "./category"

export class App extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            allData: [],
            gotData: []
        }
    }

    getData = (category="flower") =>{

        fetch(`https://pixabay.com/api/?key=19402242-1dcafe4236724ab76b8602529&q=yellow+${category}&image_type=photo&pretty=true`)
             .then((response) => response.json())
             .then( (data) => this.setState({allData:data.hits, gotData:data.hits }) )

    }

    WhenChanged = (e) =>{
        this.getData(e.target.value);
    }

    searchData = (e) =>{
        this.setState((state, props) => ({
            allData : state.gotData.filter((data) => data.user.toLowerCase().includes(e.target.value))
        }))
    }

    componentDidMount(){
        this.getData();
    }

    render(){
        return(
                <Container>
                    <Searchbox searchfilter={this.searchData} />
                    <div className="row">
                        <div className="col-md-10">
                            <div className="row">
                                {this.state.allData.map((data) => <Image key={data.id} data={data} />)}
                            </div>
                        </div>
                        <div className="col-md-2">
                            <Categories WhenChanged={this.WhenChanged}/>
                        </div>
                    </div>
                </Container>
        )
    }

}