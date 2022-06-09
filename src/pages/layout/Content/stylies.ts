import styled from 'styled-components'
import { colors } from 'styles/themes'

export const Content = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
  flex: 1;

  position: relative;

  width: 100%;
  max-width: 65rem;
  min-width: 37.5rem;
  box-sizing: border-box;
  padding: 0 0 2rem;
  background-color: ${ colors.white };
`