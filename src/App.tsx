import "./App.css";
import AboutMe from "./pages/AboutMe";
import AllProjects from "./pages/AllProjects";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FullStack from "./pages/Stack";
import Contact from "./pages/Contact";
import Layout from "./pages/Layout";

const ErrorPage = () => {
  return <>404 error</>;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/aboutMe",
    element: (
      <Layout>
        <AboutMe />
      </Layout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/allProjects",
    element: (
      <Layout>
        <AllProjects />
      </Layout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/fullStack",
    element: (
      <Layout>
        <FullStack />
      </Layout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/contact",
    element: (
      <Layout isContact={true}>
        <Contact />
      </Layout>
    ),
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
