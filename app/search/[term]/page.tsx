import { notFound } from "next/navigation";

type Props={
    params:{
        term:string;
    }
}

const SearchPage = ({params:{term}}:Props) => {
    if (!term) notFound();
    const termToUse = decodeURI(term);

    //api to get the movies 
    //api to get the popular movies

  return (
    <div>Welcome, you searched for {termToUse}</div>
    
  )
}

export default SearchPage