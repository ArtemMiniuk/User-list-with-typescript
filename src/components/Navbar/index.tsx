import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ApplicationState } from "../../store";
import { Favorites } from "../../store/favorites/types";



const NavContainer = styled.div`
  margin: auto;
  width: 100%;
  height: 60px;
  background: #a7d1d0;
`;

const NavHeader = styled.div`
  margin-left:40px;
  width: 20%;
  float: left;
  padding: 15px;
  text-decoration: none;
`;

const linkStyle = {
  textDecoration: "none",
  color: 'white',
  fontSize: "20px",
};

const NavFavorites = styled.div`
  cursor: pointer; 
  width: 20%;
  float: right;
  padding: 15px;
`;

interface propsFromState {
  data: Favorites;
  loading: boolean;
  errors?: string;
}

type AllProps = propsFromState;

const Navbar: React.FC<AllProps> = ({ data, loading, errors, children }) => {
  return (
    <div>
      <NavContainer>
        <NavHeader>
          <Link  style={linkStyle} to="/">Main Page</Link>
        </NavHeader>
        <NavFavorites>
          <Link style={linkStyle} to="/favorites">
            Favorites
          </Link>
        </NavFavorites>
      </NavContainer>
      {children}
    </div>
  );
};

const mapStateToProps = ({ favorites }: ApplicationState) => ({
  data: favorites.data,
  loading: favorites.loading,
  errors: favorites.errors
});

const mapDispatchProps = () => {};

export default connect(mapStateToProps, mapDispatchProps)(Navbar);
