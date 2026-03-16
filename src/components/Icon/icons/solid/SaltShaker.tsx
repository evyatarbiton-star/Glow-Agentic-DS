import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgSaltShaker = ({
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
        d="M5 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0M5 20a1 1 0 1 1-2 0 1 1 0 0 1 2 0M8 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2M16.245 3.582a2 2 0 0 0-2.828.001L10.062 6.94a.5.5 0 0 0 0 .707l6.288 6.288a.5.5 0 0 0 .707 0l3.36-3.36a2 2 0 0 0-.002-2.829zM14.935 16.056a.5.5 0 0 0 0-.707L8.647 9.06a.5.5 0 0 0-.707 0l-1.356 1.356a2 2 0 0 0-.001 2.827l4.163 4.17a2 2 0 0 0 2.83.001z"
      />
    </svg>
  );
};
export default SvgSaltShaker;
