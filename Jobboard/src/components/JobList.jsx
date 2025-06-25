import React, { useEffect, useState } from 'react';
import axios from 'axios';

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('https://www.arbeitnow.com/api/job-board-api');
        console.log("API Response:", response.data);
        setJobs(response.data.data.slice(0, 20)); // limit to 20 jobs
      } catch (error) {
        console.error('Error fetching jobs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (loading) return <div className="text-center mt-5">Loading jobs...</div>;
  if (jobs.length === 0) return <div className="text-danger text-center mt-5">No jobs found.</div>;

  return (
    <div className="container mt-4">
      <h3 className="mb-4">Latest Jobs (Arbeitnow API)</h3>
      <div className="row">
        {jobs.map((job, index) => (
          <div className="col-md-6 mb-4" key={index}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{job.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{job.company_name}</h6>
                <p><strong>Location:</strong> {job.location}</p>
                <a href={job.url} target="_blank" rel="noreferrer" className="btn btn-primary mt-2">
                  Apply
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobList;
