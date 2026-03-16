import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgIntravenousTherapy = ({
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
        d="M10 16H8v3a1 1 0 1 0 2 0zm2 0v3a3 3 0 0 0 3 3h4a1 1 0 1 0 0-2h-4a1 1 0 0 1-1-1v-3zM13 8a1 1 0 1 0 0 2h5V8zm0 4a1 1 0 1 0 0 2h5v-2z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M11 4a1 1 0 0 0-1 1 1 1 0 0 1-1 1H8a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-1a1 1 0 0 1-1-1 1 1 0 0 0-1-1M8.17 4a3.001 3.001 0 0 1 5.66 0H14a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgIntravenousTherapy;
