import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { switchMap} from 'rxjs/operators';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../interfaces/Productos';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent {


  productos : Producto[] = [];

  constructor( private productService : ProductoService,  private activatedRoute: ActivatedRoute ){

  }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.productService.getproductsByCategorie( id )),
      )
      .subscribe( products => this.productos = products );
      console.log( this.productos )
  }

}
