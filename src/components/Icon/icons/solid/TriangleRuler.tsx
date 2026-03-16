import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgTriangleRuler = ({
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
        d="M3 5.475V7.5a.5.5 0 0 0 .5.5H5a1 1 0 0 1 0 2H3.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5H5a1 1 0 1 1 0 2H3.5a.5.5 0 0 0-.5.5V19a2 2 0 0 0 2 2h2.5a.5.5 0 0 0 .5-.5V19a1 1 0 1 1 2 0v1.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V19a1 1 0 1 1 2 0v1.5a.5.5 0 0 0 .5.5h2.025a2.475 2.475 0 0 0 1.75-4.225L7.225 3.725A2.475 2.475 0 0 0 3 5.475m6 6.022V14.5a.5.5 0 0 0 .5.5h3.003a.5.5 0 0 0 .354-.853l-3.003-3.003a.5.5 0 0 0-.854.353"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgTriangleRuler;
