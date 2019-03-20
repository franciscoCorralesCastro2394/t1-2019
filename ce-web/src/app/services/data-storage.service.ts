import { Injectable } from '@angular/core';
import {Noticia} from '../clases/noticia';


@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor() { }


setObjectValue = (key:string, objectValue:any)=>{

  let noticias:Noticia[] = [];  

  let noti:Noticia = new Noticia;
  noti.Id = 1;
  noti.Descripcion = 'proyecto cultural sostenible Nauyaka';
  noti.Titulo = 'Nauyaka';
  noti.Imagen = 'assets/img/Cascada_azul_costa_rica_muralesyvinilos_26641659__Monthly_XL.jpg';
  noti.fechaCreacion = new Date(Date.now());
  noti.ultimaModificacion = new Date(Date.now());

  noticias.push(noti);

  noti = new Noticia;
  noti.Id = 2;
  noti.Descripcion = 'proyecto cultural sostenible Talamanca';
  noti.Titulo = 'Talamanca';
  noti.Imagen = 'assets/img/1367498182_037809_1367498356_noticia_normal.jpg';
  noti.fechaCreacion = new Date(Date.now());
  noti.ultimaModificacion = new Date(Date.now())

  noticias.push(noti);

  
  noti = new Noticia;
  noti.Id = 3;
  noti.Descripcion = 'proyecto cultural sostenible Bri-bri';
  noti.Titulo = 'Bri-bri';
  noti.Imagen = 'assets/img/maxresdefault.jpg';
  noti.fechaCreacion = new Date(Date.now());
  noti.ultimaModificacion = new Date(Date.now())

  noticias.push(noti);

  noti = new Noticia;
  noti.Id = 4;
  noti.Descripcion = 'proyecto cultural sostenible Cabecar';
  noti.Titulo = 'Cabecar';
  noti.Imagen = 'assets/img/nauyaca-waterfalls-horseback.jpg';
  noti.fechaCreacion = new Date(Date.now());
  noti.ultimaModificacion = new Date(Date.now())

  noticias.push(noti);


  console.log(key + objectValue);
  console.log(noti);
  if (window.localStorage) {
    noticias.forEach(function(n){
      localStorage.setItem(n.Id.toString(),JSON.stringify(n));
      console.log(n);
    });
       
  }else{
    throw new Error('No se puede almacenar la información, porque no está habilitado el localStorage');
  }
}


  getObjectValue = (key:string) => {
    let noticias:any[] = []; 
    if (window.localStorage) {
      for(let i=1; i<=4; i++){
        const DATA = JSON.parse(localStorage.getItem(i.toString()));
        console.log(DATA);
        noticias.push(DATA);
      }
     if (noticias) {
        return noticias;
      }else{
        throw new Error('No se encontró el valor ${key} en el localStorage');
      } 
    }else{
      throw new Error('No se puede obtener la información, porque no está habilitado el localStorage');
    }
  
  }
}