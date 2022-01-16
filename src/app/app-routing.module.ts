import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PagesComponent} from "./pages/pages.component";
import {MetaResolverService} from "./resolvers/meta-resolver.service";


const routes: Routes = [
  // after login
  {
    path: '',
    component: PagesComponent,
    resolve: {
      meta: MetaResolverService
    },
    children: [
      {path: 'about', loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule)},
      {path: 'contact', loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule)},
      {path: 'faq', loadChildren: () => import('./pages/faq/faq.module').then(m => m.FaqModule)},
    ],
  }


  // before
  // login
  // reset password
  // forget password
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
