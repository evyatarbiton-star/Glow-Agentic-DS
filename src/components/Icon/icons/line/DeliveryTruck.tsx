import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgDeliveryTruck = ({
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
        d="M2 7a3 3 0 0 1 3-3h5a3 3 0 0 1 3 3v9a2 2 0 0 1-2 2H8v-2h3V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h1v2H5a3 3 0 0 1-3-3z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M11 7h5.225a3 3 0 0 1 2.021.783l2.775 2.53A3 3 0 0 1 22 12.53V15a3 3 0 0 1-3 3h-1v-2h1a1 1 0 0 0 1-1v-2.47a1 1 0 0 0-.326-.739l-2.775-2.53A1 1 0 0 0 16.225 9H13v7h3v2h-5z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M8 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0m2 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0m8 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m2 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgDeliveryTruck;
