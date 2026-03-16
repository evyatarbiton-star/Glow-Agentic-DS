import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgLaptop = ({
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
        d="M2 17a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1M4.327 6.638c-.193.378-.264.772-.296 1.167C4 8.18 4 8.635 4 9.161V13.2c0 .28 0 .42.054.527a.5.5 0 0 0 .219.218C4.38 14 4.52 14 4.8 14h14.4c.28 0 .42 0 .527-.055a.5.5 0 0 0 .218-.218C20 13.62 20 13.48 20 13.2V9.161c0-.527 0-.981-.03-1.356-.033-.395-.104-.789-.297-1.167a3 3 0 0 0-1.311-1.311c-.378-.193-.772-.264-1.167-.296A18 18 0 0 0 15.839 5H8.16c-.527 0-.981 0-1.356.03-.395.033-.789.104-1.167.297a3 3 0 0 0-1.311 1.311"
      />
    </svg>
  );
};
export default SvgLaptop;
