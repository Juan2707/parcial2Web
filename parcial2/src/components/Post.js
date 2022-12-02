function Post(props) {
    return (
      <div>
        <h1>Post</h1>
        <h2>Author: {props.author}</h2>
        <h2>Content: {props.content}</h2>
        <h2>Likes: {props.likes}</h2>
      </div>
    );
   }
   
   export default Post;