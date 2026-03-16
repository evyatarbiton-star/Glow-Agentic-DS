import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgCdn = ({
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
        d="M11 16v2h2v-2h3a1 1 0 0 1 1 1v1h2v-1a3 3 0 0 0-3-3h-3v-2h-2v2H8a3 3 0 0 0-3 3v1h2v-1a1 1 0 0 1 1-1zM4 18.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5zM10 18.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5zM16.5 18a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zM4 8.5A3.5 3.5 0 0 0 7.5 12h8a4.5 4.5 0 1 0-1.03-8.881 4.502 4.502 0 0 0-7.216 1.89A3.5 3.5 0 0 0 3.999 8.5"
      />
    </svg>
  );
};
export default SvgCdn;
