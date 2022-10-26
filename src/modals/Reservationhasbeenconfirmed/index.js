import React from "react";
import ModalProvider from "react-modal";

import { Column, Img, Stack, Text, Row, Button } from "components";

const ReservationhasbeenconfirmedModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] w-[100%]"
        overlayClassName="bg-gray_900_a2 fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="m-[auto] max-h-[97vh] overflow-y-auto">
          <Column className="items-center justify-start xl:p-[115px] 2xl:p-[130px] 3xl:p-[156px] lg:p-[92px] w-[100%]">
            <Img
              src="images/img_close.svg"
              className="common-pointer close"
              onClick={props.onRequestClose}
              alt="close"
            />
            <Stack className="lg:h-[572px] xl:h-[715px] 2xl:h-[804px] 3xl:h-[965px] 3xl:mb-[1072px] lg:mb-[635px] xl:mb-[794px] 2xl:mb-[893px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[94%]">
              <Column className="absolute bg-white_A700 items-center justify-center lg:p-[22px] xl:p-[28px] 2xl:p-[32px] 3xl:p-[38px] right-[0] rounded-radius16 w-[100%]">
                <Text className="columnreservation1" as="h6" variant="h6">
                  Reservation
                </Text>
                <Row className="font-poppins items-center justify-between lg:mb-[19px] xl:mb-[24px] 2xl:mb-[28px] 3xl:mb-[33px] lg:mt-[223px] xl:mt-[279px] 2xl:mt-[314px] 3xl:mt-[377px] w-[100%]">
                  <Column className="bg-deep_orange_200_63 lg:h-[235px] xl:h-[294px] 2xl:h-[331px] 3xl:h-[397px] items-center lg:px-[22px] xl:px-[28px] 2xl:px-[32px] 3xl:px-[38px] rounded-radius50 lg:w-[234px] xl:w-[293px] 2xl:w-[330px] 3xl:w-[396px]">
                    <Column className="bg-deep_orange_200_6c lg:h-[189px] xl:h-[236px] 2xl:h-[266px] 3xl:h-[319px] items-center justify-start lg:px-[19px] xl:px-[24px] 2xl:px-[27px] 3xl:px-[32px] rounded-radius50 lg:w-[188px] xl:w-[235px] 2xl:w-[265px] 3xl:w-[318px]">
                      <Img
                        src="images/img_unsplashsjbya8.png"
                        className="lg:h-[150px] xl:h-[187px] 2xl:h-[211px] 3xl:h-[253px] rounded-radius50 lg:w-[149px] xl:w-[186px] 2xl:w-[210px] 3xl:w-[252px]"
                        alt="unsplashsjBYAEight"
                      />
                    </Column>
                  </Column>
                  <Column className="w-[38%]">
                    <Text
                      className="font-semibold text-gray_900 w-[auto]"
                      variant="body2"
                    >
                      Reservation detail
                    </Text>
                    <Row className="items-center lg:mt-[26px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] w-[80%]">
                      <Img
                        src="images/img_calendar.svg"
                        className="calendar"
                        alt="calendar"
                      />
                      <Text className="Date1" variant="body4">
                        Saturday, 28 february 2022
                      </Text>
                    </Row>
                    <Row className="items-end lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[37%]">
                      <Img
                        src="images/img_clock_34X34.svg"
                        className="calendar"
                        alt="clock"
                      />
                      <Text className="Time1" variant="body4">
                        04:30 pm
                      </Text>
                    </Row>
                    <Row className="items-center lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[81%]">
                      <Img
                        src="images/img_user.svg"
                        className="calendar"
                        alt="user"
                      />
                      <Text className="Date1" variant="body4">
                        2 people (Standar seating)
                      </Text>
                    </Row>
                  </Column>
                  <Column className="items-center w-[24%]">
                    <Row className="bg-light_blue_A700_6c items-center justify-center lg:p-[16px] xl:p-[20px] 2xl:p-[23px] 3xl:p-[27px] rounded-radius20 w-[100%]">
                      <Text
                        className="font-normal lg:ml-[26px] xl:ml-[32px] 2xl:ml-[37px] 3xl:ml-[44px] not-italic text-indigo_900 w-[auto]"
                        variant="body4"
                      >
                        Modify
                      </Text>
                      <Img
                        src="images/img_share.svg"
                        className="lg:ml-[17px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] lg:mr-[26px] xl:mr-[32px] 2xl:mr-[37px] 3xl:mr-[44px] calendar"
                        alt="share"
                      />
                    </Row>
                    <Button
                      className="font-normal lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] not-italic lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-center w-[100%]"
                      shape="RoundedBorder20"
                      size="xl"
                      variant="FillRedA70063"
                    >
                      Cancel
                    </Button>
                  </Column>
                </Row>
              </Column>
              <Column
                className="absolute bg-cover bg-repeat font-poppins inset-x-[0] justify-end lg:p-[31px] xl:p-[39px] 2xl:p-[44px] 3xl:p-[52px] top-[17%] w-[100%]"
                style={{
                  backgroundImage: "url('images/img_reservationhas.png')",
                }}
              >
                <Text
                  className="font-semibold lg:ml-[13px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] mt-[1px] text-white_A700 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Reservation has been confirmed
                </Text>
                <Row className="items-center lg:ml-[13px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] mr-[auto] lg:mt-[22px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] w-[55%]">
                  <Img
                    src="images/img_arrowdown_30X30.svg"
                    className="arrowdown"
                    alt="arrowdown"
                  />
                  <Text
                    className="font-normal lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] not-italic text-white_A700 w-[auto]"
                    variant="body4"
                  >
                    The confirmation result has been sent to your email
                  </Text>
                </Row>
                <Row className="items-start lg:ml-[13px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] mr-[auto] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[24%]">
                  <Img
                    src="images/img_calendar_30X30.svg"
                    className="arrowdown"
                    alt="calendar One"
                  />
                  <Text className="Bookingid" variant="body4">
                    Booking ID : #123456
                  </Text>
                </Row>
              </Column>
            </Stack>
          </Column>
        </div>
      </ModalProvider>
    </>
  );
};

export { ReservationhasbeenconfirmedModal };
