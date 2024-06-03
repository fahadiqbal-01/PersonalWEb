import { useState } from "react";
import RootLayout from "./Components/layout/RootLayout";
import Home from "./Pages/Home";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import About from "./Pages/About";
import Contacts from "./Pages/Contacts";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Contacts" element={<Contacts />} />
    </Route>
  )
);

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
