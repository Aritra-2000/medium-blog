import { useParams } from "react-router-dom";
import { useBlog } from "../hooks"
import { FullBlog } from "../components/FullBlog";
import { Spinner } from "../components/Spinner";
import { Appbar } from "../components/Appbar";


export const Blog = () => {

  const { id } = useParams();

  const { loading, blog } = useBlog({
    id: Number(id || "")
  });

  if (loading) {
    return <div>
      <Appbar/>
      <Spinner/>
    </div>
  }

  return (
    <div>
    {blog && <FullBlog blog={blog} />}
    </div>
  )
}
