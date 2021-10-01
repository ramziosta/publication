import React from "react";
import "./App.css";
import Navbar from "./Views/NavBar/Components/NavBar.js";
import Podcast from "./Views/Podcast/Components/Podcast"

function App() {
  return (
    <div className="App">
      <Navbar />
     <div class="body">
        <div class="left">
          left side
          <div class="top">
           
           <Podcast />
          </div>
          <div class="bottom"> bottom</div>
        </div>

        <div class="right">right</div>
      </div>
    </div>
  );
}

export default App;

// import React, {useEffect} from "react";
// import Map from "./components/Map/Map.jsx";
// import Header from "./components/Header/Header.jsx";

// function App() {
//     useEffect(()=>{
//       fetch('http://localhost:5000/ufo')
//       .then(response => response.json())
//       .then((data)=> {
//         console.log(`data recieved: ${JSON.stringify(data)}`)
//       })
//     })

//   return (
//     <div>
//       <Header />

//     </div>
//   );
// }

// export default App;

// //.then()
// //.then(data => console.log(data));
