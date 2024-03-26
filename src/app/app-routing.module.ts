import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { VideoPlayerComponent } from './pages/video-player/video-player.component';
import { FullscreenMessageComponent } from './pages/fullscreen-message/fullscreen-message.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'video-player/:src/:title', component: VideoPlayerComponent },
  { path: 'hihi', component: FullscreenMessageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
