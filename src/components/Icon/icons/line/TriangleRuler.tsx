import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgTriangleRuler = ({
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
        d="M6 8H3v2h3a1 1 0 0 0 0-2m0 6H3v2h3a1 1 0 1 0 0-2m2 7v-3a1 1 0 1 1 2 0v3zm6-3v3h2v-3a1 1 0 1 0-2 0"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M6.475 5C5.66 5 5 5.66 5 6.475V18a1 1 0 0 0 1 1h11.525a1.475 1.475 0 0 0 1.043-2.518L7.518 5.432A1.48 1.48 0 0 0 6.475 5M3 6.475a3.475 3.475 0 0 1 5.932-2.457l11.05 11.05A3.475 3.475 0 0 1 17.525 21H6a3 3 0 0 1-3-3z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M9 14.5v-3.003a.5.5 0 0 1 .854-.354l3.003 3.003a.5.5 0 0 1-.354.854H9.5a.5.5 0 0 1-.5-.5"
      />
    </svg>
  );
};
export default SvgTriangleRuler;
