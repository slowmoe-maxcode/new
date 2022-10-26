import React from "react";

import {
  Column,
  Row,
  Text,
  Line,
  Stack,
  Img,
  Button,
  Input,
  TextArea,
  List,
  Radio,
} from "components";
import Footer from "components/Footer/Footer";

const CheckoutPage = () => {
  return (
    <>
      <Column className="bg-gray_50 font-poppins items-center justify-end mx-[auto] lg:pt-[36px] xl:pt-[45px] 2xl:pt-[51px] 3xl:pt-[61px] w-[100%]">
        <Column className="items-center justify-start w-[100%]">
          <Column className="justify-start w-[77%]">
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
                      <Input
                        className="font-normal not-italic p-[0] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-gray_900 text-gray_900 w-[100%]"
                        wrapClassName="w-[75%]"
                        name="Subject"
                        placeholder="1131 Ogden Ave, Bronx, NY 10452, Amerika Serikat"
                      ></Input>
                      <Button
                        className="font-normal not-italic lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[23%]"
                        shape="RoundedBorder8"
                        size="sm"
                        variant="FillIndigo300"
                      >
                        Change
                      </Button>
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
                      <Row className="items-center justify-between w-[100%]">
                        <Input
                          className="placeholder:text-gray_501 Firstname1"
                          wrapClassName="w-[49%]"
                          type="text"
                          name="Emailaddress"
                          placeholder="First name"
                        ></Input>
                        <Input
                          className="placeholder:text-gray_501 Firstname1"
                          wrapClassName="w-[49%]"
                          type="text"
                          name="Emailaddress One"
                          placeholder="Last name"
                        ></Input>
                      </Row>
                      <Row className="items-center justify-between lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[100%]">
                        <Input
                          className="font-normal not-italic p-[0] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-gray_501 text-gray_501 w-[100%]"
                          wrapClassName="flex w-[49%]"
                          type="number"
                          name="Phonenumber"
                          placeholder="Phone number"
                          prefix={
                            <Img
                              src="images/img_clock.svg"
                              className="ml-[1px] lg:w-[34px] lg:mr-[11px] xl:w-[42px] xl:mr-[14px] 2xl:w-[48px] 2xl:mr-[16px] 3xl:w-[57px] 3xl:mr-[19px] my-[auto]"
                              alt="clock"
                            />
                          }
                        ></Input>
                        <Input
                          className="placeholder:text-gray_501 Firstname1"
                          wrapClassName="w-[49%]"
                          type="email"
                          name="Emailaddress Two"
                          placeholder="Email address"
                        ></Input>
                      </Row>
                      <TextArea
                        className="font-normal lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-gray_501 text-gray_501 w-[100%]"
                        name="Massage"
                        placeholder="Message"
                      ></TextArea>
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
                        <Column className="bg-bluegray_100_63 xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius8 w-[49%]">
                          <Radio
                            value="CashOnDelivery"
                            className="font-normal ml-[4px] mt-[3px] not-italic lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900"
                            inputClassName="h-[24px] mr-[5px] w-[24px]"
                            checked={true}
                            name="CashOnDeliver"
                            label="Cash On Delivery"
                            shape="RoundedBorder12"
                            size="md"
                            variant="OutlineGreen600"
                          ></Radio>
                        </Column>
                        <Column className="bg-bluegray_100_63 xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] lg:p-[9px] rounded-radius8 w-[49%]">
                          <Radio
                            value="BCAVirtualAccount"
                            className="font-normal ml-[3px] mt-[2px] not-italic lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900"
                            inputClassName="h-[24px] mr-[5px] w-[24px]"
                            checked={false}
                            name="BCAVirtualAcc"
                            label="BCA Virtual Account"
                          ></Radio>
                        </Column>
                      </Row>
                      <Row className="checkout">
                        <Column className="bg-bluegray_100_63 xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] lg:p-[9px] rounded-radius8 w-[49%]">
                          <Radio
                            value="CreditCard"
                            className="font-normal ml-[3px] mt-[2px] not-italic lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900"
                            inputClassName="h-[24px] mr-[5px] w-[24px]"
                            checked={false}
                            name="CreditCard"
                            label="Credit Card"
                          ></Radio>
                        </Column>
                        <Column className="bg-bluegray_100_63 xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] lg:p-[9px] rounded-radius8 w-[49%]">
                          <Radio
                            value="TransferBank"
                            className="font-normal ml-[3px] mt-[2px] not-italic lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900"
                            inputClassName="h-[24px] mr-[5px] w-[24px]"
                            checked={false}
                            name="TransferBank"
                            label="Transfer Bank"
                          ></Radio>
                        </Column>
                      </Row>
                    </List>
                  </Column>
                  <Button
                    className="font-medium lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-center w-[100%]"
                    shape="RoundedBorder12"
                    size="md"
                    variant="FillRed400"
                  >
                    Order now
                  </Button>
                </Column>
              </Column>
            </Row>
          </Column>
          <Footer className="bg-gray_901 xl:mt-[106px] 2xl:mt-[120px] 3xl:mt-[144px] lg:mt-[85px] w-[100%]" />
        </Column>
      </Column>
    </>
  );
};

export default CheckoutPage;
