import React from 'react';
import PlacarContainer from './PlacarContainer';

const dados = {
    partida: {
        estadio: "Maracanã/RJ",
        data: "16/04/2020",
        horario: "17h"
    },
    
    casa: {
        nome: "Vasco",
    },
    
    visitante: {
        nome: "Flamengo",
    }
};

export default class App extends React.Component {

    render() {

        return <PlacarContainer {...dados}/>;
        
    }
}

