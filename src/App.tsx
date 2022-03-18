import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useRecoilState } from "recoil";
import { ThemeProvider } from "styled-components";
import { isLightModeState } from "./atom";
import Header from "./Components/Header/Header";
import Home from "./Routes/Home/Home";
import Signup from "./Components/Modal/Signup";
import { GlobalStyle } from "./styles/global-style";
import { darkTheme, lightTheme } from "./theme";

function App() {
  const [mode, setMode] = useRecoilState(isLightModeState);

  return (
    <ThemeProvider theme={mode ? lightTheme : darkTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
