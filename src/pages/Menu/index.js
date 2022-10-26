import React from "react";

import {
  Column,
  Row,
  Text,
  Line,
  Stack,
  Img,
  Button,
  List,
  Slider,
  RatingBar,
} from "components";
import Footer from "components/Footer/Footer";

const MenuPage = () => {
  const sliderRef = React.useRef();
  const [sliderState, setsliderState] = React.useState(0);

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
              <Column className="items-center justify-start lg:ml-[21px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] mt-[1px] w-[8%]">
                <Text
                  className="not-italic text-red_400 w-[auto]"
                  variant="body7"
                >
                  Menu
                </Text>
                <Line className="bg-red_400 h-[1px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[98%]" />
              </Column>
              <Text
                className="lg:ml-[21px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] not-italic text-gray_900_cc w-[auto]"
                variant="body7"
              >
                About us
              </Text>
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
          <Column className="font-opensans items-center justify-start 2xl:mt-[102px] 3xl:mt-[122px] lg:mt-[72px] xl:mt-[90px] w-[100%]">
            <Text className="text-gray_900 w-[auto]" as="h4" variant="h4">
              Our Popular Menu
            </Text>
            <Column className="font-poppins items-center justify-start lg:mt-[56px] xl:mt-[70px] 2xl:mt-[79px] 3xl:mt-[94px] w-[100%]">
              <Row className="items-center justify-between rounded-radius16 w-[100%]">
                <Button
                  className="font-semibold lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-center w-[21%]"
                  shape="RoundedBorder16"
                  size="lg"
                  variant="FillRed400"
                >
                  All catagory
                </Button>
                <Button
                  className="font-normal not-italic lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-center w-[17%]"
                  shape="RoundedBorder16"
                  size="lg"
                  variant="FillGray40063"
                >
                  Dinner
                </Button>
                <Button
                  className="font-normal not-italic lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-center w-[17%]"
                  shape="RoundedBorder16"
                  size="lg"
                  variant="FillGray40063"
                >
                  Lunch
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
              <List
                className="gap-[0] min-h-[auto] lg:mt-[35px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] w-[100%]"
                orientation="vertical"
              >
                <Row className="menu">
                  <Column className="bg-white_A700 items-center lg:p-[19px] xl:p-[24px] 2xl:p-[28px] 3xl:p-[33px] rounded-radius40 w-[31%]">
                    <Img
                      src="images/img_kisspngitalian.png"
                      className="lg:h-[192px] xl:h-[240px] 2xl:h-[270px] 3xl:h-[323px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] rounded-radius50 w-[94%]"
                      alt="kisspngitalian"
                    />
                    <Text className="Spaghetti1" variant="body1">
                      Spaghetti
                    </Text>
                    <Row className="items-center justify-center lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] rounded-radius176 w-[44%]">
                      <Img
                        src="images/img_star1.svg"
                        className="StarOne"
                        alt="StarOne"
                      />
                      <Img
                        src="images/img_star2.svg"
                        className="StarTwo"
                        alt="StarTwo"
                      />
                      <Img
                        src="images/img_star3.svg"
                        className="StarTwo"
                        alt="StarThree"
                      />
                      <Img
                        src="images/img_star4.svg"
                        className="StarFour"
                        alt="StarFour"
                      />
                    </Row>
                    <Text
                      className="leading-[200.00%] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] not-italic text-center text-gray_800 w-[98%]"
                      variant="body8"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Egestas consequat mi eget auctor aliquam, diam.{" "}
                    </Text>
                    <Row className="items-center justify-between lg:mb-[4px] xl:mb-[6px] 2xl:mb-[7px] 3xl:mb-[8px] lg:mt-[24px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] rounded-radius8 w-[94%]">
                      <Text
                        className="font-semibold text-gray_900 w-[auto]"
                        variant="body2"
                      >
                        $12.05
                      </Text>
                      <Button
                        className="font-semibold lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[58%]"
                        shape="RoundedBorder8"
                        size="md"
                        variant="FillRed400"
                      >
                        Order now
                      </Button>
                    </Row>
                  </Column>
                  <Column className="bg-white_A700 items-center lg:p-[21px] xl:p-[26px] 2xl:p-[30px] 3xl:p-[36px] rounded-radius40 w-[31%]">
                    <Column className="items-center justify-start mt-[3px] w-[95%]">
                      <Img
                        src="images/img_unsplashuzmwi5.png"
                        className="lg:h-[192px] xl:h-[240px] 2xl:h-[270px] 3xl:h-[323px] rounded-radius50 w-[100%]"
                        alt="unsplashUzmWIFive"
                      />
                      <Column className="items-center justify-start lg:mt-[27px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] w-[47%]">
                        <Text
                          className="font-semibold text-black_900 w-[auto]"
                          variant="body1"
                        >
                          Gnocchi
                        </Text>
                        <Row className="items-center justify-between lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] rounded-radius176 w-[100%]">
                          <Img
                            src="images/img_star1_24X24.svg"
                            className="StarOne"
                            alt="StarOne One"
                          />
                          <Img
                            src="images/img_star2_24X24.svg"
                            className="StarOne"
                            alt="StarTwo One"
                          />
                          <Img
                            src="images/img_star3_24X24.svg"
                            className="StarOne"
                            alt="StarThree One"
                          />
                          <Img
                            src="images/img_star4_24X24.svg"
                            className="StarOne"
                            alt="StarFour One"
                          />
                        </Row>
                      </Column>
                    </Column>
                    <Text className="Gnocchi" variant="body8">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Egestas consequat mi eget auctor aliquam, diam.{" "}
                    </Text>
                    <Row className="items-center justify-between mb-[4px] lg:mt-[24px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] rounded-radius8 w-[95%]">
                      <Text
                        className="font-semibold text-black_900 w-[auto]"
                        variant="body2"
                      >
                        $12.05
                      </Text>
                      <Button
                        className="font-semibold lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[58%]"
                        shape="RoundedBorder8"
                        size="md"
                        variant="FillRed400"
                      >
                        Order now
                      </Button>
                    </Row>
                  </Column>
                  <Column className="bg-white_A700 items-center lg:p-[21px] xl:p-[26px] 2xl:p-[30px] 3xl:p-[36px] rounded-radius40 w-[31%]">
                    <Column className="items-center justify-start mt-[3px] w-[95%]">
                      <Img
                        src="images/img_unsplashegrje6.png"
                        className="lg:h-[192px] xl:h-[240px] 2xl:h-[270px] 3xl:h-[323px] rounded-radius50 w-[100%]"
                        alt="unsplashEGRJeSix"
                      />
                      <Text className="columnunsplashegrjesix" variant="body1">
                        Rovioli
                      </Text>
                      <Row className="items-center justify-center lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] rounded-radius176 w-[47%]">
                        <Img
                          src="images/img_star1_1.svg"
                          className="StarOne"
                          alt="StarOne Two"
                        />
                        <Img
                          src="images/img_star2_1.svg"
                          className="StarTwo"
                          alt="StarTwo Two"
                        />
                        <Img
                          src="images/img_star3_1.svg"
                          className="StarTwo"
                          alt="StarThree Two"
                        />
                        <Img
                          src="images/img_star4_1.svg"
                          className="StarFour"
                          alt="StarFour Two"
                        />
                      </Row>
                    </Column>
                    <Text className="Gnocchi" variant="body8">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Egestas consequat mi eget auctor aliquam, diam.{" "}
                    </Text>
                    <Row className="items-center justify-between mb-[4px] lg:mt-[24px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] rounded-radius8 w-[95%]">
                      <Text
                        className="font-semibold text-black_900 w-[auto]"
                        variant="body2"
                      >
                        $12.05
                      </Text>
                      <Button
                        className="font-semibold lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[58%]"
                        shape="RoundedBorder8"
                        size="md"
                        variant="FillRed400"
                      >
                        Order now
                      </Button>
                    </Row>
                  </Column>
                </Row>
                <Column className="items-center justify-end lg:my-[14px] xl:my-[17px] 2xl:my-[20px] 3xl:my-[24px] w-[100%]">
                  <Slider
                    slidesToShow={3}
                    activeIndex={sliderState}
                    onSlideChanged={(e) => {
                      setsliderState(e?.item);
                    }}
                    ref={sliderRef}
                    className="w-[100%]"
                    items={[...Array(9)].map(() => (
                      <React.Fragment key={Math.random()}>
                        <Column className="bg-white_A700 items-center justify-center lg:p-[21px] xl:p-[26px] 2xl:p-[30px] 3xl:p-[36px] rounded-radius40">
                          <Column className="items-center justify-start mt-[3px] w-[95%]">
                            <Stack className="lg:h-[192px] xl:h-[240px] 2xl:h-[270px] 3xl:h-[323px] rounded-radius135 shadow-bs2 w-[100%]">
                              <Img
                                src="images/img_kisspngitalian.png"
                                className="absolute lg:h-[192px] xl:h-[240px] 2xl:h-[270px] 3xl:h-[323px] rounded-radius50 w-[100%]"
                                alt="kisspngitalian One"
                              />
                              <Stack className="absolute lg:h-[192px] xl:h-[240px] 2xl:h-[270px] 3xl:h-[323px] w-[100%]">
                                <Img
                                  src="images/img_unsplashsqymtd.png"
                                  className="absolute lg:h-[192px] xl:h-[240px] 2xl:h-[270px] 3xl:h-[323px] rounded-radius50 w-[100%]"
                                  alt="unsplashSqYmTD"
                                />
                                <Img
                                  src="images/img_unsplashkfdsmd.png"
                                  className="absolute lg:h-[192px] xl:h-[240px] 2xl:h-[270px] 3xl:h-[323px] rounded-radius50 w-[100%]"
                                  alt="unsplashkfDsMD"
                                />
                              </Stack>
                            </Stack>
                            <Text className="Spaghetti1" variant="body1">
                              Splitza Signature
                            </Text>
                            <Row className="items-center justify-center lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] rounded-radius176 w-[47%]">
                              <Img
                                src="images/img_star1_2.svg"
                                className="StarOne"
                                alt="StarOne One"
                              />
                              <Img
                                src="images/img_star2_2.svg"
                                className="StarTwo"
                                alt="StarTwo One"
                              />
                              <Img
                                src="images/img_star3_2.svg"
                                className="StarTwo"
                                alt="StarThree One"
                              />
                              <Img
                                src="images/img_star4_2.svg"
                                className="StarFour"
                                alt="StarFour One"
                              />
                            </Row>
                          </Column>
                          <Text className="Gnocchi" variant="body8">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Egestas consequat mi eget auctor aliquam,
                            diam.{" "}
                          </Text>
                          <Row className="items-center justify-between mb-[4px] lg:mt-[24px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] rounded-radius8 w-[95%]">
                            <Text
                              className="font-semibold text-black_900 w-[auto]"
                              variant="body2"
                            >
                              $12.05
                            </Text>
                            <Button
                              className="font-semibold lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[58%]"
                              shape="RoundedBorder8"
                              size="md"
                              variant="FillRed400"
                            >
                              Order now
                            </Button>
                          </Row>
                        </Column>
                      </React.Fragment>
                    ))}
                    Indicator={({ isActive }) => {
                      if (isActive) {
                        return <div className="" />;
                      }
                      return <div className="" role="button" tabIndex={0} />;
                    }}
                  />
                  <Row className="items-center justify-center lg:mt-[35px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] w-[39%]">
                    <Button
                      className="cursor-pointer flex lg:h-[40px] xl:h-[49px] 2xl:h-[56px] 3xl:h-[67px] items-center justify-center rotate-[180deg] lg:w-[39px] xl:w-[48px] 2xl:w-[55px] 3xl:w-[66px]"
                      onClick={() => sliderRef.current?.slidePrev()}
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
                      className="cursor-pointer flex lg:h-[40px] xl:h-[49px] 2xl:h-[56px] 3xl:h-[67px] items-center justify-center lg:ml-[231px] xl:ml-[289px] 2xl:ml-[325px] 3xl:ml-[390px] lg:w-[39px] xl:w-[48px] 2xl:w-[55px] 3xl:w-[66px]"
                      onClick={() => sliderRef.current?.slideNext()}
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
              </List>
              <Row className="items-center lg:mt-[35px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] 3xl:px-[102px] lg:px-[60px] xl:px-[75px] 2xl:px-[85px] w-[39%]">
                <Button
                  className="font-semibold lg:h-[40px] xl:h-[49px] 2xl:h-[56px] 3xl:h-[67px] rotate-[180deg] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center lg:w-[39px] xl:w-[48px] 2xl:w-[55px] 3xl:w-[66px]"
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
                  className="lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] lg:ml-[22px] xl:ml-[27px] 2xl:ml-[31px] 3xl:ml-[37px] w-[8%]"
                  alt="GroupSeven"
                />
              </Row>
            </Column>
          </Column>
        </Column>
        <Footer className="bg-gray_901 xl:mt-[106px] 2xl:mt-[120px] 3xl:mt-[144px] lg:mt-[85px] w-[100%]" />
      </Column>
    </>
  );
};

export default MenuPage;
