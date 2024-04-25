

export const Card = ({img,alt, carrera, textoDes, type = "academic" }) => {
  return (
    <a className="flex flex-col cursor-pointer" >
      
      <div>
        <img className="max-w-[300px] aspect-video rounded-2xl" src={img} alt={alt} />
      </div>

    <p className="my-1"> {carrera} </p>
    <span className="text-primaryText" >{textoDes}</span>
    </a>
  )
}

