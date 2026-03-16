import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgFileExportOuLc = ({
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
        d="M13 4H9.8c-.857 0-1.439 0-1.889.038-.438.035-.663.1-.819.18a2 2 0 0 0-.874.874c-.08.156-.145.38-.18.82C6 6.361 6 6.942 6 7.8v8.4c0 .857 0 1.439.038 1.889.035.438.1.663.18.819a2 2 0 0 0 .874.874c.156.08.38.145.819.18C8.361 20 8.943 20 9.8 20H12a1 1 0 1 1 0 2H9.759c-.805 0-1.47 0-2.01-.044-.563-.046-1.08-.145-1.565-.392a4 4 0 0 1-1.748-1.748c-.247-.485-.346-1.002-.392-1.564C4 17.71 4 17.046 4 16.242V7.758c0-.805 0-1.47.044-2.01.046-.563.145-1.08.392-1.565a4 4 0 0 1 1.748-1.748c.485-.247 1.002-.346 1.564-.392C8.29 2 8.954 2 9.758 2h3.356c.635 0 1.114 0 1.577.11a4 4 0 0 1 1.156.48c.406.248.745.588 1.194 1.037l1.332 1.332c.45.449.789.788 1.038 1.194a4 4 0 0 1 .479 1.156c.11.463.11.942.11 1.577V13a1 1 0 0 1-2 0V9h-2a3 3 0 0 1-3-3zm4.56 3c-.12-.142-.312-.338-.673-.699l-1.188-1.188A14 14 0 0 0 15 4.44V6a1 1 0 0 0 1 1z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M19.293 16.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-2 2a1 1 0 0 1-1.414-1.414l.293-.293H16a1 1 0 1 1 0-2h3.586l-.293-.293a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgFileExportOuLc;
