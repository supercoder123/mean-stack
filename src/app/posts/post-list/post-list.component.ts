import { Component, OnInit, Input, OnDestroy } from "@angular/core";
import { Post } from "../post.model";
import { PostsService } from "../../posts.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-post-list",
  templateUrl: "./post-list.component.html",
  styleUrls: ["./post-list.component.css"]
})
export class PostListComponent implements OnInit, OnDestroy {
  // posts = [
  //   { title: "This is title1", content: "This is content1" },
  //   { title: "This is title2", content: "This is content2" },
  //   { title: "This is title3", content: "This is content3" },
  //   { title: "This is title4", content: "This is content4" }
  // ];

  // posts = [];

  posts: Post[] = [];
  private postSub: Subscription;

  constructor(public postsService: PostsService) {}

  ngOnInit() {
    this.posts = this.postsService.getPosts();
    this.postSub = this.postsService
      .getPostUpdatedListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
      });
  }

  ngOnDestroy() {
    this.postSub.unsubscribe();
  }
}
