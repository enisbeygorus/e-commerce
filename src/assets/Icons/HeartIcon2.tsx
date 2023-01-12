import { IconProps } from "./type/IconType";
const HeartIcon2 = (props: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
      <rect width="256" height="256" fill="none"></rect>
      <path
        d="M128,216S28,160,28,92A52,52,0,0,1,128,72h0A52,52,0,0,1,228,92C228,160,128,216,128,216Z"
        fill={props.fill ? props.fill : "none"}
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="12"
      ></path>
    </svg>
  );
};

export default HeartIcon2;
