import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useRecoilState } from "recoil";
import { ThemeProvider } from "styled-components";
import { isLightModeState } from "./atom";
import Header from "./Components/Header/Header";
import Home from "./Routes/Home/Home";
import Signup from "./Components/Modal/SignUpModal";
import { GlobalStyle } from "./styles/global-style";
import { darkTheme, lightTheme } from "./theme";
import Campaigns from "./Routes/Campaigns/Campaigns";
import Past from "./Routes/Campaigns/Past";
import Present from "./Routes/Campaigns/Present";
import Mypage from "./Routes/Mypage/Mypage";

function App() {
  const [mode, setMode] = useRecoilState(isLightModeState);

  return (
    <ThemeProvider theme={mode ? lightTheme : darkTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/campaigns" element={<Campaigns />}>
            <Route path="present" element={<Present />} />
            <Route path="past" element={<Past />} />
          </Route>
          <Route path="/mypage" element={<Mypage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
