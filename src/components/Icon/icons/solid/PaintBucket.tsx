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
      <path
        fill={color}
        d="M21 19.4c0 .884-.672 1.6-1.5 1.6s-1.5-.716-1.5-1.6c0-.842.738-1.772 1.178-2.252a.432.432 0 0 1 .643 0c.441.48 1.179 1.41 1.179 2.252"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M10.585 6.414 7.914 9.086l-.86-.86a1.889 1.889 0 0 1 2.671-2.672zM12 5l2 2 5.704 5.704a1 1 0 0 1-.52 1.69l-2.882.549a1 1 0 0 0-.52.275l-5.198 5.198a2 2 0 0 1-2.829 0l-4.171-4.172a2 2 0 0 1 0-2.828L6.5 10.5l-.86-.86a3.889 3.889 0 0 1 5.5-5.5zM6.02 15.854A.5.5 0 0 1 6.375 15h5.59a.5.5 0 0 1 .353.854l-2.795 2.794a.5.5 0 0 1-.707 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgPaintBucket;
