import styled from "styled-components";
import { colors } from "styles/themes";

export const Popover = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;


  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background-color: ${ colors.white };
  opacity: .7;

`