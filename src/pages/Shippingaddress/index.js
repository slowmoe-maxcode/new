import React from "react";

import {
  Stack,
  Column,
  Row,
  Text,
  Line,
  Img,
  Button,
  List,
  Input,
} from "components";
import Footer from "components/Footer/Footer";

const ShippingaddressPage = () => {
  return (
    <>
      <Stack className="bg-gray_50 font-poppins lg:h-[1266px] xl:h-[1584px] 2xl:h-[1782px] 3xl:h-[2138px] mx-[auto] w-[100%]">
        <Column className="absolute inset-x-[0] justify-start mx-[auto] top-[3%] w-[77%]">
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
              <Column className="items-center justify-start lg:ml-[22px] xl:ml-[27px] 2xl:ml-[31px] 3xl:ml-[37px] w-[17%]">
                <Text
                  className="not-italic text-red_400 w-[auto]"
                  variant="body7"
                >
                  Order online
                </Text>
                <Line className="bg-red_400 h-[1px] lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[100%]" />
              </Column>
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
          <Row className="font-opensans items-start 2xl:mt-[100px] 3xl:mt-[120px] lg:mt-[71px] xl:mt-[88px] w-[87%]">
            <Button
              className="flex lg:h-[36px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] items-center justify-center rounded-radius50 lg:w-[35px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px]"
              size="mdIcn"
              variant="icbFillGray900"
            >
              <Img
                src="images/img_arrowleft.svg"
                className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                alt="arrowleft"
              />
            </Button>
            <Column className="bg-white_A700 items-center justify-end 3xl:ml-[118px] lg:ml-[70px] xl:ml-[88px] 2xl:ml-[99px] lg:p-[32px] xl:p-[40px] 2xl:p-[46px] 3xl:p-[55px] rounded-radius16 shadow-bs6 w-[85%]">
              <Text className="columncheckout" as="h6" variant="h6">
                Checkout
              </Text>
              <Column className="font-poppins items-center justify-start lg:mt-[27px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] w-[100%]">
                <Column className="justify-start rounded-radius8 w-[100%]">
                  <Text
                    className="font-medium text-gray_900 w-[auto]"
                    variant="body5"
                  >
                    Shipping address
                  </Text>
                  <Row className="items-center justify-between xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] rounded-radius8 w-[100%]">
                    <Column className="bg-white_A700 border border-gray_400 border-solid lg:p-[10px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius8 w-[75%]">
                      <Text
                        className="ml-[1px] mt-[1px] not-italic text-gray_900 w-[auto]"
                        variant="body7"
                      >
                        1131 Ogden Ave, Bronx, NY 10452, Amerika Serikat
                      </Text>
                    </Column>
                    <Column className="bg-indigo_300 items-center lg:p-[10px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius8 w-[23%]">
                      <Text
                        className="font-normal mt-[3px] not-italic text-white_A700 w-[auto]"
                        variant="body5"
                      >
                        Change
                      </Text>
                    </Column>
                  </Row>
                </Column>
                <Column className="justify-start lg:mt-[22px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] w-[100%]">
                  <Text
                    className="font-medium text-gray_900 w-[auto]"
                    variant="body5"
                  >
                    Order data
                  </Text>
                  <Column className="items-center justify-start lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[100%]">
                    <Column className="items-center justify-start w-[100%]">
                      <Row className="items-center justify-between w-[100%]">
                        <Column className="bg-white_A700 border border-gray_400 border-solid lg:p-[12px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] rounded-radius8 w-[49%]">
                          <Text className="Emailaddress" variant="body7">
                            First name
                          </Text>
                        </Column>
                        <Column className="bg-white_A700 border border-gray_400 border-solid lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-radius8 w-[49%]">
                          <Text
                            className="lg:ml-[4px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] mt-[3px] not-italic text-gray_501 w-[auto]"
                            variant="body7"
                          >
                            Last name
                          </Text>
                        </Column>
                      </Row>
                      <Row className="items-center justify-between lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[100%]">
                        <Row className="bg-white_A700 border border-gray_400 border-solid items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius8 w-[49%]">
                          <Img
                            src="images/img_clock.svg"
                            className="lg:h-[18px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] mb-[2px] ml-[4px] w-[15%]"
                            alt="clock"
                          />
                          <Text
                            className="lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] not-italic text-gray_501 w-[auto]"
                            variant="body7"
                          >
                            Phone number
                          </Text>
                        </Row>
                        <Column className="bg-white_A700 border border-gray_400 border-solid lg:p-[12px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] rounded-radius8 w-[49%]">
                          <Text className="Emailaddress" variant="body7">
                            Email address
                          </Text>
                        </Column>
                      </Row>
                    </Column>
                    <Column className="bg-white_A700 border border-gray_400 border-solid justify-start lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-radius8 w-[100%]">
                      <Text
                        className="lg:mb-[52px] xl:mb-[65px] 2xl:mb-[74px] 3xl:mb-[88px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] not-italic text-gray_501 w-[auto]"
                        variant="body7"
                      >
                        Message
                      </Text>
                    </Column>
                  </Column>
                </Column>
                <Column className="justify-start lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[100%]">
                  <Text
                    className="font-medium text-gray_900 w-[auto]"
                    variant="body5"
                  >
                    Payment method
                  </Text>
                  <List
                    className="gap-[0] min-h-[auto] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] w-[100%]"
                    orientation="vertical"
                  >
                    <Row className="checkout">
                      <Row className="bg-bluegray_100_63 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius8 w-[49%]">
                        <Column className="border border-green_600 border-solid items-center ml-[4px] my-[2px] px-[4px] rounded-radius50 trash">
                          <div className="bg-green_600 lg:h-[11px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] mb-[1px] rounded-radius50 lg:w-[10px] xl:w-[13px] 2xl:w-[15px] 3xl:w-[18px]"></div>
                        </Column>
                        <Text className="CashOnDeliver" variant="body5">
                          Cash On Delivery
                        </Text>
                      </Row>
                      <Row className="bg-bluegray_100_63 items-center justify-center xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] lg:p-[9px] rounded-radius8 w-[49%]">
                        <div className="border border-gray_900 border-solid ml-[3px] mt-[2px] rounded-radius50 trash"></div>
                        <Text
                          className="2xl:mr-[112px] 3xl:mr-[134px] lg:mr-[79px] xl:mr-[99px] CashOnDeliver"
                          variant="body5"
                        >
                          BCA Virtual Account
                        </Text>
                      </Row>
                    </Row>
                    <Row className="checkout">
                      <Row className="bg-bluegray_100_63 items-center xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] lg:p-[9px] rounded-radius8 w-[49%]">
                        <div className="border border-gray_900 border-solid ml-[3px] mt-[2px] rounded-radius50 trash"></div>
                        <Text className="CashOnDeliver" variant="body5">
                          Credit Card
                        </Text>
                      </Row>
                      <Row className="bg-bluegray_100_63 items-center justify-center xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] lg:p-[9px] rounded-radius8 w-[49%]">
                        <div className="border border-gray_900 border-solid ml-[3px] mt-[2px] rounded-radius50 trash"></div>
                        <Text
                          className="lg:mr-[120px] xl:mr-[150px] 2xl:mr-[169px] 3xl:mr-[202px] CashOnDeliver"
                          variant="body5"
                        >
                          Transfer Bank
                        </Text>
                      </Row>
                    </Row>
                  </List>
                </Column>
                <Column className="bg-red_400 items-center justify-start lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] lg:p-[13px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] rounded-radius12 w-[100%]">
                  <Text
                    className="font-medium mb-[1px] text-white_A700 w-[auto]"
                    variant="body4"
                  >
                    Order now
                  </Text>
                </Column>
              </Column>
            </Column>
          </Row>
        </Column>
        <Footer className="absolute bg-gray_901 bottom-[0] w-[100%]" />
        <Column className="absolute bg-gray_900_a2 items-center justify-start 2xl:p-[100px] 3xl:p-[120px] lg:p-[71px] xl:p-[88px] w-[100%]">
          <Column
            className="bg-cover bg-repeat items-center justify-end lg:mb-[441px] xl:mb-[552px] 2xl:mb-[621px] 3xl:mb-[745px] lg:p-[42px] xl:p-[53px] 2xl:p-[60px] 3xl:p-[72px] w-[68%]"
            style={{ backgroundImage: "url('images/img_group125.svg')" }}
          >
            <Text
              className="font-medium xl:mt-[100px] 2xl:mt-[113px] 3xl:mt-[135px] lg:mt-[80px] text-black_900 w-[auto]"
              variant="body1"
            >
              Shipping address
            </Text>
            <Column className="items-center justify-start lg:mt-[20px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] w-[100%]">
              <Column className="justify-start w-[100%]">
                <Text
                  className="font-medium text-gray_900 w-[auto]"
                  variant="body5"
                >
                  Shipping address
                </Text>
                <Row className="items-center justify-between xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] rounded-radius8 w-[100%]">
                  <Input
                    className="font-normal not-italic p-[0] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-gray_900 text-gray_900 w-[100%]"
                    wrapClassName="w-[75%]"
                    name="Subject"
                    placeholder="1131 Ogden Ave, Bronx, NY 10452, Amerika Serikat"
                  ></Input>
                  <Button
                    className="font-normal not-italic lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[23%]"
                    shape="RoundedBorder8"
                    size="md"
                    variant="FillIndigo300"
                  >
                    Search
                  </Button>
                </Row>
                <Row className="items-end lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[37%]">
                  <Img
                    src="images/img_checkmark.svg"
                    className="mb-[2px] trash"
                    alt="checkmark"
                  />
                  <Text
                    className="font-normal lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] not-italic text-indigo_300 w-[auto]"
                    variant="body5"
                  >
                    Use your current location
                  </Text>
                </Row>
              </Column>
              <Img
                src="images/img_map_481X722.png"
                className="lg:h-[343px] xl:h-[428px] 2xl:h-[482px] 3xl:h-[578px] lg:mt-[38px] xl:mt-[48px] 2xl:mt-[54px] 3xl:mt-[64px] w-[100%]"
                alt="Map"
              />
            </Column>
          </Column>
        </Column>
      </Stack>
    </>
  );
};

export default ShippingaddressPage;
