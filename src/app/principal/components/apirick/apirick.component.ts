import { Component, OnInit } from '@angular/core';
import { ApirickService } from '../../services/apirick.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogoComponent } from '../dialogo/dialogo.component';

@Component({
  selector: 'app-apirick',
  templateUrl: './apirick.component.html',
  styleUrls: ['./apirick.component.scss']
})
export class ApirickComponent implements OnInit {
  personajes: any;

  constructor(
    private apirickSer: ApirickService,
    public dialog: MatDialog
    ){}

  ngOnInit(): void {
    this.apirickSer.getCharacters().subscribe( res =>{
      console.log(res)
      this.personajes = res;
    })
  }

  openDialog(character: any){
    this.dialog.open(DialogoComponent, {data: {character}})
  }

}
