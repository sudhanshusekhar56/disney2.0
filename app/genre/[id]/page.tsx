type Props={
  params:{
    id:string;
  };
  searchParams:{
    genre:string;
  }
}

const GenrePage = ({params:{id}, searchParams:{genre}}:Props) => {
  return (
    <div>welcome to genre with ID: {id} and Name: {genre}</div>
  )
}

export default GenrePage