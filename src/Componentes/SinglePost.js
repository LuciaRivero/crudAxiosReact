import React, { Component } from 'react';

class SinglePost extends Component {
    mostrarPost = (props) => {
        if(!props.post) return null;

        const {title,body,userId}  = this.props.post;

        return(
            <React.Fragment>
                <h2>{title}</h2>
                <p>Autor: {userId}</p>
                {body}
            </React.Fragment>
        )
    }
    render() {

        
        return ( 
            <div className="col-12 col-md-8">
                {this.mostrarPost(this.props)}
            </div>
        );
    }
}
 
export default SinglePost;