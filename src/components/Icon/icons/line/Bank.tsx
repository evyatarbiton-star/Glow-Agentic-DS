import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgBank = ({
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
        d="M9 11v4H7v-4zM5 9h6v8H5V9m12 2v4h-2v-4zm-4-2h6v8h-6V9"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M18 17H6a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2M6 15a3 3 0 1 0 0 6h12a3 3 0 1 0 0-6zM5.929 9H18.07a.929.929 0 0 0 .31-1.804l-6.048-2.137a1 1 0 0 0-.666 0L5.619 7.196A.929.929 0 0 0 5.93 9m-.976-3.69A2.929 2.929 0 0 0 5.929 11H18.07a2.929 2.929 0 0 0 .976-5.69l-6.048-2.137a3 3 0 0 0-1.998 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgBank;
