import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgMap = ({
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
        d="M3.717 4.755 7 4.285v14l-2.717.389A2 2 0 0 1 2 16.694v-9.96a2 2 0 0 1 1.717-1.98M17 19.714l3.283-.469A2 2 0 0 0 22 17.265V7.306a2 2 0 0 0-2.283-1.98L17 5.714zM15 20l-6-2V4l6 2z"
      />
    </svg>
  );
};
export default SvgMap;
