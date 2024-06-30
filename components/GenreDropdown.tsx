"use client"
import { Genres } from "@/typing";

async function GenreDropdown() {
  console.log(process.env.TMDB_API_KEY)
    const url = "https://api.themoviedb.org/3/genre/movie/list?language=en-US"
    const options : RequestInit = {
        method: "GET",
        headers:{
            accept: "application/json",
            Authorization: `Bearer ${process.env.TMDB_API_KEY}`
        },next:{
            revalidate: 60*60*24,
        }
    };
    try {
      const response = await fetch(url, options);
      const data = (await response.json()) as Genres;
     console.log(data)
  } catch (error:any) {
      console.log(error)
  }


  return (
    <div>GenreDropdown</div>
  )
}
export default GenreDropdown