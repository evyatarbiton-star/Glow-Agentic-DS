import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgBurger = ({
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
        d="M3 10.6A5.6 5.6 0 0 1 8.6 5h6.8a5.6 5.6 0 0 1 5.6 5.6 2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 10.6M8.6 7h6.8a3.6 3.6 0 0 1 3.6 3.6.4.4 0 0 1-.4.4H5.4a.4.4 0 0 1-.4-.4A3.6 3.6 0 0 1 8.6 7M21 18a3 3 0 0 1-3 3H6a3 3 0 1 1 0-6h12a3 3 0 0 1 3 3m-3 1H6a1 1 0 1 1 0-2h12a1 1 0 1 1 0 2"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M19 13H5a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2M5 11a3 3 0 1 0 0 6h14a3 3 0 1 0 0-6z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgBurger;
