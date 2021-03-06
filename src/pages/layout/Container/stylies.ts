import styled from 'styled-components'
import { colors } from 'styles/themes'

export const Container = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
  flex: 1;

  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  background-color: ${ colors.grayDark };
`