import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgKeyboard = ({
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
        d="M2 8.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C4.28 4 5.12 4 6.8 4h10.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C22 6.28 22 7.12 22 8.8v6.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C19.72 20 18.88 20 17.2 20H6.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C2 17.72 2 16.88 2 15.2zm8 5.2a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1m7-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2M6 14a1 1 0 1 1 2 0 1 1 0 0 1-2 0m9-5a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zm-5 1a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7 9a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgKeyboard;
