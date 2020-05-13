import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
// import './style.css';

// import { FilePond, registerPlugin } from 'react-filepond';
// import 'filepond/dist/filepond.min.css';
// import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
// import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
// import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

// // Register the plugins
// registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);


function Edit(props) {
  const initialState = { id: '', title: '', synopsis: '', trailer: '' }
  const [movie, setMovie] = useState(initialState) 
  const [posterCollection, setPosterCollection] = useState('');
  const [showLoading, setShowLoading] = useState(true);
  const apiUrl = "http://localhost:5000/api/movies/" + props.match.params._id;

  useEffect(() => {
    setShowLoading(false);
    const fetchData = async () => {
      const result = await axios(apiUrl);
      setMovie(result.data);      
      console.log(result.data);
      setShowLoading(false);
    };

    fetchData();
  }, [apiUrl]);

  const updateMovie = (e) => {
      setShowLoading(true);
      e.preventDefault();
      const formData = new FormData();
      formData.append("title", movie.title);
      formData.append("synopsis", movie.synopsis);
      formData.append("trailer", movie.trailer);
      formData.append("id", movie.id);
    
      for (let img in posterCollection[0]) {
        formData.append("posters", posterCollection[0][img])
      }
      const headers = "multipart/form-data"
      axios.post(apiUrl, formData, headers)
      .then((result) => {
        setShowLoading(false);
        console.log(result);
        props.history.push('/show/' + props.match.params._id)
      }).catch((error) => setShowLoading(false));
    };

  const onChange = (e) => {
    e.persist();
    setMovie({...movie, [e.target.name]: e.target.value})
}

const onFileChange = (files) => {
    let items = files.map(fileItem => fileItem.file)
    setPosterCollection([...posterCollection, items])
}

  return (
    <div>
      {showLoading && <span className="sr-only">Loading...</span>}    
      <div className="page-wrapper bg-gra-02">
        <div className="wrapper">
          <div className="card card-4">
            <div className="card-body">
            <h2 className="title">Add Movie</h2>
            <form onSubmit={updateMovie}>
            <div className="input-group full">
                  <label className="label">Title</label>
                  <input className="input--style-4" type="text" name="title" value={movie.title} onChange={onChange}  />
            </div>
            <div className="input-group full">
                  <label className="label">Synopsis</label>
                  <textarea className="input--style-4" type="text" name="synopsis" rows="12" value={movie.synopsis} onChange={onChange} ></textarea>
            </div>
           

            <div className="input-group">
                  <label className="label">Trailer</label>
                  <input className="input--style-4" type="text" name="trailer" value={movie.trailer} onChange={onChange} />
            </div>
            <div className="input-group">
                <label className="label">ID</label>
                <input className="input--style-4" type="text" name="id" value={movie.id} onChange={onChange} />
            </div>
            
            {/* <div className="input-group full">
                <FilePond
                name='posters'
                files={posterCollection}
                allowMultiple={true}
                server={null}
                instantUpload={false}
                onupdatefiles={(fileItems) => onFileChange(fileItems)}
                />
            </div>
             */}
            <div className="p-t-15">
                <button className="btn btn--radius-2 btn--blue" type="submit">Submit</button>
            </div>
            </form>
        </div>
        </div>
        </div>
        </div>
    </div>
  );
}

export default withRouter(Edit);