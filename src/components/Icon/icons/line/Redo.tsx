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
        d="M22 9a1 1 0 0 0-1-1H8a6 6 0 0 0 0 12h11a1 1 0 1 0 0-2H8a4 4 0 0 1 0-8h13a1 1 0 0 0 1-1"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M21.707 9.707a1 1 0 0 0 0-1.414l-4-4a1 1 0 1 0-1.414 1.414L19.586 9l-3.293 3.293a1 1 0 0 0 1.414 1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgRedo;
