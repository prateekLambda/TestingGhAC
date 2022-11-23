@Checkout @Desktop
Feature: Checkout tests - Desktop
    As a customer, I want to test the checkout functionalities - Desktop

    Background:
        Given At Desktop
        And I have one item in the cart with 1 units for Checkout

    @Checkout @Desktop @CL @CO @MX @PE
    # @focus
    Scenario: 15368 [Checkout][Desktop] Validate Visa
        And I proceed to checkout
        And I fill in the checkout data
        And I fill the address data
        When I fill visa card number
        Then checkbox VISA must be selected

    @Checkout @Desktop @CL @CO @MX @PE
    # @focus
    Scenario: 15369 [Checkout][Desktop] Validate Mastercard
        And I proceed to checkout
        And I fill in the checkout data
        And I fill the address data
        When I fill mastercard card number
        Then checkbox MASTERCARD must be selected

    @Checkout @Desktop @QAS
    Scenario: 45269 [Checkout][Desktop] Validate AmericanExpress
        And I proceed to checkout
        And I fill in the checkout data
        And I fill the address data
        When I fill AmericanExpress card number
        Then checkbox AMERICANEXPRESS must be selected

    @Checkout @Desktop @QAS
    Scenario: 45270 [Checkout][Desktop] Validate Diners
        And I proceed to checkout
        And I fill in the checkout data
        And I fill the address data
        When I fill Diners card number
        Then checkbox DINERS must be selected

    @Checkout @Desktop @CL @CO @MX @PE
    # @focus
    Scenario: 15367 [Checkout][Desktop] Fill all fields - Checkout
        And I proceed to checkout
        When I fill in the checkout data
        And I fill the address data
        Then I select the payment option by web pay
        And I check if the price is correct on Checkout

    @Checkout @Desktop @CO
    # @focus
    Scenario: 51394 [Checkout][Desktop] Validate PSE
        And I proceed to checkout
        And I fill in the checkout data
        And I fill the address data
        When I select PSE option
        Then The right message and price for PSE option are displayed

    @Checkout @Desktop @PE
    # @focus
    Scenario: 83150 [Checkout][Desktop] Validate Invoice
        And I proceed to checkout
        And I fill in the checkout data
        And I fill the address data
        When I select Invoice option
        Then The right message and price for Invoice option are displayed

    @Checkout @Desktop @PE
    # @focus
    Scenario: 83151 [Checkout][Desktop] Validate COD
        And I proceed to checkout
        And I fill in the checkout data
        And I fill the address data
        When I select COD option
        Then The right message and price for COD option are displayed

    @Checkout @Desktop @CL @CO @MX @PE
    # @focus
    Scenario: 15370 [Checkout][Desktop] Validate mandatory firstname alert is displayed
        And I proceed to checkout
        And I fill in the checkout data without firstname
        Then mandatory firstname alert is displayed

    @Checkout @Desktop @CL @CO @MX @PE
    Scenario: 15373 [Checkout][Desktop] Validate mandatory lastname alert is displayed
        And I proceed to checkout
        And I fill in the checkout data without lastname
        Then mandatory lastname alert is displayed

    @Checkout @Desktop @CL @CO @PE
    Scenario: 15371 [Checkout][Desktop] Validate mandatory document alert is displayed
        And I proceed to checkout
        And I fill in the checkout data without document
        Then mandatory document alert is displayed

    @Checkout @Desktop @CL @CO @MX @PE
    Scenario: 15372 [Checkout][Desktop] Validate mandatory phone alert is displayed
        And I proceed to checkout
        And I fill in the checkout data without phone number
        Then mandatory phone number alert is displayed

    @QAS @Checkout @Desktop @CL @CO @MX @PE
    Scenario: 17788 [Checkout][Desktop] Validate Finalizar Compra
        And I proceed to checkout Belcorp user
        And I fill cvv Belcorp
        And I click the payment submit button
        Then I check purchase information