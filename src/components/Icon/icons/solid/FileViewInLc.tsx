import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgFileViewInLc = ({
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
        d="M4 6.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C6.28 2 7.12 2 8.8 2h3.422c.26 0 .389 0 .49.047a.5.5 0 0 1 .241.242c.047.1.047.23.047.489 0 2.072 0 3.109.375 3.912a4 4 0 0 0 1.935 1.935C16.113 9 17.15 9 19.222 9c.26 0 .389 0 .49.047a.5.5 0 0 1 .241.242c.047.1.047.23.047.489V17.2c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C17.72 22 16.88 22 15.2 22H8.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C4 19.72 4 18.88 4 17.2zm11.856 8.665C15.276 16.307 13.878 18 12 18s-3.277-1.693-3.856-2.536a.81.81 0 0 1 0-.928C8.724 13.693 10.122 12 12 12s3.277 1.693 3.856 2.536a.81.81 0 0 1 0 .928M13 15a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M15 2.707a.707.707 0 0 1 1.207-.5l3.586 3.586a.707.707 0 0 1-.5 1.207H17a2 2 0 0 1-2-2z"
      />
    </svg>
  );
};
export default SvgFileViewInLc;
