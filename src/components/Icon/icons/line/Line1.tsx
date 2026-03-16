import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgLine1 = ({
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
        d="M17 5c-.592 0-1.123.256-1.491.667-.283.316-.63 1.056-.971 2.236-.327 1.131-.61 2.524-.84 4C13.239 14.86 13 18.06 13 20a1 1 0 1 1-2 0c0-2.059.249-5.36.723-8.404.237-1.523.534-3.005.893-4.249.345-1.195.79-2.33 1.403-3.014A4 4 0 0 1 21 7a1 1 0 1 1-2 0 2 2 0 0 0-2-2"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M7 5c.592 0 1.123.256 1.491.667.283.316.63 1.056.971 2.236.327 1.131.61 2.524.84 4C10.761 14.86 11 18.06 11 20a1 1 0 1 0 2 0c0-2.059-.249-5.36-.723-8.404-.237-1.523-.534-3.005-.893-4.249-.345-1.195-.79-2.33-1.403-3.014A4 4 0 0 0 3 7a1 1 0 1 0 2 0 2 2 0 0 1 2-2"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgLine1;
