import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgGlass = ({
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
        d="M10 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2M13 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2M4.479 9l-.252-2H6c3.151 0 4.766.535 6.316 1.051l.017.006C13.777 8.538 15.163 9 18 9h1.521l-.252 2h-1.27c-3.15 0-4.765-.535-6.315-1.051l-.017-.006C10.223 9.462 8.837 9 6 9z"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M4.022 5.375A3 3 0 0 1 6.998 2h10.004a3 3 0 0 1 2.977 3.375l-1.766 14A3 3 0 0 1 15.237 22H8.764a3 3 0 0 1-2.977-2.625zM6.998 4a1 1 0 0 0-.992 1.125l1.766 14a1 1 0 0 0 .992.875h6.473a1 1 0 0 0 .992-.875l1.765-14A1 1 0 0 0 17.002 4z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgGlass;
