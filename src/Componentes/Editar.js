import React, { Component } from 'react';

class Editar extends Component {

    //Crear refs
    tituloRef = React.createRef();
    entradaRef = React.createRef();

    editarPost = (e) => {
        e.preventDefault();

        const post = {
            //Leer refs
            title: this.tituloRef.current.value,
            body: this.entradaRef.current.value,
            userId: 1,
            id: this.props.post.id
        }
        this.props.crearPost(post);
    }

    cargarFormulario = () => {

        if(!this.props.post) return null;

        const {title, body} = this.props.post;

        <form onSubmit={this.editarPost} className="col-8">
                <legend className="text-center">
                    Editar Post
                </legend>
                <div className="form-group">
                    <label >Titulo del Post</label>
                    <input type="text" ref={this.tituloRef}className="form-control" defaultValue={title}/>
                </div>
                <div className="form-group">
                    <label >Contenido: </label>
                    <textarea ref={this.entradaRef} className="form-control" defaultValue={body}></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                Guardar Cambios
                </button>
            </form>
    }
    
    render() { 
        return ( 
            <React.Fragment>
                {this.cargarFormulario()}
            </React.Fragment>
         );
    }
}
 
export default Editar;