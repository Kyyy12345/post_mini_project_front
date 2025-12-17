
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useMeQuery } from "../../queries/usersQueries";

function OAuth2() {
    const navigate = useNavigate();
    const [ SearchParams ] = useSearchParams();
    const accessToken = SearchParams.get("accessToken");

    if (!!accessToken) {
        localStorage.setItem("AccessToken", accessToken);
    } 

    const meQuery = useMeQuery(); //캐시에 있는지 확인 이때 null로 요청한번

    useEffect(() => {
        const { isLoading, data } = meQuery;
        console.log(meQuery.data);
        console.log(meQuery.isError);
        console.log(meQuery.isLoading);
        console.log(meQuery.isSuccess);

        if (!isLoading) {
            if (data.status !== 200) {
                alert("인증이 필요합니다.");
                navigate("/auth/login");
            } else {
                alert("로그인 성공");
                navigate("/");
            }
        }

        
        
    }, [meQuery.data]);

    // useEffect(() => {
    //     console.log(accessToken);
        

    //     if (!!accessToken) {
    //         alert("로그인 성공!");
    //         navigate("/");
    //     } else {
    //         alert("로그인 후 이용바랍니다.");
    //         navigate("/auth/login");
    //     }
        
    // }, [accessToken])
    return <>

    </>
}

export default OAuth2;