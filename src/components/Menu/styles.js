import styled from "styled-components";

export const StyleMenu = styled.nav`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  width: 90%;

  @media (max-width: 800px) {
    align-items: flex-start;
    background: var(--primary);
    box-shadow: 2px 0 10px rgba(0, 0, 0, 0.2);
    flex-direction: column;
    height: 100%;
    justify-content: flex-start;
    left: ${props => props.activeMenu ? '0' : '-100%'};
    max-width: 320px;
    padding: 1rem;
    position: fixed;
    transition: left 0.3s ease-out;
    z-index: 1;
  }
`;

const ButtonMenu = styled.button`
  -webkit-appearance: none;
  background: none;
  border: 0;
  font-size: 1.6rem;
  outline: 0;

  img {
    height: 5vh;
    padding: 5vh 2vh;
  }

  @media (min-width: 800px){
    display: none;
  }
`;

export const ButtonOpenMenu = styled(ButtonMenu)`

`;

export const ButtonCloseMenu = styled(ButtonMenu)`
  align-self: flex-end;
`;

export const ItemMenu = styled.a`
  font-size: 1.5rem;
  padding: 1rem;
`;