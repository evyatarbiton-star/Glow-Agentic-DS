import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgHairbrush = ({
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
        d="m7.383 20.703-.098-.048a.5.5 0 0 1-.136-.804L19.852 7.148a.5.5 0 0 1 .804.137l.047.098A3 3 0 0 1 21 8.685v.072a3 3 0 0 1-.878 2.122l-9.243 9.242A3 3 0 0 1 8.758 21h-.073a3 3 0 0 1-1.302-.297"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M15.293 3.293a1 1 0 0 1 1.414 0l1.5 1.5a1 1 0 0 1-1.414 1.414l-1.5-1.5a1 1 0 0 1 0-1.414m-12 12a1 1 0 0 1 1.414 0l1.5 1.5a1 1 0 1 1-1.414 1.414l-1.5-1.5a1 1 0 0 1 0-1.414m7.914-5.5a1 1 0 0 0-1.414 1.414l1 1a1 1 0 0 0 1.414-1.414zm1.586-3a1 1 0 0 1 1.414 0l1 1a1 1 0 0 1-1.414 1.414l-1-1a1 1 0 0 1 0-1.414m-4.586 6a1 1 0 0 0-1.414 1.414l1 1a1 1 0 0 0 1.414-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgHairbrush;
