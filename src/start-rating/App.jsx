import { useState } from "react";
import StarRating from "./StartRating";

function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating
        maxRating={10}
        size={20}
        color="blue"
        // defaultRating={7}
        onSetRating={setMovieRating}
      />
      <p>This movie rated {movieRating} stars</p>
    </div>
  );
}

export default function App() {
  return (
    <>
      <StarRating maxRating={10} size={20} color="#05a743" defaultRating={7} />
      <StarRating
        maxRating={5}
        size={30}
        messages={["Bad", "Fair", "OK", "Good", "Amazing"]}
      />
      <Test />
    </>
  );
}
