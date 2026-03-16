import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgShorts = ({
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
        d="M6.737 4a4 4 0 0 0-3.984 3.633l-.737 8A4 4 0 0 0 6 20h1.46a4 4 0 0 0 3.946-3.342l.417-2.507a.18.18 0 0 1 .356 0l.418 2.507A4 4 0 0 0 16.542 20h1.46a4 4 0 0 0 3.982-4.367l-.737-8A4 4 0 0 0 17.264 4zM4.745 7.816A2 2 0 0 1 6.737 6h10.527a2 2 0 0 1 1.992 1.817l.017.183H4.728zM4.544 10l-.536 5.817A2 2 0 0 0 5.999 18h1.46a2 2 0 0 0 1.973-1.671l.418-2.507a2.18 2.18 0 0 1 4.301 0l.418 2.507A2 2 0 0 0 16.542 18h1.46a2 2 0 0 0 1.99-2.184L19.458 10z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgShorts;
