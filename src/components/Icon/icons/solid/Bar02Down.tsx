import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgBar02Down = ({
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
        d="M16.2 21c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C21 18.72 21 17.88 21 16.2V7.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C18.72 3 17.88 3 16.2 3H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3 5.28 3 6.12 3 7.8v8.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C5.28 21 6.12 21 7.8 21zM10 19a1 1 0 1 0 0-2H6a1 1 0 1 0 0 2zm7-5a1 1 0 0 1-1 1H6a1 1 0 1 1 0-2h10a1 1 0 0 1 1 1m-3-3a1 1 0 1 0 0-2H6a1 1 0 1 0 0 2zm5-5a1 1 0 0 1-1 1H6a1 1 0 1 1 0-2h12a1 1 0 0 1 1 1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgBar02Down;
