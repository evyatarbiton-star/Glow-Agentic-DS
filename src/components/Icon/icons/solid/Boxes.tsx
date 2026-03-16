import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgBoxes = ({
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
        d="M15 12a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5a.5.5 0 0 0-.5.5V14a1 1 0 1 1-2 0v-1.5a.5.5 0 0 0-.5-.5zM5 12a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5a.5.5 0 0 0-.5.5V14a1 1 0 1 1-2 0v-1.5a.5.5 0 0 0-.5-.5zM10 2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-.5a.5.5 0 0 0-.5.5V4a1 1 0 1 1-2 0V2.5a.5.5 0 0 0-.5-.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgBoxes;
