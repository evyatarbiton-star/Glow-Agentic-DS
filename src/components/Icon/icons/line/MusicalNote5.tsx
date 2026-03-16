import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgMusicalNote5 = ({
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
        d="M20 5.003a3 3 0 0 0-3.65-2.928l-5 1.11A3 3 0 0 0 9 6.116V18.5a1 1 0 0 0 2 0V9.802l7-1.555V16.5a1 1 0 0 0 2 0zm-3.217-.976A1 1 0 0 1 18 5.003v1.195l-7 1.555V6.114a1 1 0 0 1 .783-.976z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M20 16.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-2 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M11 18.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-2 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgMusicalNote5;
