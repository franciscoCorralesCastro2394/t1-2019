import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataStorageService } from '../../services/data-storage.service';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-noticias-insert',
  templateUrl: './noticias-insert.component.html',
  styleUrls: ['./noticias-insert.component.css']
})
export class NoticiasInsertComponent implements OnInit {
  formGroup: FormGroup;
  noticiaId:number;
  constructor(private formBuilder:FormBuilder, private data:DataStorageService,private activatedRoute:ActivatedRoute ) { 
    this.iniciarNoticia();
    this.noticiaId = this.activatedRoute.snapshot.params['id'];
  }

  iniciarNoticia = () => {
    this.formGroup = this.formBuilder.group({
      id: ['(nueva)', [Validators.required],],
      titulo: ['', [Validators.required]],
      imagen: ['', [Validators.required]],
      descripcion: ['', [Validators.required, Validators.minLength(15)]],
      fechaCreacion: [new Date()],
      ultimaModificacion: [new Date()],
    });
  }

  ngOnInit() {
  }

  cargarNoticia = (id: number) => {
    const listaNoticias = this.data.getObjectValue("noticias");
    listaNoticias.forEach(noticia => {
      if (noticia.id == id) {
        this.formGroup = this.formBuilder.group({
          id: [id, [Validators.required],],
          titulo: [noticia.titulo, [Validators.required]],
          imagen: [noticia.imagen, [Validators.required]],
          descripcion: [noticia.descripcion, [Validators.required, Validators.minLength(15)]],
          fechaCreacion: [noticia.fechaCreacion],
          ultimaModificacion: [noticia.ultimaModificacion],
        });
      }
    });
  } 


  guardarData = () => {
    if (this.formGroup.valid) {
      let noticiaIndex = -1;
      const listaNoticias = this.data.getObjectValue("noticias");
      listaNoticias.forEach((noticia, index) => {
        if (noticia.id == this.formGroup.value.id) {
          noticiaIndex = index;
        }
      });

      if (noticiaIndex >= 0) {
        listaNoticias[noticiaIndex] = this.formGroup.value;
      } else {
        listaNoticias.push(this.formGroup.value);
      }
      this.formGroup.patchValue({ "ultimaModificacion": new Date() });

      this.data.setObjectValue("noticias", listaNoticias);

      alert("Información guardada");
    } else {
      alert("Debe completar la información correctamente");
    }
  }

}
