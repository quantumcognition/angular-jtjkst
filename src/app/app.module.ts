import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { routing } from './app.routing';
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { PublishingComponent } from "./publishing/publishing.component";
import { TimelineComponent } from "./timeline/timeline.component";
import { FollowingComponent } from "./following/following.component";


@NgModule({
  imports: [BrowserModule, FormsModule, routing,RouterModule.forRoot([])],
  declarations: [
    AppComponent,
    NavbarComponent,
    PublishingComponent,
    TimelineComponent,
    FollowingComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
