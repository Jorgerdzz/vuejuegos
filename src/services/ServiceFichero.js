import Global from "@/Global";
import axios from "axios";

export default class ServiceFichero{
    subirFichero(fichero){
        return new Promise((resolve)=>{
            let url = Global.urlApiFicheros;
            let request = "api/TestingFiles";
            let header = {
                "Content-Type": "application/json"
            }
            axios.post(url + request, fichero, {headers: header}).then(response=>{
                resolve(response);
            })
        })
    }
}