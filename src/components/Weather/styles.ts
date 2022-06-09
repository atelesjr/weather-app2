import styled from "styled-components";
import { colors, screens } from "styles/themes";

interface WheaterStyle {
  deg: number
}

export const Weather = styled.div<WheaterStyle>`
  display: flex;
  flex-flow: column;
  align-items: center;


  width: 100%;
  padding: 0 0 .1rem;

  .image{
    display: flex;
    align-items: center;
    justify-content: center;
    background:linear-gradient(
      0deg, 
      rgba(40,31,1,0.8354692218684349) 0%,
      rgba(235, 110, 76,1) 97%
    );
    width: 100%;
    height: 20rem;

    img {
      width: 17rem;
    }

  }

  .data {
    display: flex;
    justify-content: center;
    align-items: center;
   
    height: 15rem;

    .current {
      display: flex;
      align-items: center;

      height: auto;
      margin-right: 1rem;
      box-sizing: border-box;

      font-size: 7rem;

     
    }

    .others {
      display: flex;
      flex-flow: column;
      justify-content: space-between;

      .description, .minmax {
        padding: .5rem 0;

      }

      .minmax {
        color: ${ colors.orange }
      }
    }
  }

  .air {
    display: flex;
    justify-content: center;

    width: 100%;
    padding: 1rem 0;

    .humidity, .wind {
      display: flex;
      flex-flow: column;
      align-items: center;

      width: 30%;

      color: ${ colors.orange };

      .image-wind, .image-humidity {
        background-color: transparent;

        img {
          width: 2.5rem;
        }
      }

      .speed {
        span {
          margin-right: 1rem;
        }
        .direction {
          width: 1.2rem;
          transform: rotate(${ ({ deg }) => deg }deg);
        }
        
      }
    }
  }

  @media ${ screens.tablet } {
    .humidity, .wind {
      width: 20%
    }
  }
`
