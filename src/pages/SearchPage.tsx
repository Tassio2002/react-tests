import { useState } from "react";

function SearchPage() {
  const [car, setCar] = useState("");
  const [image, setImage] = useState("");

  const getImage = () => {
    fetch(`https://api.unsplash.com/search/photos?page=1&query=${car}`, {
      method: "get",
      headers: new Headers({
        Authorization: "Client-ID U7ST6T1J9DI5XAIxspN1RDPlTQbGIAC4KzzmKg70je4",
      }),
    })
      .then((response) => response.json())
      .then((data) => setImage(data.results[0].urls.regular));
  };
  return (
    <>
      <h1>Search Car</h1>
      <input type="text" onChange={(e) => setCar(e.target.value)} />
      <button onClick={getImage}>Search</button>
      <div className="result">
        <img src={image} alt="" width={600} height={600} />
      </div>
    </>
  );
}

export default SearchPage;
