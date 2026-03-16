import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgLine10 = ({
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
        d="M3 4a1 1 0 0 1 1-1c1.286 0 2.295.289 3.135.747.822.448 1.438 1.037 1.947 1.546l.137.137C10.193 6.406 10.785 7 12 7s1.807-.594 2.78-1.57l.138-.137c.509-.509 1.125-1.098 1.947-1.546C17.705 3.29 18.715 3 20 3a1 1 0 1 1 0 2c-.964 0-1.642.211-2.177.503-.553.302-1 .713-1.49 1.204l-.206.207C15.219 7.835 14.07 9 12 9S8.781 7.835 7.873 6.914l-.205-.207c-.491-.491-.938-.902-1.49-1.204C5.641 5.21 4.963 5 4 5a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M12 9a5 5 0 1 0 0 10 5 5 0 0 0 0-10m-7 5a7 7 0 1 1 14 0 7 7 0 0 1-14 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgLine10;
