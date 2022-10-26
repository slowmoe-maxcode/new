import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder16: "rounded-radius16",
  RoundedBorder8: "rounded-radius8",
  RoundedBorder20: "rounded-radius20",
  RoundedBorder12: "rounded-radius12",
  icbRoundedBorder15: "rounded-radius15",
  icbCircleBorder25: "rounded-radius25",
  icbCircleBorder30: "rounded-radius30",
};
const variants = {
  FillRed400: "bg-red_400 text-white_A700",
  FillGray40063: "bg-gray_400_63 text-gray_900",
  FillRed40063: "bg-red_400_63 text-red_400",
  FillRedA70063: "bg-red_A700_63 text-red_A700",
  FillGray40064: "bg-gray_400_64 text-gray_900",
  FillGray900ab: "bg-gray_900_ab text-white_A700",
  FillGray51: "bg-gray_51 text-light_blue_800",
  FillIndigo300: "bg-indigo_300 text-white_A700",
  FillRed40019: "bg-red_400_19 text-red_400",
  FillWhiteA7007f: "bg-white_A700_7f text-red_400",
  icbFillGray900: "bg-gray_900",
  icbOutlineRed5000f: "bg-white_A700 shadow-bs",
  icbOutlineBlack9000f: "bg-white_A700 shadow-bs1",
  icbFillGray301: "bg-gray_301",
  icbFillBluegray100: "bg-bluegray_100",
};
const sizes = {
  sm: "lg:p-[11px] xl:p-[14px] p-[16px] 3xl:p-[19px]",
  md: "lg:p-[13px] xl:p-[16px] p-[19px] 3xl:p-[22px]",
  lg: "lg:p-[18px] xl:p-[23px] p-[26px] 3xl:p-[31px]",
  xl: "lg:p-[21px] xl:p-[26px] p-[30px] 3xl:p-[36px]",
  "2xl": "lg:p-[24px] xl:p-[31px] p-[35px] 3xl:p-[42px]",
  smIcn: "xl:p-[10px] p-[12px] 3xl:p-[14px] lg:p-[8px]",
  mdIcn: "lg:p-[10px] xl:p-[13px] p-[15px] 3xl:p-[18px]",
  lgIcn: "lg:p-[12px] xl:p-[16px] p-[18px] 3xl:p-[21px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} common-button `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "RoundedBorder16",
    "RoundedBorder8",
    "RoundedBorder20",
    "RoundedBorder12",
    "icbRoundedBorder15",
    "icbCircleBorder25",
    "icbCircleBorder30",
  ]),
  variant: PropTypes.oneOf([
    "FillRed400",
    "FillGray40063",
    "FillRed40063",
    "FillRedA70063",
    "FillGray40064",
    "FillGray900ab",
    "FillGray51",
    "FillIndigo300",
    "FillRed40019",
    "FillWhiteA7007f",
    "icbFillGray900",
    "icbOutlineRed5000f",
    "icbOutlineBlack9000f",
    "icbFillGray301",
    "icbFillBluegray100",
  ]),
  size: PropTypes.oneOf([
    "sm",
    "md",
    "lg",
    "xl",
    "2xl",
    "smIcn",
    "mdIcn",
    "lgIcn",
  ]),
};
Button.defaultProps = { className: "", shape: "", variant: "", size: "" };

export { Button };
