import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgMascara = ({
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
        d="M18 21a1 1 0 1 1-2 0 1 1 0 1 1 0-2v-1a1 1 0 1 1 0-2v-3a1 1 0 1 1 2 0v3a1 1 0 1 1 0 2v1a1 1 0 1 1 0 2"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M19.97 7.662A2 2 0 0 1 18 10h-1.997a2 2 0 0 1-1.972-2.338l.685-4A2 2 0 0 1 16.688 2h.626a2 2 0 0 1 1.972 1.662z"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M6 8a1 1 0 0 0-1 1v2.266a2 2 0 0 0-.99 1.958l.79 7A2 2 0 0 0 6.787 22h.426A2 2 0 0 0 9.2 20.224l.79-7A2 2 0 0 0 9 11.266V9a1 1 0 0 0-1-1z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgMascara;
