/** @jsxImportSource @emotion/react */

import  * as s  from "./styles";

function MainLayout({children}) {
    // console.log(props);
    return <div css={s.layout}>
        <div css={s.frame}>
            <div css={s.frameContainer}>
                <div>
                    {children}  {/*AuthRoute의 결과를 표시할 준비*/}
                </div>
            </div>
        </div>
    </div>
}

export default MainLayout;