import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { VideoPlayerRoutes } from './video-player.routing';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { VgCoreModule} from 'videogular2/core';
import { VgControlsModule} from 'videogular2/controls';
import { VgOverlayPlayModule} from 'videogular2/overlay-play';
import { VgBufferingModule} from 'videogular2/buffering';


@NgModule({
	declarations: [VideoPlayerComponent],
  		imports: [
    	CommonModule,
    	RouterModule.forChild(VideoPlayerRoutes),
		VgCoreModule,
		VgControlsModule,
		VgOverlayPlayModule,
		VgBufferingModule,
		TranslateModule
   ],
})
export class VideoPlayerModule { }
