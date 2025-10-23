import {usePluginData} from "@docusaurus/useGlobalData";
import type {BlogPost} from "@docusaurus/plugin-content-blog";
import {motion} from 'framer-motion'
import {cn} from "@site/src/lib/utils";
import Link from "@docusaurus/Link";
import Translate from '@docusaurus/Translate'
// import IdealImage from "@theme/IdealImage"
import {Icon} from '@iconify/react'
import React, {JSX} from "react";


interface SectionProps {
  title: string | JSX.Element
  icon?: string
  href?: string
  children: React.ReactNode
}

export function BlogHeader({title, icon, href, children}: SectionProps) {
  return (
    <section className="group/section py-2 max-lg:mx-4">
      <div className="mb-4 mt-8 inline-flex w-full items-center justify-between md:mt-6">
        <h2 className="m-0 inline-flex items-center justify-center gap-1 text-base">
          {icon && <Icon icon={icon}/>}
          {title}
        </h2>
        {href && (
          <Link
            href={href}
            className="group/link inline-flex items-center justify-center text-base opacity-0 transition duration-500 group-hover/section:opacity-100"
          >
            <Translate id="homepage.lookMore">查看更多</Translate>
            <Icon icon="ri:arrow-right-s-line" className="transition group-hover/link:translate-x-1"/>
          </Link>
        )}
      </div>
      {children}
    </section>
  )
}


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
          {/*<IdealImage src={frontMatter.image} alt={title} img="" />*/}
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

function HomeBlog() {
  const blogData = usePluginData('docusaurus-plugin-content-blog') as {
    posts: BlogPost[]
    postNum: number
    tagNum: number
  }
  return (
    <BlogHeader title={<Translate id="homepage.blog.title">近期博客</Translate>} icon="ri:quill-pen-line" href="/blog">
      <motion.ul>
        {
          blogData.posts.map(post => {
            return <BlogItem key={post.id} post={post}></BlogItem>
          })
        }
      </motion.ul>
    </BlogHeader>
  )
}

export default HomeBlog;