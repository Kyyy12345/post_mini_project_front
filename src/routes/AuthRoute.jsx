import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/SignUp";
import { useEffect } from "react";
import OAuth2 from "../pages/auth/OAuth2";

function AuthRoute() {
    const navigate = useNavigate();
    const location = useLocation(); //경로가져오기
    const {pathname} = location;

    useEffect(() => {
        if (pathname === "/") {
            navigate("/auth/login");
        }
        
    }, [pathname]);
    
    return <Routes>
        <Route path="/" element={<></>}></Route>
        <Route path="/auth/login" element={<Login/>}></Route>
        <Route path="/auth/login/oauth2" element={<OAuth2/>}></Route>
        <Route path="/auth/signup" element={<Signup/>}> </Route>
    </Routes>
}

export default AuthRoute;
