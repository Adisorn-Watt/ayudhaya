*** Variables ***
${URL}              http://localhost:4200/insurance

*** Keywords ***
Buy a trip insurance package
    [Arguments]    ${TRAVELLER_FIRSTNAME}    ${TRAVELLER_LASTNAME}    ${TRAVELLER_ID}    ${BENEFIT_NAME}    ${TRAVELLER_PHONE}    ${TRAVELLER_EMAIL}
    Select country that a user want to go
    Check insurance package detail
    Select date range for a trip
    Check insurance package infomation before the next step
    Input traveller personal information                        ${TRAVELLER_FIRSTNAME}    ${TRAVELLER_LASTNAME}    ${TRAVELLER_ID}    ${BENEFIT_NAME}    ${TRAVELLER_PHONE}    ${TRAVELLER_EMAIL}
    Check insurance package summary
    Check traveller infomation                                  ${TRAVELLER_FIRSTNAME}    ${TRAVELLER_LASTNAME}    ${TRAVELLER_ID}    ${TRAVELLER_PHONE}    ${TRAVELLER_EMAIL}
    Check total amount of insurance fee
    Scroll down for reviewing Terms&Agreements and accept them
    Check traveller bank account information
    Check insurance bank account information
    Check total amount of insurance fee
    Close Google Chrome browser

Open web browser on Google Chrome
    Open Browser    ${URL}          chrome

Select country that a user want to go
    Wait Until Page Contains        Select country
    Wait Until Page Contains        Germany
    Click Element                   /html/body/app-root/nb-layout/div/div/div/div/div/nb-layout-column/app-main-insurance/div/app-country/nb-card/div/div[1]

Check insurance package detail
    Wait Until Page Contains        Select Package(?)
    Wait Until Page Contains        Package name(?)
    Click Element                   id:package-name(?)

Select date range for a trip
    Wait Until Page Contains        Select Date
    Wait Until Page Contains        From
    Click Element                   id:date(?)
    Wait Until Page Contains        To
    Click Element                   id:date(?)
    Sleep                           2 seconds

Check insurance package infomation before the next step
    Wait Until Element Contains     id:country               Germany
    Wait Until Element Contains     id:package-amount-fee    2,328.00
    # Wait Until Page Contains      One time(?)
    Wait Until Element Contains     id:date-range            1 Sep - 29 Nov 2020(?)
    Wait Until Element Contains     id:total-days            Total 90 Days
    Click Element                   id:btn-next

Input traveller personal information
    [Arguments]    ${TRAVELLER_FIRSTNAME}    ${TRAVELLER_LASTNAME}    ${TRAVELLER_ID}    ${BENEFIT_NAME}    ${TRAVELLER_PHONE}    ${TRAVELLER_EMAIL}
    Wait Until Page Contains        Traveller
    Select From List By Value       d:dd-traveller-title   Mr.(?)
    Input Text                      id:traveller-firstname  ${TRAVELLER_FIRSTNAME}
    Input Text                      id:traveller-lastname   ${TRAVELLER_LASTNAME}
    Select From List By Value       id:traveller-type       CitizenID(?)         
    Input Text                      id:traveller-id         ${TRAVELLER_ID}
    Wait Until Page Contains        Date of Birth
    Select From List By Value       id:dd-traveller-date    (?)
    Select From List By Value       id:dd-traveller-month   (?)
    Select From List By Value       id:dd-traveller-year    (?) 
    Input Text                      id:beneficial-namee     ${BENEFICIAL_NAME}
    Wait Until Page Contains        something recieving(?)
    Input Text                      id:traveller-phone      ${TRAVELLER_PHONE}
    Input Text                      id:traveller-email      ${TRAVELLER_EMAIL}
    Click Element                   id:btn-next
    # Sleep                         2 seconds

Check insurance package summary
    Wait Until Element Contains     id:country               Germany
    Wait Until Element Contains     id:package-amount-fee    2,328.00
    # Wait Until Page Contains      One time(?)
    Wait Until Element Contains     id:date-range            1 Sep - 29 Nov 2020(?)
    Wait Until Element Contains     id:total-days            Total 90 Days
    # Sleep                         2 seconds

Check traveller infomation
    [Arguments]    ${TRAVELLER_FIRSTNAME}    ${TRAVELLER_LASTNAME}    ${TRAVELLER_ID}    ${TRAVELLER_PHONE}    ${TRAVELLER_EMAIL}
    Wait Until Page Contains        Traveller
    Wait Until Element Contains     id:traveller-id          Mr.(?)
    Wait Until Element Contains     id:country               Germany
    Wait Until Element Contains     id:traveller-firstname   ${TRAVELLER_FIRSTNAME}
    Wait Until Element Contains     id:traveller-lastname    ${TRAVELLER_LASTNAME}
    Wait Until Element Contains     id:traveller-type        CitizenID(?)         
    Wait Until Element Contains     id:traveller-id          ${TRAVELLER_ID}
    Wait Until Page Contains        Date of Birth(?)
    Wait Until Page Contains        something recieving(?)
    Wait Until Element Contains     id:traveller-phone       ${TRAVELLER_PHONE}
    Wait Until Element Contains     id:traveller-email       ${TRAVELLER_EMAIL}
    # Sleep                         2 seconds

Check total amount of insurance fee
    Wait Until Page Contains        Total Price
    Wait Until Element Contains     id:package-amount-fee    2,328.00
    Click Element                   id:btn-payment
    Sleep                           2 seconds

Scroll down for reviewing Terms&Agreements and accept them
    Wait Until Page Contains        Terms and Conditions(?)
    Mouse Down                      id:terms(?)
    Click Element                   id:bt-accept-condition
    Sleep                           2 seconds

Check traveller bank account information
    Wait Until Page Contains        Transfer
    Wait Until Page Contains        From
    Wait Until Element Contains     id:from-bank-name       Allianz Bank
    Wait Until Element Contains     id:from-bank-no         (?)
    Wait Until Element Contains     id:from-bank-balance    250,000.00
    # Picture

Check insurance bank account information
    Wait Until Page Contains        To
    Wait Until Element Contains     id:to-bank-name         Allianz Bank
    Wait Until Element Contains     id:to-bank-refno        (?)
    # Picture

Check total amount of insurance fee
    Wait Until Element Contains     id:package-amount-fee   2,328.00
    Input Text                      id:payment-note         Germany - Trip insurance
    Click Element                   id:btn-payment-confirm
    Sleep                           5 seconds

Close Google Chrome browser
    Close Browser