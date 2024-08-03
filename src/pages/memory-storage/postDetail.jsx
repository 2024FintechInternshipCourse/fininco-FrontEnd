import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParam, useParams, useLocation } from "react-router-dom";
import "../../styles/color.css";

import PostDetailHeader from "./../../components/memory-storage/postDetail-header";
import PostDetailInfo from "../../components/memory-storage/postDetail-info";
import PostDetailContent from "../../components/memory-storage/postDetail-content";
import PostDetailComment from "../../components/memory-storage/postDetail-comment";

import treeData from "../../components/memory-storage/treeData";

const PostDetail = () => {
  const { id } = useParams();
  const postId = parseInt(id, 10);

  let post = null;

  for (const tree of treeData) {
    const foundPost = tree.posts.find((p) => p.id === postId);
    if (foundPost) {
      post = foundPost;
      break;
    }
  }

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <Wrapper>
      <PostDetailHeader />
      <PostDetailInfo
        title={post.title}
        writer={post.writer}
        date={post.date}
        people={post.people}
      />
      <PostDetailContent content={post.content} />
      <PostDetailComment />
    </Wrapper>
  );
};

export default PostDetail;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;
