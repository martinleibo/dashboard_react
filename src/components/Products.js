import React, {Component} from 'react';
import ProductList from './ProductList';

class Products extends Component {

	constructor(){
        super()
        this.state = {
            listaProductos : []
        }
    }

    componentDidMount(){

        fetch('/product/APIproductos')
        .then(respuesta =>{
        return respuesta.json()
        })
        .then(productos =>{
        //console.log(genres)
        this.setState({listaProductos: productos.products})})
        .catch(error => console.log(error))
        }

render(){

    return(
        <React.Fragment>
				    {/*<!-- PRODUCTS LIST -->*/}
					<h1 className="h3 mb-2 text-gray-800">Listado de productos</h1>
					
					{/*<!-- DataTales Example -->*/}
					<div className="card shadow mb-4">
						<div className="card-body">
							<div className="table-responsive">
								<table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
									<thead>
										<tr>
                                            <th>Id</th>
                                            <th>Nombre</th>
                                            <th>Precio</th>
                                            <th>Descripcion</th>
                                            <th>Pais</th>
                                            <th>Cuerpo</th>
                                            <th>Intensidad</th>
										</tr>
									</thead>
									<tbody>
									{
                                    this.state.listaProductos.map((producto,index)=>{
                                        return  <ProductList  {...producto}  key={index} />
                                    })
                                	}
									</tbody>
								</table>
							</div>
						</div>
					</div>            
        </React.Fragment>
    )
}
}
export default Products;