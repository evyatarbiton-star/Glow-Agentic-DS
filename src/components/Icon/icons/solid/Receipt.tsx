import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgReceipt = ({
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
        d="M5 8a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v12.5a.5.5 0 0 1-.692.462l-1.988-.829a1 1 0 0 0-.654-.04l-2.857.8a3 3 0 0 1-1.618 0l-2.857-.8a1 1 0 0 0-.654.04l-1.988.829A.5.5 0 0 1 5 20.5zm3 3a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1m7-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-7 5a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1m7-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M3 4a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1"
      />
    </svg>
  );
};
export default SvgReceipt;
