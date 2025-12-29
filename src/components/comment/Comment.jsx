import { BiSend } from "react-icons/bi";
import  * as s  from "./styles";
import { useState } from "react";
import { useCreatePostCommentMutation } from "../../mutations/postMutations";
import { useGetCommentsQuery } from "../../queries/commentsQueries";
import { commentProfileImage } from "./styles";
/** @jsxImportSource @emotion/react */

function Comment({postId}) {

    const [inputValue, setInputValue] = useState("");
    const [ recomment, setRecomment ] = useState({
        parentCommentId: 0,
        parentUserId: 0,
    });
    const commentMutation = useCreatePostCommentMutation();
    const {isLoading, data, refetch} = useGetCommentsQuery(postId);


    const handleOnChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleOnSubmit = async() => {
        const data = {
            parentCommentId: 0,
            parentUserId: 0,
            content: inputValue,
        };

        await commentMutation.mutateAsync({postId, data});
        await refetch();
        alert("댓글 작성 완료");
        setInputValue("");
    }

    const handleOnKeyDown = (e) => {
        if (e.key === "Enter") {
            handleOnSubmit();
        }
    }

    const handleRecommentOnClick = (commentId, userId) => {
        setRecomment({
            parentCommentId: commentId,
            parentUserId: userId,
        });
    }
    // console.log(data);
    


    return <div css={s.layout}>
        <h2>댓글</h2>
        <div css={s.commentItemList}>
            {
                !isLoading &&
                data.data.map(comment => (
                <div key={comment.commentId} css={s.commentItem(comment.level, !!recomment.parentCommentId)}>
                    <div>
                        <div css={s.commentProfileImage(comment.imgUrl)}></div>
                        <div>{comment.nickname}</div>
                    </div>
                    <div><span>{!!comment.parentNickname && "@" + comment.parentNickname }</span> {comment.content}</div>
                    <div>{new Date(comment.createdAt).toLocaleString()} {!comment.parentCommentId && <span onClick={() => handleRecommentOnClick(comment.commentId, comment.userId)}>답글달기</span>}</div>
                </div>

                ))
            }
        </div>
        <div>
            <div css={s.commentInput}>
                <input type="text"
                    placeholder="댓글을 입력하세요."
                    value={inputValue}
                    onChange={handleOnChange}
                    onKeyDown={handleOnKeyDown} />
                <BiSend onClick={handleOnSubmit}/>
            </div>
        </div>
        
    </div>
}

export default Comment;
