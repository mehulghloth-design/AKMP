import { useParams } from "react-router-dom";
import knowledgeData from "../data/KnowledgeData.js";
import KnowledgeList from "../components/KnowledgeList.jsx";

function Category() {
  const { categoryName } = useParams();

  const filtered = knowledgeData.filter(
    item => item.category === categoryName
  );

  return (
    <div className="container">
      <h2>{categoryName} Articles</h2>
      <KnowledgeList data={filtered} />
    </div>
  );
}

export default Category;