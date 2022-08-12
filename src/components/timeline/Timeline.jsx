import React, { useState, useEffect } from "react";
import { Post } from "../post/Post";
import { Share } from "../share/Share";
import ".//Timeline.css";
import axios from "axios";

export const Timeline = ({ username }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get(`/posts/profile/${username}`)
        : await axios.get("/posts/timeline/62f59c25568d170af1ece684");
      setPosts(res.data);
    };
    fetchPosts();
  }, [username]);

  return (
    <div className="timeline">
      <div className="timelineWrapper">
        <Share />
        {posts.map((post) => {
          return <Post key={post._id} post={post} />;
        })}
      </div>
    </div>
  );
};
