import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgCupToGo = ({
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
        d="m5 10 .77 9.25A3 3 0 0 0 8.76 22h6.48a3 3 0 0 0 2.99-2.75L19 10zm2.174 2 .59 7.083A1 1 0 0 0 8.76 20h6.48a1 1 0 0 0 .996-.917l.59-7.083z"
        clipRule="evenodd"
      />
      <path fill={color} d="M14 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0" />
      <path
        fill={color}
        fillRule="evenodd"
        d="m5.238 6.572.344-2.065A3 3 0 0 1 8.542 2h6.917a3 3 0 0 1 2.959 2.507l.344 2.065A3 3 0 0 1 17 12H7a3 3 0 0 1-1.762-5.428M8.541 4h6.918a1 1 0 0 1 .986.836L16.639 6H7.361l.194-1.164A1 1 0 0 1 8.541 4M7 8a1 1 0 0 0 0 2h10a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgCupToGo;
