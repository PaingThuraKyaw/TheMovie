import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./auth/Login";
import Main from "./Layout";
import Home from "./componet";
import Detail from "./componet/detail/Detail";
import Tv from "./page/tvShow";
import People from "./page/people";
import SearchMovie from "./page/Movie/SearchMovie";
import PeopleDetail from "./page/people/Detail/PeopleDetail";
import TvSearch from "./page/tvShow/TvSearch";



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<Main />}>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<Detail />} />
          <Route path="/tv" element={<Tv />} />
          <Route path="/tv/search/:search" element={<TvSearch />} />
          <Route path="/movie/search/:search" element={<SearchMovie/>} />
          <Route path="/people" element={<People />} />
          <Route path="/people/:id" element={<PeopleDetail/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
