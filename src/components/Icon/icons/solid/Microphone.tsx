import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgMicrophone = ({
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
        d="M6 11a1 1 0 1 0-2 0 8 8 0 0 0 7 7.938V21a1 1 0 1 0 2 0v-2.062A8 8 0 0 0 20 11a1 1 0 1 0-2 0 6 6 0 0 1-12 0"
      />
      <path fill={color} d="M8 6a4 4 0 0 1 8 0v5a4 4 0 0 1-8 0z" />
    </svg>
  );
};
export default SvgMicrophone;
