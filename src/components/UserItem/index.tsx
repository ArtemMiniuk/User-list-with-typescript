import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Users } from "../../store/users/types";
import { addToFavorites } from "../../store/favorites/action";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";

const UserContainer = styled.div`
  background-color: #eeeeee;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 10px;
  margin: 15px;
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

const AddToFavorites = styled.button`
  padding: 10px;
  border:none;
`;

interface propsFromComponent {
  item: Users;
}

interface propsFromDispatch {
  addToFavorites: (item: any) => any;
}

type Props = propsFromComponent & propsFromDispatch;

const UsersItem: React.FC<Props> = ({ item, addToFavorites }) => {
  const AddItemToFavorites = (item: any) => {
    addToFavorites(item);
  };

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
      <AddToFavorites onClick={() => AddItemToFavorites(item)}>❤️</AddToFavorites>
    </UserContainer>
  );
};

const mapStateToProps = () => {};

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
  return {
    addToFavorites: (item: any) => dispatch(addToFavorites(item))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersItem);
