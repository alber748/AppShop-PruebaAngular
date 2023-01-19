import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './productos/pages/home/home.component';
import { CategoriasComponent } from './productos/pages/categorias/categorias.component';
import { ProductoComponent } from './productos/pages/producto/producto.component';


const routes: Routes = [
  {
      path: '',
      component: HomeComponent,
      pathMatch: 'full'
  },
  {
      path: 'categoria/:id',
      component: CategoriasComponent
  },
  {
      path: 'productos/:id',
      component: ProductoComponent
  },
  {
      path: '**',
      redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
