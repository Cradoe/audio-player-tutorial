import { AudioPlayer } from "./components/AudioPlayer";

const audio = {
  url: "https://storage.googleapis.com/media-session/elephants-dream/the-wires.mp3",
  title: "A sample audio title",
  author: "The Elephants Dream",
  thumbnail: "https://images.unsplash.com/photo-1511379938547-c1f69419868d",
};

const App = () => {
  return (
    <div className="container mx-auto text-center">
      <div className="md:w-1/2 lg:w-1/3 mx-auto">
        <AudioPlayer
          url={audio.url}
          title={audio.title}
          author={audio.author}
          thumbnail={audio.thumbnail}
        />
      </div>
    </div>
  );
};

export default App;
