import React from 'react';

const Dado = ({altura, cor}) => {
  return(
    <>
    <div style={{height:altura, background:cor}} className='dado'></div>
    </>
  );
  };
export default Dado;