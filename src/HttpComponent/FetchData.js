import React from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";

import GetRemoteUser from "./GetRemoteUser";



class FetchData extends React.Component{

    constructor(props){
        super(props);
            this.state = {
                users:[]
            };

    
                
    }

    callRemoteData(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response)=>(
            //console.log(response.data);
            this.setState({users: response.data})
            //console.log(this.state.users);
        ));
    }
   

    componentDidMount(){
        this.callRemoteData();
    }

    render(){
        
        const allUsers = this.state.users.map((user) =>(
            <GetRemoteUser
                key={'user-'+user.id}
                id={user.id}
                name={user.name}
                username={user.username}
                website={user.website}
            ></GetRemoteUser>
        ));
        console.log(allUsers)
      
        return(
            <div>
                {allUsers}
            </div>
        );
    }


}

export default FetchData;