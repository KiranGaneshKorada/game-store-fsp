import useGenericData from "./useGenericData";


export interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background:string;
}



function useGenres() {

    const {data,error}=useGenericData<Genre>("/genres")
  
    const genres=data

  return { genres, error };
}

export default useGenres;
