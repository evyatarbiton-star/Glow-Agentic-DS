import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgFacebook = ({
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
        d="M13 21.95a10 10 0 0 1-2 0V14h-1a1 1 0 1 1 0-2h1v-2a3 3 0 0 1 3-3h1a1 1 0 1 1 0 2h-1a1 1 0 0 0-1 1v2h2a1 1 0 1 1 0 2h-2z"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16m0 2c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgFacebook;
