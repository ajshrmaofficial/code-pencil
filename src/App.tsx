import { useState } from "react";
import CodeSection from "./Components/CodeSection";
import Home from "./Components/Home";
import OutputWindow from "./Components/OutputWindow";
import AppContextWrapper from "./utility/AppContextWrapper";

function App() {
  const [showPlayground, setShowPlayground] = useState<boolean>(false);

  return (
    <AppContextWrapper>
      <>
        {showPlayground && (
          <div className="h-svh w-full flex flex-row">
            <CodeSection />
            <OutputWindow />
          </div>
        )}
        {!showPlayground && <Home setShowPlayground={setShowPlayground}/>}
      </>
    </AppContextWrapper>
  );
}

export default App;
