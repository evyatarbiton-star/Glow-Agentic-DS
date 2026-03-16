import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgDna = ({
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
        d="M17.49 10.491c-.825.885-1.788 1.545-2.776 2.084.952.505 1.885 1.09 2.687 1.84 1.376 1.283 2.34 3.007 2.554 5.5C20.057 21.107 19.08 22 18 22H6c-1.078 0-2.058-.893-1.954-2.086.235-2.715 1.37-4.451 2.948-5.681.902-.703 1.957-1.24 3.007-1.71-1.085-.557-2.166-1.209-3.094-2.067-1.561-1.443-2.658-3.426-2.87-6.382C3.953 2.9 4.913 2 6 2h12c1.095 0 2.04.908 1.969 2.067-.178 2.919-1.1 4.944-2.48 6.424M10 15a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1m1-7a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zM8 19a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1M9 4a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgDna;
