import type {ReactNode} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomeBlog from "@site/src/components/HomeBlog";


export default function Home(): ReactNode {
  // const {siteConfig} = useDocusaurusContext();

  return (
    <Layout
      title={`欢迎访问`}
      description="Description will go into a meta tag in <head />">
      <main>
        <HomeBlog></HomeBlog>
      </main>
    </Layout>
  );
}
