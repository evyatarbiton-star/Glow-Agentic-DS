import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgDeleteForever = ({
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
        d="M7 8a2 2 0 0 0-2 2v9a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-9a2 2 0 0 0-2-2zm3.707 4.293a1 1 0 0 0-1.414 1.414L10.586 15l-1.293 1.293a1 1 0 1 0 1.414 1.414L12 16.414l1.293 1.293a1 1 0 0 0 1.414-1.414L13.414 15l1.293-1.293a1 1 0 0 0-1.414-1.414L12 13.586z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M10 2a2 2 0 0 0-2 2H5a1 1 0 0 0 0 2h14a1 1 0 1 0 0-2h-3a2 2 0 0 0-2-2z"
      />
    </svg>
  );
};
export default SvgDeleteForever;
