import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgDownArrow = ({
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
        d="M12 2c.552 0 1 .471 1 1.053v17.894C13 21.53 12.552 22 12 22s-1-.471-1-1.053V3.053C11 2.47 11.448 2 12 2"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M12.707 21.707a1 1 0 0 1-1.414 0l-5-5a1 1 0 1 1 1.414-1.414L12 19.586l4.293-4.293a1 1 0 0 1 1.414 1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgDownArrow;
