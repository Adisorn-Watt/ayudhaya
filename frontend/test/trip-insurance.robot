*** Settings ***
Resource    trip-insurance-keywords.robot
Library    SeleniumLibrary
Library    DateTime
Library    BuiltIn
Test Setup    Open web browser on Google Chrome
Test Template    Buy a trip insurance package
# Test Teardown    Close Google Chrome browser

*** Test Cases ***
Buy a trip insurance package    Numlabyod    Reprakan    1799310717171    Ms. Anchisa Tea    0980159795    nearreann@gmail.com       