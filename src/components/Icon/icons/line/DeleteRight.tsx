import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgDeleteRight = ({
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
        d="M17.687 5.515A4 4 0 0 0 14.552 4h-8.55a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8.55a4 4 0 0 0 3.135-1.515l3.664-4.621a3 3 0 0 0 0-3.728zM14.552 6a2 2 0 0 1 1.568.757l3.664 4.622a1 1 0 0 1 0 1.242l-3.664 4.621a2 2 0 0 1-1.568.758h-8.55a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M8.293 9.293a1 1 0 0 1 1.414 0L11 10.586l1.293-1.293a1 1 0 1 1 1.414 1.414L12.414 12l1.293 1.293a1 1 0 0 1-1.414 1.414L11 13.414l-1.293 1.293a1 1 0 0 1-1.414-1.414L9.586 12l-1.293-1.293a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgDeleteRight;
