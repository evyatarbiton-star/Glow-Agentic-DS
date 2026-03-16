import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgEdit03 = ({
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
        d="M10 19a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H11a1 1 0 0 1-1-1"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M15.673 6.327a1.12 1.12 0 0 0-1.586 0l-8.274 8.274L4.01 17.99 7.4 16.187l8.274-8.274a1.12 1.12 0 0 0 0-1.586m-3-1.414a3.121 3.121 0 1 1 4.414 4.414L8.813 17.6a2 2 0 0 1-.475.352L4.95 19.755c-1.743.927-3.632-.962-2.705-2.705l1.802-3.388a2 2 0 0 1 .352-.475z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgEdit03;
