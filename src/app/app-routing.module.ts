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
    children: [],
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
