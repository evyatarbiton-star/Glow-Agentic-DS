import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgDeleteLeft = ({
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
        d="M6.316 5.515A4 4 0 0 1 9.45 4H18a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H9.45a4 4 0 0 1-3.134-1.515l-3.664-4.621a3 3 0 0 1 0-3.728zM9.45 6a2 2 0 0 0-1.567.757L4.219 11.38a1 1 0 0 0 0 1.242l3.664 4.621A2 2 0 0 0 9.45 18H18a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M10.293 9.293a1 1 0 0 1 1.414 0L13 10.586l1.293-1.293a1 1 0 1 1 1.414 1.414L14.414 12l1.293 1.293a1 1 0 0 1-1.414 1.414L13 13.414l-1.293 1.293a1 1 0 0 1-1.414-1.414L11.586 12l-1.293-1.293a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgDeleteLeft;
