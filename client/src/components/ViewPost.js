import React from "react"
import { usePost } from "../hooks"

export default props => {
    const post = usePost(props.match.params.id)

    return (
        <div className="viewPost">
            <header>
                <h1>View Post: {post.name}</h1>               
            </header>
            <p>{post.post}</p>
        </div>
    )
}