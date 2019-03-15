import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-noticias-upsert',
  templateUrl: './noticias-upsert.component.html',
  styleUrls: ['./noticias-upsert.component.css']
})
export class NoticiasUpsertComponent implements OnInit {
  formGroup: FormGroup;

  constructor() { }

  ngOnInit() {
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


}
