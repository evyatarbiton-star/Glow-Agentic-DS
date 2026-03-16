import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgUpArrow = ({
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
        d="M11.293 2.293a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1-1.414 1.414L12 4.414 7.707 8.707a1 1 0 0 1-1.414-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgUpArrow;
