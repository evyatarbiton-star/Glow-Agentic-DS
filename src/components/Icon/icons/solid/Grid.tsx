import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgGrid = ({
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
        d="M3.5 7c-.276 0-.503-.225-.47-.499a4 4 0 0 1 3.471-3.47c.274-.034.499.193.499.469v3a.5.5 0 0 1-.5.5zM3 9.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5zm4 8a.5.5 0 0 0-.5-.5h-3c-.276 0-.503.225-.47.499a4 4 0 0 0 3.471 3.47c.274.034.499-.193.499-.469zm2 0a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5zm6-3a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5zm2.5 2.5a.5.5 0 0 0-.5.5v3c0 .276.225.503.499.47a4 4 0 0 0 3.47-3.471c.034-.274-.193-.499-.469-.499zm3.5-2.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5zm-12-8a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5zm8 0a.5.5 0 0 0 .5.5h3c.276 0 .503-.225.47-.499a4 4 0 0 0-3.471-3.47c-.274-.034-.499.193-.499.469z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgGrid;
