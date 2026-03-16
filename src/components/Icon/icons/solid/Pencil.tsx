import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgPencil = ({
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
        d="M4.775 14.658 3.06 19.674a1 1 0 0 0 1.268 1.27l5.022-1.71a3 3 0 0 0 1.154-.717l.153-.153a.5.5 0 0 0 0-.707l-4.303-4.303a.5.5 0 0 0-.707 0l-.154.154a3 3 0 0 0-.718 1.15M12.834 6.834a.5.5 0 0 0-.708.002l-4.276 4.31a.5.5 0 0 0 .002.706l4.302 4.303a.5.5 0 0 0 .709-.001l4.276-4.31a.5.5 0 0 0-.002-.707zM15.119 3.881l-.765.765a.5.5 0 0 0 0 .707l4.302 4.304a.5.5 0 0 0 .707 0l.766-.766a3 3 0 0 0 0-4.242l-.768-.768a3 3 0 0 0-4.242 0"
      />
    </svg>
  );
};
export default SvgPencil;
