import React, { useState, useEffect } from 'react'
import './App.css'


function App() {
  const [githubName, setGitHubName] = useState('');
  const [githubUrl, setGithubUrl] = useState('');
  const [githubImageUrl, setGithubImageUrl] = useState('');

  useEffect(() => {
    fetch('https://api.github.com/users/learningToCode1234')
    .then(res => res.json())
    .then(data => {
      setGitHubName(data.name);
      setGithubUrl(data.html_url)
      setGithubImageUrl(data.avatar_url);
    })
  }, []);

  return (
    <div className="App">
      <h1>Github Profile Info:</h1>
      <h2>{githubName}</h2>
      <a href={ githubUrl }>Link to Github Profile</a>

      <div className='pt-5'>
        <img src={ githubImageUrl } alt={ 'Github profile image' }width='200' height='200'/>
        
      </div>
    </div>
  );
}

export default App;
