import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgGemini = ({
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
        d="M10 7.857v8.286c.648-.09 1.326-.143 2-.143s1.352.052 2 .143V7.857c-.648.09-1.325.143-2 .143a14.6 14.6 0 0 1-2-.143"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M3 9.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C6.04 3 7.16 3 9.4 3h5.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C21 6.04 21 7.16 21 9.4v5.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C17.96 21 16.84 21 14.6 21H9.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C3 17.96 3 16.84 3 14.6zm5-1.963a8.7 8.7 0 0 1-1.447-.542 1 1 0 0 1 .894-1.79C8.284 5.526 10.126 6 12 6s3.716-.476 4.553-.894a1 1 0 1 1 .894 1.789A8.7 8.7 0 0 1 16 7.437v9.126c.567.163 1.062.35 1.448.542a1 1 0 1 1-.895 1.79C15.716 18.474 13.875 18 12 18s-3.716.476-4.553.894a1 1 0 1 1-.894-1.789c.386-.192.88-.379 1.447-.542z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgGemini;
