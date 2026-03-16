import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgTableTennis = ({
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
        d="M13 19v1a2 2 0 1 1-4 0v-1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M14.084 3.18c.05-.24-.05-.495-.275-.593A7 7 0 0 0 4.023 9.57c.02.247.233.43.481.43h12.992a.476.476 0 0 0 .481-.43 7 7 0 0 0 0-1.147c-.02-.245-.23-.423-.473-.453a4 4 0 0 1-3.42-4.79M5.053 12.694c-.194-.312.044-.694.412-.694h11.07c.368 0 .606.382.412.694A7 7 0 0 1 11 16a7 7 0 0 1-5.947-3.306"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M18 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgTableTennis;
