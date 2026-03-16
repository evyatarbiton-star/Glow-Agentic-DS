import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgPartlyCloudy = ({
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
        d="M9 3a1 1 0 1 1 2 0 1 1 0 0 1-2 0M4 5a1 1 0 1 1 2 0 1 1 0 0 1-2 0M15 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2M3 9a1 1 0 1 1 0 2 1 1 0 0 1 0-2M8 10a2 2 0 0 1 3.491-1.333 1 1 0 1 0 1.49-1.334A4 4 0 0 0 6 10a1 1 0 1 0 2 0"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="m11.777 14.67-1.418-.52A2.5 2.5 0 1 0 9.5 19h6a3.5 3.5 0 1 0-2.835-5.553zm-.731-2.397A5.5 5.5 0 1 1 15.5 21h-6a4.5 4.5 0 1 1 1.546-8.727"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgPartlyCloudy;
