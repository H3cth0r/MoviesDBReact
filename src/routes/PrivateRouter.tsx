import { OwnNavBar } from "components/OwnNavBar";
import { ResponsiveAppBar } from "components/ResponsiveAppBar";
import React from "react";
import { Outlet } from "react-router-dom";
import { NavbarSpacer } from "./styles";

const PrivateRouter = () => {
    return(
        <>
            <OwnNavBar></OwnNavBar>
            <NavbarSpacer></NavbarSpacer>
            <Outlet/>
        </>
    );
};
export default PrivateRouter;