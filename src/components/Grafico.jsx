import React from 'react';
import Dado from './Dado';

const Grafico = () => {
    return (
        <>
            <div className='grafico'>
                <div>
                    <div className='grafic'>
                        <Dado altura={50} cor='plum' />
                        <Dado altura={100} cor='pink' />
                        <Dado altura={250} cor='cornflowerblue' />
                        <Dado altura={20} cor='cadetblue' />
                        <Dado altura={150} cor='blueviolet' />
                        <Dado altura={60} cor='seagreen' />
                        <Dado altura={210} cor='teal' />
                        <Dado altura={180} cor='salmon' />
                        <Dado altura={80} cor='palevioletred' />
                        <Dado altura={230} cor='orchid' />
                    </div>
                    <div className='grafic-dado'>
                        <h3 className='h3-grafic'>A</h3>
                        <h3 className='h3-grafic'>B</h3>
                        <h3 className='h3-grafic'>C</h3>
                        <h3 className='h3-grafic'>D</h3>
                        <h3 className='h3-grafic'>E</h3>
                        <h3 className='h3-grafic'>F</h3>
                        <h3 className='h3-grafic'>G</h3>
                        <h3 className='h3-grafic'>H</h3>
                        <h3 className='h3-grafic'>I</h3>
                        <h3 className='h3-grafic'>J</h3>
                    </div>
                </div>
                <div className='dados'>
                    <h1>Dados</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur .</p>
                    <div style={{ display: 'flex', marginTop: 5, justifyContent: 'space-between' }}>
                        <div style={{display:'flex'}}>
                            <div style={{marginRight:10 }}>
                                <p style={{ width: 20, height: 20, background: 'plum' }}></p>
                                <p style={{ width: 20, height: 20, background: 'pink' }}></p>
                                <p style={{ width: 20, height: 20, background: 'cornflowerblue' }}></p>
                                <p style={{ width: 20, height: 20, background: 'cadetblue' }}></p>
                                <p style={{ width: 20, height: 20, background: 'blueviolet' }}></p>
                                <p style={{ width: 20, height: 20, background: 'seagreen' }}></p>
                                <p style={{ width: 20, height: 20, background: 'teal' }}></p>
                                <p style={{ width: 20, height: 20, background: 'salmon' }}></p>
                                <p style={{ width: 20, height: 20, background: 'palevioletred' }}></p>
                                <p style={{ width: 20, height: 20, background: 'orchid' }}></p>
                            </div>
                            <div>
                                <p className='dados-data'>elit</p>
                                <p className='dados-data'>amet</p>
                                <p className='dados-data'>dolor</p>
                                <p className='dados-data'>elit</p>
                                <p className='dados-data'>amet</p>
                                <p className='dados-data'>dolor</p>
                                <p className='dados-data'>ipsum</p>
                                <p className='dados-data'>ipsum</p>
                                <p className='dados-data'>Lorem</p>
                                <p className='dados-data'>mollit</p>
                            </div>
                        </div>
                        <div>
                            <p>893</p>
                            <p>38</p>
                            <p>234</p>
                            <p>123</p>
                            <p>576</p>
                            <p>233</p>
                            <p>973</p>
                            <p>493</p>
                            <p>132</p>
                            <p>943</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Grafico;