function LikeAndUnlike(props){
    return(
        <div>
            <div>
                <button onClick={props.clickAct}>{props.likes} 👍</button><button onClick={props.clickActi}>{props.dislikes} 👎</button>
            </div>
            <div>
                <button onClick={props.changeCommentsView}>{props.showingComments}</button>
            </div>            
        </div>
    )

}

export default LikeAndUnlike;