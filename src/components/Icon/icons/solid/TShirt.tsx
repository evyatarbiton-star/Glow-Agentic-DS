import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgTShirt = ({
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
        d="M8.5 3a.5.5 0 0 1 .5.5V4a3 3 0 1 0 6 0v-.5a.5.5 0 0 1 .5-.5h.5a2 2 0 0 1 2 2v1c0 1.66.919 2.708 1.74 3.313.692.51 1.26 1.268 1.26 2.128V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7.559c0-.86.568-1.618 1.26-2.129C5.082 8.709 6 7.66 6 6V5a2 2 0 0 1 2-2zm2.5 8a1 1 0 1 0 0 2v2a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2v-3a1 1 0 0 0-1-1z"
      />
    </svg>
  );
};
export default SvgTShirt;
