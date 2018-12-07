import React, { Component } from 'react';

class Formulario extends Component {

    //Crear refs
    tituloRef = React.createRef();
    entradaRef = React.createRef();

    crearPost = (e) => {
        e.preventDefault();

        const post = {
            //Leer refs
            title: this.tituloRef.current.value,
            body: this.entradaRef.current.value,
            userId: 1
        }
        this.props.crearPost(post);
        console.log(post);
    }
    render() { 
        return ( 
            <form onSubmit={this.crearPost} className="col-8">
                <legend className="text-center">
                    Crear Nuevo Post
                </legend>
                <div className="form-group">
                    <label >Titulo del Post</label>
                    <input type="text" ref={this.tituloRef}className="form-control" placeholder="Titulo de Post"/>
                </div>
                <div className="form-group">
                    <label >Contenido: </label>
                    <textarea ref={this.entradaRef} className="form-control" placeholder="Contenido..."></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                Crear
                </button>
            </form>
         );
    }
}
 
export default Formulario;