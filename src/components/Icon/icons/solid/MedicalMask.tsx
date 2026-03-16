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
        d="M17.413 4.612a24.3 24.3 0 0 0-10.826 0A3.33 3.33 0 0 0 4 7.857v6.42c0 1.396.643 2.714 1.743 3.572a10.17 10.17 0 0 0 12.514 0A4.53 4.53 0 0 0 20 14.278v-6.42a3.33 3.33 0 0 0-2.587-3.246M9 10a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1m1 3a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2zM3 8a1 1 0 0 0 0 2h1V8zm18 0h-1v2h1a1 1 0 1 0 0-2M2 13a1 1 0 0 1 1-1h1v2H3a1 1 0 0 1-1-1m19-1h-1v2h1a1 1 0 1 0 0-2"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgMedicalMask;
