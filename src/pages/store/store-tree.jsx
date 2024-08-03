import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import StoreTabs from "../../components/store/store-tabs";

import TreeImageContainer from "../../components/store/TreeImageContainer";
import CardList from "../../components/store/CardList";
import Modal from "../../components/store/Modal";
import "../../styles/color.css";

import {
  treeSets,
  backgroundSets,
  objectSets,
} from "../../components/store/Dataset";

const StoreTree = () => {
  const navigate = useNavigate();
  const [selectedTree, setSelectedTree] = useState(null);
  const [selectedBackground, setSelectedBackground] = useState(null);
  const [selectedObjects, setSelectedObjects] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [purchasedItems, setPurchasedItems] = useState([]);
  const [activeTab, setActiveTab] = useState("tree");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleCardClick = (item) => {
    switch (activeTab) {
      case "tree":
        setSelectedTree((prevTree) =>
          prevTree?.name === item.name ? null : item
        );
        break;
      case "background":
        setSelectedBackground((prevBackground) =>
          prevBackground?.name === item.name ? null : item
        );
        break;
      case "object":
        setSelectedObjects((prevObjects) =>
          prevObjects.some((obj) => obj.name === item.name)
            ? prevObjects.filter((obj) => obj.name !== item.name)
            : [...prevObjects, item]
        );
        break;
      default:
        break;
    }
  };

  const handleBuyClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleConfirmBuy = () => {
    const newPurchasedItems = [...purchasedItems];
    if (selectedTree && !newPurchasedItems.includes(selectedTree.name)) {
      newPurchasedItems.push(selectedTree.name);
    }
    if (
      selectedBackground &&
      !newPurchasedItems.includes(selectedBackground.name)
    ) {
      newPurchasedItems.push(selectedBackground.name);
    }
    selectedObjects.forEach((item) => {
      if (!newPurchasedItems.includes(item.name)) {
        newPurchasedItems.push(item.name);
      }
    });
    setPurchasedItems(newPurchasedItems);
    setShowModal(false);
  };

  const isTreePurchased = (itemName) => {
    return purchasedItems.includes(itemName);
  };

  const calculateTotalPrice = () => {
    let total = 0;
    if (selectedTree) total += parseInt(selectedTree.price, 10);
    if (selectedBackground) total += parseInt(selectedBackground.price, 10);
    selectedObjects.forEach((obj) => {
      total += parseInt(obj.price, 10);
    });
    return total;
  };

  let cards;
  switch (activeTab) {
    case "background":
      cards = backgroundSets;
      break;
    case "object":
      cards = objectSets;
      break;
    default:
      cards = treeSets;
  }

  return (
    <Wrapper>
      <TreeImageContainer
        selectedTree={selectedTree}
        selectedBackground={selectedBackground}
        selectedObjects={selectedObjects}
        isTreePurchased={isTreePurchased}
        handleBuyClick={handleBuyClick}
      />
      <StoreTabs activeTab={activeTab} onTabClick={handleTabClick} />
      <CardList
        cards={cards}
        handleCardClick={handleCardClick}
        isTreePurchased={isTreePurchased}
      />
      {showModal && (
        <Modal
          selectedTree={selectedTree}
          selectedBackground={selectedBackground}
          selectedObjects={selectedObjects}
          handleCloseModal={handleCloseModal}
          handleConfirmBuy={handleConfirmBuy}
          totalPrice={calculateTotalPrice()}
        />
      )}
    </Wrapper>
  );
};

export default StoreTree;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 56.25vh;
  height: 100%;
  background-color: var(--gray-50);
`;
