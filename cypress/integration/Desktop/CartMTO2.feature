@Cart @Desktop @MTO
Feature: Cart tests - Desktop
    As a customer, I want to test the cart functionalities - Desktop with Consultants URL
    
    Background:
        Given At Desktop
        And I am on a PDP for Cart
        And I add the consultants store Store

    @Cart @Desktop @MTO @CL @CO @MX @PE
    # @focus
    Scenario: 20513 [Cart/Checkout][Desktop][MTO] Add invalid discount coupon
        When I have one item in the cart with 1 units
        And I type a invalid discount coupon
        Then The discount coupon should be invalid
        And the url must contain the following parameter Store in the final part

    @Cart @Desktop @MTO @CL @CO @MX @PE
    # @focus
    Scenario: 20512 [Cart/Checkout][Desktop][MTO] Reduce item units in the cart
        When I add the product to the cart
        And I validate if the product is in the cart
        And I add 2 units to the cart
        And I reduce the quantity for 2 units
        Then I validate if the quantity has been reset to 2
        And the url must contain the following parameter Store in the final part

    @Cart @Desktop @MTO @CL @CO @MX @PE
    # @focus
    Scenario: 20514 [Cart/Checkout][Desktop][MTO] Add and delete valid discount coupon
        When I add the product to the cart
        And I validate if the product is in the cart
        And I type a valid discount coupon
        Then The discount coupon should be valid
        And Delete the coupon
        And the url must contain the following parameter Store in the final part

    @Cart @Desktop @MTO @CL @CO @MX @PE
    # @focus
    Scenario: 20515 [Cart/Checkout][Desktop][MTO] Calculate valid shipping
        When I add the product to the cart
        And I validate if the product is in the cart
        And I select a valid address
        Then The shipping price is displayed
        And the url must contain the following parameter Store in the final part

    @Cart @Desktop @MTO @CL @CO @MX @PE
    # @focus
    Scenario: 20516 [Cart/Checkout][Desktop][MTO] Calculate valid shipping without required fields
        When I add the product to the cart
        And I validate if the product is in the cart
        And I do not fill the required fields
        Then The shipping price is not displayed
        And the url must contain the following parameter Store in the final part

    @Cart @Desktop @MTO @CL @CO @PE
    # @focus
    Scenario: 20517 [Cart/Checkout][Desktop][MTO] Calculate valid shipping without Comuna field
        When I add the product to the cart
        And I validate if the product is in the cart
        And I do not fill the comuna field
        Then The shipping price is not displayed
        And the url must contain the following parameter Store in the final part