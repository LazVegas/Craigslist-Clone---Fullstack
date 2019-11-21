import React from "react"
import { Link } from 'react-router-dom'
import { usePosts } from '../hooks'

export default props => {
    const posts = usePosts(props.match.params.slug)

    return (
        <div className="mainPostList">
            <header>
                <h1>Posts: {props.match.params.slug}</h1>
                <Link to={"/" + props.match.params.slug + "/post"}>Add Post</Link>   
            </header>
            {posts.map(post => (
                <p id="postItems" key={"post" + post.id}>
                    <Link to={"/post/" + post.id}>{post.name}</Link>
                </p>
            ))}
        </div>
    )
}