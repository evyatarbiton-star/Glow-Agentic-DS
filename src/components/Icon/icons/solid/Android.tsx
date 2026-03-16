import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgAndroid = ({
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
        d="M4 9a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0v-4a1 1 0 0 0-1-1m16 0a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0v-4a1 1 0 0 0-1-1M7 16v-4.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5V16a2 2 0 0 1-2 2v2a1 1 0 1 1-2 0v-2h-2v2a1 1 0 1 1-2 0v-2a2 2 0 0 1-2-2M9.895 3.553a1 1 0 1 0-1.79.894l.46.92A5 5 0 0 0 7.025 8.5c-.028.275.199.5.475.5h9c.276 0 .503-.225.476-.5a5 5 0 0 0-1.541-3.134l.46-.92a1 1 0 1 0-1.79-.894l-.376.754A5 5 0 0 0 12 4a5 5 0 0 0-1.729.307z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgAndroid;
