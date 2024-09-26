import { useState } from "react";
import Card from "./Card";
import CardType from "./CardType";
import CardWookiee from "./CardWookiee";

function Search() {
  const [searchInput, setSearchInput] = useState<string>("");
  const [searchOutput, setSearchOutput] = useState<any>(null);
  const [searchType, setSearchType] = useState<string>("");
  const [searchFormat, setSearchFormat] = useState<"json" | "wookiee" | "">("");
  const [error, setError] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  const getData = async () => {
    if (searchInput === "") {
      return;
    }
    try {
      const response = await fetch(
        `http://localhost:3000/search?type=${searchType}&search=${searchInput}&format=${searchFormat}`,
        {
          method: "GET",
        }
      );
      const data = await response.json();
      if (searchFormat === "json") {
        if (data.results.length !== 0) {
          setSearchOutput(data.results);
        } else {
          setError(true);
        }
      } else {
        console.log(data);
        if (data.rcwochuanaoc.length !== 0) {
          setSearchOutput(data.rcwochuanaoc);
        } else {
          setError(true);
        }
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const selectType = (value: string) => {
    setSearchType(value);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      {error === true ? (
        <div className="text-white text-3xl">Nothing Found</div>
      ) : searchOutput !== null ? (
        <div className="flex flex-wrap gap-4 place-content-center my-10">
          {searchFormat === "json" ? (
            <Card data={searchOutput} type={searchType} />
          ) : (
            <CardWookiee data={searchOutput} type={searchType} />
          )}
        </div>
      ) : searchFormat === "" ? (
        <>
          <p className="text-white text-3xl mb-6">
            What language are you speaking?
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => setSearchFormat("json")}
              className="my-2 mx-6 p-2 text-white bg-black border-2 border-yellow-400 rounded-2xl cursor-pointer hover:shadow-[0_0_5px_3px_#facc15] transition-shadow duration-300"
            >
              English
            </button>
            <button
              onClick={() => setSearchFormat("wookiee")}
              className="my-2 mx-6 p-4 text-white bg-black border-2 border-yellow-400 rounded-2xl cursor-pointer hover:shadow-[0_0_5px_3px_#facc15] transition-shadow duration-300"
            >
              Wookiee
            </button>
          </div>
        </>
      ) : searchType === "" ? (
        <>
          <p className="text-white text-3xl mb-6">
            What are you searching for?
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <CardType type="vehicles" selectType={selectType} />
            {searchFormat === "json" && (
              <CardType type="films" selectType={selectType} />
            )}
            <CardType type="people" selectType={selectType} />
            <CardType type="starships" selectType={selectType} />
            <CardType type="planets" selectType={selectType} />
          </div>
        </>
      ) : (
        <>
          <input
            type="search"
            placeholder={`Search the ${searchType} here`}
            onChange={handleChange}
            value={searchInput}
            className="my-2 mx-6 p-4 text-white bg-black border-2 border-yellow-400 rounded-2xl"
          />
          <button
            onClick={getData}
            className="my-2 mx-6 p-4 text-white bg-black border-2 border-yellow-400 rounded-2xl cursor-pointer hover:shadow-[0_0_5px_3px_#facc15] transition-shadow duration-300"
          >
            Search
          </button>
        </>
      )}
    </div>
  );
}

export default Search;
