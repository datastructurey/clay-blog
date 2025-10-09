import {usePluginData} from "@docusaurus/useGlobalData";
import type {BlogPost} from "@docusaurus/plugin-content-blog";
import {motion} from 'framer-motion'
import {cn} from "@site/src/lib/utils";
import Link from "@docusaurus/Link";
import Image from "@theme/IdealImage"


function BlogItem({post}: { post: BlogPost }) {
  const {
    metadata: {permalink, frontMatter, title, description},
  } = post

  return (
    <motion.li
      className={cn('card', 'margin-bottom--md flex w-full bg-blog shadow-blog')}
      key={permalink}
      initial={{y: 100, opacity: 0.001}}
      whileInView={{y: 0, opacity: 1, transition: {duration: 0.5}}}
      whileHover={{y: -10, transition: {duration: 0.3}}}
      viewport={{once: true}}
    >
      {frontMatter.image && (
        <Link href={permalink} className="max-h-[240px] w-full cursor-pointer overflow-hidden object-cover">
          <Image src={frontMatter?.image} alt={title} img=""/>
        </Link>
      )}
      <div className="card__body">
        <h4 className="text-base">
          <Link href={permalink} className="relative hover:no-underline">
            {title}
          </Link>
        </h4>
        <p className="text-sm">{description}</p>
      </div>
    </motion.li>
  )
}

function HeaderBlog() {
  const blogData = usePluginData('docusaurus-plugin-content-blog') as {
    posts: BlogPost[]
    postNum: number
    tagNum: number
  }
  console.log(blogData)
  return <motion.ul>
    {
      blogData.posts.map(post => {
        return <BlogItem key={post.id} post={post}></BlogItem>
      })
    }
  </motion.ul>
}

export default HeaderBlog;