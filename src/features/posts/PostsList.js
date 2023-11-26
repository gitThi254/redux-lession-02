import React from "react";
import { useSelector } from "react-redux";
import { selectAllPosts } from "./postSlice";
import PostAuthor from "./PostAuth";
import { TimeAgo } from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

const PostsList = () => {
  const posts = useSelector(selectAllPosts);
  const orderPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date));
  const renderPosts = orderPosts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <h3>{post.content.substring(0, 100)}</h3>
      <p className='postCredit'>
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
        <ReactionButtons post={post} />
      </p>
    </article>
  ));
  return (
    <section>
      <h2>Posts</h2>
      {renderPosts}
    </section>
  );
};

export default PostsList;
