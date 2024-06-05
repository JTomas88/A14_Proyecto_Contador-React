import React, { useEffect, useState } from "react";
import "../../styles/contador.css";
import relojArena from "../../assets/relojArena2.gif";

// Crear el primer componente

const SecondsCounter = () => {

    // Declaramos la variable segundos con "segSegundos" y la inicializamos en 0
    // con useEffect creamos un evento, recibe una función anónima y dentro recibe
    // la función setInterval (hace que se ejecute lo que yo quiera cada x tiempo, x se marca en milisegundos)
    // En este caso setInterval recibe setSegundos (en la variable "intervalo"). Dentro ponemos una condición:
    // si segundos llega a 59 devuelve los segundos a 0. Sale del if y "return segundos + 1" => indica que vuelve a seguir sumando
    // 1 cada 1000 milisegundos". 
    const [segundos, setSegundos] = useState(0);
    const [minutos, setMinutos] = useState(0);
    const [horas, setHoras] = useState(0);
    const [dias, setDias] = useState(0);
    const [meses, setMeses] = useState(0);
    const [anios, setAnios] = useState(0);
    
    useEffect(() => {
        setInterval(() => {
            const intervalo = setSegundos(segundos => {
                if (segundos === 59) {
                    setMinutos (minutos => minutos + 1)
                    return segundos = 0;
                }
                if (minutos === 59){
                    setHoras (horas => horas +1)
                    return minutos = 0;
                }
                if (horas === 23){
                    setDias (dias => dias +1)
                    return horas = 0;
                }
                if (dias === 365){
                    setAnios (anios => anios +1)
                    return dias = 1;
                }

                return segundos + 1;
            }
            )
        }, 1000);
    }, []);  //para que funcione correctamente useEffect se recomienda dejar este array vacío.




    return (
        <div className="container">
            <div className="row">
                <div className="col d-flex">
                    <img src={relojArena} className="contenedor-imagen"></img>
                </div>

                <div className="col">
                    <div className="row"><h2>AÑOS</h2></div>
                    <div className="row"><p className="formatoCasillas">{anios}</p></div>
                </div>

                <div className="col">
                    <div className="row"><h2>MESES</h2></div>
                    <div className="row"><p className="formatoCasillas">{meses}</p></div>
                </div>

                <div className="col">
                    <div className="row"><h2>DIAS</h2></div>
                    <div className="row"><p className="formatoCasillas">{dias}</p></div>
                </div>

                <div className="col">
                    <div className="row"><h2>HORAS</h2></div>
                    <div className="row"><p className="formatoCasillas">{horas}</p></div>
                </div>

                <div className="col">
                    <div className="row"><h3>MINUTOS</h3></div>
                    <div className="row"><p className="formatoCasillas">{minutos}</p></div>
                </div>

                <div className="col">
                    <div className="row"><h3>SEGUNDOS</h3></div>
                    <div className="row"><p className="formatoCasillas">{segundos}</p></div>
                </div>

            </div>
        </div>
    )



};

export default SecondsCounter;
