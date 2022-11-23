@Checkout @Mobile @MTO
Feature: Checkout tests Esika CL - Mobile
    As a customer, I want to test the checkout functionalities on Esika - Mobile with Consultants URL

    Background:
        Given At Mobile
        And I set the Consultant cookie for Store
        And I have one item in the cart with 1 units for Checkout

    @Checkout @Mobile @MTO @CL @CO @MX @PE
    # @focus
    Scenario: 17541 [Checkout][Mobile][MTO] Fill all fields - Checkout
        And I proceed to checkout
        And I fill in the checkout data
        And I fill the address data
        Then I select the payment option by web pay
        And I check if the price is correct on Checkout
        And I check the consultant cookie for Store

    @Checkout @Mobile @MTO @CL @CO @MX @PE
    # @focus
    Scenario: 17506 [Checkout][Mobile][MTO] Validate Consultants URL
        And I proceed to checkout
        Then the url must contain the following parameter Store in the final part

    @Checkout @Mobile @MTO @CL @CO @MX @PE
    # @focus
    Scenario: 17542 [Checkout][Mobile][MTO] Validate visa
        And I proceed to checkout
        And I fill in the checkout data
        And I fill the address data
        When I fill visa card number
        Then checkbox VISA must be selected
        And I check the consultant cookie for Store

    @Checkout @Mobile @MTO @CL @CO @MX @PE
    # @focus
    Scenario: 17543 [Checkout][Mobile][MTO] Validate mastercard
        And I proceed to checkout
        And I fill in the checkout data
        And I fill the address data
        When I fill mastercard card number
        Then checkbox MASTERCARD must be selected
        And I check the consultant cookie for Store

    @Checkout @Mobile @MTO @QAS
    Scenario: 45275 [Checkout][Mobile][MTO] Validate AmericanExpress
        And I proceed to checkout
        And I fill in the checkout data
        And I fill the address data
        When I fill AmericanExpress card number
        Then checkbox AMERICANEXPRESS must be selected
        And I check the consultant cookie for Store

    @Checkout @Mobile @MTO @QAS
    Scenario: 45276 [Checkout][Mobile][MTO] Validate Diners
        And I proceed to checkout
        And I fill in the checkout data
        And I fill the address data
        When I fill Diners card number
        Then checkbox DINERS must be selected
        And I check the consultant cookie for Store

    @Checkout @Mobile @CO
    Scenario: 51396 [Checkout][Mobile][MTO] Validate PSE
        And I proceed to checkout
        And I fill in the checkout data
        And I fill the address data
        When I select PSE option
        Then The right message and price for PSE option are displayed
        And I check the consultant cookie for Store
    
    @Checkout @Mobile @PE @MX
    # @focus
    Scenario: 83156 [Checkout][Mobile][MTO] Validate Invoice
        And I proceed to checkout
        And I fill in the checkout data
        And I fill the address data
        When I select Invoice option
        Then The right message and price for Invoice option are displayed
        And I check the consultant cookie for Store

    @Checkout @Mobile @PE
    # @focus
    Scenario: 83157 [Checkout][Mobile][MTO] Validate COD
        And I proceed to checkout
        And I fill in the checkout data
        And I fill the address data
        When I select COD option
        Then The right message and price for COD option are displayed
        And I check the consultant cookie for Store

    @Checkout @Mobile @MTO @CL @CO @MX @PE
    # @focus
    Scenario: 21429 [Checkout][Mobile][MTO] Validate mandatory firstname alert is displayed
        And I proceed to checkout
        When I fill in the checkout data without firstname
        Then mandatory firstname alert is displayed
        And I check the consultant cookie for Store

    @Checkout @Mobile @MTO @CL @CO @MX @PE
    # @focus
    Scenario: 21430 [Checkout][Mobile][MTO] Validate mandatory lastname alert is displayed
        And I proceed to checkout
        When I fill in the checkout data without lastname
        Then mandatory lastname alert is displayed
        And I check the consultant cookie for Store

    @Checkout @Mobile @MTO @CL @CO @PE
    # @focus
    Scenario: 21431 [Checkout][Mobile][MTO] Validate mandatory document alert is displayed
        And I proceed to checkout
        When I fill in the checkout data without document
        Then mandatory document alert is displayed
        And I check the consultant cookie for Store

    @Checkout @Mobile @MTO @CL @CO @MX @PE
    # @focus
    Scenario: 21432 [Checkout][Mobile][MTO] Validate mandatory phone alert is displayed
        And I proceed to checkout
        When I fill in the checkout data without phone number
        Then mandatory phone number alert is displayed
        And I check the consultant cookie for Store

    @Checkout @Mobile @MTO @QAS @CL @CO @MX @PE
    Scenario: 21433 [Checkout][Mobile][MTO] Validate Finalizar Compra
        And I proceed to checkout Belcorp user
        And I fill cvv Belcorp
        And I click the payment submit button
        Then I check purchase information
        And I check the consultant cookie for Store