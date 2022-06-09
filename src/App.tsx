import { useContext } from 'react';
import 'styles/global.css'
//layout
import { Content, Container, Header, Popover } from './pages/layout'
// context
import { Context } from 'context';
// components
import Weather from 'components/Weather';
import Location from 'components/Address';
import Spinner from 'components/Spinner';


function App() {
  console.log(process.env)
  const { loading } = useContext(Context)
  return (
    <Container>
      <Header>
        <h1>Weather</h1>
      </Header>
      <Content>
        <Weather />
        <Location />
        {
          loading && (
            <Popover>
              <Spinner />
            </Popover>
          )
        }

      </Content>

    </Container>
  );
}

export default App;
