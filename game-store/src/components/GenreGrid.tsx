import useGenres, { Genre } from "../hooks/useGenres";
import imageResize from "../services/image-resize";

interface Props {
  onHandlingClick:(genre:Genre)=>void;
}

function GenreGrid({onHandlingClick}:Props) {
  const { genres, error } = useGenres();

  return (
    <div className="py-5 px-3 ">
      {error && <h1>{error}</h1>}
      {genres.map((genre) => (
        <button type="button" onClick={()=>onHandlingClick(genre)} className="btn btn-secondary my-1" key={genre.id}>
          <div className="d-flex flex-row  justify-content-start ">
            <div className="px-1 py-1">
              <img
                src={imageResize(genre.image_background)}
                className="object-fit-cover  rounded h-50 w-25"
                alt="..."
              ></img>
            </div>
            <div className="pt-1">
              <h6 className="text-dark">{genre.name}</h6>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}

export default GenreGrid;
