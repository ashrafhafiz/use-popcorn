import { useState } from "react";
import NavBar from "./NavBar";
import Box from "./Box";
import Logo from "./Logo";
import Search from "./Search";
import NumResults from "./NumResults";
import MoviesList from "./MoviesList";
import WatchedListSummary from "./WatchedListSummary";
import WatchedList from "./WatchedList";
import { tempMovieData, tempWatchedData } from "./data";

export default function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);

  return (
    <>
      <NavBar query={query} setQuery={setQuery} movies={movies}>
        <Logo />
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </NavBar>

      <main className="main">
        {/* <Box element={<MoviesList movies={movies} />} />
        <Box
          element={
            <>
              <WatchedListSummary watched={watched} />
              <WatchedList watched={watched} />
            </>
          }
        /> */}
        <Box>
          <MoviesList movies={movies} />
        </Box>
        <Box>
          <WatchedListSummary watched={watched} />
          <WatchedList watched={watched} />
        </Box>
      </main>
    </>
  );
}
