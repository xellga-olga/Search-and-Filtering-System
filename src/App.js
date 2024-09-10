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
  const [selectedPrice, setSelectedPrice] = useState(null);

  // Input Filter
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  // Radio Filter for categories and prices
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handlePriceChange = (event) => {
    setSelectedPrice(event.target.value);
  };

  // Buttons Filter (e.g. for recommended)
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selectedCategory, query, selectedPrice) {
    let filteredProducts = products;

    // Filtering by query
    if (query) {
      filteredProducts = filteredProducts.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
    }

    // Filtering by category
    if (selectedCategory) {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === selectedCategory
      );
    }

    // Filtering by price
    if (selectedPrice) {
      filteredProducts = filteredProducts.filter((product) => {
        const price = product.newPrice;
        if (selectedPrice === "50") return price <= 50;
        if (selectedPrice === "100") return price > 50 && price <= 100;
        if (selectedPrice === "150") return price > 100 && price <= 150;
        if (selectedPrice === "200") return price > 150;
        return true; // for "All" option or default case
      });
    }

    return filteredProducts;
  }

  // Get filtered result
  const result = filteredData(products, selectedCategory, query, selectedPrice);

  return (
    <>
      <Sidebar handleChange={handleChange} handlePriceChange={handlePriceChange} />
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result.map(({ id, img, title, star, reviews, newPrice, prevPrice }) => (
        <Card
          key={id}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          newPrice={newPrice}
          prevPrice={prevPrice}
        />
      ))} />
    </>
  );
}

export default App;