import './App.css'
import img1 from './assets/image-equilibrium.jpg'
import img2 from "./assets/image-avatar.png"
import img3 from "./assets/icon-view.svg"
import Card from './componants/card'

function App() {

  return (
    <>
      <Card 
        titre='Equilibrium #3429' 
        p='Our Equilibrium collection promotes balance and calm.' 
        img1={img1} 
        img2={img2}
        nbr1={0.041} 
        nbr2={3} 
        nom="Jules Wyvern"
        img3={img3}
      />
    </>
  )
}

export default App
