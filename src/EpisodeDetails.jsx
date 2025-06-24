export default function EpisodeDetails({ episode }) {
  return (
    <div className="episode-details">
      <h2>
        Episode {episode.id}: {episode.title}
      </h2>
      <p>{episode.description}</p>
    </div>
  );
}
