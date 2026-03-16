import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgDoughnut = ({
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
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m0-2c1.849 0 3.55-.627 4.906-1.68l-2.874-2.874A4 4 0 0 1 12 16a4 4 0 0 1-2.032-.554L7.094 18.32A7.97 7.97 0 0 0 12 20m-3.446-5.968A4.002 4.002 0 0 1 11 8.126V4.062a8.001 8.001 0 0 0-5.32 12.844zM13 8.126V4.062a8.001 8.001 0 0 1 5.32 12.844l-2.874-2.874A4.002 4.002 0 0 0 13 8.126M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgDoughnut;
