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
        fillRule="evenodd"
        d="M6.999 2a3 3 0 0 0-2.977 3.375l1.765 14A3 3 0 0 0 8.764 22h6.473a3 3 0 0 0 2.976-2.625l1.766-14A3 3 0 0 0 17.002 2zm-.993 3.125A1 1 0 0 1 6.998 4h10.004a1 1 0 0 1 .992 1.125l-.613 4.868C14.786 9.929 13.393 9.464 12 9c-1.438-.48-2.875-.958-5.632-.997zM11 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0m2 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgGlass;
