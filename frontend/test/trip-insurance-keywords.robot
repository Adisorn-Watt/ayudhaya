*** Variables ***
# ${URL}              http://167.99.66.178/
${URL}              http://localhost:4200/

*** Keywords ***
Buy a trip insurance package
    [Arguments]    ${TRAVELLER_TITLE}    ${TRAVELLER_FIRSTNAME}    ${TRAVELLER_LASTNAME}    ${TRAVELLER_ID}    ${TRAVELLER_DATE}    ${TRAVELLER_BENEFICIARY}    ${TRAVELLER_PHONE}    ${TRAVELLER_EMAIL}
    Select country that a user want to go
    Check insurance package detail
    Select date range for a trip
    Check insurance package infomation before the next step
    Input traveller personal information                                        ${TRAVELLER_TITLE}    ${TRAVELLER_FIRSTNAME}    ${TRAVELLER_LASTNAME}    ${TRAVELLER_ID}    ${TRAVELLER_DATE}    ${TRAVELLER_BENEFICIARY}    ${TRAVELLER_PHONE}    ${TRAVELLER_EMAIL}
    Check insurance package summary, traveller infomation, and insurance fee    ${TRAVELLER_TITLE}    ${TRAVELLER_FIRSTNAME}    ${TRAVELLER_LASTNAME}    ${TRAVELLER_ID}    ${TRAVELLER_DATE}    ${TRAVELLER_BENEFICIARY}    ${TRAVELLER_PHONE}    ${TRAVELLER_EMAIL}
    Scroll down for accepting Terms&Conditions
    Check bank account information and total amount of insurance fee
    Close Google Chrome browser

Open web browser on Google Chrome
    Open Browser    ${URL}          chrome
    Maximize Browser Window
    # Set Selenium Speed	            0.2 seconds

Select country that a user want to go
    Wait Until Page Contains        Select country
    Wait Until Page Contains        Germany
    Click Element                   btn-country-germany

Check insurance package detail
    Wait Until Page Contains        Package details
    Wait Until Element Contains     id:package-01               Personal Accident Loss of Life, Dismemberment Loss of Sight or Total Permanent Disability from Accident
    Wait Until Element Contains     id:package-01               1,500,000.00

Select date range for a trip
    Wait Until Page Contains        Select date
    Wait Until Page Contains        Depart date
    Input Text                      id:start-date               09-01-2020
    Wait Until Page Contains        Return date
    Input Text                      id:end-date                 11-29-2020
    Click Button                    btn-confirm

Check insurance package infomation before the next step
    Wait Until Element Contains     id:country                  Germany
    Wait Until Element Contains     id:package-amount-fee       1,428.00 THB per person
    Wait Until Element Contains     id:date-range               01 Sep 2020 - 29 Nov 2020
    # Wait Until Element Contains     id:total-days               (Total 90 days)
    Click Element                   id:btn-next

Input traveller personal information
    [Arguments]    ${TRAVELLER_TITLE}    ${TRAVELLER_FIRSTNAME}    ${TRAVELLER_LASTNAME}    ${TRAVELLER_ID}    ${TRAVELLER_DATE}    ${TRAVELLER_BENEFICIARY}    ${TRAVELLER_PHONE}    ${TRAVELLER_EMAIL}
    Wait Until Page Contains        Traveller
    Element Text Should Be          xpath://*[@id="dd-traveller-title"]/button[1]           ${TRAVELLER_TITLE}
    ${firstname}=                   Get Value                   id:traveller-firstname
    Should Be Equal                 ${firstname}                ${TRAVELLER_FIRSTNAME}
    ${lastname}=                    Get Value                   id:traveller-lastname
    Should Be Equal                 ${lastname}                 ${TRAVELLER_LASTNAME}
    ${id}=                          Get Value                   id:traveller-id
    Should Be Equal                 ${id}                       ${TRAVELLER_ID} 
    ${date}=                        Get Value                   id:traveller-date
    Should Be Equal                 ${date}                     ${TRAVELLER_DATE}    
    Input Text                      id:benefit-name             Ms. Anchisa Tea.
    Wait Until Page Contains        Contact for receiving traveller policy
    ${phone}=                       Get Value                   id:traveller-phone
    Should Be Equal                 ${phone}                    ${TRAVELLER_PHONE} 
    ${email}=                       Get Value                   id:traveller-email
    Should Be Equal                 ${email}                    ${TRAVELLER_EMAIL}
    Click Element                   id:btn-next
    Sleep                           2 seconds

Check insurance package summary, traveller infomation, and insurance fee
    Wait Until Element Contains     id:country                  Germany
    Wait Until Element Contains     id:package-amount-fee       1,428.00 THB per person
    Wait Until Element Contains     id:date-range               01 Sep 2020 - 29 Nov 2020
    # Wait Until Element Contains     id:total-days               Total 90 days

    [Arguments]    ${TRAVELLER_TITLE}    ${TRAVELLER_FIRSTNAME}    ${TRAVELLER_LASTNAME}    ${TRAVELLER_ID}    ${TRAVELLER_DATE}    ${TRAVELLER_BENEFICIARY}    ${TRAVELLER_PHONE}    ${TRAVELLER_EMAIL}
    Wait Until Page Contains        Traveller Detail:
    Wait Until Page Contains        1 person
    Wait Until Page Contains        Traveller
    Element Text Should Be          xpath://*[@id="traveller-title"]/button[1]           ${TRAVELLER_TITLE}
    ${firstname}=                   Get Value                   id:traveller-firstname
    Should Be Equal                 ${firstname}                ${TRAVELLER_FIRSTNAME}
    ${lastname}=                    Get Value                   id:traveller-lastname
    Should Be Equal                 ${lastname}                 ${TRAVELLER_LASTNAME}
    ${id}=                          Get Value                   id:traveller-id
    Should Be Equal                 ${id}                       ${TRAVELLER_ID} 
    ${date}=                        Get Value                   id:traveller-date
    Should Be Equal                 ${date}                     ${TRAVELLER_DATE}
    ${benefit}=                     Get Value                   id:traveller-benefit
    Should Be Equal                 ${benefit}                  ${TRAVELLER_BENEFICIARY}   
    Wait Until Page Contains        Contact for receiving traveller policy
    ${phone}=                       Get Value                   id:traveller-phone
    Should Be Equal                 ${phone}                    ${TRAVELLER_PHONE} 
    ${email}=                       Get Value                   id:traveller-email
    Should Be Equal                 ${email}                    ${TRAVELLER_EMAIL}

    Wait Until Page Contains        1,428.00 
    Click Element                   id:btn-payment
    Sleep                           2 seconds

Scroll down for accepting Terms&Conditions
    Wait Until Page Contains        Terms and conditions
    Scroll Element Into View        id:term-text-end
    Click Element                   id:btn-accept-condition
    Sleep                           2 seconds

Check bank account information and total amount of insurance fee
    Wait Until Page Contains        Transfer
    Wait Until Page Contains        From
    Wait Until Element Contains     id:from-bank-name           Allianz Bank
    Wait Until Element Contains     id:from-bank-no             4750317960
    Wait Until Element Contains     id:from-bank-balance        250,000.00
    Wait Until Page Contains        To
    Wait Until Element Contains     id:to-bank-name             Allianz Bank
    Wait Until Element Contains     id:to-bank-refno            Ref: 509-16713201
    Wait Until Element Contains     id:package-amount-fee       1,428.00
    Input Text                      id:payment-note             Germany - Trip insurance
    Click Element                   id:btn-payment-confirm
    Sleep                           2 seconds

Close Google Chrome browser
    Close Browser
