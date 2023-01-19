import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { ActivatedRoute } from '@angular/router';
import { Producto } from '../../interfaces/Productos';
import { switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit{

  producto! : Producto;

  constructor( private productService : ProductoService,  private activatedRoute: ActivatedRoute ){

  }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.productService.getproductsById( id )),
      )
      .subscribe( products => this.producto = products );

  }

  

}
