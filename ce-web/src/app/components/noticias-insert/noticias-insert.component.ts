import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataStorageService } from '../../services/data-storage.service';

@Component({
  selector: 'app-noticias-insert',
  templateUrl: './noticias-insert.component.html',
  styleUrls: ['./noticias-insert.component.css']
})
export class NoticiasInsertComponent implements OnInit {
  formGroup: FormGroup;
  constructor(private formBuilder:FormBuilder, private data:DataStorageService ) { 
    this.iniciarNoticia();
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

  guardarData(){

    console.log(this.formGroup.value);
  }

}
