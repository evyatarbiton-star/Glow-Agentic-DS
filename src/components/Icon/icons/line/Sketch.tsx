import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgSketch = ({
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
        d="M10.618 9h2.764L12 6.236zm5.103 2H19.5V9h-3.882l-2.724-5.447h-1.788L8.382 9H4.5v2h3.78l2.771 8.316h1.898zm-2.108 0h-3.226L12 15.838z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M11.389 3.066a3 3 0 0 1 1.222 0l3.81.792a3 3 0 0 1 1.856 1.23l2.188 3.162a3 3 0 0 1-.062 3.5l-5.998 8.046a3 3 0 0 1-4.81 0L3.596 11.75a3 3 0 0 1-.062-3.5l2.188-3.162a3 3 0 0 1 1.856-1.23zm.814 1.958a1 1 0 0 0-.407 0l-3.81.792a1 1 0 0 0-.619.41L5.18 9.388a1 1 0 0 0 .02 1.166l5.998 8.047a1 1 0 0 0 1.604 0l5.997-8.047a1 1 0 0 0 .02-1.166l-2.187-3.162a1 1 0 0 0-.619-.41z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgSketch;
