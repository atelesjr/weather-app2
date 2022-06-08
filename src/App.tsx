import 'styles/global.css'
import { Content, Container, Header } from './pages/layout'
import Weather from 'components/Weather';
import Location from 'components/Address';

function App() {
  console.log(process.env)
  return (
    <Container>
      <Header>
        <h1>Weather</h1>
      </Header>
      <Content>
        <Weather />
        <Location />
      </Content>

    </Container>
  );
}

export default App;
