import { useEffect, useState } from "react";
import Item from "./item";

const Home = () => {
  const [items, setItems] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetch('https://api.punkapi.com/v2/beers')
      .then(res => res.json())
      .then(data => setItems(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleSearch = () => {
    const queryParams = [];
    if (searchText) {
      queryParams.push(`beer_name=${searchText.replace(/ /g, "_")}`);
    }

    const apiUrl = `https://api.punkapi.com/v2/beers?${queryParams.join("&")}`;
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => setItems(data))
      .catch(error => console.error('Error fetching filtered data:', error));
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div>
      <h2 className='bg-gray-50 h-16 pt-3 text-center font-semibold text-2xl md:text-4xl text-orange-500 font-sans'>Welcome To Site</h2>
      <div className="my-5 text-base md:text-lg font-semibold py-2 text-center flex justify-center">
        <input
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={handleKeyDown}
          type="text"
          className="rounded-md h-12 px-4 border"
          placeholder={"Search Beer"}
        />
        <button className="btn bg-blue-500 border-none px-6 ml-2 text-white" onClick={handleSearch}>Search</button>
      </div>
      <div className="grid container mx-auto md:grid-cols-2 lg:grid-cols-3 gap-11 my-5">
        {items.map((item) => (
          <div key={item.id} className="flex justify-center">
            <Item data={item}></Item>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
