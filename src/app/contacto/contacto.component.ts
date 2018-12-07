import { Component } from  '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router'; //importarmos objetos para usar los parametros

@Component({
    selector: 'contacto',
    templateUrl: './contacto.component.html',
    styleUrls: ['./contacto.component.css']
})

export class ContactoComponent{
    public titulo:string = "Pagina de contacto";
    public mensaje;

    constructor(
        private _route: ActivatedRoute, //delcaramos los objetos asi usar los parametros por url
        private _router:Router
    ){}

    ngOnInit(){
        this._route.params.forEach((parametros: Params) => {
            console.log(parametros);
            this.mensaje = parametros['myparam'];
        });
    }

    redirigir(){
        this._router.navigate(['/contacto','perezmoya.com.ar']);
    }

    redirigirHome(){
        this._router.navigate(['/pagina-principal']);
    }
}