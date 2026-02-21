import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "../graphql/queries";
import CommentBox from "../components/CommentBox";
import FavoriteButton from "../components/FavoriteButton";

export default function Detail(){

 const { id } = useParams();
 const navigate = useNavigate();

 const { data, loading } = useQuery(GET_CHARACTERS);

 if(loading){
  return (
   <div className="flex justify-center items-center h-screen">
    Loading...
   </div>
  );
 }

 const character = data.characters.find(
  (c:any)=>c.id == id
 );

 if(!character){
  return <div>Character not found</div>
 }

 return(

  <div className="min-h-screen bg-gray-100 py-10 px-4">
   <div className="max-w-5xl mx-auto">
    <div className="bg-white rounded-2xl shadow-lg p-6 grid md:grid-cols-2 gap-8">
     <div className="flex justify-center">
      <img
       src={character.image}
       alt={character.name}
       className="rounded-xl w-full max-w-sm shadow-md"
      />
     </div>

     <div className="flex flex-col justify-between">
      <div>

       <h1 className="text-3xl font-bold mb-4">
        {character.name}
       </h1>

       <div className="space-y-2 text-gray-600">
        <p>
         <span className="font-semibold">Species:</span> {character.species}
        </p>

        <p>
         <span className="font-semibold">Status:</span> {character.status}
        </p>

        <p>
         <span className="font-semibold">Gender:</span> {character.gender}
        </p>
       </div>
      </div>

      <div className="mt-6 space-y-3">
       <FavoriteButton id={id} />

       <button
        onClick={()=>navigate("/")}
        className="w-full bg-gray-200 hover:bg-gray-300 py-2 rounded-lg transition"
       >
        Back
       </button>
      </div>
     </div>
    </div>

    <div className="mt-8">
     <CommentBox id={id}/>
    </div>
   </div>
  </div>
 );
}
