
export const Location = () => {
  return (
    <div className="hidden lg:flex flex-col justify-between lg:max-h-[250px]">
          <h2 className=" [font-size:_clamp(16px,2vw,18px)]  font-bold text-white ">
            Ubicación
          </h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d669.0282777285767!2d-70.73018275029597!3d18.456668187947212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ebaa3e2c19ec239%3A0x192f7b80b1b6b46f!2sUniversidad%20Tecnol%C3%B3gica%20del%20Sur!5e0!3m2!1ses-419!2sdo!4v1700488397414!5m2!1ses-419!2sdo"
            width="300"
            height="220"
            style={{ border: "0" }}
            loading="lazy"
          ></iframe>
        </div>

  )
}
