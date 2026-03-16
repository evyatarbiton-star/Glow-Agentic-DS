import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgServingPlate = ({
  size = "md",
  color = "currentColor",
  ...props
}: IconProps) => {
  const px = resolveIconSize(size);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={px}
      height={px}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill={color}
        d="M3 17.8a.8.8 0 0 1 .8-.8h16.4a.8.8 0 0 1 .8.8 3.2 3.2 0 0 1-3.2 3.2H6.2A3.2 3.2 0 0 1 3 17.8"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M3.8 17a.8.8 0 0 0-.8.8A3.2 3.2 0 0 0 6.2 21h11.6a3.2 3.2 0 0 0 3.2-3.2.8.8 0 0 0-.8-.8zM14.679 7.353a3 3 0 1 0-5.357 0A7.62 7.62 0 0 0 4 14.619c0 .21.17.381.381.381h15.238c.21 0 .381-.17.381-.381a7.62 7.62 0 0 0-5.321-7.266M13 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgServingPlate;
