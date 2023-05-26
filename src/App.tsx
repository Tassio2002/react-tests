import { Routes, Route, Link } from "react-router-dom";
import ListTest from "./pages/ListPage";
import SearchPage from "./pages/SearchPage";

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
        <Route path="/list" element={<ListTest />} />
      </Routes>
    </>
  );
}

export default App;
