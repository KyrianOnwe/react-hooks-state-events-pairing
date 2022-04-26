function Comments({ changeCall, key, user, comment }){
    console.log(comment)
    return (
        <div onChange={changeCall}>
            <h4 key={key}>{user} says: { comment }</h4>
        </div>
    )

}

export default Comments