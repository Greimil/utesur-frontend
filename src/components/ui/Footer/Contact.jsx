import { Link } from "react-router-dom";

export const Contact = () => {
  return (
    <div className="flex flex-col justify-between lg:max-h-[250px] col-start-2 col-end-3 row-start-1 px-4">
      <h2 className="[font-size:_clamp(16px,2vw,18px)] font-bold text-white ">
        Contactos
      </h2>
      <div>
        <strong className="[font-size:_clamp(12px,2vw,16px)] font-bold text-white">
          Teléfonos:
        </strong>
        {/* <Link  to="tel:+8095213785" className="block [font-size:_clamp(8px,2vw,14px)] hover:text-white">
          +1 809-521-3785
        </Link> */}
        <span className="block [font-size:_clamp(10px,2vw,14px)] hover:text-white">
          +1 809-521-3785
        </span>
      </div>

      <div>
        <strong className="[font-size:_clamp(12px,2vw,14px)] font-bold text-white">
          Correos:
        </strong>
        <span
          className="block [font-size:_clamp(10
          px,2vw,14px)] hover:text-white"
        >
          info@utesur.edu.do
        </span>
        <span className="block [font-size:_clamp(10px,2vw,14px)] hover:text-white">
          rectoria@utesur.edu.do
        </span>
      </div>
    </div>
  );
};
