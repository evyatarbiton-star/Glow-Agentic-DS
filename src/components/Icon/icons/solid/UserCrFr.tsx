import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgUserCrFr = ({
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
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-5.035 5.71c.108.335-.042.69-.339.89A8.27 8.27 0 0 1 12 20a8.27 8.27 0 0 1-4.626-1.4c-.297-.2-.448-.555-.339-.89C7.371 16.676 8.46 15 12 15s4.63 1.677 4.965 2.71M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgUserCrFr;
