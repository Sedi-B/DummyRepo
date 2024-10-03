import React, { useState, useEffect } from 'react';
import '../PageStyles/JobPost.css';

const JobPost = ({ title, description, expirationDate }) => {
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {


    const checkExpiration = () => {
      const currentDate = new Date();
      const jobExpirationDate = new Date(expirationDate);

      if (jobExpirationDate < currentDate) {
        setIsExpired(true);
      }
    };

    checkExpiration();
  }, [expirationDate]);
  

  return (
    <div className={`job-posting ${isExpired ? 'expired' : ''}`}>
      <h3>{title}</h3>
      <p>{description}</p>
      <p className="expiration-date">Expires on: {new Date(expirationDate).toLocaleDateString()}</p>

      {isExpired ? (
        <button className="expired-btn" disabled>
          Job Expired
        </button>
      ) : (
        <button className="apply-btn">Apply Now</button>
      )}
    </div>
  );
};

export default JobPost;
