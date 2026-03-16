import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgFileUser = ({
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
        d="M4.327 3.638C4 4.28 4 5.12 4 6.8v10.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C6.28 22 7.12 22 8.8 22h6.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C20 19.72 20 18.88 20 17.2V9.8c0-.28 0-.42-.055-.527a.5.5 0 0 0-.218-.218C19.62 9 19.48 9 19.2 9H17a4 4 0 0 1-4-4V2.8c0-.28 0-.42-.055-.527a.5.5 0 0 0-.218-.219C12.62 2 12.48 2 12.2 2H8.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311M12 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2m2.4.8a3 3 0 1 0-4.8 0A4 4 0 0 0 8 19a1 1 0 1 0 2 0 2 2 0 1 1 4 0 1 1 0 1 0 2 0c0-1.308-.628-2.47-1.6-3.2"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M15 2.707a.707.707 0 0 1 1.207-.5l3.586 3.586a.707.707 0 0 1-.5 1.207H17a2 2 0 0 1-2-2z"
      />
    </svg>
  );
};
export default SvgFileUser;
