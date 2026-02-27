import { useState } from "react";
import knowledgeData from "./data/KnowledgeData.js";
import KnowledgeList from "./components/KnowledgeList.jsx";
import SearchBar from "./components/SearchBar.jsx";

function Home() {
  const [search, setSearch] = useState("");

  const filteredData = knowledgeData.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <SearchBar search={search} setSearch={setSearch} />
      <KnowledgeList data={filteredData} />
    </div>
  );
}

export default Home;