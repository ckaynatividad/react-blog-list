import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import { getBlogs } from './services/blogs';
import BlogCard from './components/BlogCard/BlogCard';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';

function App() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getBlogs();
      setBlogs(data);
    };
    fetchData();
  }, []);
  return (
    <section className="main">
      <Header />
      {blogs.map((blog) => (
        <BlogCard key={blog.id} {...blog} />
      ))}
      <Footer />
    </section>
  );
}

export default App;
