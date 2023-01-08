import React from "react";

function ProductList(props){

    return(
        <React.Fragment>

                    
					    <tr>
							<td>{props.id}</td>
							<td>{props.nombre}</td>
							<td>{props.precio}</td>
                            <td>{props.descripcion}</td>
							<td>{props.pais.nombre}</td>
							<td>{props.cuerpo.nombre}</td>
							<td>{props.intensidad.nombre}</td>
					    </tr>
	
					


        </React.Fragment>
    )


}

export default ProductList