import logo from './logo.svg';
import './App.css';
import pizza from "./pizza.png"

function App() {
  return (
    <div className="App">
    
      <div style={{border:'solid 1px black', maxWidth:'100vw'}}/>
      <h1 className="title red">Fida Ghanmi</h1>
      <h3 className="title red">Menu</h3>
      <br/>
      
<img src={pizza} height='250px' width='500px' alt='pizza' />

<br/>

<img src="/mlawi.jpg" height='250px' width='500px' alt='mlawi'/>

<br/>

<iframe width="500px" height="250px" src="https://www.youtube.com/embed/sv3TXMSv6Lw" 
title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>
        
      
    </div>
  );
}

export default App;
