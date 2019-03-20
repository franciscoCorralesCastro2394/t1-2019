import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {DataStorageService} from '../../services/data-storage.service';
import { not } from '@angular/compiler/src/output/output_ast';
import { Noticia } from 'src/app/clases/noticia';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {
  noticia:any = {};
  constructor(private activatedRoute:ActivatedRoute,private data:DataStorageService) { 

    this.activatedRoute.params.subscribe(params => {
      this.noticia = this.data.getObjectNoticia(params['id']);
      console.log(this.noticia);
    })
  }

  ngOnInit() {
  }

}
