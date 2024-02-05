import React from "react";

const Progress = ({titulo, largura, altura}) =>{
    return(
        <>
        <div className='cards' style={{height:altura}}>
                <div className='card-title'>
                    <h3>{titulo}</h3>
                </div>
                <div style={{ width: largura, height:300}}>
                   <div className="progress">
                    <div className="barra-circular">
                        <div className="centro">
                            <h1>100%</h1>
                        </div>
                    </div>
                   </div>
                </div>
            </div>
        </>
    );
};

export default Progress;