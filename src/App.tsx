import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CyclesContextProvider } from "./contexts/CyclesContext";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./global/GlobalStyle";
import { BodyStyle } from "./BodyStyle.styles";
import { Historico } from "./pages/historico/Historico";
import { Header } from "./components/header/Header";
import { Home } from "./pages/home/Home";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <CyclesContextProvider>
          <BodyStyle>

            <Header/>

            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/historico" element={<Historico/>}/>
            </Routes>

            <GlobalStyle/>

          </BodyStyle>
        </CyclesContextProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
