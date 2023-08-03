import { Routes, RouterModule } from "@angular/router";
import { PublishingComponent } from "./publishing/publishing.component";
import { FollowingComponent } from "./following/following.component";
import { TimelineComponent } from "./timeline/timeline.component";

const appRoutes: Routes = [
  { path: "publishing", component: PublishingComponent },
  { path: "following", component: FollowingComponent },
  { path: "timeline", component: TimelineComponent },
  // { path: "following", component: CatalogViewComponent },
  { path: "**", redirectTo: "" }
];

export const routing = RouterModule.forRoot(appRoutes);
