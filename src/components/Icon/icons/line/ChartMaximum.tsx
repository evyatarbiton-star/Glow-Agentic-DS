import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgChartMaximum = ({
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
        d="M4 3a1 1 0 0 1 1 1v13a2 2 0 0 0 2 2h13a1 1 0 1 1 0 2H7a4 4 0 0 1-4-4V4a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M8 17a1 1 0 0 0 1-1c0-2.942.371-5.79 1.236-7.865C11.096 6.072 12.322 5 14 5s2.905 1.072 3.764 3.135C18.63 10.209 19 13.058 19 16a1 1 0 1 0 2 0c0-3.058-.379-6.21-1.39-8.635C18.596 4.928 16.824 3 14 3c-2.822 0-4.595 1.928-5.61 4.365C7.378 9.791 7 12.942 7 16a1 1 0 0 0 1 1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgChartMaximum;
