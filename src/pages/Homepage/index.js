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

const HomepagePage = () => {
  const sliderRef = React.useRef();
  const [sliderState, setsliderState] = React.useState(0);
  const sliderRef1 = React.useRef();
  const [sliderState1, setsliderState1] = React.useState(0);

  return (
    <>
      <Column className="bg-gray_50 font-poppins items-center justify-start mx-[auto] w-[100%]">
        <Column className="bg-gradient  items-center justify-start lg:p-[35px] xl:p-[44px] 2xl:p-[50px] 3xl:p-[60px] w-[100%]">
          <header className="w-[83%]">
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
              <Row className="font-opensans items-start 2xl:ml-[106px] 3xl:ml-[127px] lg:ml-[75px] xl:ml-[94px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] w-[51%]">
                <Column className="justify-start mt-[1px] w-[14%]">
                  <Text
                    className="not-italic text-red_400 w-[auto]"
                    variant="body7"
                  >
                    Home
                  </Text>
                  <Line className="bg-red_400 h-[1px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[59%]" />
                </Column>
                <Text className="Home" variant="body7">
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
          </header>
          <Row className="items-center lg:mb-[14px] xl:mb-[17px] 2xl:mb-[20px] 3xl:mb-[24px] lg:mt-[49px] xl:mt-[62px] 2xl:mt-[70px] 3xl:mt-[84px] w-[93%]">
            <Column className="lg:pr-[10px] xl:pr-[13px] 2xl:pr-[15px] 3xl:pr-[18px] lg:pt-[10px] xl:pt-[13px] 2xl:pt-[15px] 3xl:pt-[18px] rounded-radius16 w-[47%]">
              <Column className="justify-start 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[100%]">
                <Text
                  className="font-opensans leading-[normal] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] text-gray_902 w-[99%]"
                  as="h3"
                  variant="h3"
                >
                  <span className="text-gray_902 font-bold lg:text-[49px] xl:text-[62px] 2xl:text-[70px] 3xl:text-[84px]">
                    Best Restaurant
                    <br />
                    In{" "}
                  </span>
                  <span className="text-red_400 font-bold lg:text-[49px] xl:text-[62px] 2xl:text-[70px] 3xl:text-[84px]">
                    Town.
                  </span>
                </Text>
                <Text
                  className="font-normal font-poppins leading-[200.00%] lg:mt-[32px] xl:mt-[40px] 2xl:mt-[46px] 3xl:mt-[55px] not-italic text-gray_802 w-[84%]"
                  variant="body4"
                >
                  We provide best food in town, we provide home delivery and
                  dine in services.
                </Text>
              </Column>
              <Row className="items-center lg:mt-[30px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] w-[87%]">
                <Button
                  className="font-semibold lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-center w-[48%]"
                  shape="RoundedBorder16"
                  size="lg"
                  variant="FillRed400"
                >
                  Order now
                </Button>
                <Button
                  className="font-semibold lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-center w-[48%]"
                  shape="RoundedBorder16"
                  size="lg"
                  variant="FillRed40019"
                >
                  Reservation
                </Button>
              </Row>
            </Column>
            <Stack className="lg:h-[357px] xl:h-[447px] 2xl:h-[503px] 3xl:h-[603px] lg:ml-[54px] xl:ml-[67px] 2xl:ml-[76px] 3xl:ml-[91px] w-[47%]">
              <Column className="absolute justify-start w-[100%]">
                <Img
                  src="images/img_kisspngromaine.png"
                  className="lg:h-[141px] xl:h-[177px] 2xl:h-[199px] 3xl:h-[238px] w-[31%]"
                  alt="kisspngromaine"
                />
                <Img
                  src="images/img_kisspngromaine_248X242.png"
                  className="lg:h-[177px] xl:h-[221px] 2xl:h-[249px] 3xl:h-[298px] lg:ml-[244px] xl:ml-[306px] 2xl:ml-[344px] 3xl:ml-[413px] lg:mt-[38px] xl:mt-[48px] 2xl:mt-[54px] 3xl:mt-[64px] w-[41%]"
                  alt="kisspngromaine One"
                />
              </Column>
              <Img
                src="images/img_kisspngitalian.png"
                className="absolute lg:h-[293px] xl:h-[367px] 2xl:h-[413px] 3xl:h-[495px] inset-x-[0] mx-[auto] top-[6%] w-[70%]"
                alt="kisspngitalian"
              />
            </Stack>
          </Row>
        </Column>
        <Row className="bg-green_500_63 items-center xl:mt-[106px] 2xl:mt-[120px] 3xl:mt-[144px] lg:mt-[85px] lg:p-[35px] xl:p-[44px] 2xl:p-[50px] 3xl:p-[60px] w-[100%]">
          <Stack className="lg:h-[410px] xl:h-[513px] 2xl:h-[577px] 3xl:h-[692px] xl:ml-[101px] 2xl:ml-[114px] 3xl:ml-[136px] lg:ml-[81px] w-[43%]">
            <Stack className="absolute bottom-[0] lg:h-[393px] xl:h-[492px] 2xl:h-[553px] 3xl:h-[663px] right-[0] w-[87%]">
              <Stack className="absolute backdrop-opacity-[0.5] blur-[137.34px] bottom-[0] lg:h-[327px] xl:h-[409px] 2xl:h-[460px] 3xl:h-[552px] inset-x-[0] mx-[auto] rounded-radius22953 w-[91%]">
                <Img
                  src="images/img_unsplashuxrhru.png"
                  className="absolute lg:h-[326px] xl:h-[408px] 2xl:h-[459px] 3xl:h-[550px] right-[0] rounded-radius50 top-[0] lg:w-[325px] xl:w-[407px] 2xl:w-[458px] 3xl:w-[549px]"
                  alt="unsplashUxRhrU"
                />
                <Img
                  src="images/img_unsplashxetv9n.png"
                  className="absolute lg:h-[327px] xl:h-[409px] 2xl:h-[460px] 3xl:h-[552px] rounded-radius22953 w-[100%]"
                  alt="unsplashxeTv9N"
                />
              </Stack>
              <Stack className="absolute lg:h-[357px] xl:h-[447px] 2xl:h-[503px] 3xl:h-[603px] top-[0] lg:w-[356px] xl:w-[446px] 2xl:w-[502px] 3xl:w-[602px]">
                <Img
                  src="images/img_unsplashuxrhru.png"
                  className="absolute lg:h-[357px] xl:h-[447px] 2xl:h-[503px] 3xl:h-[603px] right-[0] rounded-radius25119 top-[0] w-[100%]"
                  alt="unsplashUxRhrU One"
                />
                <Img
                  src="images/img_unsplashxetv9n.png"
                  className="absolute lg:h-[357px] xl:h-[447px] 2xl:h-[503px] 3xl:h-[603px] rounded-radius50 lg:w-[356px] xl:w-[446px] 2xl:w-[502px] 3xl:w-[602px]"
                  alt="unsplashxeTv9N One"
                />
              </Stack>
            </Stack>
            <Row className="absolute h-[max-content] inset-[0] items-start justify-center m-[auto] lg:w-[399px] xl:w-[499px] 2xl:w-[562px] 3xl:w-[674px]">
              <Img
                src="images/img_kisspngleafpe.png"
                className="lg:h-[126px] xl:h-[157px] 2xl:h-[177px] 3xl:h-[212px] lg:mb-[32px] xl:mb-[40px] 2xl:mb-[45px] 3xl:mb-[54px] lg:mt-[242px] xl:mt-[303px] 2xl:mt-[341px] 3xl:mt-[409px] w-[33%]"
                alt="kisspngleafpe"
              />
              <Stack className="xl:h-[105px] 2xl:h-[118px] 3xl:h-[141px] lg:h-[84px] lg:ml-[54px] xl:ml-[67px] 2xl:ml-[76px] 3xl:ml-[91px] lg:mt-[315px] xl:mt-[394px] 2xl:mt-[444px] 3xl:mt-[533px] w-[23%]">
                <div className="absolute backdrop-opacity-[0.5] bg-gray_400 blur-[54.77px] bottom-[10%] lg:h-[50px] xl:h-[62px] 2xl:h-[70px] 3xl:h-[83px] right-[0] rotate-[131deg] rounded-radius3462 w-[51%]"></div>
                <Img
                  src="images/img_kisspngleafpe_117X110.png"
                  className="absolute xl:h-[105px] 2xl:h-[118px] 3xl:h-[141px] lg:h-[84px] left-[0] w-[84%]"
                  alt="kisspngleafpe One"
                />
              </Stack>
              <Img
                src="images/img_kisspngleafpe_158X154.png"
                className="lg:h-[113px] xl:h-[141px] 2xl:h-[159px] 3xl:h-[190px] lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[27%]"
                alt="kisspngleafpe Two"
              />
            </Row>
          </Stack>
          <Column className="2xl:ml-[102px] 3xl:ml-[122px] lg:ml-[72px] xl:ml-[90px] 2xl:pr-[11px] 3xl:pr-[13px] lg:pr-[7px] xl:pr-[9px] 2xl:pt-[11px] 3xl:pt-[13px] lg:pt-[7px] xl:pt-[9px] rounded-radius16 w-[32%]">
            <Column className="justify-start lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[100%]">
              <Text
                className="font-tinos leading-[110.00%] ml-[3px] text-red_400 w-[81%]"
                as="h4"
                variant="h4"
              >
                <span className="text-gray_902 font-opensans font-bold leading-[normal] lg:text-[36px] xl:text-[46px] 2xl:text-[52px] 3xl:text-[62px]">
                  Our Most <br />
                  Popular{" "}
                </span>
                <span className="text-red_400 font-opensans font-bold lg:text-[36px] xl:text-[46px] 2xl:text-[52px] 3xl:text-[62px]">
                  Dish.
                </span>
              </Text>
              <Text
                className="font-normal font-poppins leading-[200.00%] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] not-italic text-gray_801 w-[100%]"
                variant="body4"
              >
                This dish is full of flavor and nutrition! Quinoa is a complete
                protein, providing all the essential amino acids your body
                needs, and is also a good source of fiber.
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
        <Column className="font-opensans items-center justify-start lg:mt-[108px] xl:mt-[135px] 2xl:mt-[152px] 3xl:mt-[182px] w-[77%]">
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
                    alt="kisspngitalian One"
                  />
                  <Text className="Spaghetti1" variant="body1">
                    Spaghetti
                  </Text>
                  <Row className="items-center justify-center lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] rounded-radius176 w-[44%]">
                    <Img
                      src="images/img_star1_12.svg"
                      className="StarOne"
                      alt="StarOne"
                    />
                    <Img
                      src="images/img_star2_12.svg"
                      className="StarTwo"
                      alt="StarTwo"
                    />
                    <Img
                      src="images/img_star3_12.svg"
                      className="StarTwo"
                      alt="StarThree"
                    />
                    <Img
                      src="images/img_star4_12.svg"
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
                          src="images/img_star1_13.svg"
                          className="StarOne"
                          alt="StarOne One"
                        />
                        <Img
                          src="images/img_star2_13.svg"
                          className="StarOne"
                          alt="StarTwo One"
                        />
                        <Img
                          src="images/img_star3_13.svg"
                          className="StarOne"
                          alt="StarThree One"
                        />
                        <Img
                          src="images/img_star4_13.svg"
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
                        src="images/img_star1_14.svg"
                        className="StarOne"
                        alt="StarOne Two"
                      />
                      <Img
                        src="images/img_star2_14.svg"
                        className="StarTwo"
                        alt="StarTwo Two"
                      />
                      <Img
                        src="images/img_star3_14.svg"
                        className="StarTwo"
                        alt="StarThree Two"
                      />
                      <Img
                        src="images/img_star4_14.svg"
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
                              alt="kisspngitalian Two"
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
                              src="images/img_star1_15.svg"
                              className="StarOne"
                              alt="StarOne One"
                            />
                            <Img
                              src="images/img_star2_15.svg"
                              className="StarTwo"
                              alt="StarTwo One"
                            />
                            <Img
                              src="images/img_star3_15.svg"
                              className="StarTwo"
                              alt="StarThree One"
                            />
                            <Img
                              src="images/img_star4_15.svg"
                              className="StarFour"
                              alt="StarFour One"
                            />
                          </Row>
                        </Column>
                        <Text className="Gnocchi" variant="body8">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Egestas consequat mi eget auctor aliquam, diam.{" "}
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
        <Column className="items-center justify-start xl:mt-[120px] 2xl:mt-[136px] 3xl:mt-[163px] lg:mt-[96px] w-[77%]">
          <Text
            className="font-opensans text-gray_900 w-[auto]"
            as="h4"
            variant="h4"
          >
            Our Popular Chef
          </Text>
          <List
            className="font-poppins lg:gap-[28px] xl:gap-[35px] 2xl:gap-[40px] 3xl:gap-[48px] grid grid-cols-3 min-h-[auto] lg:mt-[42px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] xl:pb-[10px] 2xl:pb-[12px] 3xl:pb-[14px] lg:pb-[8px] w-[100%]"
            orientation="horizontal"
          >
            <Column className="items-center justify-start w-[100%]">
              <Stack className="bg-gray_900_6c lg:h-[391px] xl:h-[489px] 2xl:h-[550px] 3xl:h-[660px] rounded-radius501 w-[100%]">
                <Img
                  src="images/img_image1.png"
                  className="absolute lg:h-[391px] xl:h-[489px] 2xl:h-[550px] 3xl:h-[660px] rounded-radius501 w-[100%]"
                  alt="imageOne"
                />
              </Stack>
              <Text
                className="font-semibold lg:mt-[36px] xl:mt-[46px] 2xl:mt-[52px] 3xl:mt-[62px] text-gray_900 w-[auto]"
                variant="body2"
              >
                Betran Komar
              </Text>
              <Text
                className="font-normal lg:mt-[38px] xl:mt-[48px] 2xl:mt-[54px] 3xl:mt-[64px] not-italic text-gray_502 w-[auto]"
                variant="body2"
              >
                Head chef
              </Text>
            </Column>
            <Column className="items-center justify-start w-[100%]">
              <Stack className="bg-gradient1  lg:h-[391px] xl:h-[489px] 2xl:h-[550px] 3xl:h-[660px] rounded-radius501 w-[100%]">
                <Img
                  src="images/img_image3.png"
                  className="absolute lg:h-[385px] xl:h-[482px] 2xl:h-[542px] 3xl:h-[650px] rounded-radius501 w-[100%]"
                  alt="imageThree"
                />
              </Stack>
              <Text
                className="font-semibold lg:mt-[38px] xl:mt-[48px] 2xl:mt-[54px] 3xl:mt-[64px] text-gray_900 w-[auto]"
                variant="body2"
              >
                Ferry Sauwi
              </Text>
              <Text
                className="font-normal lg:mt-[36px] xl:mt-[45px] 2xl:mt-[51px] 3xl:mt-[61px] not-italic text-gray_502 w-[auto]"
                variant="body2"
              >
                Chef
              </Text>
            </Column>
            <Column className="items-center justify-start w-[100%]">
              <Stack className="bg-lime_900_6c lg:h-[391px] xl:h-[489px] 2xl:h-[550px] 3xl:h-[660px] rounded-radius501 w-[100%]">
                <Img
                  src="images/img_image2.png"
                  className="absolute lg:h-[391px] xl:h-[489px] 2xl:h-[550px] 3xl:h-[660px] rounded-radius501 w-[100%]"
                  alt="imageTwo"
                />
              </Stack>
              <Text
                className="font-semibold lg:mt-[36px] xl:mt-[46px] 2xl:mt-[52px] 3xl:mt-[62px] text-gray_900 w-[auto]"
                variant="body2"
              >
                Iswan Dracho
              </Text>
              <Text
                className="font-normal lg:mt-[38px] xl:mt-[48px] 2xl:mt-[54px] 3xl:mt-[64px] not-italic text-gray_502 w-[auto]"
                variant="body2"
              >
                Chef
              </Text>
            </Column>
          </List>
          <Button
            className="font-poppins font-semibold lg:mt-[59px] xl:mt-[73px] 2xl:mt-[83px] 3xl:mt-[99px] lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-center w-[21%]"
            shape="RoundedBorder16"
            size="lg"
            variant="FillRed400"
          >
            View all
          </Button>
        </Column>
        <Column className="font-opensans items-center justify-start xl:mt-[106px] 2xl:mt-[120px] 3xl:mt-[144px] lg:mt-[85px] lg:pt-[11px] xl:pt-[14px] 2xl:pt-[16px] 3xl:pt-[19px] w-[55%]">
          <Text className="text-gray_900 w-[auto]" as="h4" variant="h4">
            What Our Customers Say
          </Text>
          <Stack className="font-poppins lg:h-[281px] xl:h-[351px] 2xl:h-[395px] 3xl:h-[474px] lg:mt-[35px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] w-[100%]">
            <Button
              className="absolute cursor-pointer flex lg:h-[43px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] inset-y-[0] items-center justify-center my-[auto] right-[0] rounded-radius50 lg:w-[42px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]"
              onClick={() => sliderRef1.current?.slideNext()}
              size="lgIcn"
              variant="icbOutlineRed5000f"
            >
              <Img
                src="images/img_group81.svg"
                className="flex items-center justify-center lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px]"
                alt="groupEightyOne"
              />
            </Button>
            <Button
              className="absolute cursor-pointer flex lg:h-[43px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] inset-y-[0] items-center justify-center left-[0] my-[auto] rotate-[180deg] rounded-radius50 lg:w-[42px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]"
              onClick={() => sliderRef1.current?.slidePrev()}
              size="lgIcn"
              variant="icbOutlineBlack9000f"
            >
              <Img
                src="images/img_group82.svg"
                className="flex items-center justify-center lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px]"
                alt="groupEightyTwo"
              />
            </Button>
            <Slider
              slidesToShow={1}
              activeIndex={sliderState1}
              onSlideChanged={(e) => {
                setsliderState1(e?.item);
              }}
              ref={sliderRef1}
              className="absolute w-[100%]"
              items={[...Array(3)].map(() => (
                <React.Fragment key={Math.random()}>
                  <Column className="bg-white_A700 items-center justify-start lg:p-[35px] xl:p-[44px] 2xl:p-[50px] 3xl:p-[60px] rounded-radius16">
                    <Column className="justify-start w-[97%]">
                      <Img
                        src="images/img_reply.svg"
                        className="lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] w-[6%]"
                        alt="reply"
                      />
                      <Text
                        className="font-normal leading-[200.00%] lg:mt-[23px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] mx-[auto] not-italic text-center text-gray_801 w-[84%]"
                        variant="body4"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Facilisis ultricies at eleifend proin. Congue nibh nulla
                        malesuada ultricies nec quam{" "}
                      </Text>
                      <Img
                        src="images/img_.svg"
                        className="lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[408px] xl:ml-[510px] 2xl:ml-[574px] 3xl:ml-[689px] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[6%]"
                        alt="Four"
                      />
                    </Column>
                    <Row className="items-center justify-center lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[42%]">
                      <Img
                        src="images/img_ellipse28.png"
                        className="rounded-radius50 close"
                        alt="EllipseTwentyEight"
                      />
                      <Column className="items-center lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] w-[67%]">
                        <Text
                          className="text-gray_900 w-[auto]"
                          variant="body3"
                        >
                          Starla Virgoun
                        </Text>
                        <Text
                          className="lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] not-italic text-gray_801 w-[auto]"
                          variant="body7"
                        >
                          Financial advisor
                        </Text>
                      </Column>
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
          </Stack>
        </Column>
        <Column className="bg-red_400_6c font-opensans items-center justify-end xl:mt-[106px] 2xl:mt-[120px] 3xl:mt-[144px] lg:mt-[85px] 3xl:p-[111px] lg:p-[66px] xl:p-[82px] 2xl:p-[93px] rounded-radius24 w-[77%]">
          <Text
            className="lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] text-gray_900 w-[auto]"
            as="h4"
            variant="h4"
          >
            Hungry? We are open now..
          </Text>
          <Row className="font-poppins items-center justify-center lg:mt-[34px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] w-[53%]">
            <Button
              className="font-semibold lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-center w-[48%]"
              shape="RoundedBorder16"
              size="lg"
              variant="FillRed400"
            >
              Order now
            </Button>
            <Button
              className="font-semibold lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-center w-[48%]"
              shape="RoundedBorder16"
              size="lg"
              variant="FillWhiteA7007f"
            >
              Reservation
            </Button>
          </Row>
        </Column>
        <Footer className="bg-gray_901 font-poppins xl:mt-[106px] 2xl:mt-[120px] 3xl:mt-[144px] lg:mt-[85px] w-[100%]" />
      </Column>
    </>
  );
};

export default HomepagePage;
