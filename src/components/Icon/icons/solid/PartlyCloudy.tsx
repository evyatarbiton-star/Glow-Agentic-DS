import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgPartlyCloudy = ({
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
        d="M10 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2M5 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2M15 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2M4 10a1 1 0 1 0-2 0 1 1 0 0 0 2 0M6 10a4 4 0 0 1 7.286-2.282c.18.26.023.6-.275.705a7.5 7.5 0 0 0-2.493 1.47.54.54 0 0 1-.411.135 6.475 6.475 0 0 0-3.391.597c-.306.145-.684-.012-.707-.35A4 4 0 0 1 6 10"
      />
      <path
        fill={color}
        stroke={color}
        strokeWidth={2}
        d="M15.5 11a4.5 4.5 0 1 1 0 9h-6a3.5 3.5 0 1 1 1.202-6.788l.71.259.443-.61A4.5 4.5 0 0 1 15.5 11Z"
      />
    </svg>
  );
};
export default SvgPartlyCloudy;
