import Header from './components/Header'
import Footer from './components/Footer'
import Card from './components/Card/Card'
import Plp from './components/Plp'
import Filters from './components/Filters'
import { useState } from 'react'
import data from './DB/data'

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [database, setDatabase]  = useState(data);


  // Callback functions to update filtering criteria
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handlePriceChange = (price) => {
    setSelectedPrice(price);
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleBrandChange = (brand) => {
    setSelectedBrand(brand);
  };

  // const filteredData = selectedCategory == 'All' ? data : data.filter(item => item.category == selectedCategory);
  const filteredData = data.filter((item) => (
    (selectedCategory === 'All' || item.category === selectedCategory) &&
    (selectedColor === 'All' || item.color === selectedColor) &&
    (selectedBrand === 'All' || item.company === selectedBrand)
  ));
  

  
  console.log(filteredData)
  console.log(selectedCategory)

  return (
    <>
     <Header/>
     <Filters
        selectedCategory={selectedCategory}
        selectedPrice={selectedPrice}
        selectedColor={selectedColor}
        selectedBrand={selectedBrand}
        handleCategoryChange={handleCategoryChange}
        handlePriceChange={handlePriceChange}
        handleColorChange={handleColorChange}
        handleBrandChange={handleBrandChange}
      />
     <Card/>
     <Plp filteredData = {filteredData}/>
     <Footer/>
    </>
  )
}

export default App
