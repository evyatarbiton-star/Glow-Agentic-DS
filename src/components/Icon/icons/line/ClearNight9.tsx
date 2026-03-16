import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgClearNight9 = ({
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
        d="M10.407 4.198c-.256-1.6-2.558-1.6-2.813 0a4.09 4.09 0 0 1-3.395 3.395c-1.6.255-1.6 2.557 0 2.813A4.09 4.09 0 0 1 7.594 13.8c.255 1.6 2.557 1.6 2.812 0a4.09 4.09 0 0 1 3.395-3.395c1.6-.256 1.6-2.558 0-2.813a4.09 4.09 0 0 1-3.395-3.395M6.283 8.999A6.1 6.1 0 0 0 9 6.282a6.1 6.1 0 0 0 2.718 2.717A6.1 6.1 0 0 0 9 11.717a6.1 6.1 0 0 0-2.717-2.718"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M19 20a1 1 0 1 1-2 0v-1h-1a1 1 0 1 1 0-2h1v-1a1 1 0 1 1 2 0v1h1a1 1 0 1 1 0 2h-1zM18 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2M10 19a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
      />
    </svg>
  );
};
export default SvgClearNight9;
