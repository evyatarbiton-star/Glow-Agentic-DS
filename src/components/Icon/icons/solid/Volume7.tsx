import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgVolume7 = ({
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
        d="M16.285 4.332a1 1 0 0 0-.57 1.917 6.003 6.003 0 0 1 0 11.503 1 1 0 0 0 .57 1.917 8.003 8.003 0 0 0 0-15.337"
      />
      <path
        fill={color}
        d="M16.707 9.293a1 1 0 0 0-1.414 1.414c.49.49.707.733.707 1.293s-.217.804-.707 1.293a1 1 0 0 0 1.414 1.414l.026-.026C17.243 14.172 18 13.416 18 12s-.756-2.17-1.266-2.68zM13 6.004c0-1.712-2.011-2.632-3.307-1.513L5.628 8H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h1.628l4.065 3.51c1.296 1.118 3.307.197 3.307-1.515z"
      />
    </svg>
  );
};
export default SvgVolume7;
