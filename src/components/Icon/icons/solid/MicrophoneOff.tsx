import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgMicrophoneOff = ({
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
        d="M15.713 15.713A6 6 0 0 1 6 11a1 1 0 1 0-2 0 8 8 0 0 0 7 7.938V21a1 1 0 1 0 2 0v-2.062a7.97 7.97 0 0 0 4.135-1.803z"
      />
      <path fill={color} d="M8 8v3a4 4 0 0 0 6.284 3.284z" />
      <path
        fill={color}
        fillRule="evenodd"
        d="M19 10a1 1 0 0 1 1 1c0 .793-.116 1.56-.331 2.285a1 1 0 0 1-1.917-.57A6 6 0 0 0 18 11a1 1 0 0 1 1-1M9.019 3.333A4 4 0 0 1 16 6v3a1 1 0 1 1-2 0V6a2 2 0 0 0-3.491-1.333 1 1 0 1 1-1.49-1.334M2.293 2.293a1 1 0 0 1 1.414 0l18 18a1 1 0 0 1-1.414 1.414l-18-18a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgMicrophoneOff;
