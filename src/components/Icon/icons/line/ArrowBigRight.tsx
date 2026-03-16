import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgArrowBigRight = ({
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
        d="M22 12a1 1 0 0 1-1 1H3a1 1 0 1 1 0-2h18a1 1 0 0 1 1 1"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M21.707 11.293a1 1 0 0 1 0 1.414l-7 7a1 1 0 0 1-1.414-1.414L19.586 12l-6.293-6.293a1 1 0 0 1 1.414-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgArrowBigRight;
