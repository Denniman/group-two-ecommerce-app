import { useLocation } from "react-router-dom";

export const Home = () => {
    const { pathname } = useLocation();

    return <div>Home {pathname}</div>;
};
