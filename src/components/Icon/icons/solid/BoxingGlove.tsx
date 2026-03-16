import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgBoxingGlove = ({
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
        d="M5 20a2 2 0 0 1 2-2h7a2 2 0 1 1 0 4H7a2 2 0 0 1-2-2M11 2H8a4 4 0 0 0-4 4v7a3 3 0 0 0 3 3h7.757a3 3 0 0 0 2.122-.879l1.364-1.364A6 6 0 0 0 20 9.515V8.5A2.5 2.5 0 0 0 17.5 6a.5.5 0 0 0-.5.5V9a1 1 0 1 1-2 0V6a4 4 0 0 0-4-4"
      />
    </svg>
  );
};
export default SvgBoxingGlove;
