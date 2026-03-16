import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgHatChef = ({
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
        d="M5 19a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1 2 2 0 0 1-2 2H7a2 2 0 0 1-2-2M3 9c0 1.48.804 2.773 2 3.465V15a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.535a4 4 0 0 0-3.401-7.213 4 4 0 0 0-7.198 0A4 4 0 0 0 3 9"
      />
    </svg>
  );
};
export default SvgHatChef;
