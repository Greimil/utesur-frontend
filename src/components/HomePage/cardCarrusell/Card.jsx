import { Link } from "react-router-dom"

export const Card = ({img,alt, carrera, textoDes, type = "licenciatura" }) => {
  return (
    <Link to={`/carreras/${carrera}`}  className="flex flex-col cursor-pointer" >
      
      <div>
        <img className=" aspect-video rounded-2xl" src={img} alt={alt} />
      </div>

    <p className="my-1"> {type} </p>
    <span className="text-primaryText" >{textoDes}</span>
    </Link>
  )
}

