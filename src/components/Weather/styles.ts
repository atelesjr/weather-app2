import styled from "styled-components";

export const Weather = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;

  width: 100%;
  padding: .1rem;
  border: .1rem solid blue;

  .image{
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 20rem;

    background-color: lightgrey;
  }

  .data {
    display: flex;
    justify-content: center;
    align-items: center;

    border: 1px solid green;

    .current {
      display: flex;
      align-items: center;

      border: 1px solid green;

      height: auto;
      margin-right: 1rem;
      box-sizing: border-box;

      font-size: 7rem;
    }

    .others {
      display: flex;
      flex-flow: column;
      justify-content: space-between;

      border: 1px solid green;

      .description, .minmax {
        padding: .5rem 0;
      }

      .description {
        
      }
    }
  }

  .daylight {
    display: flex;
    justify-content: space-around;

    width: 100%;
    padding: 1rem 0;

    .sunrise, .sunset {
      display: flex;
      flex-flow: column;
      align-items: center;

      width: 40%;

      .image {
        height: 10rem;
      }

    }
  }


`
