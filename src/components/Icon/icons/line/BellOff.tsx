import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgBellOff = ({
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
        d="M6.876 6.876A5.97 5.97 0 0 0 6 10v1.957c0 .431-.156.847-.439 1.172l-.644.74C2.83 16.261 4.53 20 7.707 20h8.587a3.63 3.63 0 0 0 2.623-1.082L17.501 17.5c-.297.303-.713.5-1.207.5H7.706c-1.46 0-2.24-1.718-1.282-2.818l.645-.74c.6-.689.931-1.572.931-2.485V10c0-.587.126-1.144.354-1.646z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M12 2a1 1 0 0 0-1 1v1a1 1 0 1 0 0 2h1a4 4 0 0 1 4 4v1a1 1 0 1 0 2 0v-1a6 6 0 0 0-5.003-5.918Q13 4.042 13 4V3a1 1 0 0 0-1-1"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M2.293 2.293a1 1 0 0 1 1.414 0l18 18a1 1 0 0 1-1.414 1.414l-18-18a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgBellOff;
