import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgBoxingGlove = ({
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
        d="M13 17H8a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1m-5-2a3 3 0 0 0-3 3v1a3 3 0 0 0 3 3h5a3 3 0 0 0 3-3v-1a3 3 0 0 0-3-3z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M9.884 2h.232c.817 0 1.375 0 1.86.096a5 5 0 0 1 3.958 4.1A3 3 0 0 1 20 9v.999a7 7 0 0 1-2.8 5.6l-.627.47c-.172.13-.301.226-.438.313a4 4 0 0 1-1.814.604 7 7 0 0 1-.537.013h-2.427c-1.083 0-1.958 0-2.666-.058-.728-.06-1.369-.185-1.96-.487a5 5 0 0 1-2.186-2.185c-.302-.592-.428-1.232-.487-1.961C4 11.6 4 10.727 4 9.643V7.884c0-.817 0-1.375.096-1.86a5 5 0 0 1 3.929-3.928C8.509 2 9.067 2 9.885 2M16 9v1.5a1 1 0 1 1-2 0V8c0-.977-.005-1.32-.058-1.585a3 3 0 0 0-2.357-2.357C11.32 4.005 10.977 4 10 4s-1.32.005-1.585.058a3 3 0 0 0-2.357 2.357C6.005 6.68 6 7.023 6 8v1.6c0 1.137 0 1.929.051 2.546.05.605.142.953.276 1.216a3 3 0 0 0 1.311 1.311c.263.134.611.226 1.216.276.617.05 1.41.051 2.546.051h2.35c.263 0 .34 0 .41-.006a2 2 0 0 0 .908-.303c.06-.038.122-.083.332-.241L16 14a5 5 0 0 0 2-4V9a1 1 0 1 0-2 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgBoxingGlove;
