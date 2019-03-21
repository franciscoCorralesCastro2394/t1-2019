import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-noticias-upsert',
  templateUrl: './noticias-upsert.component.html',
  styleUrls: ['./noticias-upsert.component.css']
})
export class NoticiasUpsertComponent implements OnInit {
  noticiaId:number;
 
  constructor(private activatedRoute:ActivatedRoute) { 

    this.noticiaId = this.activatedRoute.snapshot.params['id'];
    
  }

  ngOnInit() {
  }

}
