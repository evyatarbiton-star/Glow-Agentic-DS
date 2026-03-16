import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgBankCardLockedOuLc = ({
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
        d="M18 18a1 1 0 1 1 2 0v1h-2zm4 1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1v-1a3 3 0 1 1 6 0z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M2.273 7.943c.11.057.251.057.534.057h18.386c.283 0 .424 0 .534-.057a.5.5 0 0 0 .22-.23c.052-.111.046-.247.034-.519-.03-.692-.107-1.162-.308-1.556a3 3 0 0 0-1.311-1.311C19.72 4 18.88 4 17.2 4H6.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311c-.2.394-.278.864-.308 1.556-.012.272-.018.408.035.52.045.095.125.18.22.229"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M2.055 10.273C2 10.38 2 10.52 2 10.8v4.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C4.28 20 5.12 20 6.8 20h5.4c.28 0 .42 0 .527-.055a.5.5 0 0 0 .218-.218C13 19.62 13 19.48 13 19.2V19a6 6 0 0 1 6-6h2.2c.28 0 .42 0 .527-.055a.5.5 0 0 0 .218-.218C22 12.62 22 12.48 22 12.2v-1.4c0-.28 0-.42-.055-.527a.5.5 0 0 0-.218-.218C21.62 10 21.48 10 21.2 10H2.8c-.28 0-.42 0-.527.055a.5.5 0 0 0-.219.218M6 15a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgBankCardLockedOuLc;
