import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
// Modulo para el manejo de rutas
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AnimalesComponent } from './components/animales/animales.component';
import { DetallesAnimalesComponent } from './components/detalles-animales/detalles-animales.component';
const appRoutes: Routes = [
  {
    path: '',
    component: AnimalesComponent
  },
  {
    path: 'detalles/:id',
    component: DetallesAnimalesComponent
  },
  {
    path: '**', component: AnimalesComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    AnimalesComponent,
    DetallesAnimalesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
