import React from "react";
import { Post } from "../post/Post";
import { Share } from "../share/Share";
import ".//Timeline.css";
import { Posts } from "../../dummyData";

export const Timeline = () => {
  return (
    <div className="timeline">
      <div className="timelineWrapper">
        <Share />
        {Posts.map((post) => {
          return <Post post={post} key={post.id} />;
        })}
      </div>
    </div>
  );
};