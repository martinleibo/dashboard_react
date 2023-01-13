import React, {Component} from 'react';
import imagenFondo from '../assets/images/mandalorian.jpg';
import ContentRowMovies from './ContentRowCards';
import PaisesList from './PaisesList';






class ContentRowTopCategory extends Component{

    constructor(){
        super()
        this.state = {
            Paises : []
        }
    }

	componentDidMount(){
    
        //busca el ultimo producto
        fetch('/product/APIpaises')
        .then(respuesta =>{
        return respuesta.json()
        })
        .then(paises =>{
        //console.log(genres)
        this.setState({Paises: paises.paises})})
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
									<h5 className="m-0 font-weight-bold text-gray-800">Categorias (Paises)</h5>
								</div>
								<div className="card-body">
									
								{
                					this.state.Paises.map((pais,index)=>{
                    				
                   							 return < PaisesList {...pais}  key= {index}/>
               							 })
          							  }      
									
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
export default ContentRowTopCategory