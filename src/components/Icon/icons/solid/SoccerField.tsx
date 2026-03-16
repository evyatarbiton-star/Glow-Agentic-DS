import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgSoccerField = ({
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
        d="M2.327 5.638c-.27.53-.317 1.197-.325 2.362H3a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3h-.998c.008 1.165.055 1.831.325 2.362a3 3 0 0 0 1.311 1.311C4.28 20 5.12 20 6.8 20H11v-4.126a4.002 4.002 0 0 1 0-7.748V4H6.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311M2 14v-4h1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1zm11 1.874V20h4.2c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311c.27-.53.317-1.197.325-2.362H21a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3h.998c-.008-1.165-.055-1.831-.325-2.362a3 3 0 0 0-1.311-1.311C19.72 4 18.88 4 17.2 4H13v4.126a4.002 4.002 0 0 1 0 7.748M22 10h-1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h1zm-10 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgSoccerField;
