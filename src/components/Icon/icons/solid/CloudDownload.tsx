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
        d="M16.2 6.004A5 5 0 0 1 16 16h-3v-6a1 1 0 1 0-2 0v6H7.5a4.5 4.5 0 0 1-2.35-8.338A6.002 6.002 0 0 1 16.2 6.004"
      />
      <path
        fill={color}
        d="M13 17.586V16h-2v1.586l-.293-.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l2-2a1 1 0 0 0-1.414-1.414z"
      />
    </svg>
  );
};
export default SvgCloudDownload;
