import Post from "./Post";

const DUMMY_DATA = [
  {
    id: "123",
    username: "taurusilver",
    userImg:
      "https://static.wikia.nocookie.net/57cca220-437f-4ce2-b451-d1963591ab16",
    img: "https://static.wikia.nocookie.net/57cca220-437f-4ce2-b451-d1963591ab16",
    caption: "This is dope. Destroy the Like button now.",
  },
  {
    id: "243",
    username: "phantomThief",
    userImg: "https://cdn.fakercloud.com/avatars/stan_128.jpg",
    img: "https://cdn.fakercloud.com/avatars/stan_128.jpg",
    caption: "Destroy the YT Algorithm for me.",
  },
  {
    id: "145",
    username: "SteppenWolf",
    userImg:
      "https://static.wikia.nocookie.net/57cca220-437f-4ce2-b451-d1963591ab16",
    img: "https://static.wikia.nocookie.net/57cca220-437f-4ce2-b451-d1963591ab16",
    caption: "Hack the box. Fuck him hard. Mess him up",
  },
];

const Posts = () => {
  return (
    <div>
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Posts;
