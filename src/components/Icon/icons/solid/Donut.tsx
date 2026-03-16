import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgDonut = ({
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
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-7 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 5a1 1 0 0 0 0 2h2a1 1 0 1 0 0-2zM4.293 9.293a1 1 0 0 1 1.414 0l1 1a1 1 0 1 1-1.414 1.414l-1-1a1 1 0 0 1 0-1.414m9.414 10.414a1 1 0 0 0-1.414-1.414l-1 1a1 1 0 0 0 1.414 1.414zm1.586-4.414a1 1 0 0 1 1.414 0l1 1a1 1 0 0 1-1.414 1.414l-1-1a1 1 0 0 1 0-1.414M8 16a1 1 0 1 0-2 0v1a1 1 0 1 0 2 0zm9-3a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1m-.293-6.293a1 1 0 0 0-1.414-1.414l-1 1a1 1 0 0 0 1.414 1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgDonut;
