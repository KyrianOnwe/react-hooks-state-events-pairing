import { useState } from "react/cjs/react.development";
import ViewsPanel from "./ViewsPanel"
import LikeAndUnlike from "./LikeAndUnlike";
import Comments from "./Comments";

function CommentsContainer(commentData){
    //console.log(commentData.commentData.views)
    const comments = commentData.commentData.comments
    //console.log(comments)
    let commentsShrine 
    let showComments
    let likesShrine
    let dislikesShrine
    

    const [commentsState, setCommentsState] = useState(false)

    function handleSetCommentState(){
        setCommentsState(!commentsState);
    }

    function handleSetCommentStateClick(){
        !commentsState ? commentsShrine = [...comments] : commentsShrine = []

    }
    function handleShowComments(){
        !commentsState ? showComments = "Hide Comments" : showComments = "Show Comments"
    }

    handleSetCommentStateClick()
    handleShowComments()



    let [likes, setLikes] = useState(commentData.commentData.upvotes)

    function handleUpVotes(){
        setLikes(likes ++)
    }

    likesShrine = likes

    let [dislikes, setDislikes] = useState(commentData.commentData.downvotes)

    function handleDownVotes(){
        setDislikes(dislikes --)
    }

    dislikesShrine = dislikes




    return (
        <div className="container">
            <h1>React Today and Tomorrow and 90%Clear React With Hooks</h1>
            <ViewsPanel views={commentData.commentData.views} date={commentData.commentData.createdAt}/>
            <LikeAndUnlike changeCommentsView={handleSetCommentState} likes={likesShrine} dislikes={dislikesShrine} clickAct={handleUpVotes} clickActi={handleDownVotes} showingComments={showComments}/>
            {commentsShrine.map((comment) => <Comments key={comment.id} user={comment.user} comment={comment.comment}/>)}
            
        </div>
    )

}

export default CommentsContainer;