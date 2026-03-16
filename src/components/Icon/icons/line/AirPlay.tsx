import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgAirPlay = ({
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
        d="m8.2 18.4 3-4.003a1 1 0 0 1 1.6 0l3.001 4.003a1 1 0 0 1-.8 1.6H9a1 1 0 0 1-.8-1.6"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M7.759 4h8.482c.805 0 1.47 0 2.01.044.563.046 1.08.145 1.565.392a4 4 0 0 1 1.748 1.748c.247.485.346 1.002.392 1.564C22 8.29 22 8.954 22 9.758V13a4 4 0 0 1-4 4 1 1 0 1 1 0-2 2 2 0 0 0 2-2V9.8c0-.857 0-1.439-.038-1.889-.035-.438-.1-.663-.18-.819a2 2 0 0 0-.874-.874c-.156-.08-.38-.145-.819-.18C17.639 6 17.057 6 16.2 6H7.8c-.857 0-1.439 0-1.889.038-.438.035-.663.1-.819.18a2 2 0 0 0-.874.874c-.08.156-.145.38-.18.819C4 8.361 4 8.943 4 9.8V13a2 2 0 0 0 2 2 1 1 0 1 1 0 2 4 4 0 0 1-4-4V9.759c0-.805 0-1.47.044-2.01.046-.563.145-1.08.392-1.565a4 4 0 0 1 1.748-1.748c.485-.247 1.002-.346 1.564-.392C6.29 4 6.954 4 7.758 4"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgAirPlay;
