import { Component, OnInit   } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../interfaces/Productos';

interface ProducsByCat {

  categoriaName : string,
  product : Producto[]
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  categories : string[] = [];
  cats : string = '';
  products : ProducsByCat[] = [];

  constructor( private productService : ProductoService ){
    
  }
  
  ngOnInit(  ){

   this.productService.getCategories().subscribe(  categories => {

    this.cats = categories.toString();
    this.categories = this.cats.split(',');

    this.categories.forEach(cat => {

      this.productService.getproductsByCatfromHome( cat ).subscribe( prod => {

        this.products.push( { categoriaName : cat, product : prod } );

      } );
    });

   });
  
   
   
  }

}
