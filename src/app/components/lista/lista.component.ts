import { Component, OnInit } from '@angular/core';
import { RymService } from '../../services/rym.service';
import { MaterialModule } from '../../material/material.module';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.scss'
})
export class ListaComponent implements OnInit{
  listaPersonajes: any[]=[];

  constructor(private rymService: RymService){}
  ngOnInit(): void {
    this.rymService.getCharacters().subscribe((data:any)=>{
      console.log(data);
      this.listaPersonajes = data['results'];
    })
  }
}
