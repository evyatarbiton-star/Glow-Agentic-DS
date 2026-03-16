import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgBattery60 = ({
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
        d="M20 8.242c0 .158.09.303.231.374.642.32.963.481 1.198.72a2 2 0 0 1 .462.748c.109.317.109.676.109 1.394v1.044c0 .718 0 1.077-.11 1.394a2 2 0 0 1-.461.747c-.235.24-.556.4-1.198.721a.42.42 0 0 0-.231.374c0 1.228-.015 1.874-.228 2.39a3 3 0 0 1-1.624 1.624C17.597 20 16.898 20 15.5 20H6.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C2 17.72 2 16.88 2 15.2V8.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C4.28 4 5.12 4 6.8 4h8.7c1.398 0 2.097 0 2.648.228a3 3 0 0 1 1.624 1.624c.213.516.227 1.162.228 2.39M7 8a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgBattery60;
