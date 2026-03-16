import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgFileLockedInLc = ({
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
        d="M4.327 3.638C4 4.28 4 5.12 4 6.8v10.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C6.28 22 7.12 22 8.8 22h6.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C20 19.72 20 18.88 20 17.2V9.778c0-.26 0-.389-.047-.49a.5.5 0 0 0-.242-.241C19.611 9 19.481 9 19.222 9c-2.072 0-3.109 0-3.913-.375a4 4 0 0 1-1.934-1.935C13 5.887 13 4.85 13 2.778c0-.26 0-.389-.047-.49a.5.5 0 0 0-.242-.241C12.611 2 12.481 2 12.222 2H8.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311M12 12a1 1 0 0 0-1 1v1h2v-1a1 1 0 0 0-1-1m3 2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1v-1a3 3 0 1 1 6 0z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M15 2.707a.707.707 0 0 1 1.207-.5l3.586 3.586a.707.707 0 0 1-.5 1.207H17a2 2 0 0 1-2-2z"
      />
    </svg>
  );
};
export default SvgFileLockedInLc;
