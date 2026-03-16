import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgOpenBook = ({
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
        d="M20 7.376a5 5 0 0 0-6.569-.28L13 7.44v9.488A7 7 0 0 1 16.485 16h.627c.985 0 1.96.162 2.888.476zm-7.818-1.842a7 7 0 0 1 9.323.516l.202.203A1 1 0 0 1 22 6.96V18a1 1 0 0 1-1.447.895l-.311-.156a7 7 0 0 0-3.13-.739h-.627a5 5 0 0 0-3.535 1.465l-.243.242A1 1 0 0 1 11 19V6.96a1 1 0 0 1 .375-.78z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M4 7.376v9.1A9 9 0 0 1 6.889 16h.626a7 7 0 0 1 3.485.93V7.44l-.431-.344A5 5 0 0 0 4 7.376M2.496 6.05a7 7 0 0 1 9.322-.516l.807.645A1 1 0 0 1 13 6.96V19a1 1 0 0 1-1.707.707l-.243-.242A5 5 0 0 0 7.515 18h-.626a7 7 0 0 0-3.131.739l-.31.155A1 1 0 0 1 2 18V6.96a1 1 0 0 1 .293-.707z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgOpenBook;
