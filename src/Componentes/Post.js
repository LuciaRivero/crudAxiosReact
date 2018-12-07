import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Post extends Component {
    state = {  }
    render() { 
        const {id,title} =this.props.info;
        return ( 
            <tr>
                <td>{id}</td>
                <td>{title}</td>
                <td>
                    <Link to={`/post/${id}`} className="btn btn-primary">Ver más</Link>
                    <button onClick={() =>this.props.borrarPost(id)} className="btn btn-danger">Borrar</button>
                </td>
            </tr>
         );
    }
}
 
export default Post;