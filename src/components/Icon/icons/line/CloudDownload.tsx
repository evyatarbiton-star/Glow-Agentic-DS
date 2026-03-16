import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgCloudDownload = ({
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
        d="m14.468 7.004.551.955 1.102.043A3 3 0 0 1 16 14a1 1 0 1 0 0 2 5 5 0 0 0 .2-9.996A6.002 6.002 0 0 0 5.15 7.662 4.5 4.5 0 0 0 7.5 16H8a1 1 0 1 0 0-2h-.5a2.5 2.5 0 0 1-1.304-4.634l.717-.44.187-.82a4.002 4.002 0 0 1 7.368-1.102"
      />
      <path
        fill={color}
        d="M13 9.917C13 9.41 12.552 9 12 9s-1 .41-1 .917v7.669l-.293-.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l2-2a1 1 0 0 0-1.414-1.414l-.293.293z"
      />
    </svg>
  );
};
export default SvgCloudDownload;
