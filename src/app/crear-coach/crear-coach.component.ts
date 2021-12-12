import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-crear-coach',
  templateUrl: './crear-coach.component.html',
  styleUrls: ['./crear-coach.component.css']
})
export class CrearCoachComponent implements OnInit {
  createCoach: FormGroup;
  submitted = false;
  id: string | null;
  accion = 'Agregar'

  constructor(private fb: FormBuilder,
    private database: DatabaseService,
    private router: Router,
    private aRoute: ActivatedRoute) {
    this.createCoach = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      foto: ['', Validators.required],
      precio: ['', Validators.required]
    })
    this.id = this.aRoute.snapshot.paramMap.get('id');
   }

  ngOnInit(): void {
    this.editarCoach();
  }

  botonAgregarEditar(){
    if(this.createCoach.invalid){
      return;
    }

    if(this.id === null){
      this.agregarCoach();
    }
    else{
      this.editarDatosCoach(this.id);
    }
  }

  agregarCoach(){
    this.submitted = true;

    if(this.createCoach.invalid){
      return;
    }

    const coach : any = {
      nombre: this.createCoach.value.nombre,
      descripcion: this.createCoach.value.descripcion,
      foto: this.createCoach.value.foto,
      precio: this.createCoach.value.precio
    }
    this.database.addCoach(coach).then(() => {
      console.log('Coach agregado');
    }).catch(error =>{
      console.log(error);
    })

    this.router.navigate(['/listaCoachs']);
  }

  editarCoach(){
    if(this.id !== null){
      this.accion = 'Editar'
      this.database.getCoach(this.id).subscribe(data => {
        this.createCoach.setValue({
          nombre: data.payload.data()['nombre'],
          descripcion: data.payload.data()['descripcion'],
          foto: data.payload.data()['foto'],
          precio: data.payload.data()['precio'],
        })
      })
    }
  }

  editarDatosCoach(id: string){

    const coach : any = {
      nombre: this.createCoach.value.nombre,
      descripcion: this.createCoach.value.descripcion,
      foto: this.createCoach.value.foto,
      precio: this.createCoach.value.precio
    }

    this.database.updateCoach(id,coach)

    this.router.navigate(['/listaCoachs']);
  }
}
