import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgLocationRemoveOuLc = ({
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
        d="M3 11a9 9 0 0 1 18 0c0 .796-.126 1.564-.35 2.294a1 1 0 1 1-1.912-.588c.17-.554.262-1.123.262-1.706a7 7 0 1 0-14 0c0 2.206 1.335 4.267 3.205 5.888l3.441 2.982a.54.54 0 0 0 .708 0 1 1 0 1 1 1.31 1.512 2.54 2.54 0 0 1-3.328 0l-3.441-2.983C4.81 16.591 3 14.026 3 11"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0M17.707 16.293a1 1 0 0 0-1.414 1.414L17.586 19l-1.293 1.293a1 1 0 0 0 1.414 1.414L19 20.414l1.293 1.293a1 1 0 0 0 1.414-1.414L20.414 19l1.293-1.293a1 1 0 0 0-1.414-1.414L19 17.586z"
      />
    </svg>
  );
};
export default SvgLocationRemoveOuLc;
