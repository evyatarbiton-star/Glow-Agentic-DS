import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgFencing = ({
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
        d="M3.293 3.293a1 1 0 0 0 0 1.414l5 5a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0m14.62 16.034-.233.233a1.5 1.5 0 0 1-2.12 0l-.832-.831a2.5 2.5 0 0 1 0-3.536l.457-.458a2.51 2.51 0 0 1 3.55 0l.824.825a1.5 1.5 0 0 1 0 2.12l-.232.233 1.38 1.38a1 1 0 0 1-1.414 1.414zM20.707 3.293a1 1 0 0 1 0 1.414L9.682 15.732c.537.953.4 2.183-.411 2.995l-.832.83a1.5 1.5 0 0 1-2.12 0l-.232-.23-1.38 1.38a1 1 0 0 1-1.414-1.414l1.38-1.38-.234-.234a1.5 1.5 0 0 1 0-2.121l.825-.825a2.51 2.51 0 0 1 3.003-.414L19.293 3.293a1 1 0 0 1 1.414 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgFencing;
