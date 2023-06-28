import {useState} from "react";
import "./App.css";


const App = () => {
  const [isVerified, setisVerified] = useState (false);

  return (
   <>
    <h1> MeghaMathur </h1>
    {isVerified ? (
      <p style =  {{ backgroundcolor: " blue", alignItems : "center" , textDecorationColor: "green",}}> meghaMathur is verifiedUserIcon
       </p> 
    ) : null }
    <div>
    <button onClick ={() => setisVerified(true)}  type ="button">
      verify MeghaMathur
    </button>
    </div>
   </>
  );
}

export default App;
