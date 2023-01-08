import React, { Component } from 'react';
import SmallCard from './SmallCard';


let productInDataBase = {
    color:   "primary",
    titulo: "Usuarios en la Base de datos",
    valor: 0,
    
}

let amount ={
    color:   "success",
    titulo: "Cantidad de Productos",
    valor: 0,
    
}

let user = {
    color:   "warning",
    titulo: "Cantidad de Paises de origen de productos",
    valor: 0,
    
}

let cardProps = [productInDataBase,amount,user];



class ContentRowCards extends Component{

    constructor(){
        super()
        this.state = {
            cantidadUsuarios : "",
            cantidadProductos: "",
            cantiadPaises: ""
        }
    }
    
    componentDidMount(){
    
        //busca la cantidad de usuarios
        fetch('/user/APIusuarios')
        .then(respuesta =>{
        return respuesta.json()
        })
        .then(usuarios =>{
        //console.log(genres)
        this.setState({cantidadUsuarios: usuarios.count})})
        .catch(error => console.log(error))

        //busca la cantidad de productos
        fetch('/product/APIproductos')
        .then(respuesta =>{
        return respuesta.json()
        })
        .then(productos =>{
        //console.log(genres)
        this.setState({cantidadProductos: productos.count})})
        .catch(error => console.log(error))


        //busca la cantidad de paises
        fetch('/product/APIpaises')
        .then(respuesta =>{
        return respuesta.json()
        })
        .then(paises =>{
        //console.log(genres)
        this.setState({cantidadPaises: paises.count})})
        .catch(error => console.log(error))


        }

    


    render() {


    return (
        <React.Fragment>
        {/*<!-- Content Row -->*/}
        <div className="row">

           

            {
                cardProps.map((producto,index)=>{
                    {cardProps[0].valor = this.state.cantidadUsuarios}
                    {cardProps[1].valor = this.state.cantidadProductos}
                    {cardProps[2].valor = this.state.cantidadPaises}
                    return <SmallCard  {...producto}  key= {index}/>
                })
            }      
        </div>
        </React.Fragment>
    )
}
}
export default ContentRowCards;