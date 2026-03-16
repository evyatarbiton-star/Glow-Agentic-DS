import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgBehance = ({
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
        d="M4 6v4h3a2 2 0 1 0 0-4zm5.8 4.857A4 4 0 0 0 7 4H3.467C2.657 4 2 4.657 2 5.467v12.962C2 19.296 2.704 20 3.571 20H7a5 5 0 0 0 2.8-9.143M4 12v6h3a3 3 0 1 0 0-6z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M16 5a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M18 8a4 4 0 0 0-4 4v4a4 4 0 0 0 6.981 2.667 1 1 0 1 0-1.49-1.334A2 2 0 0 1 16 16v-1h5a1 1 0 0 0 1-1v-2a4 4 0 0 0-4-4m-2 4a2 2 0 1 1 4 0v1h-4z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgBehance;
