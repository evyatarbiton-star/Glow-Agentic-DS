import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgChartMaximum = ({
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
        d="M16.2 3c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.31 1.31C21 5.28 21 6.12 21 7.8v8.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.31 1.31C18.72 21 17.88 21 16.2 21H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.31-1.31C3 18.72 3 17.88 3 16.2V7.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.31-1.31C5.28 3 6.12 3 7.8 3zM12 5C9.178 5 7.405 6.928 6.39 9.365 5.38 11.791 5 14.942 5 18a1 1 0 1 0 2 0c0-2.942.371-5.79 1.235-7.865C9.095 8.072 10.323 7 12 7s2.905 1.072 3.765 3.135C16.629 12.209 17 15.058 17 18a1 1 0 1 0 2 0c0-3.058-.38-6.21-1.39-8.635C16.595 6.928 14.822 5 12 5"
      />
    </svg>
  );
};
export default SvgChartMaximum;
