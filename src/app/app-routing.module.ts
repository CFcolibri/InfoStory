import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { StoriesComponent } from './components/stories/stories.component';
import { OverdoseComponent } from './components/stories/module-stories/overdose/overdose.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent  },
  { path: 'contact', component: ContactComponent },
  { path: 'stories', component: StoriesComponent },
  { path: 'overdose', component: OverdoseComponent },
  { path: 'subscribe', component: SubscribeComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
