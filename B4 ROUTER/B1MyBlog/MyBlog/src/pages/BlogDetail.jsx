import About from "./About";
import { useParams, Link } from "react-router-dom";
import { BlogPosts } from "./About";

function BlogDetail(){
    const {id} = useParams();
    const blog = BlogPosts.find((b) => b.id === id) 

    if (!blog) {
        return <h1>❌ Không tìm thấy blog</h1>;
    }
    return(
        <>
            <p>Mã blog :{blog.id}</p>
            <p>Slug : {blog.slug}</p>
            <p>{blog.title}</p>
            <p>{blog.description}</p>
           
        </>
    );
}
export default BlogDetail;