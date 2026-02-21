import { useMutation, useQuery } from "@apollo/client";
import { ADD_COMMENT } from "../graphql/mutations";
import { GET_COMMENTS } from "../graphql/queries";
import { useState } from "react";

export default function CommentBox({ id }: any){

 const [text,setText]=useState("");

 const { data, refetch } =
  useQuery(GET_COMMENTS,{
   variables:{ characterId:id }
  });

 const [addComment] = useMutation(
  ADD_COMMENT,
  {
   onCompleted: ()=>{
    setText("");
    refetch();
   }
  }
 );

 return(

  <div className="bg-white shadow-lg rounded-xl p-6">

   <h2 className="text-xl font-bold mb-4">
    Comments
   </h2>

   <div className="flex gap-2 mb-4">

    <input
     value={text}
     onChange={(e)=>setText(e.target.value)}
     placeholder="Write a comment..."
     className="flex-1 border rounded-lg px-3 py-2"
    />

    <button
     onClick={()=>addComment({
      variables:{
       text,
       characterId:id
      }
     })}
     className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
    >
     Add
    </button>

   </div>

   <div className="space-y-3">

    {data?.comments?.length === 0 && (
     <p className="text-gray-400">
      No comments yet
     </p>
    )}

    {data?.comments?.map((c:any)=>(
     
     <div
      key={c.id}
      className="border rounded-lg p-3 bg-gray-50"
     >
      {c.text}
     </div>

    ))}

   </div>

  </div>

 );
}
