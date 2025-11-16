import Global from "@/Global"
import axios from "axios";

export default class ServiceFutbol{

    getEquipos(){
        return new Promise((resolve)=>{
            let url = Global.urlApiApuestas;
            let request = "api/Equipos";
            const equipos = fetch(url + request).then(response=>response.json());
            resolve(equipos);
        })
    }

    getEquipo(idequipo){
        return new Promise((resolve)=>{
            let url = Global.urlApiApuestas;
            let request = "api/Equipos/" + idequipo;
            const equipo = fetch(url + request).then(response=>response.json());
            resolve(equipo)
        })
    }

    getJugadoresEquipo(idequipo){
        return new Promise((resolve)=>{
            setTimeout(()=>{
                let url = Global.urlApiApuestas;
                let request = "api/Jugadores/JugadoresEquipos/" + idequipo;
                const jugadores = fetch(url + request).then(response=>response.json());
                resolve(jugadores); 
            }, 3000)
        })
    }

    getJugadoresNombre(nombre){
        return new Promise((resolve)=>{
            let url = Global.urlApiApuestas;
            let request = "api/Jugadores/BuscarJugadores/" + nombre;
            axios.get(url + request).then(response=>{
                resolve(response.data)
            })
        })
    }

    getDatosEquipo(idequipo){
        return Promise.all([
            this.getEquipo(idequipo),
            this.getJugadoresEquipo(idequipo)
        ])
    }

    insertJugador(jugador){
        return new Promise((resolve)=>{
            let url = Global.urlApiApuestas;
            let request = "api/Jugadores";
            axios.post(url + request, jugador).then(response=>{
                resolve(response)
            })
        })
    }

    deleteJugador(idJugador){
        return new Promise((resolve)=>{
            let url = Global.urlApiApuestas;
            let request = "api/Jugadores/" + idJugador;
            axios.delete(url + request).then(response=>{
                resolve(response)
            });
        })
    }


}