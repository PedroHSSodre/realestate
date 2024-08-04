import "./searchbar.scss";

import { useState } from "react";
import { Link } from "react-router-dom";

const Searchbar = () => {
  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const switchType = (type: string) =>
    setQuery((query) => ({ ...query, type }));

  return (
    <div className="searchbar">
      <div className="type">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => switchType(type)}
            className={query.type === type ? "active" : ""}
          >
            {type}
          </button>
        ))}
      </div>
      <form>
        <input type="text" name="location" placeholder="City Location"></input>
        <input
          type="number"
          name="minPrice"
          min={0}
          max={100000}
          placeholder="Min Price"
        ></input>
        <input
          type="number"
          name="maxPrice"
          min={0}
          max={100000}
          placeholder="Max Price"
        ></input>

        <button>
          <Link to={"/list"}>
            <img src="/search.png" alt="search-icon" />
          </Link>
        </button>
      </form>
    </div>
  );
};

const types = ["buy", "rent"];

export default Searchbar;
