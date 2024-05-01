import PropTypes from "prop-types";

export const Heading = ({ type, text, className, bold }) => {
  let textBold;
  bold === true ? (textBold = "font-bold") : (textBold = "");

  if (type === "h1") {
    return (
      <h1
        className={`${className} [font-size:_clamp(20px,2vw,32px)] leading-9 ${textBold} `}
      >
        {text}
      </h1>
    );
  } else if (type === "h2") {
    return (
      <h2
        className={`${className} [font-size:_clamp(18px,2vw,24px)] ${textBold}  `}
      >
       {text} 
      </h2>
    );
  } else if (type === "h3") {
    return (
      <h3
        className={`${className} [font-size:_clamp(16px,2vw,20px)] ${textBold}  `}
      >
        {text}
      </h3>
    );
  } else {
    return (
      <h4
        className={`${className} [font-size:_clamp(14px,2vw,18px)] ${textBold}  `}
      >
        {text}
      </h4>
    );
  }
};

Heading.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  className: PropTypes.string,
  bold: PropTypes.bool,
};
