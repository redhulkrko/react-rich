import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

function List(props) {
  const [data, setData] = useState([]);
  const [showLoading, setShowLoading] = useState(true);
  const apiUrl = "http://localhost:5000/api/movies";

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(apiUrl);
      setData(result.data);
      setShowLoading(false);
    };

    fetchData();
  }, [apiUrl]);

  const showDetail = (id) => {
    props.history.push({
      pathname: '/show/' + id
    });
  }

  return (
    <div>
    {showLoading && <span className="sr-only">Loading...</span>}    
      <div>
        {data.map((item, idx) => (
          <div key={idx} onClick={() => { showDetail(item._id) }}>{item.title}</div>
        ))}
    </div>
    </div>
  );
}

export default withRouter(List);