import { Link } from "react-router-dom";

export default function Card({ character }: any){

 return(

  <Link to={`/character/${character.id}`}>
  
   <div className="relative border rounded-lg p-2 hover:shadow-lg transition bg-white">
    
    {character.favorite && (
      <div className="absolute top-2 right-2 text-yellow-500 text-2xl z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-6 h-6 text-yellow-400"
        >
          <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0l-4.725 2.885a.562.562 0 01-.84-.61l1.285-5.385a.563.563 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345l2.125-5.111z"/>
        </svg>
      </div>
    )}

    <img 
      src={character.image}
      alt={character.name}
      className="w-full h-60 object-cover rounded"
    />

    <h2 className="font-bold mt-2">
      {character.name}
    </h2>

    <p className="text-gray-500">
      {character.species}
    </p>

   </div>

  </Link>
 );
}
