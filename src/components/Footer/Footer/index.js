import React from "react";

import { Column, Row, Text, Button, Img } from "components";

const Footer = (props) => {
  return (
    <>
      <footer className={props.className}>
        <Column className="items-center justify-start lg:mb-[54px] xl:mb-[67px] 2xl:mb-[76px] 3xl:mb-[91px] lg:mt-[49px] xl:mt-[62px] 2xl:mt-[70px] 3xl:mt-[84px] mx-[auto] w-[77%]">
          <Row className="items-start justify-evenly w-[100%]">
            <Column className="justify-start lg:mb-[5px] xl:mb-[7px] 2xl:mb-[8px] 3xl:mb-[9px] w-[38%]">
              <Row className="items-center w-[30%]">
                <Text className="font-poppins GroupSixtyThree" variant="body2">
                  F
                </Text>
                <Text
                  className="font-poppins font-semibold lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] text-white_A700 w-[auto]"
                  variant="body5"
                >
                  <span className="text-white_A700 lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px]">
                    Foodio
                  </span>
                  <span className="text-red_400 lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px]">
                    .
                  </span>
                </Text>
              </Row>
              <Text
                className="font-normal font-poppins leading-[200.00%] lg:mt-[39px] xl:mt-[49px] 2xl:mt-[56px] 3xl:mt-[67px] not-italic text-gray_300 w-[72%]"
                variant="body4"
              >
                Viverra gravida morbi egestas facilisis tortor netus non duis
                tempor.{" "}
              </Text>
              <Row className="items-center ml-[3px] lg:mt-[33px] xl:mt-[41px] 2xl:mt-[47px] 3xl:mt-[56px] w-[57%]">
                <Button
                  className="flex lg:h-[43px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] items-center justify-center rounded-radius50 lg:w-[42px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]"
                  size="mdIcn"
                  variant="icbFillGray301"
                >
                  <Img
                    src="images/img_twitter.png"
                    className="flex items-center justify-center lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px]"
                    alt="twitter"
                  />
                </Button>
                <Button
                  className="flex lg:h-[43px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] items-center justify-center lg:ml-[21px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] rounded-radius50 lg:w-[42px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]"
                  size="mdIcn"
                  variant="icbFillBluegray100"
                >
                  <Img
                    src="images/img_instagram.png"
                    className="flex items-center justify-center lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px]"
                    alt="Instagram"
                  />
                </Button>
                <Button
                  className="flex lg:h-[43px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] items-center justify-center lg:ml-[21px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] rounded-radius50 lg:w-[42px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]"
                  size="mdIcn"
                  variant="icbFillBluegray100"
                >
                  <Img
                    src="images/img_facebook.png"
                    className="flex items-center justify-center lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px]"
                    alt="Facebook"
                  />
                </Button>
              </Row>
            </Column>
            <Column className="justify-start lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[17%]">
              <Text className="Page1" variant="body2">
                Page
              </Text>
              <Text
                className="font-normal font-poppins lg:mt-[30px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] not-italic text-gray_300 w-[auto]"
                variant="body4"
              >
                Home
              </Text>
              <Text
                className="font-normal font-poppins lg:mt-[24px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] not-italic text-gray_300 w-[auto]"
                variant="body4"
              >
                Menu
              </Text>
              <Text
                className="font-normal font-poppins lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] not-italic text-gray_300 w-[auto]"
                variant="body4"
              >
                Order online
              </Text>
              <Text
                className="font-normal font-poppins lg:mt-[26px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] not-italic text-gray_300 w-[auto]"
                variant="body4"
              >
                Catering
              </Text>
              <Text
                className="font-normal font-poppins lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] not-italic text-gray_300 w-[auto]"
                variant="body4"
              >
                Reservation
              </Text>
            </Column>
            <Column className="justify-start 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[20%]">
              <Text className="Page1" variant="body2">
                Information
              </Text>
              <Text
                className="font-normal font-poppins lg:mt-[33px] xl:mt-[41px] 2xl:mt-[47px] 3xl:mt-[56px] not-italic text-gray_300 w-[auto]"
                variant="body4"
              >
                About us
              </Text>
              <Text
                className="font-normal font-poppins lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] not-italic text-gray_300 w-[auto]"
                variant="body4"
              >
                Testimonial
              </Text>
              <Text
                className="font-normal font-poppins lg:mt-[24px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] not-italic text-gray_300 w-[auto]"
                variant="body4"
              >
                Event
              </Text>
            </Column>
            <Column className="justify-start 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[25%]">
              <Text className="Page1" variant="body2">
                Get in touch
              </Text>
              <Text
                className="font-normal font-poppins leading-[153.00%] lg:mt-[32px] xl:mt-[40px] 2xl:mt-[46px] 3xl:mt-[55px] not-italic text-gray_300 w-[100%]"
                variant="body4"
              >
                3247 Johnson Ave, Bronx, NY 10463, Amerika Serikat
              </Text>
              <Text
                className="font-normal font-poppins lg:mt-[22px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] not-italic text-gray_300 w-[auto]"
                variant="body4"
              >
                delizioso@gmail.com
              </Text>
              <Text
                className="font-normal font-poppins lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] not-italic text-gray_300 w-[auto]"
                variant="body4"
              >
                +123 4567 8901
              </Text>
            </Column>
          </Row>
          <Row className="items-start justify-center lg:mt-[46px] xl:mt-[58px] 2xl:mt-[66px] 3xl:mt-[79px] py-[1px] w-[22%]">
            <Text
              className="font-normal font-poppins mt-[4px] not-italic text-gray_301 w-[auto]"
              variant="body4"
            >
              Copyright
            </Text>
            <Text
              className="border-bw15 border-gray_301 border-solid flex font-poppins items-center lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] mt-[4px] not-italic px-[4px] rounded-radius50 text-gray_301 w-[auto]"
              variant="body8"
            >
              c
            </Text>
            <Text
              className="font-normal font-poppins lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] my-[1px] not-italic text-gray_301 w-[auto]"
              variant="body4"
            >
              2022 Foodio
            </Text>
          </Row>
        </Column>
      </footer>
    </>
  );
};

export default Footer;
