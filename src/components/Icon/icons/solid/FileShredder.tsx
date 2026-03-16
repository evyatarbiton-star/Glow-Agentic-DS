import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgFileShredder = ({
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
        d="M5 16a1 1 0 1 0 0 2 1 1 0 0 0 0-2M5 20a1 1 0 1 0 0 2 1 1 0 0 0 0-2M18 21a1 1 0 1 1 2 0 1 1 0 0 1-2 0M14.5 20a1 1 0 1 0 0 2 1 1 0 0 0 0-2M13.5 17a1 1 0 1 1 2 0 1 1 0 0 1-2 0M9.5 20a1 1 0 1 0 0 2 1 1 0 0 0 0-2M8.5 17a1 1 0 1 1 2 0 1 1 0 0 1-2 0M19 16a1 1 0 1 0 0 2 1 1 0 0 0 0-2M4 6.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C6.28 2 7.12 2 8.8 2h3.422c.26 0 .389 0 .49.047a.5.5 0 0 1 .241.242c.047.1.047.23.047.489 0 2.072 0 3.109.375 3.912a4 4 0 0 0 1.935 1.935C16.113 9 17.15 9 19.222 9c.26 0 .389 0 .49.047a.5.5 0 0 1 .241.242c.047.1.047.23.047.489V13.5a.5.5 0 0 1-.5.5h-15a.5.5 0 0 1-.5-.5z"
      />
      <path
        fill={color}
        d="M15 2.707a.707.707 0 0 1 1.207-.5l3.586 3.586a.707.707 0 0 1-.5 1.207H17a2 2 0 0 1-2-2z"
      />
    </svg>
  );
};
export default SvgFileShredder;
