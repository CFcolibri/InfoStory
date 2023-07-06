import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { StoriesComponent } from './components/stories/stories.component';
import { OverdoseComponent } from './components/stories/module-stories/overdose/overdose.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';


const routes: Routes = [
  { path: '', component: HomeComponent, data: {bgColor: 'yellow'}  },
  { path: 'about', component: AboutComponent },
  { path: 'stories', component: StoriesComponent, data: {bgColor: 'Green'}},
  { path: 'overdose', component: OverdoseComponent },
  { path: 'subscribe', component: SubscribeComponent, data: {bgColor: 'Orange'} },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
