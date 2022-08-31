
import './App.css';
import BookList from './components/BookList';
import MyBadge from './components/MyBadge';
import SingleBook from './components/SingleBook';
import fantasy from './data/fantasy.json'

import WarningSign from './components/WarningSign';

function App() {
  return (
    <div className="App">
      <WarningSign text="Non perderti  "/>
      <MyBadge color="danger" text="LE NUOVE USCITE" />
      <BookList books={fantasy} />
      <SingleBook book={fantasy[0]}/>
    </div>
  );
}

export default App;
