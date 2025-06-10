import Header from '../Common/Header'
import { blog } from '../Data/blog'
import { Link } from "react-router-dom"

const Blogs = () => {
    let allBlog = blog.map((v, i) => {
        return (
            <div className="blogitems" key={i}>
                <h3>{v.title}</h3>
                <p>
                    {v.body}
                </p>

                <button><Link to={`/blog/${v.id}`}>Read More</Link></button>
            </div>
        )
    })
    return (
        <>
            <Header />
            <h1>Blogs</h1>
            <div className="container">
                {allBlog}
            </div>
        </>
    )
}

export default Blogs
