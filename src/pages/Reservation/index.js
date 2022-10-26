import React from "react";

import { Column, Row, Text, Line, Stack, Img, Button, Input } from "components";
import Footer from "components/Footer/Footer";

const ReservationPage = () => {
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
              <Text className="Aboutus1" variant="body7">
                About us
              </Text>
              <Text className="Orderonline" variant="body7">
                Order online
              </Text>
              <Column className="items-center justify-start lg:ml-[19px] xl:ml-[24px] 2xl:ml-[27px] 3xl:ml-[32px] mt-[1px] w-[16%]">
                <Text
                  className="not-italic text-red_400 w-[auto]"
                  variant="body7"
                >
                  Reservation
                </Text>
                <Line className="bg-red_400 h-[1px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[97%]" />
              </Column>
              <Text className="Reservation" variant="body7">
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
          <Row className="font-opensans items-center justify-between 2xl:mt-[100px] 3xl:mt-[120px] lg:mt-[71px] xl:mt-[88px] w-[100%]">
            <Img
              src="images/img_rectangle150.png"
              className="lg:h-[468px] xl:h-[585px] 2xl:h-[658px] 3xl:h-[789px] rounded-radius20 w-[50%]"
              alt="Rectangle150"
            />
            <Column className="w-[43%]">
              <Text
                className="lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] text-gray_900 w-[auto]"
                as="h3"
                variant="h3"
              >
                Book a table
              </Text>
              <Column className="font-poppins items-center justify-start lg:mt-[44px] xl:mt-[55px] 2xl:mt-[62px] 3xl:mt-[74px] w-[100%]">
                <Column className="items-center justify-start w-[100%]">
                  <Input
                    className="placeholder:text-gray_501 date"
                    wrapClassName="flex w-[100%]"
                    name="date"
                    placeholder="Date"
                    suffix={
                      <Img
                        src="images/img_arrowdown.svg"
                        className="mr-[0] lg:w-[14px] lg:h-[15px] lg:ml-[24px] xl:w-[18px] xl:h-[19px] xl:ml-[31px] 2xl:w-[21px] 2xl:h-[22px] 2xl:ml-[35px] 3xl:w-[25px] 3xl:h-[26px] 3xl:ml-[42px] my-[auto]"
                        alt="arrow_down"
                      />
                    }
                    shape="RoundedBorder20"
                    size="lg"
                  ></Input>
                  <Input
                    className="placeholder:text-gray_501 date"
                    wrapClassName="2xl:mt-[40px] 3xl:mt-[48px] flex lg:mt-[28px] w-[100%] xl:mt-[35px]"
                    name="time"
                    placeholder="Time"
                    suffix={
                      <Img
                        src="images/img_arrowdown.svg"
                        className="mr-[0] lg:w-[14px] lg:h-[15px] lg:ml-[24px] xl:w-[18px] xl:h-[19px] xl:ml-[31px] 2xl:w-[21px] 2xl:h-[22px] 2xl:ml-[35px] 3xl:w-[25px] 3xl:h-[26px] 3xl:ml-[42px] my-[auto]"
                        alt="arrow_down"
                      />
                    }
                    shape="RoundedBorder20"
                    size="lg"
                  ></Input>
                  <Input
                    className="placeholder:text-gray_501 date"
                    wrapClassName="2xl:mt-[40px] 3xl:mt-[48px] flex lg:mt-[28px] w-[100%] xl:mt-[35px]"
                    name="partysize"
                    placeholder="Party size"
                    suffix={
                      <Img
                        src="images/img_arrowdown.svg"
                        className="mr-[0] lg:w-[14px] lg:h-[15px] lg:ml-[24px] xl:w-[18px] xl:h-[19px] xl:ml-[31px] 2xl:w-[21px] 2xl:h-[22px] 2xl:ml-[35px] 3xl:w-[25px] 3xl:h-[26px] 3xl:ml-[42px] my-[auto]"
                        alt="arrow_down"
                      />
                    }
                    shape="RoundedBorder20"
                    size="lg"
                  ></Input>
                </Column>
                <Button
                  className="font-semibold lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] lg:text-[17px] xl:text-[22px] 2xl:text-[25px] 3xl:text-[30px] text-center w-[100%]"
                  shape="RoundedBorder20"
                  size="2xl"
                  variant="FillRed400"
                >
                  Book now
                </Button>
              </Column>
            </Column>
          </Row>
        </Column>
        <Footer className="bg-gray_901 xl:mt-[106px] 2xl:mt-[120px] 3xl:mt-[144px] lg:mt-[85px] w-[100%]" />
      </Column>
    </>
  );
};

export default ReservationPage;
