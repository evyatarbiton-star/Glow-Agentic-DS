import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgEye = ({
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
        d="M2.27 10.74C3.14 8.788 5.89 4 12 4s8.86 4.788 9.73 6.74a3.09 3.09 0 0 1 0 2.52C20.86 15.212 18.109 20 12 20s-8.86-4.788-9.73-6.74a3.09 3.09 0 0 1 0-2.52M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M10.5 12a1.5 1.5 0 0 0 1.415-1.998L12 10a2 2 0 1 1-1.998 1.915A1.5 1.5 0 0 0 10.5 12"
      />
    </svg>
  );
};
export default SvgEye;
