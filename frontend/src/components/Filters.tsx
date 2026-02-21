export default function Filters({ setFilters }: any){

 return(
  <div className="flex gap-4 mb-4">

   <select onChange={(e)=>
    setFilters((f:any)=>({...f,status:e.target.value}))
   }>
    <option value="">Status</option>
    <option>Alive</option>
    <option>Dead</option>
   </select>

   <select onChange={(e)=>
    setFilters((f:any)=>({...f,gender:e.target.value}))
   }>
    <option value="">Gender</option>
    <option>Male</option>
    <option>Female</option>
   </select>

  </div>
 );
}
