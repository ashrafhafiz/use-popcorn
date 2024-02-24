import ListItem from "./ListItem";

export default function MoviesList({ movies }) {
  return (
    <ul className="list">
      {movies?.map((movie) => (
        <ListItem movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}
