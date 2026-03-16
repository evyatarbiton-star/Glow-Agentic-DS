import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgBeaker = ({
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
        d="M16 7a1 1 0 1 1 0 2v2.43a1 1 0 0 0 .15.527l3.392 5.46C20.783 19.416 19.346 22 16.993 22H7c-2.354 0-3.79-2.587-2.547-4.585l3.396-5.458a1 1 0 0 0 .15-.528V9a1 1 0 0 1 0-2zm-6 2v2.429a3 3 0 0 1-.453 1.585L8.311 15h7.375l-1.235-1.988A3 3 0 0 1 14 11.43V9zM14 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-4 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgBeaker;
