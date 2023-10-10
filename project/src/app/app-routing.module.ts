import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MyFriendsComponent } from './my-friends/my-friends.component';
import { MyGroupsComponent } from './my-groups/my-groups.component';
import { MyTravelsComponent } from './my-travels/my-travels.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'my-travels',
    component: MyTravelsComponent
  },
  {
    path: 'my-friends',
    component: MyFriendsComponent
  },
  {
    path: 'my-groups',
    component: MyGroupsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
