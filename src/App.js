import React from 'react'
import Header from "../src/components/Header"
import Feature from "./components/Features"
import About from "./components/About"
import aboutimage from "../src/images/Frame 19.png"
import presentation from "../src/images/presentation.png"
import Presentation from "./components/Presentation"
import Contact from "../src/components/Contact"
function App() {
  return (
    <div className="App">
      
      <Header />
      <Feature />

<About  image={aboutimage} title="Comes with all you need fro daily life" button="Get the App"  />
<Presentation />
<About  image={aboutimage} title="Download Now and Enjoy Unlimited" button="Downlaod"  />
<Contact />
    </div>
  );
}

export default App;
