export const Li = ({ text, text2 }) => {
    return (
      <li className="min-h-[62px] py-4 border-y flex items-center gap-x-7 justify-a">
        {" "}
        <p className="w-2/4 max-w-40">{text}</p>{" "}
        <span className="font-bold w-1/4">{text2}</span>{" "}
      </li>
    );
  };