import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgNetflix = ({
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
        d="M14 5a3 3 0 1 1 6 0v14h-2V5a1 1 0 1 0-2 0v8h-2zM6 5v14a1 1 0 1 0 2 0v-8h2v8a3 3 0 1 1-6 0V5z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M7.814 4.419a1 1 0 0 0-1.628 1.162l10 14a1 1 0 0 0 1.628-1.162zm1.627-1.162A3 3 0 1 0 4.56 6.744l10 14a3 3 0 1 0 4.882-3.488z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgNetflix;
