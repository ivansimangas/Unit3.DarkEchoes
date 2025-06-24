import { useState } from "react";
import { episodeList } from "./data";
import EpisodeList from "./EpisodeList";
import EpisodeDetails from "./EpisodeDetails";
import "./index.css";

export default function App() {
  // State to hold selected episode
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  return (
    <div className="app-container">
      <h1>Dark Echoes</h1>
      <EpisodeList
        episodes={episodeList}
        onSelect={setSelectedEpisode}
        selectedEpisode={selectedEpisode}
      />
      {selectedEpisode ? (
        <EpisodeDetails episode={selectedEpisode} />
      ) : (
        <p className="prompt">Please select an episode to see more details.</p>
      )}
    </div>
  );
}
