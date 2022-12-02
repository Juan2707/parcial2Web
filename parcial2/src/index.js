import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Post from './components/Post';

const root = ReactDOM.createRoot(document.getElementById('root'));

const component = <h1>Hola mundo</h1>;
root.render(

  <App />

);
root.render(
  <div>
   <Post author="John Doe" content="This is the post content" likes="20" />
   <Post author="Anne Hill" content="I like React" likes="3" />
   <Post author="Laia Martins" content="I love JSX" likes="0" />
 </div>
 );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
