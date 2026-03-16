import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgLocationArrowOff = ({
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
        d="M7.514 7.515 4.28 8.765c-1.812.699-1.664 3.31.216 3.8l4.937 1.287a1 1 0 0 1 .715.716l1.287 4.937c.49 1.88 3.102 2.028 3.801.216l1.25-3.236z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M20.894 5.072c.475-1.23-.735-2.44-1.966-1.965L12.14 5.728a1 1 0 1 0 .72 1.866l5.777-2.231-2.23 5.777a1 1 0 0 0 1.865.72z"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M2.293 2.293a1 1 0 0 1 1.414 0l18 18a1 1 0 0 1-1.414 1.414l-18-18a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgLocationArrowOff;
