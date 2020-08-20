*** Settings ***
Resource    trip-insurance-keywords.robot
Library    SeleniumLibrary
Test Setup    Open web browser on Google Chrome
Test Template    Buy a trip insurance package
Test Teardown    Close Google Chrome browser

*** Test Cases ***
Buy a trip insurance package    Mr.     Numlabyod    Reprakan    Citizen ID     1799310717171      07-28-1998      Ms. Anchisa Tea.    0980159795    nearreann@gmail.com    1998-07-28