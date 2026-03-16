import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgBackward5 = ({
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
        d="M22 7.005c0-2.672-3.23-4.01-5.12-2.122l-5 4.995a3 3 0 0 0 0 4.244l5 4.995c1.89 1.889 5.12.55 5.12-2.122zm-3.707-.707c.63-.63 1.707-.184 1.707.707v9.99c0 .89-1.076 1.337-1.707.707l-5-4.995a1 1 0 0 1 0-1.414z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M13 7.005c0-2.672-3.23-4.01-5.12-2.122l-5 4.995a3 3 0 0 0 0 4.244l5 4.995c1.89 1.889 5.12.55 5.12-2.122zm-3.707-.707c.63-.63 1.707-.184 1.707.707v9.99c0 .89-1.077 1.337-1.707.707l-5-4.995a1 1 0 0 1 0-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgBackward5;
