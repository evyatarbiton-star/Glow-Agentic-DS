import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgSagittarius = ({
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
        d="M3.436 5.184C3 6.04 3 7.16 3 9.4v5.2c0 2.24 0 3.36.436 4.216a4 4 0 0 0 1.748 1.748C6.04 21 7.16 21 9.4 21h5.2c2.24 0 3.36 0 4.216-.436a4 4 0 0 0 1.748-1.748C21 17.96 21 16.84 21 14.6V9.4c0-2.24 0-3.36-.436-4.216a4 4 0 0 0-1.748-1.748C17.96 3 16.84 3 14.6 3H9.4c-2.24 0-3.36 0-4.216.436a4 4 0 0 0-1.748 1.748m7.064 6.902L15.586 7H12a1 1 0 1 1 0-2h6a1 1 0 0 1 1 .997V12a1 1 0 1 1-2 0V8.414L11.914 13.5l1.793 1.793a1 1 0 0 1-1.414 1.414L10.5 14.914l-3.793 3.793a1 1 0 0 1-1.414-1.414L9.086 13.5l-1.793-1.793a1 1 0 1 1 1.414-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgSagittarius;
