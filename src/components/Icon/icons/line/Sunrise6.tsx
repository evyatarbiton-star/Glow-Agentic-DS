import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgSunrise6 = ({
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
        d="M12 2a1 1 0 0 0-1 1v1a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1M7.05 7.05a1 1 0 0 1-1.414 0l-.707-.706A1 1 0 1 1 6.343 4.93l.707.707a1 1 0 0 1 0 1.414M19.071 4.93a1 1 0 0 0-1.414 0l-.707.707a1 1 0 0 0 1.414 1.414l.707-.707a1 1 0 0 0 0-1.414M9 12a3 3 0 1 1 6 0 1 1 0 1 0 2 0 5 5 0 0 0-10 0 1 1 0 1 0 2 0M21 11a1 1 0 1 1 0 2h-1a1 1 0 1 1 0-2zM5 12a1 1 0 0 0-1-1H3a1 1 0 1 0 0 2h1a1 1 0 0 0 1-1M12.707 14.293a1 1 0 0 0-1.414 0l-3 3a1 1 0 1 0 1.414 1.414L11 17.414V21a1 1 0 1 0 2 0v-3.586l1.293 1.293a1 1 0 0 0 1.414-1.414z"
      />
    </svg>
  );
};
export default SvgSunrise6;
