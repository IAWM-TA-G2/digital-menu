import { HashRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";


const App = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
      </Route>
    </Routes>
  </HashRouter>
);

export default App;