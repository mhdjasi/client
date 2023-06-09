import React from 'react'
import Header from './Header'
import Footer from './Footer'
import {Helmet} from "react-helmet"
import  { Toaster } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';


const Layout = ({children,title,description,keywords,author}) => {
  return (
    <div>
<Helmet>
  <meta charSet='utf-8'/>
  <meta name="description" content={description} />
  <meta name="keywords" content={keywords} />
  <meta name="author" content={author} />
  <title>{title}</title>
</Helmet>
        <Header/>
        <main className='mainPage' style={{minHeight:"75vh"}}>
          <Toaster/>
          {children}</main>
        <Footer/>
    </div>
  )
};

Layout.defaultProps = {
  title: "Ecommerce Zone - Shop Now",
  keywords: "react,node,mongodb",
  description: "mern full stack project",
author: "Mohammed Jasir"
}

export default Layout