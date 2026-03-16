import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgLine9 = ({
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
        d="M3 4a1 1 0 0 0 0 2 1 1 0 0 1 1 1v10a1 1 0 1 0 2 0V7.5a1.5 1.5 0 1 1 3 0V17a1 1 0 1 0 2 0V7.5a1.5 1.5 0 0 1 3 0v8.27A4.23 4.23 0 0 0 18.23 20H21a1 1 0 1 0 0-2h-2.77A2.23 2.23 0 0 1 16 15.77V7.5a3.5 3.5 0 0 0-6-2.45A3.5 3.5 0 0 0 7.5 4c-.905 0-1.73.343-2.35.907A3 3 0 0 0 3 4"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M18.293 16.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-2 2a1 1 0 0 1-1.414-1.414L19.586 19l-1.293-1.293a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgLine9;
