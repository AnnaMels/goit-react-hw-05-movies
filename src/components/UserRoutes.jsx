import { lazy, Suspense } from 'react';

import { Routes, Route } from "react-router-dom";

const HomePage = lazy(() => import ('../pages/HomePage.jsx'));
const Card = lazy(() => import ('../pages/MovieCardPage.jsx'));
const CastPage = lazy (() => import ('../pages/CastPage.jsx'));
const SearchMovie = lazy(()=> import ('../pages/MoviesSearchPage/MoviesSearchPage.jsx'));
const ReviewPage = lazy(() => import('../pages/ReviewPage.jsx'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));


const UserRoutes = () => {
    return (
        <Suspense fallback={<p>...Loading</p>}>
            <Routes>
                <Route path="/" element={<HomePage />} />
                {/* <Route path="goit-react-hw-05-movies" element={<HomePage />} /> */}

                <Route path="/movies" element={<SearchMovie />} />
                <Route path="/movies/:id" element={<Card />}>
                    <Route path="cast" element={<CastPage />} />
                    <Route path="review" element={<ReviewPage />} />
                </Route>
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Suspense>
    )
};

export default UserRoutes;