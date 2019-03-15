import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../../services/data-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private dataStorage:DataStorageService ) { }

  ngOnInit() {
  }

  prueba = () => {
    console.log("prueba");
     console.log(this.dataStorage.setObjectValue('123','prueba'));
  }
  prueba1 = () => {
     console.log(this.dataStorage.getObjectValue('123'));
  }

}
