/** @jsxImportSource @emotion/react */
import { CircleLoader, PacmanLoader } from "react-spinners";
import  * as s  from "./styles";
function Loading() {
    return <div css = {s.loadingBox}>
        <CircleLoader color="#ffffff" loading={true} />
    </div>
}

export default Loading;