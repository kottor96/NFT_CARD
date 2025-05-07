import './App.css'
import  Card  from './componants/card'

function App() {

  return (
    <>
      <Card 
        titre='Equilibrium #3429' 
        p='Our Equilibrium collection promotes balance and calm.' 
        img1='./src/assets/image-equilibrium.jpg' 
        img2='./src/assets/image-avatar.png' 
        nbr1={0.041} 
        nbr2={3} 
        nom="Jules Wyvern"
      />
    </>
  )
}

export default App
