import React from "react";
import { Outlet } from "react-router-dom";
import { ResponsiveAppBar } from "components/ResponsiveAppBar";
import { OwnNavBar } from "components/OwnNavBar";
import { NavbarSpacer } from "./styles";

const PublicRouter = () => {
    return(
        <>
            <OwnNavBar></OwnNavBar>
            <NavbarSpacer></NavbarSpacer>
            <Outlet/>
        </>
    );
};
export default PublicRouter;