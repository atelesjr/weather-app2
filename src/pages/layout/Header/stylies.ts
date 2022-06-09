import styled from 'styled-components'
import { colors } from 'styles/themes'

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 5rem;
  max-width: 65rem;
  min-width: 37.5rem;
  box-sizing: border-box;
  padding: 1rem;
  background-color: ${ colors.grayDark };

  color:  ${ colors.white };


`