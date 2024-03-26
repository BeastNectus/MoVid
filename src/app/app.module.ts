import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { VideoPlayerComponent } from './pages/video-player/video-player.component';
import { FormsModule } from '@angular/forms';
import { FullscreenMessageComponent } from './pages/fullscreen-message/fullscreen-message.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VideoPlayerComponent,
    FullscreenMessageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
