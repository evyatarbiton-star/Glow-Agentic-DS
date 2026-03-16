import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgLogin02 = ({
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
        d="M13 20a1 1 0 0 0-1-1H8.8c-.857 0-1.439 0-1.889-.038-.438-.035-.663-.1-.819-.18a2 2 0 0 1-.874-.874c-.08-.156-.145-.38-.18-.819C5 16.639 5 16.057 5 15.2V8.8c0-.857 0-1.439.038-1.889.035-.438.1-.663.18-.819a2 2 0 0 1 .874-.874c.156-.08.38-.145.819-.18C7.361 5 7.943 5 8.8 5H12a1 1 0 1 0 0-2H8.759c-.805 0-1.47 0-2.01.044-.563.046-1.08.145-1.565.392a4 4 0 0 0-1.748 1.748c-.247.485-.346 1.002-.392 1.564C3 7.29 3 7.954 3 8.758v6.483c0 .805 0 1.47.044 2.01.046.563.145 1.08.392 1.565a4 4 0 0 0 1.748 1.748c.485.247 1.002.346 1.564.392C7.29 21 7.954 21 8.758 21H12a1 1 0 0 0 1-1"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M20 13a1 1 0 1 0 0-2h-8.586l1.293-1.293a1 1 0 0 0-1.414-1.414l-3 3a1 1 0 0 0 0 1.414l3 3a1 1 0 0 0 1.414-1.414L11.414 13z"
      />
    </svg>
  );
};
export default SvgLogin02;
