import { Component } from '@angular/core';

@Component({
    selector: 'frutas',
    templateUrl: './frutas.component.html',
    styleUrls: ['./frutas.component.css']
})

export class FrutasComponent{
    titulo = "Listado de frutas";
    frutas = "Anana, Banana, Cereza, Durazno, Frutilla, Guindas";
}

