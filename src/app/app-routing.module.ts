import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {PagesComponent} from "./pages/pages.component";
import {MetaResolverService} from "./resolvers/meta-resolver.service";
import {CustomPreloadStrategy} from "./services/custom-preload-strategy";


const routes: Routes = [
  // after login
  {
    path: '',
    component: PagesComponent,
    resolve: {
      meta: MetaResolverService
    },
    children: [
      {
        path: 'about',
        loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule),
      },
      {
        path: 'contact',
        loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule)
      },
      {
        path: 'faq',
        loadChildren: () => import('./pages/faq/faq.module').then(m => m.FaqModule),
        data: {preload: true}
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: CustomPreloadStrategy
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
