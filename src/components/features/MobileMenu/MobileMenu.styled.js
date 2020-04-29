import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
  padding-top: 224px;
  padding-bottom: 64px;
  padding-right: 32px;
  position: absolute;
  z-index: 998;
  transition: transform 0.7s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};

  a {
    width: 100vw;
    min-height: 100%;
    font-size: 30px;
    text-align: right;
    margin-bottom: 0;
    font-weight: bold;
    transition: color 0.7s linear;
    &:hover {
      color: rgb(235, 235, 235);
    }
  }
`;