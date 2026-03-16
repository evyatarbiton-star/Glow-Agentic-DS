import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgMessenger = ({
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
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 2.251.744 4.329 2 6v2.77a1 1 0 0 0 1.203.98L8 21.168A10 10 0 0 0 12 22m-5.295-8.293 2.75-3.93a1 1 0 0 1 1.35-.274l2.648 1.655a1 1 0 0 0 1.084-.016l2.172-1.448a.426.426 0 0 1 .586.599l-2.75 3.93a1 1 0 0 1-1.35.274l-2.648-1.655a1 1 0 0 0-1.084.016L7.29 14.306a.426.426 0 0 1-.586-.599"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgMessenger;
