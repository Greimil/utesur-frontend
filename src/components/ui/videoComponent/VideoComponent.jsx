import PropTypes from "prop-types";

export const VideoComponent = ({ link }) => {
  return (
    <div className="w-full mx-auto  ">
      <iframe
        title="Título del video"
        className="h-auto aspect-video md:hidden"
        src={link}
        width="300"
        height="105"
        frameBorder="0"
        allowFullScreen
      ></iframe>

      <iframe
        title="Título del video"
        className="h-auto aspect-video hidden md:block lg:hidden"
        src={link}
        width="515"
        height="300"
        frameBorder="0"
        allowFullScreen
      ></iframe>

      <iframe
        title="Título del video"
        className="h-auto aspect-video hidden lg:block"
        src={link}
        width="900"
        height="455"
        frameBorder="0"
        allowFullScreen
      ></iframe>


    </div>
  );
};

VideoComponent.propTypes = {
  link: PropTypes.string,
};
