import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import Header from './Header';
import Navegacion from './Navegacion';
import Posts from './Posts';
import SinglePost from './SinglePost';
import Formulario from './Formulario';

class Router extends Component {
    state = {
        posts: []
    }

    componentDidMount () {
        this.obtenerPost();
    }

    obtenerPost = () => {
        axios.get (`https://jsonplaceholder.typicode.com/posts`)
        .then(res => {
            this.setState({
                posts: res.data
            })
        })
    }

    borrarPost = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => {
            if(res.status === 200) {
                const posts = [...this.state.posts];
                let resultado = posts.filter(post => (
                    post.id !== id
                ));
                this.setState({
                    posts: resultado
                })
            }
        })
    }
    crearPost = (post) => {
        console.log('en metodo crearPost')
        axios.post(`https://jsonplaceholder.typicode.com/posts`, {post})
        .then(res => {
            if(res.status === 201) {
                Swal(
                    'Post creado!',
                    'El post se ha creado correctamente!',
                    'success'
                  )
                let postId = {id: res.data.id};
                //nuevo post une el data con el postId
                const nuevoPost = Object.assign( {}, res.data.post, postId);
                this.setState(prevState => ({
                    posts: [...prevState.posts, nuevoPost ]
                }))
                console.log(nuevoPost);
            }
        })
        .catch((err) => {
              console.log('hubo un error: ', err);
        })
    }
    render() { 
        return ( 
            <BrowserRouter>
                <div className="container">
                    <div className="row justify-content-center">
                        <Header/>
                        <Navegacion/>
                        <Switch>
                            <Route exact path='/' render={() =>{
                                return(
                                    <Posts
                                        posts={this.state.posts} 
                                        borrarPost={this.borrarPost}
                                    />
                                )
                            }}/>
                            <Route exact path="/post/:postId" render={(props) =>{
                                let idPost = props.location.pathname.replace('/post/','');
                                const posts = this.state.posts;
                                let filtro;
                                filtro = posts.filter(post => (
                                    post.id === Number(idPost)
                                ))


                                return (
                                    <SinglePost
                                        post={filtro[0]}
                                    />
                                )
                            }}/>
                            <Route exact path="/crear" render= { () => {
                                return (
                                    <Formulario 
                                        crearPost={this.crearPost} />
                                )
                            }}
                            />
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
         );
    }
}
 
export default Router;

//si quiero que sea un componente uso component={} y si quiero usar props utilizo render.