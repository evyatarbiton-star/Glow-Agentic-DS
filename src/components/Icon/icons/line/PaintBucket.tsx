import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgPaintBucket = ({
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
      <path fill={color} d="M4 15h11l-2 2H5z" />
      <path
        fill={color}
        fillRule="evenodd"
        d="M11.537 4.123a3.828 3.828 0 0 0-5.415 5.414l.464.463-2.71 2.709a3 3 0 0 0 0 4.242l3.172 3.172a3 3 0 0 0 4.243 0l4.713-4.713h1.991c1.782 0 2.674-2.154 1.415-3.414L13.414 6l-.707-.707zm-4 1.414a1.83 1.83 0 0 1 2.586 0l.463.463L8 8.586l-.463-.464a1.83 1.83 0 0 1 0-2.585M5.29 14.123 12 7.414l5.995 5.996h-1.991a2 2 0 0 0-1.414.586l-4.713 4.713a1 1 0 0 1-1.415 0l-3.171-3.172a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M21 19.4c0 .884-.672 1.6-1.5 1.6s-1.5-.716-1.5-1.6c0-.842.738-1.772 1.178-2.252a.43.43 0 0 1 .643 0c.441.48 1.179 1.41 1.179 2.252"
      />
    </svg>
  );
};
export default SvgPaintBucket;
