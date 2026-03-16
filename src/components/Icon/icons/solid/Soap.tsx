import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgSoap = ({
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
        d="M10 14a4 4 0 0 0 3.97-3.501c.033-.274.254-.499.53-.499h1.7c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C21 12.28 21 13.12 21 14.8v1.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C18.72 21 17.88 21 16.2 21H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3 18.72 3 17.88 3 16.2v-1.4c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311c.24-.122.508-.199.837-.247.284-.041.524.191.563.475A4 4 0 0 0 10 14"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M11 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2m7 1a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-6 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgSoap;
