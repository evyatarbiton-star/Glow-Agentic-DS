import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgFaceSmiling = ({
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
        d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16m0 2c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M10 9.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M17 9.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M7.4 13.2a1 1 0 0 1 1.397.196l.005.006.033.041q.05.061.16.178c.148.153.37.362.656.57.577.42 1.375.81 2.35.81.974 0 1.771-.39 2.348-.81a5 5 0 0 0 .816-.748l.034-.041.004-.006A1 1 0 0 1 16.8 14.6l-.026.034-.007.01-.07.085q-.089.107-.248.276a7 7 0 0 1-.923.804c-.798.58-2 1.191-3.526 1.191s-2.728-.61-3.526-1.191a7 7 0 0 1-1.17-1.08l-.07-.086-.022-.027-.007-.01-.003-.003V14.6H7.2a1 1 0 0 1 .2-1.4"
      />
    </svg>
  );
};
export default SvgFaceSmiling;
