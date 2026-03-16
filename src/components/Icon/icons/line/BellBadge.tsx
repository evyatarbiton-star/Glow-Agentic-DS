import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgBellBadge = ({
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
      <path fill={color} d="M10 20h4a2 2 0 1 1-4 0" />
      <path
        fill={color}
        fillRule="evenodd"
        d="M12 2a1 1 0 0 0-1 1v1q0 .042.003.082A6 6 0 0 0 6 10v1.957c0 .431-.156.847-.439 1.172l-.644.74C2.83 16.261 4.53 20 7.707 20h8.587c3.176 0 4.876-3.738 2.79-6.132l-.645-.74a1.78 1.78 0 0 1-.439-1.17V10a6 6 0 0 0-5.003-5.918L13 4V3a1 1 0 0 0-1-1m-4 8a4 4 0 1 1 8 0v1.957c0 .914.33 1.797.931 2.486l.645.74c.959 1.1.177 2.817-1.282 2.817H7.706c-1.46 0-2.24-1.718-1.282-2.818l.645-.739c.6-.689.931-1.572.931-2.486z"
        clipRule="evenodd"
      />
      <path fill={color} d="M22 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0" />
    </svg>
  );
};
export default SvgBellBadge;
