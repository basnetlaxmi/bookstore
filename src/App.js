import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Books from './components/Books';
import Categories from './components/Categories';
import Menu from './components/Menu';
import store from './redux/configureStore';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Menu />
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="categories/" element={<Categories />} />

        </Routes>
      </Provider>
    </div>
  );
}

export default App;
