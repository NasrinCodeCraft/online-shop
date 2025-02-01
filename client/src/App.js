import styled, { ThemeProvider } from "styled-components";
import { lightTheme } from "./utils/Themes";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ShopListing from "./pages/ShopListing";
import Authentication from "./pages/Authentication";
import { useState } from "react";


const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${({theme}) => theme.bg};
`;

function App() {

  const [openAuth, setOpenAuth] = useState(false);

  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        <Container>
          <Navbar setOpenAuth={setOpenAuth}/>
          <Routes>
            <Route path="/" exact element={<Home />}/>
            <Route path="/shop" exact element={<ShopListing />} />
          </Routes>
          {openAuth && <Authentication openAuth={openAuth} setOpenAuth={setOpenAuth}/>}
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
