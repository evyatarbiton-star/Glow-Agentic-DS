import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgCloudy6 = ({
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
        d="m8.296 9.898-.948.155A4.002 4.002 0 0 0 8 18h6a6 6 0 1 0-5.232-8.94zm-1.27-1.82A6.002 6.002 0 0 0 8 20h6A8 8 0 1 0 7.025 8.079"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgCloudy6;
