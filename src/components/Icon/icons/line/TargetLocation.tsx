import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgTargetLocation = ({
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
      <g fill={color} clipPath="url(#a)">
        <path d="M12.002 16.166a4.167 4.167 0 1 0 0-8.334 4.167 4.167 0 0 0 0 8.334" />
        <path d="M21.167 11.167h-.876a8.346 8.346 0 0 0-7.458-7.458v-.876a.833.833 0 1 0-1.666 0v.876a8.346 8.346 0 0 0-7.458 7.458h-.876a.833.833 0 1 0 0 1.666h.876a8.35 8.35 0 0 0 7.458 7.458v.876a.833.833 0 1 0 1.666 0v-.876a8.35 8.35 0 0 0 7.458-7.458h.876a.833.833 0 1 0 0-1.666m-8.345 7.444a.827.827 0 0 0-.822-.778.827.827 0 0 0-.822.778 6.67 6.67 0 0 1-5.788-5.789.83.83 0 0 0 .777-.822.827.827 0 0 0-.778-.822 6.67 6.67 0 0 1 5.789-5.788c.03.432.381.777.822.777s.792-.345.822-.778a6.67 6.67 0 0 1 5.788 5.789.83.83 0 0 0-.777.822c0 .44.345.792.778.822a6.674 6.674 0 0 1-5.79 5.789" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M2 2h20v20H2z" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default SvgTargetLocation;
