import React from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";


class FetchData extends React.Component{

    constructor(props){
        super(props);
            this.state = {
                users:[]
            };
        }


    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(function(res){
                console.log(res.data);
                //this.setState({users: res.data});
            });
    }

    render(){
        return(
            <div>
                Calling remote data using axios
            </div>
        );
    }


}

export default FetchData;