
import {useParams, Link, Outlet} from "react-router-dom";

// ==========================
// DATA 
// ==========================
export const BlogPosts = [
  {
    id:"1",
    slug: "first-blog-post",
    title: "First Blog Post",
    description: "Lorem ipsum dolor sit amet",
  },
  {
    id:"2",
    slug: "second-blog-post",
    title: "Second Blog Post",
    description: "Hello React Router v6",
  },
  {
    id:"3",
    slug: "third-blog-post",
    title: "Third Blog Post",
    description: "Route In React",
  },
];



function About(){
    return(
        <div className="About">
            <h1>About me</h1>
            <p>Sau đây là các blog của tôi:</p>
           
            <ul>
                {BlogPosts.map((p)=>(
                    <li key={p.id}><Link to ={`/about/${p.id}`}>{p.title}</Link></li>
                ))}
            </ul>
            <hr></hr>
            <Outlet/>
        </div>
    );
}
export default About;