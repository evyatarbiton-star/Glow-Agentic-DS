import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgMedicalMask = ({
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
        d="M16.967 6.562a22.3 22.3 0 0 0-9.934 0A1.33 1.33 0 0 0 6 7.857v6.42c0 .78.36 1.515.973 1.995a8.17 8.17 0 0 0 10.054 0c.614-.48.973-1.215.973-1.994v-6.42a1.33 1.33 0 0 0-1.033-1.296m-10.38-1.95a24.3 24.3 0 0 1 10.826 0A3.33 3.33 0 0 1 20 7.857v6.42a4.53 4.53 0 0 1-1.743 3.572 10.17 10.17 0 0 1-12.514 0A4.53 4.53 0 0 1 4 14.278v-6.42c0-1.553 1.073-2.9 2.587-3.246"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M10 9a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2zm0 4a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2zM3 8a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2zm16 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zM2 13a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1m17-1a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgMedicalMask;
