@Checkout @Mobile
Feature: Checkout tests Esika - Mobile
    As a customer, I want to test the checkout functionalities on Esika - Mobile

    Background:
        Given At Mobile
        And I have one item in the cart with 1 units for Checkout

    @Checkout @Mobile @CL @CO @MX @PE
    Scenario: 15374 [Checkout][Mobile] Fill all fields - Checkout
        And I proceed to checkout
        And I fill in the checkout data
        And I fill the address data
        Then I select the payment option by web pay
        And I check if the price is correct on Checkout

    @Checkout @Mobile @CL @CO @MX @PE
    Scenario: 15375 [Checkout][Mobile] Validate visa
        And I proceed to checkout
        And I fill in the checkout data
        And I fill the address data
        When I fill visa card number
        Then checkbox VISA must be selected

    @Checkout @Mobile @CL @CO @MX @PE
    Scenario: 15376 [Checkout][Mobile] Validate mastercard
        And I proceed to checkout
        And I fill in the checkout data
        And I fill the address data
        When I fill mastercard card number
        Then checkbox MASTERCARD must be selected

    @Checkout @Mobile @QAS
    Scenario: 45273 [Checkout][Mobile] Validate AmericanExpress
        And I proceed to checkout
        And I fill in the checkout data
        And I fill the address data
        When I fill AmericanExpress card number
        Then checkbox AMERICANEXPRESS must be selected

    @Checkout @Mobile @QAS
    Scenario: 45274 [Checkout][Mobile] Validate Diners
        And I proceed to checkout
        And I fill in the checkout data
        And I fill the address data
        When I fill Diners card number
        Then checkbox DINERS must be selected

    @Checkout @Desktop @CO
    Scenario: 51395 [Checkout][Mobile] Validate PSE
        And I proceed to checkout
        And I fill in the checkout data
        And I fill the address data
        When I select PSE option
        Then The right message and price for PSE option are displayed

    @Checkout @Mobile @PE
    # @focus
    Scenario: 83154 [Checkout][Mobile] Validate Invoice
        And I proceed to checkout
        And I fill in the checkout data
        And I fill the address data
        When I select Invoice option
        Then The right message and price for Invoice option are displayed

    @Checkout @Mobile @PE
    # @focus
    Scenario: 83155 [Checkout][Mobile] Validate COD
        And I proceed to checkout
        And I fill in the checkout data
        And I fill the address data
        When I select COD option
        Then The right message and price for COD option are displayed

    @Checkout @Mobile @CL @CO @MX @PE
    Scenario: 15377 [Checkout][Mobile] Validate mandatory firstname alert is displayed
        And I proceed to checkout
        When I fill in the checkout data without firstname
        Then mandatory firstname alert is displayed

    @Checkout @Mobile @CL @CO @MX @PE
    Scenario: 15378 [Checkout][Mobile] Validate mandatory lastname alert is displayed
        And I proceed to checkout
        When I fill in the checkout data without lastname
        Then mandatory lastname alert is displayed

    @Checkout @Mobile @CL @CO
    Scenario: 15379 [Checkout][Mobile] Validate mandatory document alert is displayed
        And I proceed to checkout
        When I fill in the checkout data without document
        Then mandatory document alert is displayed

    @Checkout @Mobile @CL @CO @MX @PE
    Scenario: 15380 [Checkout][Mobile] Validate mandatory phone alert is displayed
        And I proceed to checkout
        When I fill in the checkout data without phone number
        Then mandatory phone number alert is displayed

    @QAS @Checkout @Mobile @CL @CO @MX @PE
    Scenario: 17789 [Checkout][Mobile] Validate Finalizar Compra
        And I proceed to checkout Belcorp user
        And I fill cvv Belcorp
        And I click the payment submit button
        Then I check purchase information