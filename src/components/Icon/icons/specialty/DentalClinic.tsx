import type { SpecialtyIconProps } from "../../Icon.types";
const SvgDentalClinic = ({
  size = 32,
  className,
  ...props
}: SpecialtyIconProps) => {
  const px = typeof size === "number" ? size : size === "sm" ? 32 : 40;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={px}
      height={px}
      fill="none"
      viewBox="0 0 32 32"
      {...props}
    >
      <g clipPath="url(#DentalClinic_svg__a)">
        <g clipPath="url(#DentalClinic_svg__b)">
          <mask
            id="DentalClinic_svg__c"
            width={24}
            height={26}
            x={4}
            y={5}
            maskUnits="userSpaceOnUse"
            style={{
              maskType: "luminance",
            }}
          >
            <path
              fill="#fff"
              d="M26.808 7.112c-.072-.424-.208-.84-.552-1.168-.376-.368-.936-.472-1.496-.504-5.648-.32-11.264.072-16.904-.08-.992-.024-2.176-.144-2.992.424-.52.36-.632.904-.64 1.432-.136 6.904.232 13.832.352 20.736l.024 1.6c0 .064.016.112.04.16-.288.272-.144.808.416.8 5.568-.056 11.128-.104 16.696-.16l4.752-.048a.62.62 0 0 0 .424-.152c.168-.072.312-.2.32-.4.104-4.152 0-7.728-.048-11.584 0-.376.168-7.768-.384-11.048z"
            />
          </mask>
          <g mask="url(#DentalClinic_svg__c)">
            <mask
              id="DentalClinic_svg__d"
              width={26}
              height={28}
              x={3}
              y={4}
              maskUnits="userSpaceOnUse"
              style={{
                maskType: "luminance",
              }}
            >
              <path fill="#fff" d="M28.288 4.304H3.2v27.2h25.088z" />
            </mask>
            <g mask="url(#DentalClinic_svg__d)">
              <path fill="#FE9767" d="M3.136 3.976H28.48v27.648H3.136z" />
            </g>
          </g>
          <path
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.28}
            d="m11.632 30.072-.024-9.448s3.432-.992 8.592 0l.112 9.216"
          />
          <path
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.28}
            d="M16.064 20.736c.04 1.232.192 9.336.192 9.336M15.744 10.928c.912 0 1.168 1.92 1.616 3.016.376.912 1.536 1.728 2.448.032.496-.92 1.504-3.736 1.744-6.952.264-3.44-.776-5.152-1.896-5.472-1.992-.568-2.824 1.272-3.92 1.272s-1.928-1.84-3.92-1.272c-1.112.32-2.152 2.032-1.896 5.472.248 3.216 1.256 6.032 1.744 6.952.912 1.696 2.08.88 2.448-.032.448-1.104.704-3.016 1.616-3.016"
          />
        </g>
      </g>
      <defs>
        <clipPath id="DentalClinic_svg__a">
          <path fill="#fff" d="M0 0h32v32H0z" />
        </clipPath>
        <clipPath id="DentalClinic_svg__b">
          <path fill="#fff" d="M3.2.8h25.088v30.704H3.2z" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default SvgDentalClinic;
