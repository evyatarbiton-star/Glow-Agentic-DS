import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgLocationSearchOuLc = ({
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
        d="M18 17a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-3 1a3 3 0 1 1 5.708 1.293l1 1a1 1 0 0 1-1.415 1.414l-1-1A3 3 0 0 1 15 18"
        clipRule="evenodd"
      />
      <path fill={color} d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0" />
      <path
        fill={color}
        fillRule="evenodd"
        d="M3 11a9 9 0 0 1 18 0q0 .586-.088 1.151a1 1 0 0 1-1.977-.302Q19 11.429 19 11a7 7 0 1 0-14 0c0 2.206 1.335 4.267 3.205 5.888l3.441 2.982a.54.54 0 0 0 .708 0 1 1 0 1 1 1.31 1.512 2.54 2.54 0 0 1-3.328 0l-3.441-2.983C4.81 16.591 3 14.026 3 11"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgLocationSearchOuLc;
