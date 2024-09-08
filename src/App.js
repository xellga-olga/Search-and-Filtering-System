import { useState } from "react";
import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";

//DATABASE
import products from "./assets/data";
import Card from "./components/Card";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  //Input Filter
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter((product) =>
    product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase() !== -1)
  );

  // Radio Filter
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Buttons Filter
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filtering input items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, title, newPrice }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    const result = filteredData(products, selectedCategory, query)

    return filteredProducts.map(({ img, title, star, reviews, newPrice, prevPrice }) => (
      <Card key={Math.random()} 
      img={img}
      title={title}
      star={star}
      reviews={reviews}
      newPrice={newPrice}
      prevPrice={prevPrice}
      />
    ));
  }

  return (
    <>
      <Sidebar handleChange={handleChange}/>
      <Navigation />
      <Recommended />
      <Products />
    </>
  );
}

export default App;
