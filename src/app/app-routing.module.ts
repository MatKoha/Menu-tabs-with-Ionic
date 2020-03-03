import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  {
    path: '',
    loadChildren: () => import('./menu/menu.module').then(m => m.MenuPageModule)
  },
  // {
  //   path: 'register',
  //   loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  // },
  // {
  //   path: 'login',
  //   loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  // },
  // {
  //   path: 'contact',
  //   loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
