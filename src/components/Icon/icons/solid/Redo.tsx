import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgRedo = ({
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
        d="M15 8a1 1 0 0 0-1-1H8.5a6.5 6.5 0 0 0 0 13H19a1 1 0 1 0 0-2H8.5a4.5 4.5 0 1 1 0-9H14a1 1 0 0 0 1-1"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M21.707 8.707a1 1 0 0 0 0-1.414l-3-3A1 1 0 0 0 17 5v6a1 1 0 0 0 1.707.707z"
      />
    </svg>
  );
};
export default SvgRedo;
