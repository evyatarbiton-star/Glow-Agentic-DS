import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgBluetooth = ({
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
        d="M11 4.001c0-1.56 1.708-2.52 3.041-1.708l5.002 3.05a1.99 1.99 0 0 1 .076 3.349L14.209 12l4.91 3.308a1.99 1.99 0 0 1-.076 3.35l-5.002 3.048c-1.333.813-3.04-.146-3.04-1.707v-5.836l-5.442 3.666a1 1 0 0 1-1.118-1.658L10.631 12 4.44 7.83A1 1 0 0 1 5.56 6.17L11 9.838zm2 9.596 4.988 3.36L13 20zm0-3.194V4.001l4.988 3.041z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgBluetooth;
