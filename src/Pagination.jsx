import React, { useState } from "react";
import "./style.css";
import Follower from "./Follower";
import { useFetch } from "./useFetch";
const Pagination = () => {
  const { isLoading, followers } = useFetch();
  const [currentPage, setCurrentPage] = useState(1);

  const previousPage = () => {
    if (currentPage === 1) {
      setCurrentPage(followers.length);
    } else {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage === followers.length) {
      setCurrentPage(1);
    } else {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <main>
      <div className="section-title">
        <h1>{isLoading ? "loading..." : "Pagination"}</h1>
        <div className="underline"></div>
      </div>
      <section className="followers">
        <div className="pagination-container">
          {!isLoading &&
            followers[currentPage - 1].map((follower) => {
              return <Follower key={follower.id} {...follower} />;
            })}
        </div>
        {!isLoading && (
          <section className="btn-container">
            <button type="button" className="prev-btn" onClick={previousPage}>
              prev
            </button>
            {followers.map((_, i) => {
              const pageNum = i + 1;
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => setCurrentPage(pageNum)}
                  className={`${
                    pageNum === currentPage ? "active-btn page-btn" : "page-btn"
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}
            <button type="button" className="next-btn" onClick={nextPage}>
              next
            </button>
          </section>
        )}
      </section>
    </main>
  );
};

export default Pagination;
