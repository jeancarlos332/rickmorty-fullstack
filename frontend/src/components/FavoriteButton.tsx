import { useMutation } from "@apollo/client";
import { FAVORITE } from "../graphql/mutations";
import { GET_CHARACTERS } from "../graphql/queries";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function FavoriteButton({ id }: any){

 const navigate = useNavigate();

 const [favorite] = useMutation(
  FAVORITE,
  {
   refetchQueries:[GET_CHARACTERS],
   onCompleted:(data)=>{

    const isFavorite =
     data.favoriteCharacter.favorite;

    if(isFavorite){
     toast.success("Added to favorites");
    } else {
     toast("Removed from favorites");
    }

    setTimeout(()=>{
     navigate("/");
    },800);

   }
  }
 );

 return(

  <button
   onClick={()=>favorite({
    variables:{id}
   })}
   className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 rounded-lg transition"
  >
   Favorite
  </button>

 );
}
