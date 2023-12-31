import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { FireStoryComponent } from './components/fire-story/fire-story.component';
import { StoriesComponent } from './components/stories/stories.component';
import { OverdoseComponent } from './components/stories/module-stories/overdose/overdose.component';
import { DataOverdoseService } from './_services/data-overdose.service';
import { HttpClientModule } from '@angular/common/http';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from './components/contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    FooterComponent,
    HeaderComponent,
    FireStoryComponent,
    StoriesComponent,
    OverdoseComponent,
    SubscribeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [ DataOverdoseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
