import React from 'react';

const Cards = ({ titulo, valor, legenda, largura, altura }) => {
    return (
        <>
            <div className='cards' style={{height:altura}}>
                <div className='card-title'>
                    <h3>{titulo}</h3>
                </div>
                <div className='card-content' style={{ width: largura }}>
                    <h1 className='valor'>{valor}</h1>
                    <p className='legenda'>{legenda}</p>
                </div>
            </div>
        </>
    );
};
export default Cards;