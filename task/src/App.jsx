import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Layout from "./components/layout/Layout";
import "./styles/index.css";
import Home from "./pages/home/Home";
import { RouterProvider, createBrowserRouter }from 'react-router-dom'
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import ContactForm from "./components/contactForm/ContactForm";
import ContactEmail from "./components/contactEmail/ContactEmail"
import ContactReview from "./components/contactReview/ContactReview";
import NotFound from "./pages/notfound/NotFound";
function App() {

    const routing = createBrowserRouter(
      [
        {path: '/' , element: <Layout></Layout> , children: [
          {path:"/" , element: <Home></Home>},
          {path:"/about" , element: <About></About>},
          {path:"/contact" , element: <Contact></Contact> , children: [
            {path: "/contact/form", element: <ContactForm></ContactForm>},
            {path: "/contact/email", element: <ContactEmail></ContactEmail>},
            {path: "/contact/review", element:<ContactReview></ContactReview>}
          ]},
          {path:"*", element: <NotFound></NotFound>}
        ]}
      ]
    )


  return (
    <>
      <RouterProvider router={routing}></RouterProvider>
    </>
  );
}

export default App;
