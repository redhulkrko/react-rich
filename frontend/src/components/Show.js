import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

function Show(props) {
  const [data, setData] = useState({});
  const [showLoading, setShowLoading] = useState(true);
  const apiUrl = "http://localhost:5000/api/movies/" + props.match.params._id;

  useEffect(() => {
    setShowLoading(false);
    const fetchData = async () => {
      const result = await axios(apiUrl);
      setData(result.data);
      setShowLoading(false);
    };

    fetchData();
  }, [apiUrl]);

  const editMovie = (id) => {
    props.history.push({
      pathname: '/edit/' + id
    });
  };

  const deleteMovie = (id) => {
    setShowLoading(true);
    const movie = { id: data.id, title: data.title, synopsis: data.synopsis, trailer: data.trailer, poster: data.poster, slide: data.slide };
    axios.delete(apiUrl, movie)
      .then((result) => {
        setShowLoading(false);
        props.history.push('/list')
      }).catch((error) => setShowLoading(false));
  };

  return (
    <div>
      {showLoading && <span className="sr-only">Loading...</span>}    
      <div>
        <h1>{data.title}</h1>
        <p>{data.synopsis}</p>
        <p>
          <a onClick={() => { editMovie(data._id) }}>Edit</a>&nbsp;
          <a onClick={() => { deleteMovie(data._id) }}>Delete</a>
        </p>
      </div>
    </div>
  );
}

export default withRouter(Show);