import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgShop = ({
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
        d="M12.055 10h-.108zM18.038 10h-.081zM19.258 11.817c.354-.105.742.14.742.509V18a3 3 0 0 1-3 3h-1.86c-.63 0-1.14-.51-1.14-1.14V17a2 2 0 1 0-4 0v2.86c0 .63-.51 1.14-1.14 1.14H7a3 3 0 0 1-3-3v-5.674c0-.369.388-.614.742-.51.398.117.82.184 1.258.184a4.9 4.9 0 0 0 2.594-.739.57.57 0 0 1 .59 0c.73.441 1.662.74 2.816.74s2.086-.298 2.816-.74a.57.57 0 0 1 .59 0c.68.416 1.546.74 2.594.74.438 0 .86-.067 1.258-.184M7 3c1 0 9 .002 10 .001 2 0 4 1.5 4 4 0 1.5-1.5 3-3 3-2 0-3-2-3-2s-.5 2-3 2C9.5 10 9 8 9 8S8 10 6 10c-1.5 0-3-1.5-3-3 0-2.5 2-3.997 4-4"
      />
    </svg>
  );
};
export default SvgShop;
