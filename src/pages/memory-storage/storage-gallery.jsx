import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import "../../styles/color.css";

import StoredTree from "../../components/memory-storage/stored-tree";
import TreeInfo from "../../components/memory-storage/stored-treeinfo";
import PostList from "../../components/memory-storage/PostList";

import treeData from "../../components/memory-storage/treeData";

const StorageGallery = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (location.state && location.state.treeIndex !== undefined) {
      setCurrentIndex(location.state.treeIndex);
    }
  }, [location.state]);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === treeData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? treeData.length - 1 : prevIndex - 1
    );
  };

  const currentTree = treeData[currentIndex];

  const handleAddPost = () => {
    // 글쓰기 버튼 클릭 시의 동작 정의
    navigate("/storage/post/write");
  };

  const handlePostClick = (id) => {
    navigate(`/storage/post-detail/${id}`, {
      state: { treeIndex: currentIndex },
    });
  };

  return (
    <Wrapper>
      <StoredTree
        image={currentTree.image}
        handlePrevious={handlePrevious}
        handleNext={handleNext}
      />
      <TreeInfo
        num={currentTree.num}
        dates={currentTree.dates}
        days={currentTree.days}
        postsCount={currentTree.posts.length}
      />
      <PostList posts={currentTree.posts} onPostClick={handlePostClick} />

      <WriteButton onClick={handleAddPost}>+</WriteButton>
    </Wrapper>
  );
};

export default StorageGallery;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 56.25vh;
  height: 100%;
  background-color: var(--gray-50);
  position: relative;
  overflow-y: auto;
`;

const WriteButton = styled.button`
  background-color: var(--red-600);
  color: white;
  border: none;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  font-size: 23px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: fixed;
  left: calc(50% + 28.125vh - 50px);
  bottom: 55px; /* Footer 위에 위치 */
  z-index: 1000;
`;
