export default function EpisodeList({ episodes, onSelect, selectedEpisode }) {
  return (
    <ul className="episode-list">
      {episodes.map((ep) => (
        <li
          key={ep.id}
          className={selectedEpisode?.id === ep.id ? "selected" : ""}
          onClick={() => onSelect(ep)}
        >
          {ep.title}
        </li>
      ))}
    </ul>
  );
}
