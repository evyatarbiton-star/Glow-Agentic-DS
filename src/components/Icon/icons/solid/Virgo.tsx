import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgVirgo = ({
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
        d="M16 14v-1a1 1 0 1 1 2 0v1.111c0 .857-.373 1.627-.965 2.156A3 3 0 0 1 16 14"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M3 9.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C6.04 3 7.16 3 9.4 3h5.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C21 6.04 21 7.16 21 9.4v5.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C17.96 21 16.84 21 14.6 21H9.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C3 17.96 3 16.84 3 14.6zm3-1.437V16a.997.997 0 0 0 1 1 1 1 0 0 0 1-1V7.98A1 1 0 0 1 10 8v8a1 1 0 1 0 2 0V8a1 1 0 1 1 2 0v6c0 1.126.372 2.164 1 3a1 1 0 0 0 0 2h.111c.687 0 1.34-.142 1.933-.397.6.256 1.262.397 1.956.397a1 1 0 0 0 .055-1.998c.594-.81.945-1.81.945-2.89V13a3 3 0 0 0-4-2.83V8a3 3 0 0 0-5-2.236A3 3 0 0 0 9 5c-.69 0-1.324.233-1.831.623a2.8 2.8 0 0 0-.722-.517 1 1 0 1 0-.894 1.789.81.81 0 0 1 .447.723z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgVirgo;
