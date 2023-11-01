import HomePage from "../../Pages/HomePage";
import ErrorPage from "../../Pages/ErrorPage";
import Services from "../../Pages/Services";
import Blog from "../../Pages/Blog";
import Project from "../../Pages/Project";
import Contact from "../../Pages/Contact";

export const myRoutes = [
  { id: 1, path: "/", Element: HomePage, title: "Home" },
  { id: 2, path: "/services", Element: Services, title: "Services" },
  { id: 3, path: "/blog", Element: Blog, title: "Blog" },
  { id: 4, path: "/project", Element: Project, title: "Project" },
  { id: 5, path: "/contact", Element: Contact, title: "Contact" },
  { id: 6, path: "*", Element: ErrorPage },
];
