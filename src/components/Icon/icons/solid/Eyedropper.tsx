import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgEyedropper = ({
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
        d="M21 19a2 2 0 1 1-4 0c0-1.128 1.133-2.342 1.694-2.873a.44.44 0 0 1 .612 0C19.866 16.658 21 17.872 21 19M10.917 11.497l1.585 1.587a1 1 0 0 1 0 1.414l-3.037 3.036Q9 18 8.445 18.353l-3.899 2.48c-.902.575-1.955-.478-1.38-1.38l2.48-3.898a6 6 0 0 1 .82-1.021l3.036-3.037a1 1 0 0 1 1.415 0"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M15.497 5.502 17.38 3.62a2.122 2.122 0 1 1 3 3l-1.882 1.882a2 2 0 0 1-.081 2.742l-1.172 1.172a2 2 0 0 1-2.828 0l-2.832-2.832a2 2 0 0 1 0-2.828l1.171-1.172a2 2 0 0 1 2.742-.082"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgEyedropper;
