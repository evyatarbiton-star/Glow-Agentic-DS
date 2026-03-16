import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgAtm = ({
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
        d="M7.109 10.546C7 10.76 7 11.04 7 11.6v5.2c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C8.52 20 9.08 20 10.2 20H12V10H8.6c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437M14 10v10c.988 0 1.506-.013 1.908-.218a2 2 0 0 0 .874-.874C17 18.48 17 17.92 17 16.8v-5.2c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C16.24 10 15.96 10 15.4 10z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M2.218 5.092C2 5.52 2 6.08 2 7.2v3.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.402.205.92.217 1.908.218v-1.2c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C7.28 8 8.12 8 9.8 8h4.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C19 10.28 19 11.12 19 12.8V14c.988 0 1.506-.013 1.908-.218a2 2 0 0 0 .874-.874C22 12.48 22 11.92 22 10.8V7.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C20.48 4 19.92 4 18.8 4H5.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgAtm;
