import { Component, OnInit, Input } from "@angular/core";
import { Post } from "../post.model";

@Component({
  selector: "app-post-list",
  templateUrl: "./post-list.component.html",
  styleUrls: ["./post-list.component.css"]
})
export class PostListComponent implements OnInit {
  // posts = [
  //   { title: "This is title1", content: "This is content1" },
  //   { title: "This is title2", content: "This is content2" },
  //   { title: "This is title3", content: "This is content3" },
  //   { title: "This is title4", content: "This is content4" }
  // ];

  // posts = [];

  @Input() posts: Post[] = [];

  constructor() {}

  ngOnInit() {}
}
