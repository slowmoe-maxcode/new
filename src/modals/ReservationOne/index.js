import React from "react";
import ModalProvider from "react-modal";

import {
  Column,
  Img,
  Text,
  Row,
  Input,
  SelectBox,
  TextArea,
  Button,
} from "components";

const ReservationOneModal = (props) => {
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
            <Column className="bg-white_A700 items-center justify-end lg:mb-[513px] xl:mb-[642px] 2xl:mb-[722px] 3xl:mb-[866px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] lg:p-[42px] xl:p-[53px] 2xl:p-[60px] 3xl:p-[72px] rounded-radius16 w-[94%]">
              <Text
                className="mt-[2px] text-gray_900 w-[auto]"
                as="h6"
                variant="h6"
              >
                Reservation
              </Text>
              <Column className="font-poppins items-center justify-start lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] w-[100%]">
                <Text
                  className="bg-light_blue_A100_7e font-normal not-italic lg:px-[24px] xl:px-[31px] 2xl:px-[35px] 3xl:px-[42px] lg:py-[14px] xl:py-[17px] 2xl:py-[20px] 3xl:py-[24px] rounded-radius20 text-black_900 w-[992px]"
                  variant="body4"
                >
                  <span className="text-gray_801 font-poppins lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px]">
                    Due to limited availability, we can hold this table for you
                    for
                  </span>
                  <span className="text-black_900 font-poppins lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px]">
                    {" "}
                  </span>
                  <span className="text-gray_900 font-poppins font-semibold lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px]">
                    5:00 minutes
                  </span>
                </Text>
                <Row className="items-start justify-evenly lg:mt-[34px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] w-[100%]">
                  <Column className="justify-start lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[57%]">
                    <Text
                      className="font-semibold text-black_900 w-[auto]"
                      variant="body2"
                    >
                      Data order
                    </Text>
                    <Input
                      className="placeholder:text-gray_501 Firstname"
                      wrapClassName="2xl:mt-[23px] 3xl:mt-[27px] lg:mt-[16px] w-[84%] xl:mt-[20px]"
                      type="text"
                      name="Firstname"
                      placeholder="First name"
                      size="sm"
                    ></Input>
                    <Input
                      className="placeholder:text-gray_501 Firstname"
                      wrapClassName="2xl:mt-[24px] 3xl:mt-[28px] lg:mt-[17px] w-[84%] xl:mt-[21px]"
                      type="text"
                      name="Lastname"
                      placeholder="Last name"
                      size="sm"
                    ></Input>
                    <Input
                      className="placeholder:text-gray_501 date"
                      wrapClassName="2xl:mt-[24px] 3xl:mt-[28px] flex lg:mt-[17px] w-[84%] xl:mt-[21px]"
                      type="number"
                      name="Phonenumber"
                      placeholder="Phone number"
                      prefix={
                        <Img
                          src="images/img_clock.svg"
                          className="ml-[2px] lg:w-[34px] lg:mr-[11px] xl:w-[42px] xl:mr-[14px] 2xl:w-[48px] 2xl:mr-[16px] 3xl:w-[57px] 3xl:mr-[19px] my-[auto]"
                          alt="clock"
                        />
                      }
                      size="sm"
                    ></Input>
                    <Input
                      className="placeholder:text-gray_501 Firstname"
                      wrapClassName="2xl:mt-[24px] 3xl:mt-[28px] lg:mt-[17px] w-[84%] xl:mt-[21px]"
                      type="email"
                      name="Emailaddress"
                      placeholder="Email address"
                      size="sm"
                    ></Input>
                    <SelectBox
                      className="font-normal lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] not-italic lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_501 w-[84%]"
                      placeholderClassName="text-gray_501"
                      name="Selectanaccas"
                      placeholder="Select an occasion"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown_21X21.svg"
                          className="lg:w-[14px] lg:h-[15px] lg:mr-[14px] xl:w-[18px] xl:h-[19px] xl:mr-[17px] 2xl:w-[21px] 2xl:h-[22px] 2xl:mr-[20px] 3xl:w-[25px] 3xl:h-[26px] 3xl:mr-[24px]"
                          alt="arrow_down"
                        />
                      }
                    ></SelectBox>
                    <TextArea
                      className="font-normal lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] not-italic lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] placeholder:text-gray_501 text-gray_501 w-[84%]"
                      name="Addaspecialr"
                      placeholder="Add a special request"
                      size="sm"
                    ></TextArea>
                    <Button
                      className="font-normal lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] not-italic lg:text-[17px] xl:text-[22px] 2xl:text-[25px] 3xl:text-[30px] text-center w-[84%]"
                      shape="RoundedBorder8"
                      size="md"
                      variant="FillRed400"
                    >
                      Confirm reservation
                    </Button>
                  </Column>
                  <Column className="justify-start w-[43%]">
                    <Column className="bg-bluegray_100_63 justify-end lg:p-[24px] xl:p-[31px] 2xl:p-[35px] 3xl:p-[42px] rounded-radius20 w-[100%]">
                      <Text
                        className="font-semibold lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] text-gray_900 w-[auto]"
                        variant="body2"
                      >
                        Reservation detail
                      </Text>
                      <Row className="items-center mr-[auto] lg:mt-[33px] xl:mt-[41px] 2xl:mt-[47px] 3xl:mt-[56px] w-[94%]">
                        <Img
                          src="images/img_calendar.svg"
                          className="calendar"
                          alt="calendar"
                        />
                        <Text className="Date" variant="body4">
                          Saturday, 28 february 2022
                        </Text>
                      </Row>
                      <Row className="items-end mr-[auto] lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[46%]">
                        <Img
                          src="images/img_clock_34X34.svg"
                          className="calendar"
                          alt="clock"
                        />
                        <Text
                          className="mb-[4px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] Date"
                          variant="body4"
                        >
                          04:30 pm
                        </Text>
                      </Row>
                      <Row className="items-center mr-[auto] lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[95%]">
                        <Img
                          src="images/img_user.svg"
                          className="calendar"
                          alt="user"
                        />
                        <Text className="Date" variant="body4">
                          2 people (Standar seating)
                        </Text>
                      </Row>
                    </Column>
                    <Column className="justify-start ml-[4px] lg:mt-[39px] xl:mt-[48px] 2xl:mt-[55px] 3xl:mt-[66px] w-[92%]">
                      <Text
                        className="font-semibold text-black_900 w-[auto]"
                        variant="body2"
                      >
                        Restaurant informations
                      </Text>
                      <Text
                        className="font-normal leading-[normal] lg:mt-[37px] xl:mt-[47px] 2xl:mt-[53px] 3xl:mt-[63px] not-italic text-gray_801 w-[100%]"
                        variant="body4"
                      >
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo.
                      </Text>
                    </Column>
                  </Column>
                </Row>
              </Column>
            </Column>
          </Column>
        </div>
      </ModalProvider>
    </>
  );
};

export { ReservationOneModal };
