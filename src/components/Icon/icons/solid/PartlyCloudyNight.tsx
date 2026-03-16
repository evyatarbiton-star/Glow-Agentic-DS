import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgPartlyCloudyNight = ({
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
        d="M10.293 6.724c-.047.138.061.276.207.276a7.49 7.49 0 0 1 6.2 3.28c.06.087.145.156.244.196.81.329 1.539.816 2.148 1.423.21.21.556.223.739-.01A5.48 5.48 0 0 0 21 8.5a1 1 0 0 0-1-1 3.5 3.5 0 0 1-3.5-3.501v-.001a1 1 0 0 0-1-1 5.5 5.5 0 0 0-5.208 3.726M8 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2M7 7a1 1 0 0 0-1-1 1 1 0 0 0-2 0 1 1 0 0 0 0 2 1 1 0 0 0 2 0 1 1 0 0 0 1-1"
      />
      <path
        fill={color}
        stroke={color}
        strokeWidth={2}
        d="M10.5 10a4.5 4.5 0 0 1 4.05 2.537l.214.439.476.102a3.502 3.502 0 0 1-.35 6.9l-.194.022H7.304l-.194-.021a3.501 3.501 0 0 1-1.274-6.56l.325-.176.133-.345A4.5 4.5 0 0 1 10.5 10Z"
      />
    </svg>
  );
};
export default SvgPartlyCloudyNight;
