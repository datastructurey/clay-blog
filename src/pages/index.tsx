import type {ReactNode} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HeaderBlog from "@site/src/components/HeaderBlog";


export default function Home(): ReactNode {
  // const {siteConfig} = useDocusaurusContext();

  return (
    <Layout
      title={`欢迎访问`}
      description="Description will go into a meta tag in <head />">
      <main>
        <HeaderBlog></HeaderBlog>
      </main>
    </Layout>
  );
}
