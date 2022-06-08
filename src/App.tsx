import 'styles/global.css'
import { Content, Container, Header } from './pages/layout'
import Weather from 'components/Weather';

function App() {
  console.log(process.env)
  return (
    <Container>
      <Header>
        <h1>Weather</h1>
      </Header>
      <Content>
        <Weather />

        <div className="location">
          Your address:
        </div>
      </Content>

    </Container>
  );
}

export default App;
