import { Outlet } from "react-router-dom";
import Header from "./Header/Header";

function RootLayout() {
    return (
        <div>
            <Header />
            <div style={{ minHeight: "90vh" }}>
              
                    {" "}
                    <Outlet />
              
            </div>
        </div>
    );
}

export default RootLayout;