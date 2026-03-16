import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgVectorEditCircle = ({
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
        fillRule="evenodd"
        d="M8.337 5.61c-.132-.3-.491-.456-.764-.275a8 8 0 0 0-2.238 2.238c-.181.273-.025.632.275.764a4 4 0 0 1 0 7.326c-.3.132-.456.491-.275.764a8 8 0 0 0 2.238 2.238c.273.181.632.025.764-.275a4.001 4.001 0 0 1 7.326 0c.132.3.491.456.764.275a8 8 0 0 0 2.238-2.238c.181-.273.025-.632-.275-.764a4 4 0 0 1 0-7.326c.3-.132.456-.491.275-.764a8 8 0 0 0-2.238-2.238c-.273-.181-.632-.025-.764.275a4 4 0 0 1-7.326 0"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M12 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-8 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4m14 2a2 2 0 1 1 4 0 2 2 0 0 1-4 0m-6 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgVectorEditCircle;
