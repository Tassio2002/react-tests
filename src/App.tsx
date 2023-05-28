import { Routes, Route, Link } from "react-router-dom";
import ListPage from "./pages/List/ListPage";
import SearchPage from "./pages/Search/SearchPage";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/list">List</Link>
          </li>
          <li>
            <Link to="/search">Search</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/search" element={<SearchPage />} />
        <Route path="/list" element={<ListPage />} />
      </Routes>
    </>
  );
}

export default App;
