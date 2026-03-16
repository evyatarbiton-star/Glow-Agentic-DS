import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgPen = ({
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
        d="M5.185 3.013a2 2 0 0 0-2.173 2.172l.681 7.492a6 6 0 0 0 4.327 5.226l3.456.987 1.232 1.233a3 3 0 0 0 4.243 0l3.171-3.172a3 3 0 0 0 0-4.242l-1.232-1.233-.987-3.455a6 6 0 0 0-5.226-4.327zM18 13.414 13.414 18l.708.709a1 1 0 0 0 1.415 0l3.171-3.172a1 1 0 0 0 0-1.414zM5.004 5.004l7.492.681A4 4 0 0 1 15.98 8.57l.896 3.139-5.167 5.168-3.14-.897a4 4 0 0 1-2.884-3.484z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="m3.071 4.486 5.997 5.996A2.003 2.003 0 0 0 11 13a2 2 0 1 0-.518-3.932L4.486 3.072A2.01 2.01 0 0 0 3.07 4.486"
      />
    </svg>
  );
};
export default SvgPen;
