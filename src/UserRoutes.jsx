import { lazy, Suspense } from 'react';

import { Routes, Route } from "react-router-dom";

const HomePage = lazy(() => import ('../src/pages/HomePage.jsx'));
const Card = lazy(() => import ('../src/pages/MovieCardPage.jsx'));
const CastPage = lazy (() => import ('../src/pages/CastPage.jsx'));
const SearchMovie = lazy(()=> import ('./pages/MoviesSearchPage/MoviesSearchPage.jsx'));
const ReviewPage = lazy(() => import('../src/pages/ReviewPage.jsx'));
const NotFoundPage = lazy(() => import('../src/pages/NotFoundPage'));


const UserRoutes = () => {
    return (
        <Suspense fallback={<p>...Loading</p>}>
            <Routes>
                {/* <Route path="/" element={<HomePage />} /> */}
                <Route path="goit-react-hw-05-movies" element={<HomePage />} />

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