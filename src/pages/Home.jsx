import { useState } from "react";
import knowledgeData from "../data/KnowledgeData";
import KnowledgeList from "../components/KnowledgeList";
import SearchBar from "../components/SearchBar";

function Home() {
  const [search, setSearch] = useState("");

  const filteredData = knowledgeData.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
   
    
    <div className="container">
  <h1 className="app-title"> Search.  .</h1>
  <SearchBar search={search} setSearch={setSearch}/>
  <div className="results">
    <KnowledgeList data={filteredData} />
  </div>
</div>
    
  );
}

export default Home;