import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgServingPlate = ({
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
        d="M19 17H5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2M5 15a2 2 0 0 0-2 2 4 4 0 0 0 4 4h10a4 4 0 0 0 4-4 2 2 0 0 0-2-2z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M14.631 7.443a3 3 0 1 0-5.262 0A8 8 0 0 0 4 15v1.09c0 .503.407.91.91.91h14.18a.91.91 0 0 0 .91-.91V15a8 8 0 0 0-5.369-7.557M13 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-1 3a6 6 0 0 0-6 6h12a6 6 0 0 0-6-6"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgServingPlate;
