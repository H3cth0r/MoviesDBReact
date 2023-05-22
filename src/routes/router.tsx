import { Home } from "pages/Home";
import { RouteObject, createBrowserRouter } from "react-router-dom";
import PrivateRouter from "./PrivateRouter";
import PublicRouter from "./PublicRouter";
import { Popular } from "pages/Popular";
import { MovieSelection } from "pages/MovieSelection";
import { Favorites } from "pages/Favorites";
import { TopRated } from "pages/TopRated";
import { NowPlaying } from "pages/NowPlaying";

const routes: RouteObject[] = [
    {
        path: '/', element: <PublicRouter />,
        children: [
            {path: '', element: <Home/>},
            {path: 'movie-selection/:movieIdProp', element: <MovieSelection/>},
            {path: 'popular', element: <Popular texto="Populares"/>},
            {path: 'top-rated', element: <TopRated/>},
            {path: 'now-playing', element: <NowPlaying/>},
            {path: 'my-favorites', element: <Favorites/>},
        ]
    },
    {
        path: '/logged', element: <PrivateRouter />,
        children: [
            {path: "", element: <Home/>},
            {path: 'movie-selection/:movieIdProp', element: <MovieSelection/>},
            {path: 'popular', element: <Popular texto="Populares"/>},
            {path: 'top-rated', element: <TopRated/>},
            {path: 'now-playing', element: <NowPlaying/>},
            {path: 'my-favorites', element: <Favorites/>},
        ]
    }
];

export const router = createBrowserRouter(routes);