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
} from "components";
import Footer from "components/Footer/Footer";

const ContactPage = () => {
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
              <Text className="Reservation" variant="body7">
                Reservation
              </Text>
              <Column className="items-center justify-start lg:ml-[21px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] mt-[1px] w-[14%]">
                <Text
                  className="not-italic text-red_400 w-[auto]"
                  variant="body7"
                >
                  Contact us
                </Text>
                <Line className="bg-red_400 h-[1px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[100%]" />
              </Column>
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
          <Column className="items-center justify-start xl:mt-[104px] 2xl:mt-[117px] 3xl:mt-[140px] lg:mt-[83px] w-[87%]">
            <Text
              className="font-opensans text-gray_900 w-[auto]"
              as="h1"
              variant="h1"
            >
              Contact us
            </Text>
            <Text
              className="font-normal font-poppins leading-[normal] lg:mt-[27px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] not-italic text-center text-gray_801 w-[100%]"
              variant="body2"
            >
              We love hearing from our customers. Feel free to share your
              experience or ask any questions you may have.
            </Text>
          </Column>
          <Row className="items-center justify-between lg:mt-[37px] xl:mt-[47px] 2xl:mt-[53px] 3xl:mt-[63px] w-[100%]">
            <Stack
              className="bg-cover bg-repeat lg:h-[392px] xl:h-[490px] 2xl:h-[551px] 3xl:h-[661px] lg:px-[152px] xl:px-[191px] 2xl:px-[215px] 3xl:px-[258px] rounded-radius24 w-[48%]"
              style={{ backgroundImage: "url('images/img_map.png')" }}
            >
              <Img
                src="images/img_location.svg"
                className="absolute bottom-[0] lg:h-[43px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] inset-x-[0] mx-[auto] w-[8%]"
                alt="location"
              />
            </Stack>
            <Column className="items-center w-[49%]">
              <Column className="items-center justify-start rounded-radius8 w-[100%]">
                <Input
                  className="placeholder:text-gray_501 Firstname1"
                  wrapClassName="w-[100%]"
                  type="text"
                  name="Firstname"
                  placeholder="First name"
                ></Input>
                <Input
                  className="placeholder:text-gray_501 Firstname1"
                  wrapClassName="2xl:mt-[24px] 3xl:mt-[28px] lg:mt-[17px] w-[100%] xl:mt-[21px]"
                  type="text"
                  name="Lastname"
                  placeholder="Last name"
                ></Input>
                <Input
                  className="placeholder:text-gray_501 Firstname1"
                  wrapClassName="2xl:mt-[24px] 3xl:mt-[28px] lg:mt-[17px] w-[100%] xl:mt-[21px]"
                  type="email"
                  name="Emailaddress"
                  placeholder="Email address"
                ></Input>
                <Input
                  className="placeholder:text-gray_501 Firstname1"
                  wrapClassName="2xl:mt-[24px] 3xl:mt-[28px] lg:mt-[17px] w-[100%] xl:mt-[21px]"
                  name="Subject"
                  placeholder="Subject"
                ></Input>
                <TextArea
                  className="font-normal lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-gray_501 text-gray_501 w-[100%]"
                  name="Massage"
                  placeholder="Message"
                ></TextArea>
              </Column>
              <Button
                className="font-normal lg:mt-[25px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] not-italic lg:text-[17px] xl:text-[22px] 2xl:text-[25px] 3xl:text-[30px] text-center w-[100%]"
                shape="RoundedBorder12"
                size="lg"
                variant="FillRed400"
              >
                Submit
              </Button>
            </Column>
          </Row>
        </Column>
        <Footer className="bg-gray_901 xl:mt-[106px] 2xl:mt-[120px] 3xl:mt-[144px] lg:mt-[85px] w-[100%]" />
      </Column>
    </>
  );
};

export default ContactPage;
