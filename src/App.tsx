
import './App.css'
import styled from 'styled-components';
import { Questionnaire } from './components/Questionnaire';
import { mockQuestionnaire } from './data/mockData';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-size: 16px; /* Ensure base font size for accessibility */
  line-height: 1.5; /* Improve readability */
    overflow: hidden;

`;

const Header = styled.header`
  background: linear-gradient(90deg, #ff7eb3, #ff758f, #f953c6);
  color: #fff;
  text-align: center;
  padding: 20px;
  font-size: 2.5rem;
  font-weight: bold;
  text-transform: uppercase;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    font-size: 2rem;
    padding: 15px;
  }
`;

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 90px;
  text-align: center;
  background-color: #f9f9f9;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

function App() {
  return (
    <PageWrapper>
      <Header>Hej Doktor</Header>
      <Main>
        <Questionnaire questionnaire={mockQuestionnaire} />
      </Main>
    </PageWrapper>
  )
}

export default App
