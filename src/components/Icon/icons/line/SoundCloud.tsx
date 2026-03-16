import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgSoundCloud = ({
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
        d="M16.164 9.845 15.91 8.74A3.54 3.54 0 0 0 12.461 6a.46.46 0 0 0-.461.462V17a1 1 0 0 0 1 1h3a4 4 0 0 0 1.24-7.805zm1.696-1.551A5.54 5.54 0 0 0 12.462 4 2.46 2.46 0 0 0 10 6.462V17a3 3 0 0 0 3 3h3a6 6 0 0 0 1.86-11.706M7 9a1 1 0 0 0-1 1v9a1 1 0 1 0 2 0v-9a1 1 0 0 0-1-1m-4 4a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-5a1 1 0 0 0-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgSoundCloud;
