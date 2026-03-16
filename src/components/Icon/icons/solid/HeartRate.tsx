import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgHeartRate = ({
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
        d="M22 9q0 .825-.108 1.586a.485.485 0 0 1-.484.414h-4.249l-1.24-2.894a1 1 0 0 0-1.838 0L12 12.961l-.58-1.355A1 1 0 0 0 10.5 11H2.592a.485.485 0 0 1-.484-.414A11.6 11.6 0 0 1 2 9a6 6 0 0 1 10-4.472A6 6 0 0 1 22 9M3.46 13a.475.475 0 0 0-.443.672c1.963 4.208 6.246 6.38 8.099 7.153.57.238 1.199.238 1.768 0 1.853-.772 6.136-2.945 8.099-7.153A.475.475 0 0 0 20.54 13H16.5a1 1 0 0 1-.92-.606L15 11.039l-2.08 4.855a1 1 0 0 1-1.84 0L9.84 13z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgHeartRate;
