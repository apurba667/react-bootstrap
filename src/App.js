
import './App.css';
import {Button} from 'react-bootstrap'
import News from './components/News/News';
import Header from './Header/Header';
import TopHeadline from './TopHeadline/TopHeadline';
import Fragment  from './components/Fragment/Fragment';
function App() {
  return (
    <div>
      <h2>React Bootstrap</h2>
      <Button variant="primary">Primary</Button>
      <Header></Header>
      <Fragment></Fragment>
      <TopHeadline></TopHeadline>
      

    </div>
  );
}

export default App;
