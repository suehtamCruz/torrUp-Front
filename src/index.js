import './index.css'
import React from 'react';
import ReactDOM from 'react-dom';

import instagram from '../src/img/instagram.png';
import git from '../src/img/github-153-675523.webp'

import Finder from './components/buscarTorr';
import Menu from './components/menu';

ReactDOM.render(
    <>
        <div id="header">
            <h1>TorrUp</h1>
        </div>
        <div className="line" />
            <Menu />
        <div id="finder">
            <Finder />
        </div>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <footer>
            <div id="footer">
                <p id="social">
                    <img src={instagram} className="icon" />
                    <p id="description">@suehtamCruz</p>

                    <img src={git} className="icon" />
                    <p id="description">suehtamCruz</p>

                </p>
                <p id="whoAreUs">
                    SITE SEM PROPAGANDAS PARA DOWNLOAD DOS SEUS TORRENTS, SEM BUROCRASCIA, SEM EXTRESSE, BASTA UM CLIQUE. SALVE A PIRATARIA!
                </p>
                <p id="builder">
                    Created for Matheus Cruz
                </p>
            </div>
        </footer>
        <p id="corp">
            © MatheusCorp, brasilian corporation of a only one solitary man!
        </p>
        <p id="since">since 2020.</p>
    </>,
    document.getElementById('root')
)