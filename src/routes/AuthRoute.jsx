import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Login from "../pages/auth/Login";
import Logout from "../pages/auth/Logout";

import { useEffect } from "react";
import OAuth2 from "../pages/auth/OAuth2";
import { useMeQuery } from "../queries/usersQueries";
import Loading from "../components/common/Loading";
import Home from "../pages/home/Home";
import LeftSideBar from "../components/common/LeftSideBar";

function AuthRoute() {
    const navigate = useNavigate(); // Maps함수를 가져와 준비 (페이지 이동을 위해)
    const location = useLocation(); //경로가져오기 , 현재 경로('/auth/login', '/') 정보를 가져옴
    const {pathname} = location;

    const meQuery = useMeQuery();

    // 강제 페이지 이동
    useEffect(() => {
        const { isLoading, data } = meQuery;
        if(!isLoading) {
            if (data.status !== 200) {
                if (!pathname.startsWith("/auth")) { 
                    navigate("/auth/login"); //Maps("/auth/login")가 호출
                } 
            }   else {
                    if (pathname.startsWith("/auth")) { 
                    navigate("/"); 
                }
            }
        }
        
    }, [pathname, meQuery.data]);

    if (meQuery.isLoading) {
        return <Loading></Loading>;
    }

    if (meQuery.isSuccess && meQuery.data.status !== 200) {
        return <Routes>
            <Route path="/auth/login" element={<Login/>}></Route>
            <Route path="/auth/login/oauth2" element={<OAuth2/>}></Route>
        </Routes>
    }   
    
    //로딩중 랜더링 막기
    return <LeftSideBar>
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/logout" element={<Logout/>}></Route>
        </Routes>

    </LeftSideBar>
    
}

export default AuthRoute;
