import React from 'react';

function PaisesList(props){
    return(
        <React.Fragment>
            <div className="col-md-4 mb-4">
               <p>{props.nombre}: {props.producto.length} productos</p>
            </div>
        </React.Fragment>
    )
}
export default PaisesList;