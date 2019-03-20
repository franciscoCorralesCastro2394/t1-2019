import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../../services/data-storage.service';

@Component({
  selector: 'app-noticias-list',
  templateUrl: './noticias-list.component.html',
  styleUrls: ['./noticias-list.component.css']
})
export class NoticiasListComponent implements OnInit {
  private noticias:any[];  
  constructor(private dataStorage:DataStorageService ) {

    this.getNoticias();
   
  }
   
 

  ngOnInit() {
  
  }

   

 


  getNoticias = () => {
    this.noticias = this.dataStorage.getObjectValue('123');
    console.log(this.noticias);
    console.log("pruebas");

  }


}
