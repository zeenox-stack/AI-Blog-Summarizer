import React, { useState, createContext } from "react";
import "./App.css";
import Header from "./features/Header/Header";
import Footer from "./features/Footer/Footer";
import Body from "./features/Body/Body";

export interface InputType {
  content: string;
  urlContent: string;
}
interface AppContextType {
  idx: number;
  setIdx: (n: number) => void;
  inputState: InputType;
  setInputState: (val: InputType) => void;
  hasFetched: boolean;
  setHasFetched: (val: boolean) => void;
}
export interface ContentType {
  text: string;
  hasStarted: boolean;
  textComplete: boolean;
  urlComplete: boolean;
}

export const AppContext = createContext<AppContextType | null>(null);

const App = React.memo(() => {
  const [idx, setIdx] = useState<number>(0);
  const [content, setContent] = useState<ContentType[]>(
    Array(4).fill({
      text: "",
      hasStarted: false,
      hasCompleted: false,
    })
  );
  const [inputState, setInputState] = useState<InputType>({
    content: "",
    urlContent: "",
  });
  const [hasFetched, setHasFetched] = useState<boolean>(false);
  return (
    <AppContext.Provider
      value={{
        idx,
        setIdx,
        inputState,
        setInputState,
        hasFetched,
        setHasFetched,
      }}
    >
      <Header />
      <Body content={content} setContent={setContent} />
      <Footer />
    </AppContext.Provider>
  );
});

export default App;
