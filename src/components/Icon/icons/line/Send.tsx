import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgSend = ({
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
        d="M7.346 3.327c-2.198-1.097-4.711.768-4.298 3.19l.909 5.315a1 1 0 0 1 0 .336l-.91 5.324c-.412 2.422 2.101 4.287 4.3 3.189l11.998-5.997c2.212-1.105 2.212-4.262-.001-5.367zM5.02 6.18a1 1 0 0 1 1.432-1.064l11.999 5.99a1 1 0 0 1 0 1.79L6.452 18.891a1 1 0 0 1-1.433-1.063L5.844 13H10a1 1 0 1 0 0-2H5.844z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgSend;
