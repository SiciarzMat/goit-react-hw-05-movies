import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "../pages/Header";

const Home = lazy(() => import("../pages/Home"));
const Movies = lazy(() => import("../pages/Movies"));
const MovieDetails = lazy(() => import("../pages/MovieDetails"));
const Cast = lazy(() => import("../pages/Cast"));
const Reviews = lazy(() => import("pages/Reviews"));
const NotFound = lazy(() => import("../components/NotFound"));

export const App = () => {

  return (
    <>

      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
