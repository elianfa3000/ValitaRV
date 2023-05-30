import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { SeccionMediaComponent } from './components/seccion-media/seccion-media.component';
import { PlataformasComponent } from './components/plataformas/plataformas.component';
import { SobreNosotrosComponent } from './components/sobre-nosotros/sobre-nosotros.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { SimulomseComponent } from './components/simulomse/simulomse.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'simulomse', component: SimulomseComponent },
  { path: 'secMedia', component: SeccionMediaComponent },
  { path: 'plataforma', component: PlataformasComponent },
  { path: 'sobreNosotros', component: SobreNosotrosComponent },
  { path: 'contacto', component: ContactoComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      scrollPositionRestoration: 'top',
    }),
  ], //rutas web
  exports: [RouterModule],
})
export class AppRoutingModule {}
