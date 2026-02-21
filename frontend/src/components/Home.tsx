import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "../graphql/queries";
import Card from "../components/Card";
import Filters from "../components/Filters";
import { useState } from "react";

export default function Home(){

 const [filters,setFilters]=useState({});
 const [showFavorites,setShowFavorites]=useState(false);
 const [sort,setSort]=useState("asc");

 const { data } = useQuery(
  GET_CHARACTERS,
  { variables: filters }
 );

 if(!data) return <div>Loading...</div>;

 let characters = [...data.characters];

 if(showFavorites){
  characters =
   characters.filter(
    (c:any)=>c.favorite
   );
 }

 characters.sort((a:any,b:any)=>{

  if(sort==="asc"){
   return a.name.localeCompare(b.name);
  }

  return b.name.localeCompare(a.name);

 });

 return(
  <div className="p-4">
   <Filters setFilters={setFilters}/>
    <label className="flex items-center gap-2">
     <input
      type="checkbox"
      onChange={(e)=>
       setShowFavorites(
        e.target.checked
       )
      }
     />

     Favorites

    </label>

   <select
    onChange={(e)=>setSort(e.target.value)}
    className="border p-2 mb-4"
   >
    <option value="asc">A-Z</option>
    <option value="desc">Z-A</option>
   </select>

   <div className="grid grid-cols-4 gap-4">

    {characters.map((c:any)=>(
      <Card key={c.id} character={c}/>
    ))}

   </div>
  </div>
 );
}
