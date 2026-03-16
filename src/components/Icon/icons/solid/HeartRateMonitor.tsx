import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgHeartRateMonitor = ({
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
        d="M3.436 5.184C3 6.04 3 7.16 3 9.4v.8c0 .28 0 .42.054.527a.5.5 0 0 0 .219.218C3.38 11 3.52 11 3.8 11h6.7a1 1 0 0 1 .92.606l.58 1.355 2.08-4.855a1 1 0 0 1 1.84 0L17.16 11h3.04c.28 0 .42 0 .527-.055a.5.5 0 0 0 .218-.218C21 10.62 21 10.48 21 10.2v-.8c0-2.24 0-3.36-.436-4.216a4 4 0 0 0-1.748-1.748C17.96 3 16.84 3 14.6 3H9.4c-2.24 0-3.36 0-4.216.436a4 4 0 0 0-1.748 1.748M21 13.8c0-.28 0-.42-.055-.527a.5.5 0 0 0-.218-.218C20.62 13 20.48 13 20.2 13h-3.7a1 1 0 0 1-.92-.606L15 11.039l-2.08 4.855a1 1 0 0 1-1.84 0L9.84 13H3.8c-.28 0-.42 0-.527.055a.5.5 0 0 0-.219.218C3 13.38 3 13.52 3 13.8v.8c0 2.24 0 3.36.436 4.216a4 4 0 0 0 1.748 1.748C6.04 21 7.16 21 9.4 21h5.2c2.24 0 3.36 0 4.216-.436a4 4 0 0 0 1.748-1.748C21 17.96 21 16.84 21 14.6z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgHeartRateMonitor;
