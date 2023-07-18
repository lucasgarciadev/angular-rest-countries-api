import { NgModule,  } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailComponent } from './pages/detail/detail.component';
import { IndexComponent } from './pages/index/index.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'detail/:name', component: DetailComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
