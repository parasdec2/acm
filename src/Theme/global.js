import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    color: ${({ theme }) => theme.text};
  }

  .teamcard__text{
    color: ${({ theme }) => theme.text};
  }

  .home__card__text{
    color: ${({ theme }) => theme.text};
  }

  .header__func :hover{
    color: ${({ theme }) => theme.headerTextEffectColor};
  }

  @-webkit-keyframes pulse {
    0% {
      background: ${({ theme }) => theme.bg1};
    }
    25% {
      background: ${({ theme }) => theme.bg2};
    }
    50% {
      background: ${({ theme }) => theme.bg3};
    }
    75% {
      background: ${({ theme }) => theme.bg4};
    }
    100% {
      background: ${({ theme }) => theme.bg1};
    }
  }
  
  @keyframes pulse {
    0% {
      background: ${({ theme }) => theme.bg1};
    }
    25% {
      background: ${({ theme }) => theme.bg2};
    }
    50% {
      background: ${({ theme }) => theme.bg3};
    }
    75% {
      background: ${({ theme }) => theme.bg4};
    }
    100% {
      background: ${({ theme }) => theme.bg1};
    }
  }
  
  .bubbles li {
    background-color: ${({ theme }) => theme.bubble};
  }
  `;
