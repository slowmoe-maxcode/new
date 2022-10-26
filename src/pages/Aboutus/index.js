import React from "react";

import { Column, Row, Text, Line, Stack, Img, Button } from "components";
import Footer from "components/Footer/Footer";

const AboutusPage = () => {
  return (
    <>
      <Column className="bg-gray_50 font-poppins items-center justify-end mx-[auto] lg:pt-[36px] xl:pt-[45px] 2xl:pt-[51px] 3xl:pt-[61px] w-[100%]">
        <Column className="items-center justify-start w-[77%]">
          <Row className="items-start w-[100%]">
            <Row className="items-center w-[11%]">
              <Text className="GroupSixtyThree" variant="body2">
                F
              </Text>
              <Text className="Foodio" variant="body5">
                <span className="text-gray_900 font-poppins lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px]">
                  Foodio
                </span>
                <span className="text-red_400 font-poppins lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px]">
                  .
                </span>
              </Text>
            </Row>
            <Row className="font-opensans items-start justify-center 2xl:ml-[106px] 3xl:ml-[127px] lg:ml-[75px] xl:ml-[94px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] w-[51%]">
              <Text className="Home" variant="body7">
                Home
              </Text>
              <Text className="Menu" variant="body7">
                Menu
              </Text>
              <Column className="items-center justify-start lg:ml-[22px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] w-[12%]">
                <Text
                  className="not-italic text-red_400 w-[auto]"
                  variant="body7"
                >
                  About us
                </Text>
                <Line className="bg-red_400 h-[1px] lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[100%]" />
              </Column>
              <Text className="Orderonline" variant="body7">
                Order online
              </Text>
              <Text className="Reservation" variant="body7">
                Reservation
              </Text>
              <Text className="Contactus" variant="body7">
                Contact us
              </Text>
            </Row>
            <Stack className="bg-white_A700_87 font-poppins lg:h-[36px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] xl:ml-[108px] 2xl:ml-[122px] 3xl:ml-[146px] lg:ml-[86px] px-[3px] rounded-radius50 lg:w-[35px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px]">
              <Img src="images/img_cart.svg" className="cart" alt="cart" />
              <Text className="GroupSixty" as="h2" variant="h2">
                3
              </Text>
            </Stack>
            <Button
              className="font-semibold lg:ml-[17px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[10%]"
              shape="RoundedBorder16"
              size="sm"
              variant="FillRed400"
            >
              Log in
            </Button>
          </Row>
          <Row className="items-center justify-between lg:mt-[55px] xl:mt-[69px] 2xl:mt-[78px] 3xl:mt-[93px] w-[100%]">
            <Column className="bg-bluegray_100_63 lg:h-[387px] xl:h-[484px] 2xl:h-[544px] 3xl:h-[652px] items-center lg:px-[36px] xl:px-[46px] 2xl:px-[52px] 3xl:px-[62px] rounded-radius50 lg:w-[386px] xl:w-[483px] 2xl:w-[543px] 3xl:w-[651px]">
              <Column className="bg-bluegray_100_6c lg:h-[311px] xl:h-[389px] 2xl:h-[438px] 3xl:h-[525px] items-center justify-start lg:px-[32px] xl:px-[40px] 2xl:px-[45px] 3xl:px-[54px] rounded-radius50 lg:w-[310px] xl:w-[388px] 2xl:w-[437px] 3xl:w-[524px]">
                <Img
                  src="images/img_unsplashebmyh7.png"
                  className="lg:h-[247px] xl:h-[308px] 2xl:h-[347px] 3xl:h-[416px] rounded-radius50 lg:w-[246px] xl:w-[307px] 2xl:w-[346px] 3xl:w-[415px]"
                  alt="unsplasheBmyHSeven"
                />
              </Column>
            </Column>
            <Column className="2xl:pr-[11px] 3xl:pr-[13px] lg:pr-[7px] xl:pr-[9px] 2xl:pt-[11px] 3xl:pt-[13px] lg:pt-[7px] xl:pt-[9px] rounded-radius16 w-[39%]">
              <Column className="justify-start mt-[4px] w-[100%]">
                <Text
                  className="font-tinos leading-[110.00%] text-red_400 w-[69%]"
                  as="h4"
                  variant="h4"
                >
                  <span className="text-gray_902 font-opensans font-bold lg:text-[36px] xl:text-[46px] 2xl:text-[52px] 3xl:text-[62px]">
                    About Our <br />
                  </span>
                  <span className="text-red_400 font-opensans font-bold lg:text-[36px] xl:text-[46px] 2xl:text-[52px] 3xl:text-[62px]">
                    Restaurant
                  </span>
                </Text>
                <Text
                  className="font-normal font-poppins leading-[200.00%] lg:mt-[29px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] not-italic text-gray_801 w-[100%]"
                  variant="body4"
                >
                  This dish is full of flavor and nutrition! Quinoa is a
                  complete protein, providing all the essential amino acids your
                  body needs, and is also a good source of fiber.
                </Text>
              </Column>
              <Button
                className="font-semibold lg:mt-[29px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-center w-[55%]"
                shape="RoundedBorder16"
                size="lg"
                variant="FillRed400"
              >
                Order now
              </Button>
            </Column>
          </Row>
          <Row className="items-center justify-between xl:mt-[106px] 2xl:mt-[120px] 3xl:mt-[144px] lg:mt-[85px] w-[100%]">
            <Text
              className="font-normal leading-[200.00%] not-italic text-gray_801 w-[40%]"
              variant="body4"
            >
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit.
            </Text>
            <Column className="bg-bluegray_100_63 lg:h-[399px] xl:h-[499px] 2xl:h-[561px] 3xl:h-[673px] items-center lg:px-[40px] xl:px-[50px] 2xl:px-[57px] 3xl:px-[68px] rounded-radius50 lg:w-[398px] xl:w-[498px] 2xl:w-[560px] 3xl:w-[672px]">
              <Column className="bg-bluegray_100_63 lg:h-[317px] xl:h-[396px] 2xl:h-[446px] 3xl:h-[535px] items-center justify-end mb-[1px] lg:px-[32px] xl:px-[40px] 2xl:px-[45px] 3xl:px-[54px] rounded-radius50 lg:w-[316px] xl:w-[395px] 2xl:w-[445px] 3xl:w-[534px]">
                <Img
                  src="images/img_unsplash5dsznc.png"
                  className="lg:h-[252px] xl:h-[315px] 2xl:h-[355px] 3xl:h-[426px] mt-[1px] rounded-radius50 lg:w-[251px] xl:w-[314px] 2xl:w-[354px] 3xl:w-[425px]"
                  alt="unsplash5dsZnC"
                />
              </Column>
            </Column>
          </Row>
          <Row className="items-center justify-between xl:mt-[106px] 2xl:mt-[120px] 3xl:mt-[144px] lg:mt-[85px] lg:pr-[38px] xl:pr-[48px] 2xl:pr-[54px] 3xl:pr-[64px] w-[100%]">
            <Img
              src="images/img_unsplashlrawct.png"
              className="lg:h-[448px] xl:h-[560px] 2xl:h-[630px] 3xl:h-[756px] lg:mb-[5px] xl:mb-[7px] 2xl:mb-[8px] 3xl:mb-[9px] w-[43%]"
              alt="unsplashlRAWcT"
            />
            <Column className="w-[47%]">
              <Column className="justify-start ml-[3px] w-[98%]">
                <Text
                  className="font-tinos leading-[140.00%] text-gray_900 w-[100%]"
                  as="h4"
                  variant="h4"
                >
                  <span className="text-red_400 font-opensans font-bold lg:text-[36px] xl:text-[46px] 2xl:text-[52px] 3xl:text-[62px]">
                    Owner
                  </span>
                  <span className="text-orange_600 font-opensans font-bold lg:text-[36px] xl:text-[46px] 2xl:text-[52px] 3xl:text-[62px]">
                    {" "}
                  </span>
                  <span className="text-gray_900 font-opensans font-bold lg:text-[36px] xl:text-[46px] 2xl:text-[52px] 3xl:text-[62px]">
                    & Executive Chef
                  </span>
                </Text>
                <Text
                  className="font-normal font-poppins ml-[1px] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] not-italic text-gray_801 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Ismail Marzuki
                </Text>
              </Column>
              <Text
                className="font-tinos ml-[3px] lg:mt-[35px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] text-amber_800_6c w-[auto]"
                as="h1"
                variant="h1"
              >
                “
              </Text>
              <Text
                className="font-light font-poppins italic leading-[200.00%] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] text-gray_801 w-[100%]"
                variant="body1"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>
              <Text
                className="font-tinos lg:ml-[323px] xl:ml-[404px] 2xl:ml-[455px] 3xl:ml-[546px] mt-[4px] rotate-[180deg] text-amber_800_6c w-[auto]"
                as="h1"
                variant="h1"
              >
                “
              </Text>
            </Column>
          </Row>
        </Column>
        <Footer className="bg-gray_901 2xl:mt-[111px] 3xl:mt-[133px] lg:mt-[78px] xl:mt-[98px] w-[100%]" />
      </Column>
    </>
  );
};

export default AboutusPage;
