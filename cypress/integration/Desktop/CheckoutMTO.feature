@Checkout @Desktop @MTO
Feature: Checkout tests - Desktop
    As a customer, I want to test the checkout functionalities - Desktop with Consultants URL

    Background:
        Given At Desktop
        And I set the Consultant cookie for Store
        And I have one item in the cart with 1 units for Checkout

    @Checkout @Desktop @MTO @CL @CO @MX @PE
    # @focus
    Scenario: 17505 [Checkout][Desktop][MTO] Validate Consultants URL
        And I proceed to checkout
        Then the url must contain the following parameter Store in the final part

    @Checkout @Desktop @MTO @CL @CO @MX @PE
    # @focus
    Scenario: 17539 [Checkout][Desktop][MTO] Validate Visa
        And I proceed to checkout
        And I fill in the checkout data
        And I fill the address data
        When I fill visa card number
        Then checkbox VISA must be selected
        And I check the consultant cookie for Store

    @Checkout @Desktop @MTO @CL @CO @MX @PE
    # @focus
    Scenario: 17540 [Checkout][Desktop][MTO] Validate Mastercard
        And I proceed to checkout
        And I fill in the checkout data
        And I fill the address data
        When I fill mastercard card number
        Then checkbox MASTERCARD must be selected
        And I check the consultant cookie for Store

    @Checkout @Desktop @MTO @QAS
    Scenario: 45271 [Checkout][Desktop][MTO] Validate AmericanExpress
        And I proceed to checkout
        And I fill in the checkout data
        And I fill the address data
        When I fill AmericanExpress card number
        Then checkbox AMERICANEXPRESS must be selected
        And I check the consultant cookie for Store

    @Checkout @Desktop @MTO @QAS
    Scenario: 45272 [Checkout][Desktop][MTO] Validate Diners
        And I proceed to checkout
        And I fill in the checkout data
        And I fill the address data
        When I fill Diners card number
        Then checkbox DINERS must be selected
        And I check the consultant cookie for Store

    @Checkout @Desktop @MTO @CL @CO @MX @PE
    # @focus
    Scenario: 17538 [Checkout][Desktop][MTO] Fill all fields - Checkout
        And I proceed to checkout
        When I fill in the checkout data
        And I fill the address data
        Then I select the payment option by web pay
        And I check if the price is correct on Checkout
        And I check the consultant cookie for Store

    @Checkout @Desktop @CO
    # @focus
    Scenario: 51393 [Checkout][Desktop][MTO] Validate PSE
        And I proceed to checkout
        And I fill in the checkout data
        And I fill the address data
        When I select PSE option
        Then The right message and price for PSE option are displayed
        And I check the consultant cookie for Store

    @Checkout @Desktop @PE @MX
    # @focus
    Scenario: 83152 [Checkout][Desktop][MTO] Validate Invoice
        And I proceed to checkout
        And I fill in the checkout data
        And I fill the address data
        When I select Invoice option
        Then The right message and price for Invoice option are displayed
        And I check the consultant cookie for Store

    @Checkout @Desktop @PE
    # @focus
    Scenario: 83153 [Checkout][Desktop][MTO] Validate COD
        And I proceed to checkout
        And I fill in the checkout data
        And I fill the address data
        When I select COD option
        Then The right message and price for COD option are displayed
        And I check the consultant cookie for Store

    @Checkout @Desktop @MTO @CL @CO @MX @PE
    # @focus
    Scenario: 21424 [Checkout][Desktop][MTO] Validate mandatory firstname alert is displayed
        And I proceed to checkout
        And I fill in the checkout data without firstname
        Then mandatory firstname alert is displayed
        And I check the consultant cookie for Store

    @Checkout @Desktop @MTO @CL @CO @MX @PE
    # @focus
    Scenario: 21425 [Checkout][Desktop][MTO] Validate mandatory lastname alert is displayed
        And I proceed to checkout
        And I fill in the checkout data without lastname
        Then mandatory lastname alert is displayed
        And I check the consultant cookie for Store

    @Checkout @Desktop @MTO @CL @CO @PE
    # @focus
    Scenario: 21426 [Checkout][Desktop][MTO] Validate mandatory document alert is displayed
        And I proceed to checkout
        And I fill in the checkout data without document
        Then mandatory document alert is displayed
        And I check the consultant cookie for Store

    @Checkout @Desktop @MTO @CL @CO @MX @PE
    # @focus
    Scenario: 21427 [Checkout][Desktop][MTO] Validate mandatory phone alert is displayed
        And I proceed to checkout
        And I fill in the checkout data without phone number
        Then mandatory phone number alert is displayed
        And I check the consultant cookie for Store

    @QAS @Checkout @Desktop @MTO @CL @CO @MX @PE
    Scenario: 21428 [Checkout][Desktop][MTO] Validate Finalizar Compra
        And I proceed to checkout Belcorp user
        And I fill cvv Belcorp
        And I click the payment submit button
        Then I check purchase information
        And I check the consultant cookie for Store