import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgLocationImportOuLc = ({
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
        d="M3 11a9 9 0 0 1 18 0c0 .796-.126 1.564-.35 2.294a1 1 0 1 1-1.912-.588c.17-.554.262-1.123.262-1.706a7 7 0 1 0-14 0c0 2.206 1.335 4.267 3.205 5.888l3.441 2.982a.54.54 0 0 0 .354.132 1 1 0 1 1 0 2 2.54 2.54 0 0 1-1.664-.62l-3.441-2.983C4.81 16.591 3 14.026 3 11"
        clipRule="evenodd"
      />
      <path fill={color} d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0" />
      <path
        fill={color}
        fillRule="evenodd"
        d="M15.293 18.293a1 1 0 0 0 0 1.414l2 2a1 1 0 0 0 1.414-1.414L18.414 20H22a1 1 0 1 0 0-2h-3.586l.293-.293a1 1 0 0 0-1.414-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgLocationImportOuLc;
