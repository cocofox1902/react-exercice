import Search from "./Search/Search";
import Login from "./Login/Login";
import { useState } from "react";

function App() {
  const [loginState, setLoginState] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-no-repeat bg-center bg-cover bg-[url('/Assets/background_starwars.gif')]">
      {loginState ? (
        <Search></Search>
      ) : (
        <Login setLoginState={setLoginState}></Login>
      )}
    </div>
  );
}

export default App;
