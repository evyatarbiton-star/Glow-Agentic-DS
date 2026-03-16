import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgClearNight10 = ({
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
        d="M12.885 3.458A1 1 0 0 0 11.995 2C6.476 2.002 2 6.479 2 12c0 5.523 4.477 10 10 10a10 10 0 0 0 8.892-5.422 1 1 0 0 0-.888-1.458H20a8 8 0 0 1-7.115-11.662"
      />
    </svg>
  );
};
export default SvgClearNight10;
