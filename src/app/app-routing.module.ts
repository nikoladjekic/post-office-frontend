import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ShipmentsComponent } from './home-page/shipments/shipments.component';
import { PostOfficesComponent } from './home-page/post-offices/post-offices.component';

const routes: Routes = [
  {
    path: "",
    component: HomePageComponent,
    children: [
      { path: "", redirectTo: "/shipments", pathMatch: "full" },
      { path: "shipments", component: ShipmentsComponent },
      { path: "offices", component: PostOfficesComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
