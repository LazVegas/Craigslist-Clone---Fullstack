import React, { useState } from "react"
import { useCreatePost } from '../hooks'

export default props => {
    const create = useCreatePost()

    const [name, setName] = useState("")
    const [post, setPost] = useState("")

    function handleSubmit(e) {
        e.preventDefault()

        create(props.match.params.slug, name, post).then(() => {
            props.history.push("/" + props.match.params.slug)
        })
    }

    return (
        <div className="postForm">
            <section>
                <header>
                    <h1>Submit Post to /{props.match.params.slug}</h1>
                </header>
                <form onSubmit={handleSubmit}>
                    <label id="postName" htmlFor="name">Post Name</label>
                    <br />
                    <input 
                        type="text"
                        name="name"
                        id="postInput"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <br />
                    <br />
                    <label htmlFor="name">Post Content</label><br />
                    <textarea name="post" id="postContent" value={post} onChange={e => setPost(e.target.value)} /><br /><br />
                    <button type="submit">Submit</button>
                </form>
            </section>
            <div>
                <form onSubmit={handleSubmit}></form>
            </div>
        </div>
    )
}