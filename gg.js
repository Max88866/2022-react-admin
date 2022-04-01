import React, { useState, useEffect } from "react";
import Posts from "./components/Posts";
import Pagination from "./components/Pagination";
import "./App.css";

const App = () => {
  interface Person {
    id: number;
    age: number;
    name: string;
  }
  const persons: Person[] = [
    {
      id: 1,
      age: 7,
      name: "vasja",
    },
    {
      id: 2,
      age: 5,
      name: "petya",
    },
    {
      id: 3,
      age: 10,
      name: "vasja 10",
    },
    {
      id: 4,
      age: 20,
      name: "vasja 20",
    },
    {
      id: 5,
      age: 8,
      name: "vasja 8",
    },
    {
      id: 6,
      age: 20,
      name: "vasja 20",
    },
    {
      id: 7,
      age: 30,
      name: "vasja 30",
    },
    {
      id: 8,
      age: 5,
      name: "vasja 5",
    },
    {
      id: 9,
      age: 10,
      name: "vasja 10",
    },
    {
      id: 10,
      age: 5,
      name: "vasja 5",
    },
    {
      id: 11,
      age: 30,
      name: "vasja 30",
    },
    {
      id: 12,
      age: 20,
      name: "vasja20",
    },
  ];
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = () => {
      setLoading(true);
      setPosts(persons);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container">
      <h1 className="text-primary">12324</h1>
      <Posts posts={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
};

export default App;

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className="list-group">
      {posts.map((post) => (
        <li key={post.id} className="list-group-item">
          {post.title}
        </li>
      ))}
    </ul>
  );
};

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} href="!#" className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
