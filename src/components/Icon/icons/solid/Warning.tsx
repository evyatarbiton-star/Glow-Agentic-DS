import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgWarning = ({
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
        d="M14.683 4.66c-1.105-2.212-4.261-2.212-5.367 0l-5.997 12C2.322 18.653 3.773 21 6.003 21h11.994c2.23 0 3.68-2.346 2.683-4.34zM11 9a1 1 0 1 1 2 0v4a1 1 0 0 1-2 0zm0 7a1 1 0 1 1 2 0 1 1 0 0 1-2 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgWarning;
