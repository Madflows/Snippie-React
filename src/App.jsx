import React from "react";

import { Header, About, Footer } from "./containers";
import { Banner } from "./components";

function App() {
  return (
    <>
      <Banner />
      <Header />
      <About />
      <Footer />
    </>
  );
}

export default App;
