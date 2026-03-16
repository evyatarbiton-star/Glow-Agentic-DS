import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgLocationUploadOuLc = ({
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
        d="M18.293 15.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1-1.414 1.414L20 18.414V22a1 1 0 1 1-2 0v-3.586l-.293.293a1 1 0 0 1-1.414-1.414z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M3 11a9 9 0 0 1 18 0q0 .586-.088 1.151a1 1 0 0 1-1.977-.302Q19 11.429 19 11a7 7 0 1 0-14 0c0 2.206 1.335 4.267 3.205 5.888l3.441 2.982a.54.54 0 0 0 .708 0l.991-.859a1 1 0 1 1 1.31 1.511l-.991.86a2.54 2.54 0 0 1-3.328 0l-3.441-2.983C4.81 16.591 3 14.026 3 11"
        clipRule="evenodd"
      />
      <path fill={color} d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0" />
    </svg>
  );
};
export default SvgLocationUploadOuLc;
