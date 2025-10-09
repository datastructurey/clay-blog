import {usePluginData} from "@docusaurus/useGlobalData";
import type {BlogPost} from "@docusaurus/plugin-content-blog";


function headerBlog() {
  const blogData = usePluginData('docusaurus-plugin-content-blog') as {
    posts: BlogPost[]
    postNum: number
    tagNum: number
  }
  console.log(blogData)
  return <div>
    1
  </div>
}

export default headerBlog;