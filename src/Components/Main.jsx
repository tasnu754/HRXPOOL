import { Outlet } from "react-router-dom";

const Main = () => {
    return (

        <div className=" font-noto header nav-col scroll-smooth w-full overflow-hidden min-h-screen"
        style={{ scrollBehavior: "smooth", color: "#fff" }}>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;