import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgPalette1 = ({
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
        d="M18 21h-8a3 3 0 0 0 2.83-2H18a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1l-5 5v-2.828l4.705-4.705a1 1 0 0 0 0-1.414l-2.758-2.758a1 1 0 0 0-1.414 0L13 6.828V6c0-.55-.148-1.064-.405-1.507a3 3 0 0 1 3.767.388l2.757 2.758a3 3 0 0 1 .388 3.766A3 3 0 0 1 21 14v4a3 3 0 0 1-3 3"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M10 5H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1M6 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3z"
        clipRule="evenodd"
      />
      <path fill={color} d="M9 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
    </svg>
  );
};
export default SvgPalette1;
