export const HeroFrame = ({src, alt, classNameContainer, classNameImg}) => {
  return (
    <div className={`${classNameContainer} `} >
        <img className={`${classNameImg} max-w-[928px] w-full rounded-xl`} src={src} alt={alt} />



    </div>
  )
}