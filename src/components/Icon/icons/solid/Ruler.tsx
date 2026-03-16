import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgRuler = ({
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
        d="m6.643 20.122-2.76-2.76a3 3 0 0 1 0-4.243l.557-.558a.5.5 0 0 1 .708 0l2.146 2.146a1 1 0 0 0 1.414-1.414l-.484-.484-.016-.016-1.646-1.647a.5.5 0 0 1 0-.707l.878-.878a.5.5 0 0 1 .708 0l2.146 2.146a1 1 0 0 0 1.414-1.414l-.484-.484-.016-.016-1.646-1.647a.5.5 0 0 1 0-.707l.878-.878a.5.5 0 0 1 .708 0l2.146 2.146a1 1 0 0 0 1.414-1.414l-.484-.484-.016-.016-1.646-1.647a.5.5 0 0 1 0-.707l.558-.558a3 3 0 0 1 4.243 0l2.76 2.76a3.01 3.01 0 0 1 0 4.257L10.9 20.122a3.01 3.01 0 0 1-4.257 0"
      />
    </svg>
  );
};
export default SvgRuler;
