import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgLine11 = ({
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
        d="M21 12.5a3.5 3.5 0 1 0-7 0v.5a1 1 0 1 0 2 0v-.5a1.5 1.5 0 0 1 3 0v1.1a4.4 4.4 0 0 1-4.4 4.4H14a1 1 0 1 0 0 2h.6a6.4 6.4 0 0 0 6.4-6.4z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M3 4a1 1 0 0 0 0 2 1 1 0 0 1 1 1v10a1 1 0 1 0 2 0V7.5a1.5 1.5 0 1 1 3 0V17a1 1 0 1 0 2 0V7.5a1.5 1.5 0 0 1 3 0v6.25A6.25 6.25 0 0 0 20.25 20H21a1 1 0 1 0 0-2h-.75A4.25 4.25 0 0 1 16 13.75V7.5a3.5 3.5 0 0 0-6-2.45A3.5 3.5 0 0 0 7.5 4c-.905 0-1.73.343-2.35.907A3 3 0 0 0 3 4"
      />
    </svg>
  );
};
export default SvgLine11;
