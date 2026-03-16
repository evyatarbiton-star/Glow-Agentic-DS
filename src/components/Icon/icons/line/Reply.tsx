import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgReply = ({
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
        d="M2 10a1 1 0 0 1 1-1h14a5 5 0 0 1 5 5v5a1 1 0 1 1-2 0v-5a3 3 0 0 0-3-3H3a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M2.293 10.707a1 1 0 0 1 0-1.414l5-5a1 1 0 0 1 1.414 1.414L4.414 10l4.293 4.293a1 1 0 1 1-1.414 1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgReply;
