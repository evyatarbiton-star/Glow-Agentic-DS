import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgAudioLibrary = ({
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
        d="M7 6a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3zm4 12a2 2 0 0 0 2-2v-2.64l.695.223A1 1 0 0 0 15 12.63v-.621a1 1 0 0 0-.695-.953l-2-.639A1 1 0 0 0 11 11.37V14a2 2 0 1 0 0 4"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M6 3a1 1 0 0 0 1 1h10a1 1 0 1 0 0-2H7a1 1 0 0 0-1 1"
      />
    </svg>
  );
};
export default SvgAudioLibrary;
