import { Injectable } from '@angular/core';
import {Noticia} from '../clases/noticia';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor() { }


setObjectValue = (key:string, objectValue:any)=>{

  let noti:Noticia = new Noticia;
  noti.Id = 1;
  noti.Descripcion = 'proyecto cultural sostenible';
  noti.Titulo = 'Nauyaka';
  noti.Imagen = 'src/assets/img/Cascada_azul_costa_rica_muralesyvinilos_26641659__Monthly_XL.jpg';
  noti.fechaCreacion = new Date(Date.now());
  noti.ultimaModificacion = new Date(Date.now());

  console.log(key + objectValue);
  console.log(noti);
  if (window.localStorage) {
    localStorage.setItem(noti.Id.toString(), JSON.stringify(noti)); 
  }else{
    throw new Error('No se puede almacenar la información, porque no está habilitado el localStorage');
  }
}


  getObjectValue = (key:string) => {
    if (window.localStorage) {
      const DATA= JSON.parse(localStorage.getItem('1'));
      if (DATA) {
        return DATA;
      }else{
        throw new Error('No se encontró el valor ${key} en el localStorage');
      }
    }else{
      throw new Error('No se puede obtener la información, porque no está habilitado el localStorage');
    }
  
  }
}