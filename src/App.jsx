import FrontCard from "./components/FrontCard"
import BackCard from "./components/BackCard"
import { useState } from "react";

function App() {
  const mainCardStyles = "w-[90%] sm:w-[450px] h-[450px] bg-dark_blue rounded-[25px] grid gap-12 content-center p-8";

  const [ratingVal, setRatingVal] = useState(null)
  const [hideFrontCard, setHideFrontCard] = useState(false)

  function getButtonValues(e){
    setRatingVal(e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault();

    if(ratingVal == null){
      alert("Please choose a rating number from 1 - 5")
    }
    else{
      setHideFrontCard(true)
    }
  }

  return (
    <main className="App font-overpass h-screen bg-very_dark_blue min-h-[500px] grid items-center justify-items-center">
      <FrontCard 
        mainCardStyle={mainCardStyles} 
        getButtonValues={getButtonValues}
        handleSubmit={handleSubmit}
        hideFrontCard={hideFrontCard}
      />
      <BackCard 
        mainCardStyle={mainCardStyles}
        ratingVal={ratingVal}
        hideFrontCard={hideFrontCard}
      />
    </main>
  )
}

export default App
