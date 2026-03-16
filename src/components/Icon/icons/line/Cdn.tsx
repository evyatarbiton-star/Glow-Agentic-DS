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
        d="M4 18.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5zM10 18.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5zM16.5 18a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zM11 16v2h2v-2h3a1 1 0 0 1 1 1v1h2v-1a3 3 0 0 0-3-3h-3v-2h-2v2H8a3 3 0 0 0-3 3v1h2v-1a1 1 0 0 1 1-1z"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="m13.923 5.3-.774-.68A2.502 2.502 0 0 0 9.14 5.67l-.436 1.242-1.312.092A1.5 1.5 0 0 0 7.5 10h8a2.5 2.5 0 1 0-.574-4.934zM7.5 12a3.5 3.5 0 0 1-.247-6.991 4.502 4.502 0 0 1 7.216-1.89A4.5 4.5 0 1 1 15.5 12z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgCdn;
