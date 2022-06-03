import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { removeFromFavorites } from "../../store/favorites/action";
import { ApplicationState } from "../../store";
import { Favorites } from "../../store/favorites/types";

const UserContainer = styled.div`
  background-color: #eeeeee;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 10px;
  margin: 15px;
  width:300px;
  cursor: pointer;
  flex: 0 0 25%;
  flex-direction: column;
`;

const UserFigure = styled.figure`
  width: 230px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UserImage = styled.img`
  border-radius: 100%;
  height: 100%;
  width: 100px;
  object-fit: contain;
  object-position: center;
`;

const UserHeader = styled.h1`
  height: 46px;
`;

const UserDescriptionDiv = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction:column;
`;

const UserJobsText = styled.text``;

const UserEmailText = styled.text`
   padding-top: 10px;
   padding-bottom: 10px;
   color: #199438;
`;

const FavoritesContainer = styled.div`
  /* height: 100%;
  width: 100%; */
  padding: 30px;
`;
const FavoritesHeader = styled.h2``;
const FavoritesHeaderDiv = styled.div`
  height: 100%;
  width: 100%;
`;

const RemoveFromFavorites = styled.button`
  background-color:red;
  color: white;
  margin-left:90%;
  padding: 10px;
  border:white;
`;

interface propsFromState {
  favoritesItems: Favorites;
}

interface propsFromDispatch {
  removeFromFavorites: (item: any) => any;
}


type AllProps = propsFromState;

const FavoritesComponent: React.FC<AllProps> = ({ favoritesItems }) => {
  const RemoveItemFromFavorites = (item: any) => {
    removeFromFavorites(item);
  };
  console.log("favoritesItems", favoritesItems);
  return (
    <FavoritesContainer>
      <FavoritesHeaderDiv>
        <FavoritesHeader>Your favorites</FavoritesHeader>
      </FavoritesHeaderDiv>
        {favoritesItems.items.map(item => {
          return (
            <UserContainer>
            <UserFigure>
              <UserImage src={item.image} />
            </UserFigure>
            <UserHeader>{item.name}</UserHeader>
            <UserDescriptionDiv>
              <UserJobsText>{item.jobs}</UserJobsText>
              <UserEmailText>{item.email}</UserEmailText>
              </UserDescriptionDiv>
              <RemoveFromFavorites onClick={() => RemoveItemFromFavorites(item)}>X</RemoveFromFavorites>
          </UserContainer>
          );
        })}
    </FavoritesContainer>
  );
};

const mapStateToProps = ({ favorites }: ApplicationState) => ({
  favoritesItems: favorites.data
});

const mapDispatchProps = () => {};

export default connect(mapStateToProps, mapDispatchProps)(FavoritesComponent);
