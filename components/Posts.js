import { collection, onSnapshot, orderBy, query } from "@firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import Post from "./Post";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, "posts"), orderBy("timestamp", "desc")),
      (snapshot) => {
        // if at any point, the data changes in the database, the new values replaces them.
        setPosts(snapshot.docs);
      }
    );
    // cleanup useEffect function.
    // return () => {
    //   unsubscribe();
    // };
    return unsubscribe;
  }, [db]);

  console.log(posts);
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.data().username}
          userImg={postdata().profileImg}
          img={post.data().image}
          caption={post.data().caption}
        />
      ))}
    </div>
  );
};

export default Posts;
