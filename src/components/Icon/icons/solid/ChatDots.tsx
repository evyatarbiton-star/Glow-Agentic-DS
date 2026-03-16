import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgChatDots = ({
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
        d="M3 9.4v7.875c0 1.858 0 2.787.365 3.209a1.5 1.5 0 0 0 1.271.513c.556-.05 1.201-.719 2.491-2.056l.93-.963c.347-.36.521-.54.726-.67a2 2 0 0 1 .59-.25c.234-.058.485-.058.986-.058H14.6c2.24 0 3.36 0 4.216-.436a4 4 0 0 0 1.748-1.748C21 13.96 21 12.84 21 10.6V9.4c0-2.24 0-3.36-.436-4.216a4 4 0 0 0-1.748-1.748C17.96 3 16.84 3 14.6 3H9.4c-2.24 0-3.36 0-4.216.436a4 4 0 0 0-1.748 1.748C3 6.04 3 7.16 3 9.4M8 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2m5-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgChatDots;
