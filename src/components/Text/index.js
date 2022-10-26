import React from "react";
const variantClasses = {
  h1: "font-bold lg:text-[56px] xl:text-[71px] text-[80px] 3xl:text-[96px]",
  h2: "font-medium lg:text-[5px] xl:text-[7px] text-[8px] 3xl:text-[9px]",
  h3: "font-bold lg:text-[49px] xl:text-[62px] text-[70px] 3xl:text-[84px]",
  h4: "font-bold lg:text-[36px] xl:text-[46px] text-[52px] 3xl:text-[62px]",
  h5: "lg:text-[28px] xl:text-[35px] text-[40px] 3xl:text-[48px]",
  h6: "font-bold lg:text-[25px] xl:text-[32px] text-[36px] 3xl:text-[43px]",
  body1: "lg:text-[21px] xl:text-[26px] text-[30px] 3xl:text-[36px]",
  body2: "lg:text-[17px] xl:text-[22px] text-[25px] 3xl:text-[30px]",
  body3:
    "font-semibold lg:text-[17px] xl:text-[21px] text-[24px] 3xl:text-[28px]",
  body4: "lg:text-[14px] xl:text-[17px] text-[20px] 3xl:text-[24px]",
  body5: "lg:text-[12px] xl:text-[16px] text-[18px] 3xl:text-[21px]",
  body6:
    "font-normal lg:text-[11px] xl:text-[14px] text-[16.62px] 2xl:text-[16px] 3xl:text-[19px]",
  body7:
    "font-normal lg:text-[11px] xl:text-[14px] text-[16px] 3xl:text-[19px]",
  body8: "font-normal xl:text-[12px] text-[14px] 3xl:text-[16px] lg:text-[9px]",
  body9: "font-normal xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[8px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
