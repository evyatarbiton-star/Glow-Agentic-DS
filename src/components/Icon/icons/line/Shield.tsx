import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgShield = ({
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
        d="M12.366 4.069a1 1 0 0 0-.732 0l-6 2.362a1 1 0 0 0-.634.93v3.641a9 9 0 0 0 4.762 7.94l1.767.943a1 1 0 0 0 .942 0l1.767-.943A9 9 0 0 0 19 11.002v-3.64a1 1 0 0 0-.634-.93zm-1.465-1.861a3 3 0 0 1 2.198 0l6 2.362A3 3 0 0 1 21 7.362v3.64a11 11 0 0 1-5.82 9.704l-1.766.943a3 3 0 0 1-2.826 0l-1.767-.943A11 11 0 0 1 3 11.002v-3.64A3 3 0 0 1 4.9 4.57z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgShield;
