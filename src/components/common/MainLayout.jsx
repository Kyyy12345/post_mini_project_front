/** @jsxImportSource @emotion/react */

import  * as s  from "./styles";

function MainLayout({children}) {
    // console.log(props);
    return <div css={s.layout}>
        <div css={s.frame}>
            <div css={s.frameContainer}>
                {children}
            </div>
        </div>
    </div>
}

export default MainLayout;