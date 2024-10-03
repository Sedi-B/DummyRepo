import React from 'react';
import JobPost from './JobPost';

const Job = () => {
  const jobs = [
    {
      id: 1,
      title: 'Frontend Developer',
      description: 'A junior frontend developer with a knowledge of javascript .',
      expirationDate: '2024-10-10',
    },
    {
      id: 2,
      title: 'Backend Developer',
      description: 'Be able to work with Flask and Node.js to build APIs.',
      expirationDate: '2024-09-20',
    },
    {  id: 3,
        title: 'Full Stack Developer',
        description: 'A Senior frontend  and backend developer with a knowledge of different front end frameworks and backend languanges .',
        expirationDate: '2024-10-30',},
  ];

  return (
    <div className="job-list">
      {jobs.map((job) => (
        
        <JobPost
          key={job.id}
          title={job.title}
          description={job.description}
          expirationDate={job.expirationDate}
        />
      ))}
    </div>
  );
};

export default Job;
