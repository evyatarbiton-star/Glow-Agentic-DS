import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgLocationEditOuLc = ({
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
        d="m15.924 19.183-.886 2.126a.5.5 0 0 0 .654.654l2.126-.887Q18 21 18.14 20.86l3.563-3.563a1 1 0 0 0 0-1.414l-.585-.586a1 1 0 0 0-1.415 0L16.14 18.86a1 1 0 0 0-.216.323M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M3 11a9 9 0 0 1 18 0q0 .586-.088 1.151a1 1 0 0 1-1.977-.302Q19 11.429 19 11a7 7 0 1 0-14 0c0 2.206 1.335 4.267 3.205 5.888l3.441 2.982a.54.54 0 0 0 .354.132 1 1 0 1 1 0 2 2.54 2.54 0 0 1-1.664-.62l-3.441-2.983C4.81 16.591 3 14.026 3 11"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgLocationEditOuLc;
