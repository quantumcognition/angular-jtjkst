import { Component, Input } from "@angular/core";

@Component({
  selector: "following",
  templateUrl: "./following.component.html",
  styleUrls: ["./following.component.css"]
})
export class FollowingComponent {
  @Input() name: string;
}
