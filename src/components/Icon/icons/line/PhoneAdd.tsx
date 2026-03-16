import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgPhoneAdd = ({
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
        d="M3.164 6.685c.206-1.193.887-2.15 1.622-2.885a2.723 2.723 0 0 1 4.106.295l1.622 2.17a3 3 0 0 1-.282 3.917l-.11.11a1 1 0 0 0 0 1.415l2.17 2.172a1 1 0 0 0 1.415 0l.111-.111a3 3 0 0 1 3.918-.282l2.185 1.634a2.706 2.706 0 0 1 .293 4.08c-.742.742-1.71 1.435-2.918 1.643-2.224.384-6.487.38-10.503-3.636C2.774 13.19 2.78 8.904 3.164 6.685M6.2 5.215c-.576.575-.956 1.177-1.065 1.81-.309 1.789-.354 5.342 3.072 8.768s6.96 3.388 8.749 3.08c.645-.112 1.257-.5 1.844-1.087a.706.706 0 0 0-.076-1.064l-2.186-1.634a1 1 0 0 0-1.306.094l-.11.11a3 3 0 0 1-4.243 0l-2.172-2.17a3 3 0 0 1 0-4.243l.111-.111a1 1 0 0 0 .094-1.306L7.29 5.292a.723.723 0 0 0-1.09-.078M18 3a1 1 0 0 1 1 1v1h1a1 1 0 1 1 0 2h-1v1a1 1 0 1 1-2 0V7h-1a1 1 0 1 1 0-2h1V4a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgPhoneAdd;
