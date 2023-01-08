import React, {Component} from 'react';
import imagenFondo from '../assets/images/mandalorian.jpg';
import GenresInDb from './GenresInDb';
import ContentRowCards from './ContentRowCards';






class ContentRowTop extends Component{

    constructor(){
        super()
        this.state = {
            ultimoUsuario : []
        }
    }

	componentDidMount(){
    
        //busca el ultimo usuario
        fetch('/user/APIusuarios')
        .then(respuesta =>{
        return respuesta.json()
        })
        .then(usuarios =>{
        //console.log(genres)
        this.setState({ultimoUsuario: usuarios.users[usuarios.users.length - 1]})})
        .catch(error => console.log(error))
	}

	render() {

    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">Tostao Cafe - Dashboard del sitio web</h1>
					</div>
				
					{/*<!-- Content Row Movies-->*/}
					<ContentRowCards />
					{/*<!-- End movies in Data Base -->*/}
					
	
					
					<div className="row">
						
						<div className="col-lg-6 mb-4">
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h5 className="m-0 font-weight-bold text-gray-800">Ultimo usuario registrado</h5>
								</div>
								<div className="card-body">
									
									<p>Id: {this.state.ultimoUsuario.id}</p>
									<p>Nombre: {this.state.ultimoUsuario.nombre}</p>
									<p>Email: {this.state.ultimoUsuario.email}</p>
									
									
								</div>
							</div>
						</div>
						

						
						

							
					</div>
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
}
export default ContentRowTop;