import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgPie14 = ({
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
        d="M13 18.95c0 .552.45 1.006.998.945a9 9 0 0 0 7.317-5.5 9 9 0 0 0-7.317-12.39c-.549-.06-.998.393-.998.945zM11 5.05c0-.552-.45-1.006-.998-.945a9 9 0 0 0 0 17.89c.549.06.998-.393.998-.945z"
      />
    </svg>
  );
};
export default SvgPie14;
