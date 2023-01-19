import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/Productos';

import { Observable } from 'rxjs';
import { Categoria } from '../interfaces/Categorias';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private apiUrl = 'https://fakestoreapi.com';

  constructor( private http: HttpClient ) { }

  
  getProducts() : Observable<Producto[]> {

    const url = `${ this.apiUrl }/products`;
    
    return this.http.get<Producto[]>( url );

  }
  getCategories() : Observable<Categoria[]> {

    const url = `${ this.apiUrl }/products/categories`;
    
    return this.http.get<Categoria[]>( url );

  }

  getproductsByCategorie( categoria : string ) : Observable<Producto[]> {

    const url = `${ this.apiUrl }/products/category/${ categoria }`;
    
    return this.http.get<Producto[]>( url );

  }

  getproductsById( id: number ): Observable<Producto> {

    const url = `${ this.apiUrl }/products/${ id }`;
    
    return this.http.get<Producto>( url );

  }

  getproductsByCatfromHome( categoria: string): Observable<Producto[]> {

    const url = `${ this.apiUrl }/products/category/${ categoria }?limit=3`;
    
    return this.http.get<Producto[]>( url );

  }

}
