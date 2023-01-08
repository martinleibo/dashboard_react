import React, {Component} from 'react';
import imagenFondo from '../assets/images/mandalorian.jpg';
import GenresInDb from './GenresInDb';
import ContentRowMovies from './ContentRowCards';






class ContentRowTopProduct extends Component{

    constructor(){
        super()
        this.state = {
            ultimoProducto : []
        }
    }

	componentDidMount(){
    
        //busca el ultimo producto
        fetch('/product/APIproductos')
        .then(respuesta =>{
        return respuesta.json()
        })
        .then(productos =>{
        //console.log(genres)
        this.setState({ultimoProducto: productos.products[productos.products.length - 1]})})
        .catch(error => console.log(error))
	}

	render() {

    return(
        <React.Fragment>
			
					
	
				<div className="container-fluid">	
				
					<div className="row">	
						<div className="col-lg-6 mb-4">		
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h5 className="m-0 font-weight-bold text-gray-800">Ultimo producto registrado</h5>
								</div>
								<div className="card-body">
									
									<p>Id: {this.state.ultimoProducto.id}</p>
									<p>Nombre: {this.state.ultimoProducto.nombre}</p>
									<p>Precio: {this.state.ultimoProducto.precio}</p>
									<p>Descripcion: {this.state.ultimoProducto.descripcion}</p>
									
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
export default ContentRowTopProduct