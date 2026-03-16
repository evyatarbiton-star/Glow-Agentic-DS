import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgForward6 = ({
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
        d="M2 13a7 7 0 0 1 7-7h10a1 1 0 1 1 0 2H9a5 5 0 1 0 5 5 1 1 0 1 1 2 0 7 7 0 1 1-14 0"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M21.707 6.293a1 1 0 0 1 0 1.414l-2 2a1 1 0 0 1-1.414-1.414L19.586 7l-1.293-1.293a1 1 0 0 1 1.414-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgForward6;
