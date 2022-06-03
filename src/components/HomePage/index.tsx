import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import UserItem from "../UserItem";
import { ApplicationState } from "../../store";
import { Users } from "../../store/users/types";
import { fetchRequest } from "../../store/users/action";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";

const Container = styled.div`
  width: 100%;
  max-width: 1170px;
  margin: auto;
`;

const UserListItems = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

interface PropsFromState {
  loading: boolean;
  data: Users[];
  errors?: string;
}

interface propsFromDispatch {
  fetchRequest: () => any;
}

type AllProps = PropsFromState & propsFromDispatch;

const HomePage: React.FC<AllProps> = ({
  loading,
  errors,
  data,
  fetchRequest
}) => {
  useEffect(() => {
    fetchRequest();
  }, []);

  return (
    <Container>
      <UserListItems>
        {data.map(item => {
          return <UserItem item={item} />;
        })}
      </UserListItems>
    </Container>
  );
};

const mapStateToProps = ({ users }: ApplicationState) => ({
  loading: users.loading,
  errors: users.errors,
  data: users.data
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
  return {
    fetchRequest: () => {
      dispatch(fetchRequest());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
