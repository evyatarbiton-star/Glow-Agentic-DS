import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgPie11 = ({
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
        d="M13 7.5c0-.808.67-1.544 1.571-1.48a8 8 0 1 1-5.81 14.026c-.683-.592-.635-1.586-.064-2.157L13 13.586zm2 .584v5.502A2 2 0 0 1 14.415 15l-3.89 3.89a6 6 0 0 0 7.282-.252A6 6 0 0 0 15 8.084M9 4.067a6 6 0 0 0-3.89 9.393L9 9.57zm.43-2.063c.9-.065 1.57.672 1.57 1.48v6.085a2 2 0 0 1-.586 1.415l-4.303 4.303c-.571.571-1.565.619-2.157-.065A8 8 0 0 1 9.429 2.004"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgPie11;
