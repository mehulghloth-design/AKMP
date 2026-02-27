import { useParams } from "react-router-dom";
import knowledgeData from "../data/KnowledgeData.js";

function KnowledgeDetail() {
  const { id } = useParams();
  const item = knowledgeData.find(k => k.id === parseInt(id));

  if (!item) return <p>Not Found</p>;

  return (
    <div className="detail">
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <p><strong>Category:</strong> {item.category}</p>
    </div>
  );
}

export default KnowledgeDetail;