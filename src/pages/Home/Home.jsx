import React from 'react'
import Layout from '../../components/Layout/Layout'
import Hero from '../../components/Hero/Hero';
import BlogCard from '../../components/BlogCard/BlogCard';
import Loader from '../../components/Loader/Loader';

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
}, [])
  return (
    <Layout>
         <Hero/>
         <BlogCard/>
         <Loader/>
    </Layout>
  )
}

export default Home


