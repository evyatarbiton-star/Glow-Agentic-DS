import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgCube = ({
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
        d="M19.553 10.606A1 1 0 0 1 21 11.5V18a1 1 0 0 1-.553.894l-6 3A1 1 0 0 1 13 21v-6.5a1 1 0 0 1 .553-.894zM4.447 10.606A1 1 0 0 0 3 11.5V18a1 1 0 0 0 .553.894l6 3A1 1 0 0 0 11 21v-6.5a1 1 0 0 0-.553-.894zM12.447 2.106a1 1 0 0 0-.894 0l-8 4a1 1 0 0 0 0 1.788l8 4a1 1 0 0 0 .894 0l8-4a1 1 0 0 0 0-1.788z"
      />
    </svg>
  );
};
export default SvgCube;
