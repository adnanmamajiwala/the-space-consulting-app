import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HeaderComponent} from './home/header/header.component';
import {FooterComponent} from './home/footer/footer.component';
import {SmoothScrollDirective} from './home/shared/smooth-scroll.directive';
import {CarouselComponent} from './home/carousel/carousel.component';
import { AboutUsComponent } from './home/about-us/about-us.component';
import { OurServicesComponent } from './home/our-services/our-services.component';
import { OurTeamComponent } from './home/our-team/our-team.component';
import { ConnectWithUsComponent } from './home/connect-with-us/connect-with-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SmoothScrollDirective,
    CarouselComponent,
    AboutUsComponent,
    OurServicesComponent,
    OurTeamComponent,
    ConnectWithUsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
