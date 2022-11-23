@Cart @Mobile
Feature: Cart tests Esika Chile - Mobile
    As a customer, I want to test the cart functionalities - Mobile
    Background:
        Given At Mobile

    @Cart @Mobile @CL @CO @MX @PE
    # @focus
    Scenario: 14352 [Cart/Checkout][Mobile] Add item to cart
        Given I am on a PDP for Cart
        When I add the product to the cart Mobile
        Then I validate if the product is in the cart
        And I check if the price is correct Mobile
        And I go to checkout

    @Cart @Mobile @CL @CO @MX @PE
    Scenario: 14353 [Cart/Checkout][Mobile] Remove item from the cart
        Given I have one item in the cart with 1 units
        When I remove the item from cart
        Then I validate if the product is not in the cart

    @Cart @Mobile @CL @CO @MX @PE
    Scenario: 14354 [Cart/Checkout][Mobile] Add two items to cart
        Given I am on a PDP for Cart
        When I add two items in the cart Mobile
        Then I validate if the two items are in cart

    @Cart @Mobile @CL @CO @MX @PE
    Scenario: 14355 [Cart/Checkout][Mobile] Clear all cart
        When I add two items to the cart by URL
        And I remove all items from cart
        Then I validate if is clean cart

    @Cart @Mobile @CL @CO @MX @PE
    Scenario: 14356 [Cart/Checkout][Mobile] Add item with two units
        When I have one item in the cart with 1 units
        And I add the quantity for 3 units
        Then I validate if the quantity has been changed to 3

    @Cart @Mobile @CL @CO @MX @PE
    Scenario: 14357 [Cart/Checkout][Mobile] Reduce item units in the cart
        When I have one item in the cart with 3 units
        And I reduce the quantity for 2 units
        Then I validate if the quantity has been reset to 2

    @Cart @Mobile @CL @CO @MX @PE
    Scenario: 14358 [Cart/Checkout][Mobile] Add invalid discount coupon
        When I have one item in the cart with 1 units
        And I type a invalid discount coupon
        Then The discount coupon should be invalid Mobile

    @Cart @Mobile @CL @CO @MX @PE
    Scenario: 14362 [Cart/Checkout][Mobile] Add and delete valid discount coupon
        When I have one item in the cart with 1 units
        And I type a valid discount coupon
        Then The discount coupon should be valid
        And Delete the coupon

    @Cart @Mobile @CL @CO @MX @PE
    Scenario: 14359 [Cart/Checkout][Mobile] Calculate valid shipping
        When I have one item in the cart with 1 units
        And I select a valid address
        Then The shipping price is displayed

    @Cart @Mobile @CL @CO @MX @PE
    Scenario: 14360 [Cart/Checkout][Mobile] Calculate valid shipping without required fields
        Given I have one item in the cart with 1 units
        And I do not fill the required fields
        Then The shipping price is not displayed

    @Cart @Mobile @CL @CO @PE
    Scenario: 14361 [Cart/Checkout][Mobile] Calculate valid shipping without Comuna field
        Given I have one item in the cart with 1 units
        And I do not fill the comuna field
        Then The shipping price is not displayed