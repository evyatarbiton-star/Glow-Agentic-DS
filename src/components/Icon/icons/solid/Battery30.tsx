import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgBattery30 = ({
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
        d="m20 8.5.231.116c.642.32.963.481 1.198.72a2 2 0 0 1 .462.748c.109.317.109.676.109 1.394v1.044c0 .718 0 1.077-.11 1.394a2 2 0 0 1-.461.747c-.235.24-.556.4-1.198.721L20 15.5c0 1.398 0 2.097-.228 2.648a3 3 0 0 1-1.624 1.624C17.597 20 16.898 20 15.5 20H6.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C2 17.72 2 16.88 2 15.2V8.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C4.28 4 5.12 4 6.8 4h8.7c1.398 0 2.097 0 2.648.228a3 3 0 0 1 1.624 1.624C20 6.403 20 7.102 20 8.5M7 8a1 1 0 0 0-1 1v6a1 1 0 1 0 2 0V9a1 1 0 0 0-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgBattery30;
