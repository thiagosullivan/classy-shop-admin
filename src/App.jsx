import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import "./App.css";
import { Dashboard } from "./Pages/Dashboard";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { LoginPage } from "./Pages/Login";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      exact: true,
      element: (
        <>
          <section className="main bg-[#f1f1f1]">
            <Header />
            <div className="contentMain flex">
              <div className="sidebarWrapper w-[15%]">
                <Sidebar />
              </div>
              <div className="contentRight py-4 px-5 w-[80%]">
                <Dashboard />
              </div>
            </div>
          </section>
        </>
      ),
    },
    {
      path: "/login",
      exact: true,
      element: <LoginPage />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
