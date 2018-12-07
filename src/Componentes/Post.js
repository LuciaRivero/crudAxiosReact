import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Swal from 'sweetalert2';


class Post extends Component {
    
    confirmarEliminacion = () => {
        const {id} = this.props.info;
        Swal({
            title: 'Estas Seguro',
            text: "Esto no se puedo revertir",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Borrar',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            if (result.value) {
                this.props.borrarPost(id)
              Swal(
                'Eliminado',
                'El post fue eliminado',
                'success'
              )
            }
          })

        //this.props.borrarPost(id)
    }
    render() { 
        const {id,title} =this.props.info;
        return ( 
            <tr>
                <td>{id}</td>
                <td>{title}</td>
                <td>
                    <Link to={`/post/${id}`} className="btn btn-primary">Ver más</Link>
                    <button onClick={this.confirmarEliminacion} className="btn btn-danger">Borrar</button>
                </td>
            </tr>
         );
    }
}
 
export default Post;

//() =>this.props.borrarPost(id)