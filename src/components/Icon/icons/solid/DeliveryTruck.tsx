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
        d="M4 4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10V6a2 2 0 0 0-2-2zM16.613 7H14v11h6a2 2 0 0 0 2-2v-3.911a2 2 0 0 0-.652-1.478L17.96 7.522A2 2 0 0 0 16.613 7"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M8.414 19.414A2 2 0 0 0 9 18H5a2 2 0 0 0 3.414 1.414m10 0A2 2 0 0 0 19 18h-4a2 2 0 0 0 3.414 1.414"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgDeliveryTruck;
