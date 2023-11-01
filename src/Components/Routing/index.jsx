import React from "react";
import { Route, Routes } from "react-router";
import { myRoutes } from "../MyRoutes";
import HomePage from "../../Pages/HomePage";
import ErrorPage from "../../Pages/ErrorPage";
import Services from "../../Pages/Services";
import Blog from "../../Pages/Blog";
import Project from "../../Pages/Project";
import Contact from "../../Pages/Contact";

const WebRouting = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/services" element={<Services />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/project" element={<Project />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};
export default WebRouting;

// {myRoutes.map(({ id, path, Element }) => {
//   return <Route key={id} path={path} element={<Element />} />;
//   })}
