import KnowledgeCard from "./KnowledgeCard.jsx";

function KnowledgeList({ data }) {
  if (data.length === 0) {
    return <p>No Results Found</p>;
  }

  return (
    <div className="grid">
      {data.map(item => (
        <KnowledgeCard key={item.id} item={item} />
      ))}
    </div>
  );
}

export default KnowledgeList;