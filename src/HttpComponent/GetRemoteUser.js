import React from 'react';
import ReactDOM from 'react-dom';

class GetRemoteUser extends React.Component{

    render(){
        return(
            <div>
                This will get remote data iteratively <br></br>
                {this.props.id}, {this.props.name}, {this.props.username}, {this.props.website}
            </div>
        );
    }


}

export default GetRemoteUser;