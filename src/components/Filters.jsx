import React from "react";
import Catogary from "./filters/Catogary";
import Price from "./filters/Price";
import Color from "./filters/Color";
import Brand from "./filters/Brand";

function Filters({
  selectedCategory,
  selectedPrice,
  selectedColor,
  selectedBrand,
  handleCategoryChange,
  handlePriceChange,
  handleColorChange,
  handleBrandChange,
}) {
  return (
    <section className="px-28 pt-8">
      <Catogary
        selectedCategory={selectedCategory}
        handleCategoryChange={handleCategoryChange}
      />
    {/* <Price
      selectedPrice={selectedPrice}
      handlePriceChange={handlePriceChange}
    /> */}
      <Color
        selectedColor={selectedColor}
        handleColorChange={handleColorChange}
      />
      <Brand
        selectedBrand={selectedBrand}
        handleBrandChange={handleBrandChange}
      />
    </section>
  );
}

export default Filters;