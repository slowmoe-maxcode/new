import React from "react";

import {
  Column,
  Row,
  Text,
  Line,
  Stack,
  Img,
  Button,
  Grid,
  List,
} from "components";
import Footer from "components/Footer/Footer";

const OrderonlinePage = () => {
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
            <Column className="font-opensans items-center justify-start xl:mt-[104px] 2xl:mt-[117px] 3xl:mt-[140px] lg:mt-[83px] rounded-radius16 w-[100%]">
              <Text className="text-gray_900 w-[auto]" as="h1" variant="h1">
                Menu
              </Text>
              <Row className="font-poppins items-center justify-between 3xl:mt-[100px] lg:mt-[59px] xl:mt-[74px] 2xl:mt-[84px] rounded-radius16 w-[100%]">
                <Button
                  className="font-normal not-italic lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-center w-[17%]"
                  shape="RoundedBorder16"
                  size="lg"
                  variant="FillGray40063"
                >
                  All Categories
                </Button>
                <Button
                  className="font-semibold lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-center w-[21%]"
                  shape="RoundedBorder16"
                  size="lg"
                  variant="FillRed400"
                >
                  Pasta
                </Button>
                <Button
                  className="font-normal not-italic lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-center w-[17%]"
                  shape="RoundedBorder16"
                  size="lg"
                  variant="FillGray40063"
                >
                  Pizza
                </Button>
                <Button
                  className="font-normal not-italic lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-center w-[17%]"
                  shape="RoundedBorder16"
                  size="lg"
                  variant="FillGray40063"
                >
                  Dessert
                </Button>
                <Button
                  className="font-normal not-italic lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-center w-[17%]"
                  shape="RoundedBorder16"
                  size="lg"
                  variant="FillGray40063"
                >
                  Drink
                </Button>
              </Row>
            </Column>
            <Column className="font-poppins justify-start lg:mt-[54px] xl:mt-[68px] 2xl:mt-[77px] 3xl:mt-[92px] w-[12%]">
              <Text
                className="font-semibold text-gray_900 w-[auto]"
                variant="body1"
              >
                PASTA
              </Text>
              <Line className="bg-red_400 h-[2px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[100%]" />
            </Column>
            <Row className="font-poppins items-center justify-between lg:mt-[34px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] w-[100%]">
              <Grid className="lg:gap-[21px] xl:gap-[26px] 2xl:gap-[30px] 3xl:gap-[36px] grid grid-cols-3 w-[65%]">
                <Column className="bg-white_A700 items-center justify-end lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] rounded-radius45 w-[100%]">
                  <Img
                    src="images/img_kisspngitalian.png"
                    className="lg:h-[124px] xl:h-[154px] 2xl:h-[174px] 3xl:h-[208px] mt-[1px] rounded-radius50 lg:w-[123px] xl:w-[153px] 2xl:w-[173px] 3xl:w-[207px]"
                    alt="kisspngitalian"
                  />
                  <Text className="Spaghetti2" variant="body4">
                    Spaghetti
                  </Text>
                  <Row className="items-center justify-center 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] rounded-radius113 w-[45%]">
                    <Img
                      src="images/img_star1_15X15.svg"
                      className="StarOne1"
                      alt="StarOne"
                    />
                    <Img
                      src="images/img_star2_15X15.svg"
                      className="StarTwo1"
                      alt="StarTwo"
                    />
                    <Img
                      src="images/img_star3_15X15.svg"
                      className="StarTwo1"
                      alt="StarThree"
                    />
                    <Img
                      src="images/img_star4_15X15.svg"
                      className="StarTwo1"
                      alt="StarFour"
                    />
                  </Row>
                  <Text className="Loremipsumdol" variant="body9">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Egestas consequat
                  </Text>
                  <Text className="Spaghetti2" variant="body5">
                    $12.05
                  </Text>
                  <Row className="bg-gray_51 items-center justify-center lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] rounded-radius165 w-[65%]">
                    <Stack className="bg-white_A700 2xl:px-[10px] 3xl:px-[12px] lg:px-[7px] xl:px-[8px] rounded-radius50 shadow-bs3 floatingicon_Nine">
                      <Img
                        src="images/img_vector25.svg"
                        className="VectorTwentyFive"
                        alt="VectorTwentyFive"
                      />
                    </Stack>
                    <Text className="Quality" variant="body6">
                      2
                    </Text>
                    <Img
                      src="images/img_floatingicon.svg"
                      className="floatingicon"
                      alt="floatingicon"
                    />
                  </Row>
                </Column>
                <Column className="bg-white_A700 items-center justify-start lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] rounded-radius45 w-[100%]">
                  <Img
                    src="images/img_kisspngtagliat.png"
                    className="lg:h-[124px] xl:h-[155px] 2xl:h-[175px] 3xl:h-[209px] rounded-radius50 lg:w-[123px] xl:w-[154px] 2xl:w-[174px] 3xl:w-[208px]"
                    alt="kisspngtagliat"
                  />
                  <Text className="Spaghetti2" variant="body4">
                    Linguine
                  </Text>
                  <Row className="items-center justify-center 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] rounded-radius113 w-[45%]">
                    <Img
                      src="images/img_star1_4.svg"
                      className="StarOne1"
                      alt="StarOne One"
                    />
                    <Img
                      src="images/img_star2_4.svg"
                      className="StarTwo1"
                      alt="StarTwo One"
                    />
                    <Img
                      src="images/img_star3_4.svg"
                      className="StarTwo1"
                      alt="StarThree One"
                    />
                    <Img
                      src="images/img_star4_4.svg"
                      className="StarTwo1"
                      alt="StarFour One"
                    />
                  </Row>
                  <Text className="Loremipsumdol" variant="body9">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Egestas consequat
                  </Text>
                  <Text className="Spaghetti2" variant="body5">
                    $12.05
                  </Text>
                  <Row className="bg-gray_51 items-center justify-center lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] rounded-radius165 w-[65%]">
                    <Stack className="bg-white_A700 2xl:px-[10px] 3xl:px-[12px] lg:px-[7px] xl:px-[8px] rounded-radius50 shadow-bs3 floatingicon_Nine">
                      <Img
                        src="images/img_vector25.svg"
                        className="VectorTwentyFive"
                        alt="VectorTwentyFive One"
                      />
                    </Stack>
                    <Text className="Quality" variant="body6">
                      2
                    </Text>
                    <Img
                      src="images/img_floatingicon.svg"
                      className="floatingicon"
                      alt="floatingicon One"
                    />
                  </Row>
                </Column>
                <Column className="bg-white_A700 items-center justify-start lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] rounded-radius45 w-[100%]">
                  <Stack className="lg:h-[124px] xl:h-[155px] 2xl:h-[175px] 3xl:h-[209px] rounded-radius50 shadow-bs4 lg:w-[123px] xl:w-[154px] 2xl:w-[174px] 3xl:w-[208px]">
                    <Img
                      src="images/img_kisspngitalian.png"
                      className="absolute lg:h-[124px] xl:h-[154px] 2xl:h-[174px] 3xl:h-[208px] rounded-radius50 top-[1%] w-[100%]"
                      alt="kisspngitalian One"
                    />
                    <Img
                      src="images/img_kisspngpastai.png"
                      className="absolute lg:h-[124px] xl:h-[155px] 2xl:h-[175px] 3xl:h-[209px] rounded-radius50 w-[100%]"
                      alt="kisspngpastai"
                    />
                  </Stack>
                  <Text className="Spaghetti2" variant="body4">
                    Capellini
                  </Text>
                  <Row className="items-center justify-center 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] rounded-radius113 w-[45%]">
                    <Img
                      src="images/img_star1_5.svg"
                      className="StarOne1"
                      alt="StarOne Two"
                    />
                    <Img
                      src="images/img_star2_5.svg"
                      className="StarTwo1"
                      alt="StarTwo Two"
                    />
                    <Img
                      src="images/img_star3_5.svg"
                      className="StarTwo1"
                      alt="StarThree Two"
                    />
                    <Img
                      src="images/img_star4_5.svg"
                      className="StarTwo1"
                      alt="StarFour Two"
                    />
                  </Row>
                  <Text className="Loremipsumdol" variant="body9">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Egestas consequat
                  </Text>
                  <Text className="Spaghetti2" variant="body5">
                    $12.05
                  </Text>
                  <Row className="bg-gray_51 items-center justify-center lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] rounded-radius165 w-[65%]">
                    <Stack className="bg-white_A700 2xl:px-[10px] 3xl:px-[12px] lg:px-[7px] xl:px-[8px] rounded-radius50 shadow-bs3 floatingicon_Nine">
                      <Img
                        src="images/img_vector25.svg"
                        className="VectorTwentyFive"
                        alt="VectorTwentyFive Two"
                      />
                    </Stack>
                    <Text className="Quality" variant="body6">
                      2
                    </Text>
                    <Img
                      src="images/img_floatingicon.svg"
                      className="floatingicon"
                      alt="floatingicon Two"
                    />
                  </Row>
                </Column>
                <Column className="bg-white_A700 items-center justify-start lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] rounded-radius45 w-[100%]">
                  <Stack className="lg:h-[124px] xl:h-[155px] 2xl:h-[175px] 3xl:h-[209px] rounded-radius50 shadow-bs4 lg:w-[123px] xl:w-[154px] 2xl:w-[174px] 3xl:w-[208px]">
                    <Img
                      src="images/img_kisspngitalian.png"
                      className="absolute lg:h-[124px] xl:h-[154px] 2xl:h-[174px] 3xl:h-[208px] inset-[0] justify-center m-[auto] rounded-radius50 lg:w-[123px] xl:w-[153px] 2xl:w-[173px] 3xl:w-[207px]"
                      alt="kisspngitalian Two"
                    />
                    <Img
                      src="images/img_pngwing1.png"
                      className="absolute lg:h-[124px] xl:h-[155px] 2xl:h-[175px] 3xl:h-[209px] rounded-radius50 w-[100%]"
                      alt="pngwingOne"
                    />
                  </Stack>
                  <Text className="Fettuccine" variant="body4">
                    Fettuccine
                  </Text>
                  <Row className="items-center justify-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] rounded-radius113 w-[45%]">
                    <Img
                      src="images/img_star1_6.svg"
                      className="StarOne1"
                      alt="StarOne Three"
                    />
                    <Img
                      src="images/img_star2_6.svg"
                      className="StarTwo1"
                      alt="StarTwo Three"
                    />
                    <Img
                      src="images/img_star3_6.svg"
                      className="StarTwo1"
                      alt="StarThree Three"
                    />
                    <Img
                      src="images/img_star4_6.svg"
                      className="StarTwo1"
                      alt="StarFour Three"
                    />
                  </Row>
                  <Text className="Loremipsumdol" variant="body9">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Egestas consequat
                  </Text>
                  <Text className="Spaghetti2" variant="body5">
                    $12.05
                  </Text>
                  <Row className="bg-gray_51 items-center justify-center lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] rounded-radius165 w-[65%]">
                    <Stack className="bg-white_A700 2xl:px-[10px] 3xl:px-[12px] lg:px-[7px] xl:px-[8px] rounded-radius50 shadow-bs3 floatingicon_Nine">
                      <Img
                        src="images/img_vector25.svg"
                        className="VectorTwentyFive"
                        alt="VectorTwentyFive Three"
                      />
                    </Stack>
                    <Text className="Quality" variant="body6">
                      0
                    </Text>
                    <Img
                      src="images/img_floatingicon.svg"
                      className="floatingicon"
                      alt="floatingicon Three"
                    />
                  </Row>
                </Column>
                <Column className="bg-white_A700 items-center justify-start lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] rounded-radius45 w-[100%]">
                  <Img
                    src="images/img_kisspngaldent.png"
                    className="lg:h-[124px] xl:h-[155px] 2xl:h-[175px] 3xl:h-[209px] rounded-radius50 lg:w-[123px] xl:w-[154px] 2xl:w-[174px] 3xl:w-[208px]"
                    alt="kisspngaldent"
                  />
                  <Text className="Spaghetti2" variant="body4">
                    Linguine
                  </Text>
                  <Row className="items-center justify-center 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] rounded-radius113 w-[45%]">
                    <Img
                      src="images/img_star1_7.svg"
                      className="StarOne1"
                      alt="StarOne Four"
                    />
                    <Img
                      src="images/img_star2_7.svg"
                      className="StarTwo1"
                      alt="StarTwo Four"
                    />
                    <Img
                      src="images/img_star3_7.svg"
                      className="StarTwo1"
                      alt="StarThree Four"
                    />
                    <Img
                      src="images/img_star4_7.svg"
                      className="StarTwo1"
                      alt="StarFour Four"
                    />
                  </Row>
                  <Text className="Loremipsumdol" variant="body9">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Egestas consequat
                  </Text>
                  <Text className="Spaghetti2" variant="body5">
                    $12.05
                  </Text>
                  <Row className="bg-gray_51 items-center justify-center lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] rounded-radius165 w-[65%]">
                    <Stack className="bg-white_A700 2xl:px-[10px] 3xl:px-[12px] lg:px-[7px] xl:px-[8px] rounded-radius50 shadow-bs3 floatingicon_Nine">
                      <Img
                        src="images/img_vector25.svg"
                        className="VectorTwentyFive"
                        alt="VectorTwentyFive Four"
                      />
                    </Stack>
                    <Text className="Quality" variant="body6">
                      0
                    </Text>
                    <Img
                      src="images/img_floatingicon.svg"
                      className="floatingicon"
                      alt="floatingicon Four"
                    />
                  </Row>
                </Column>
                <Column className="bg-white_A700 items-center justify-start lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] rounded-radius45 w-[100%]">
                  <Img
                    src="images/img_image5.png"
                    className="lg:h-[124px] xl:h-[155px] 2xl:h-[175px] 3xl:h-[209px] rotate-[173deg] rounded-radius50 lg:w-[123px] xl:w-[154px] 2xl:w-[174px] 3xl:w-[208px]"
                    alt="imageFive"
                  />
                  <Text className="Spaghetti2" variant="body4">
                    Capellini
                  </Text>
                  <Row className="items-center justify-center 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] rounded-radius113 w-[45%]">
                    <Img
                      src="images/img_star1_8.svg"
                      className="StarOne1"
                      alt="StarOne Five"
                    />
                    <Img
                      src="images/img_star2_8.svg"
                      className="StarTwo1"
                      alt="StarTwo Five"
                    />
                    <Img
                      src="images/img_star3_8.svg"
                      className="StarTwo1"
                      alt="StarThree Five"
                    />
                    <Img
                      src="images/img_star4_8.svg"
                      className="StarTwo1"
                      alt="StarFour Five"
                    />
                  </Row>
                  <Text className="Loremipsumdol" variant="body9">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Egestas consequat
                  </Text>
                  <Text className="Spaghetti2" variant="body5">
                    $12.05
                  </Text>
                  <Row className="bg-gray_51 items-center justify-center lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] rounded-radius165 w-[65%]">
                    <Stack className="bg-white_A700 2xl:px-[10px] 3xl:px-[12px] lg:px-[7px] xl:px-[8px] rounded-radius50 shadow-bs3 floatingicon_Nine">
                      <Img
                        src="images/img_vector25.svg"
                        className="VectorTwentyFive"
                        alt="VectorTwentyFive Five"
                      />
                    </Stack>
                    <Text className="Quality" variant="body6">
                      0
                    </Text>
                    <Img
                      src="images/img_floatingicon.svg"
                      className="floatingicon"
                      alt="floatingicon Five"
                    />
                  </Row>
                </Column>
                <Column className="bg-white_A700 items-center justify-start lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] rounded-radius45 w-[100%]">
                  <Stack className="lg:h-[124px] xl:h-[155px] 2xl:h-[175px] 3xl:h-[209px] rounded-radius50 shadow-bs4 lg:w-[123px] xl:w-[154px] 2xl:w-[174px] 3xl:w-[208px]">
                    <Img
                      src="images/img_kisspngitalian.png"
                      className="absolute lg:h-[124px] xl:h-[154px] 2xl:h-[174px] 3xl:h-[208px] inset-[0] justify-center m-[auto] rounded-radius50 lg:w-[123px] xl:w-[153px] 2xl:w-[173px] 3xl:w-[207px]"
                      alt="kisspngitalian Three"
                    />
                    <Img
                      src="images/img_pngwing2.png"
                      className="absolute lg:h-[124px] xl:h-[155px] 2xl:h-[175px] 3xl:h-[209px] rounded-radius50 w-[100%]"
                      alt="pngwingTwo"
                    />
                  </Stack>
                  <Text className="Fettuccine" variant="body4">
                    Fusilli
                  </Text>
                  <Row className="items-center justify-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] rounded-radius113 w-[45%]">
                    <Img
                      src="images/img_star1_9.svg"
                      className="StarOne1"
                      alt="StarOne Six"
                    />
                    <Img
                      src="images/img_star2_9.svg"
                      className="StarTwo1"
                      alt="StarTwo Six"
                    />
                    <Img
                      src="images/img_star3_9.svg"
                      className="StarTwo1"
                      alt="StarThree Six"
                    />
                    <Img
                      src="images/img_star4_9.svg"
                      className="StarTwo1"
                      alt="StarFour Six"
                    />
                  </Row>
                  <Text className="Loremipsumdol" variant="body9">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Egestas consequat
                  </Text>
                  <Text className="Spaghetti2" variant="body5">
                    $12.05
                  </Text>
                  <Row className="bg-gray_51 items-center justify-center lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] rounded-radius165 w-[65%]">
                    <Stack className="bg-white_A700 2xl:px-[10px] 3xl:px-[12px] lg:px-[7px] xl:px-[8px] rounded-radius50 shadow-bs3 floatingicon_Nine">
                      <Img
                        src="images/img_vector25.svg"
                        className="VectorTwentyFive"
                        alt="VectorTwentyFive Six"
                      />
                    </Stack>
                    <Text className="Quality" variant="body6">
                      0
                    </Text>
                    <Img
                      src="images/img_floatingicon.svg"
                      className="floatingicon"
                      alt="floatingicon Six"
                    />
                  </Row>
                </Column>
                <Column className="bg-white_A700 items-center justify-start lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] rounded-radius45 w-[100%]">
                  <Img
                    src="images/img_pngwing3.png"
                    className="lg:h-[124px] xl:h-[155px] 2xl:h-[175px] 3xl:h-[209px] rounded-radius50 lg:w-[123px] xl:w-[154px] 2xl:w-[174px] 3xl:w-[208px]"
                    alt="pngwingThree"
                  />
                  <Text className="Fettuccine" variant="body4">
                    Farfalle
                  </Text>
                  <Row className="items-center justify-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] rounded-radius113 w-[45%]">
                    <Img
                      src="images/img_star1_10.svg"
                      className="StarOne1"
                      alt="StarOne Seven"
                    />
                    <Img
                      src="images/img_star2_10.svg"
                      className="StarTwo1"
                      alt="StarTwo Seven"
                    />
                    <Img
                      src="images/img_star3_10.svg"
                      className="StarTwo1"
                      alt="StarThree Seven"
                    />
                    <Img
                      src="images/img_star4_10.svg"
                      className="StarTwo1"
                      alt="StarFour Seven"
                    />
                  </Row>
                  <Text className="Loremipsumdol" variant="body9">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Egestas consequat
                  </Text>
                  <Text className="Spaghetti2" variant="body5">
                    $12.05
                  </Text>
                  <Row className="bg-gray_51 items-center justify-center lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] rounded-radius165 w-[65%]">
                    <Stack className="bg-white_A700 2xl:px-[10px] 3xl:px-[12px] lg:px-[7px] xl:px-[8px] rounded-radius50 shadow-bs3 floatingicon_Nine">
                      <Img
                        src="images/img_vector25.svg"
                        className="VectorTwentyFive"
                        alt="VectorTwentyFive Seven"
                      />
                    </Stack>
                    <Text className="Quality" variant="body6">
                      0
                    </Text>
                    <Img
                      src="images/img_floatingicon.svg"
                      className="floatingicon"
                      alt="floatingicon Seven"
                    />
                  </Row>
                </Column>
                <Column className="bg-white_A700 items-center justify-start lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] rounded-radius45 w-[100%]">
                  <Img
                    src="images/img_unsplasho3wkh.png"
                    className="lg:h-[124px] xl:h-[155px] 2xl:h-[175px] 3xl:h-[209px] rounded-radius50 lg:w-[123px] xl:w-[154px] 2xl:w-[174px] 3xl:w-[208px]"
                    alt="unsplashO3wkh"
                  />
                  <Text className="Fettuccine" variant="body4">
                    Penne Alla Vodak
                  </Text>
                  <Row className="items-center justify-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] rounded-radius113 w-[45%]">
                    <Img
                      src="images/img_star1_11.svg"
                      className="StarOne1"
                      alt="StarOne Eight"
                    />
                    <Img
                      src="images/img_star2_11.svg"
                      className="StarTwo1"
                      alt="StarTwo Eight"
                    />
                    <Img
                      src="images/img_star3_11.svg"
                      className="StarTwo1"
                      alt="StarThree Eight"
                    />
                    <Img
                      src="images/img_star4_11.svg"
                      className="StarTwo1"
                      alt="StarFour Eight"
                    />
                  </Row>
                  <Text className="Loremipsumdol" variant="body9">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Egestas consequat
                  </Text>
                  <Text className="Spaghetti2" variant="body5">
                    $12.05
                  </Text>
                  <Row className="bg-gray_51 items-center justify-center lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] rounded-radius165 w-[65%]">
                    <Stack className="bg-white_A700 2xl:px-[10px] 3xl:px-[12px] lg:px-[7px] xl:px-[8px] rounded-radius50 shadow-bs3 floatingicon_Nine">
                      <Img
                        src="images/img_vector25.svg"
                        className="VectorTwentyFive"
                        alt="VectorTwentyFive Eight"
                      />
                    </Stack>
                    <Text className="Quality" variant="body6">
                      0
                    </Text>
                    <Img
                      src="images/img_floatingicon.svg"
                      className="floatingicon"
                      alt="floatingicon Eight"
                    />
                  </Row>
                </Column>
              </Grid>
              <Column className="bg-white_A700 items-center lg:py-[14px] xl:py-[17px] 2xl:py-[20px] 3xl:py-[24px] rounded-radius20 shadow-bs5 w-[31%]">
                <Button
                  className="font-semibold lg:text-[21px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-center w-[88%]"
                  shape="RoundedBorder20"
                  size="2xl"
                  variant="FillGray900ab"
                >
                  Order list
                </Button>
                <List
                  className="gap-[0] min-h-[auto] lg:mt-[50px] xl:mt-[63px] 2xl:mt-[71px] 3xl:mt-[85px] w-[83%]"
                  orientation="vertical"
                >
                  <Column className="items-center justify-start lg:my-[25px] xl:my-[31px] 2xl:my-[35px] 3xl:my-[43px] w-[100%]">
                    <Row className="items-start justify-between w-[100%]">
                      <Text className="rowspaghetti" variant="body2">
                        Spaghetti
                      </Text>
                      <Img
                        src="images/img_trash.svg"
                        className="trash"
                        alt="trash"
                      />
                    </Row>
                    <Row className="items-start justify-between lg:mt-[27px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] w-[100%]">
                      <Row className="bg-gray_51 items-center justify-between rounded-radius1662 w-[42%]">
                        <Stack className="bg-white_A700 2xl:px-[10px] 3xl:px-[12px] lg:px-[7px] xl:px-[8px] rounded-radius50 shadow-bs3 floatingicon_Nine">
                          <Img
                            src="images/img_vector25.svg"
                            className="VectorTwentyFive"
                            alt="VectorTwentyFive Nine"
                          />
                        </Stack>
                        <Text
                          className="not-italic text-black_900 w-[auto]"
                          variant="body6"
                        >
                          2
                        </Text>
                        <Img
                          src="images/img_floatingicon.svg"
                          className="floatingicon_Nine"
                          alt="floatingicon Nine"
                        />
                      </Row>
                      <Text
                        className="rowvectortwentyfive_nine"
                        variant="body2"
                      >
                        $24.1
                      </Text>
                    </Row>
                  </Column>
                  <Column className="items-center justify-start lg:my-[25px] xl:my-[31px] 2xl:my-[35px] 3xl:my-[43px] w-[100%]">
                    <Row className="items-start justify-between w-[100%]">
                      <Text className="rowspaghetti" variant="body2">
                        Linguine
                      </Text>
                      <Img
                        src="images/img_trash.svg"
                        className="trash"
                        alt="trash One"
                      />
                    </Row>
                    <Row className="items-start justify-between lg:mt-[27px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] w-[99%]">
                      <Row className="bg-gray_51 items-center justify-between rounded-radius1662 w-[42%]">
                        <Stack className="bg-white_A700 2xl:px-[10px] 3xl:px-[12px] lg:px-[7px] xl:px-[8px] rounded-radius50 shadow-bs3 floatingicon_Nine">
                          <Img
                            src="images/img_vector25.svg"
                            className="VectorTwentyFive"
                            alt="VectorTwentyFive Ten"
                          />
                        </Stack>
                        <Text
                          className="not-italic text-black_900 w-[auto]"
                          variant="body6"
                        >
                          2
                        </Text>
                        <Img
                          src="images/img_floatingicon.svg"
                          className="floatingicon_Nine"
                          alt="floatingicon Ten"
                        />
                      </Row>
                      <Text
                        className="rowvectortwentyfive_nine"
                        variant="body2"
                      >
                        $35.7
                      </Text>
                    </Row>
                  </Column>
                  <Column className="items-center justify-start lg:my-[25px] xl:my-[31px] 2xl:my-[35px] 3xl:my-[43px] w-[100%]">
                    <Row className="items-start justify-between w-[100%]">
                      <Text className="rowspaghetti" variant="body2">
                        Capellini
                      </Text>
                      <Img
                        src="images/img_trash.svg"
                        className="trash"
                        alt="trash Two"
                      />
                    </Row>
                    <Row className="items-start justify-between lg:mt-[27px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] w-[100%]">
                      <Row className="bg-gray_51 items-center justify-between rounded-radius1662 w-[42%]">
                        <Stack className="bg-white_A700 2xl:px-[10px] 3xl:px-[12px] lg:px-[7px] xl:px-[8px] rounded-radius50 shadow-bs3 floatingicon_Nine">
                          <Img
                            src="images/img_vector25.svg"
                            className="VectorTwentyFive"
                            alt="VectorTwentyFive Eleven"
                          />
                        </Stack>
                        <Text
                          className="not-italic text-black_900 w-[auto]"
                          variant="body6"
                        >
                          2
                        </Text>
                        <Img
                          src="images/img_floatingicon.svg"
                          className="floatingicon_Nine"
                          alt="floatingicon Eleven"
                        />
                      </Row>
                      <Text
                        className="rowvectortwentyfive_nine"
                        variant="body2"
                      >
                        $18.5
                      </Text>
                    </Row>
                  </Column>
                </List>
                <Column
                  className="bg-cover bg-repeat justify-end lg:mt-[40px] xl:mt-[50px] 2xl:mt-[57px] 3xl:mt-[68px] lg:p-[17px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] w-[100%]"
                  style={{ backgroundImage: "url('images/img_group945.svg')" }}
                >
                  <Text
                    className="font-semibold lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] text-black_900 w-[auto]"
                    variant="body2"
                  >
                    Voucher Code
                  </Text>
                  <Row className="items-center lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[97%]">
                    <Button
                      className="font-normal not-italic lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-center w-[71%]"
                      shape="RoundedBorder16"
                      size="md"
                      variant="FillGray51"
                    >
                      FREETOEAT
                    </Button>
                    <Img
                      src="images/img_floatingicon_60X60.svg"
                      className="lg:h-[43px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] lg:ml-[15px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] lg:w-[42px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]"
                      alt="floatingicon Twelve"
                    />
                  </Row>
                </Column>
                <Column className="items-center justify-start lg:mb-[21px] xl:mb-[26px] 2xl:mb-[30px] 3xl:mb-[36px] lg:mt-[36px] xl:mt-[45px] 2xl:mt-[51px] 3xl:mt-[61px] w-[83%]">
                  <Row className="items-center justify-between w-[100%]">
                    <Text className="Subtotal1" variant="body2">
                      Subtotal
                    </Text>
                    <Text className="price_Twelve" variant="body2">
                      $78.3
                    </Text>
                  </Row>
                  <Row className="items-center justify-between lg:mt-[27px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] w-[100%]">
                    <Text className="Subtotal1" variant="body2">
                      Tax fee
                    </Text>
                    <Text className="price_Twelve" variant="body2">
                      $3.5
                    </Text>
                  </Row>
                  <Row className="items-center justify-between lg:mt-[27px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] w-[100%]">
                    <Text className="Subtotal1" variant="body2">
                      Voucher
                    </Text>
                    <Text className="price_Twelve" variant="body2">
                      $5.0
                    </Text>
                  </Row>
                  <Row className="items-center justify-between lg:mt-[27px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] w-[100%]">
                    <Text className="Subtotal1" variant="body2">
                      Total
                    </Text>
                    <Text className="price_Twelve" variant="body2">
                      $76.8
                    </Text>
                  </Row>
                  <Button
                    className="font-semibold lg:mt-[51px] xl:mt-[64px] 2xl:mt-[72px] 3xl:mt-[86px] lg:text-[17px] xl:text-[22px] 2xl:text-[25px] 3xl:text-[30px] text-center w-[100%]"
                    shape="RoundedBorder16"
                    size="sm"
                    variant="FillRed400"
                  >
                    Checkout
                  </Button>
                </Column>
              </Column>
            </Row>
            <Row className="font-poppins items-center lg:ml-[109px] xl:ml-[136px] 2xl:ml-[154px] 3xl:ml-[184px] lg:mt-[35px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] w-[39%]">
              <Button
                className="flex lg:h-[40px] xl:h-[49px] 2xl:h-[56px] 3xl:h-[67px] items-center justify-center rotate-[180deg] lg:w-[39px] xl:w-[48px] 2xl:w-[55px] 3xl:w-[66px]"
                shape="icbRoundedBorder15"
                size="smIcn"
                variant="icbFillGray900"
              >
                <Img
                  src="images/img_arrowright.svg"
                  className="flex items-center justify-center lg:h-[15px] xl:h-[19px] 2xl:h-[22px] 3xl:h-[26px]"
                  alt="arrowright"
                />
              </Button>
              <Button
                className="font-semibold lg:h-[40px] xl:h-[49px] 2xl:h-[56px] 3xl:h-[67px] lg:ml-[21px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] rotate-[180deg] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center lg:w-[39px] xl:w-[48px] 2xl:w-[55px] 3xl:w-[66px]"
                shape="RoundedBorder16"
                size="md"
                variant="FillRed40063"
              >
                1
              </Button>
              <Button
                className="font-semibold lg:h-[40px] xl:h-[49px] 2xl:h-[56px] 3xl:h-[67px] lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] rotate-[180deg] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center lg:w-[39px] xl:w-[48px] 2xl:w-[55px] 3xl:w-[66px]"
                shape="RoundedBorder16"
                size="md"
                variant="FillRed40063"
              >
                2
              </Button>
              <Button
                className="font-semibold lg:h-[40px] xl:h-[49px] 2xl:h-[56px] 3xl:h-[67px] lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] rotate-[180deg] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center lg:w-[39px] xl:w-[48px] 2xl:w-[55px] 3xl:w-[66px]"
                shape="RoundedBorder16"
                size="md"
                variant="FillRed40063"
              >
                3
              </Button>
              <Img
                src="images/img_group7.svg"
                className="lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] lg:ml-[22px] xl:ml-[27px] 2xl:ml-[31px] 3xl:ml-[37px] w-[5%]"
                alt="GroupSeven"
              />
              <Button
                className="flex lg:h-[40px] xl:h-[49px] 2xl:h-[56px] 3xl:h-[67px] items-center justify-center lg:ml-[32px] xl:ml-[40px] 2xl:ml-[46px] 3xl:ml-[55px] lg:w-[39px] xl:w-[48px] 2xl:w-[55px] 3xl:w-[66px]"
                shape="icbRoundedBorder15"
                size="smIcn"
                variant="icbFillGray900"
              >
                <Img
                  src="images/img_arrowright.svg"
                  className="flex items-center justify-center lg:h-[15px] xl:h-[19px] 2xl:h-[22px] 3xl:h-[26px]"
                  alt="arrowright One"
                />
              </Button>
            </Row>
          </Column>
          <Footer className="bg-gray_901 xl:mt-[106px] 2xl:mt-[120px] 3xl:mt-[144px] lg:mt-[85px] w-[100%]" />
        </Column>
      </Column>
    </>
  );
};

export default OrderonlinePage;
