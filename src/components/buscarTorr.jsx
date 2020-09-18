import React from 'react';

import '../buscarTorr.css'

export default props =>
    <>
       <text id="find-torr">Buscar seu torrent: </text>
       <input id="findByName"  placeholder='Nome do seu torrent...' />
       <button id="buttonFind" >BUSCAR</button>
    </>
