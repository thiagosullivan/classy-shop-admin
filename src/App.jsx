import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import "./App.css";
import { Dashboard } from "./Pages/Dashboard";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { LoginPage } from "./Pages/Login";
import { ProductsPage } from "./Pages/Products";
import { ProductUpload } from "./Pages/ProductUpload";
import { HomeSliderBanners } from "./Pages/HomeSliderBanners";
import { CategoryUpload } from "./Pages/CategoryUpload";
import { CategoryList } from "./Pages/CategoryList";
import { SubCategoryList } from "./Pages/SubCategoryList";
import { SubCategoryUpload } from "./Pages/SubCategoryUpload";
import { Users } from "./Pages/Users";
import { ForgotPasswordPage } from "./Pages/ForgotPassword";
import { ChangePasswordPage } from "./Pages/ChangePassword";

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
    {
      path: "/products",
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
                <ProductsPage />
              </div>
            </div>
          </section>
        </>
      ),
    },
    {
      path: "/product/upload",
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
                <ProductUpload />
              </div>
            </div>
          </section>
        </>
      ),
    },
    {
      path: "/banners",
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
                <HomeSliderBanners />
              </div>
            </div>
          </section>
        </>
      ),
    },
    {
      path: "/banners/upload",
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
                <HomeSliderBanners />
              </div>
            </div>
          </section>
        </>
      ),
    },
    {
      path: "/categories",
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
                <CategoryList />
              </div>
            </div>
          </section>
        </>
      ),
    },
    {
      path: "/categories/upload",
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
                <CategoryUpload />
              </div>
            </div>
          </section>
        </>
      ),
    },
    {
      path: "/categories/subcategory",
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
                <SubCategoryList />
              </div>
            </div>
          </section>
        </>
      ),
    },
    {
      path: "/users",
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
                <Users />
              </div>
            </div>
          </section>
        </>
      ),
    },
    {
      path: "/categories/subcategory/upload",
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
                <SubCategoryUpload />
              </div>
            </div>
          </section>
        </>
      ),
    },
    {
      path: "/forgot-password",
      exact: true,
      element: <ForgotPasswordPage />,
    },
    {
      path: "/change-password",
      exact: true,
      element: <ChangePasswordPage />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
