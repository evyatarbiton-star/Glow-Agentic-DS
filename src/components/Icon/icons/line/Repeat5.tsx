import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgRepeat5 = ({
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
        d="M5 12a1 1 0 0 1 1 1v2a2 2 0 0 0 2 2h10a1 1 0 1 1 0 2H8a4 4 0 0 1-4-4v-2a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M18.707 17.293a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L16.586 18l-2.293-2.293a1 1 0 0 1 1.414-1.414zM5 6a1 1 0 0 1 1-1h10a4 4 0 0 1 4 4v2a1 1 0 1 1-2 0V9a2 2 0 0 0-2-2H6a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M5.293 6.707a1 1 0 0 1 0-1.414l3-3a1 1 0 0 1 1.414 1.414L7.414 6l2.293 2.293a1 1 0 0 1-1.414 1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgRepeat5;
