import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgStopCrFr = ({
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
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10M8.218 9.092C8 9.52 8 10.08 8 11.2v1.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C9.52 16 10.08 16 11.2 16h1.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C16 14.48 16 13.92 16 12.8v-1.6c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C14.48 8 13.92 8 12.8 8h-1.6c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgStopCrFr;
