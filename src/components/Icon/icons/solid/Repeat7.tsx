import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgRepeat7 = ({
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
        d="M5 13a1 1 0 0 1 1 1v1a2 2 0 0 0 2 2h3a1 1 0 1 1 0 2H8a4 4 0 0 1-4-4v-1a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="m15.707 21.707 3-3a1 1 0 0 0 0-1.414l-3-3A1 1 0 0 0 14 15v6a1 1 0 0 0 1.707.707"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M12 6a1 1 0 0 1 1-1h3a4 4 0 0 1 4 4v1a1 1 0 1 1-2 0V9a2 2 0 0 0-2-2h-3a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M5.293 6.707a1 1 0 0 1 0-1.414l3-3A1 1 0 0 1 10 3v6a1 1 0 0 1-1.707.707z"
      />
    </svg>
  );
};
export default SvgRepeat7;
