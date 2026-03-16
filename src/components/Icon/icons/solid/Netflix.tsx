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
        d="M19.069 15.196c.258.44.931.256.931-.253V3a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v5.131a.5.5 0 0 0 .069.254zM8.933 14.512a.5.5 0 0 1 .067.25v5.463a1 1 0 0 1-.75.969l-3 .774A1 1 0 0 1 4 20.999V7.854c0-.512.677-.693.933-.25z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M19.86 20.493 9.58 2.987A2 2 0 0 0 7.855 2H4.867a.5.5 0 0 0-.433.75L14.79 20.639a1 1 0 0 0 .616.467l3.342.863c.862.222 1.563-.707 1.112-1.475"
      />
    </svg>
  );
};
export default SvgNetflix;
