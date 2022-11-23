@Cart @Desktop
Feature: Cart tests - Desktop
    As a customer, I want to test the cart functionalities on Esika CL - Desktop
    Background:
        Given At Desktop

    @Cart @Desktop @CL @CO @MX @PE
    # @focus
    Scenario: 14341 [Cart/Checkout][Desktop] Add item to cart
        Given I am on a PDP for Cart
        When I add the product to the cart
        Then I validate if the product is in the cart
        And I check if the price is correct
        And I go to checkout

    @Cart @Desktop @CL @CO @MX @PE
    # @focus
    Scenario: 14342 [Cart/Checkout][Desktop] Remove item from the cart
        Given I have one item in the cart with 1 units
        When I remove the item from cart
        Then I validate if the product is not in the cart

    @Cart @Desktop @CL @CO @MX @PE
    # @focus
    Scenario: 14343 [Cart/Checkout][Desktop] Add two items to cart
        Given I am on a PDP for Cart
        When I add two items in the cart
        Then I validate if the two items are in cart

    @Cart @Desktop @CL @CO @MX @PE
    # @focus
    Scenario: 14344 [Cart/Checkout][Desktop] Clear all cart
        When I add two items to the cart by URL
        And I remove all items from cart
        Then I validate if is clean cart
    
    @Cart @Desktop @CL @CO @MX @PE
    # @focus
    Scenario: 14345 [Cart/Checkout][Desktop] Add item with two units
        When I have one item in the cart with 1 units
        And I add the quantity for 3 units
        Then I validate if the quantity has been changed to 3

    @Cart @Desktop @CL @CO @MX @PE
    # @focus
    Scenario: 14346 [Cart/Checkout][Desktop] Reduce item units in the cart
        When I have one item in the cart with 3 units
        And I reduce the quantity for 2 units
        Then I validate if the quantity has been reset to 2

    @Cart @Desktop @CL @CO @MX @PE
    # @focus
    Scenario: 14347 [Cart/Checkout][Desktop] Add invalid discount coupon
        When I have one item in the cart with 1 units
        And I type a invalid discount coupon
        Then The discount coupon should be invalid

    @Cart @Desktop @CL @CO @MX @PE
    # @focus
    Scenario: 14348 [Cart/Checkout][Desktop] Add and delete valid discount coupon
        When I have one item in the cart with 1 units
        And I type a valid discount coupon
        Then The discount coupon should be valid
        And Delete the coupon

    @Cart @Desktop @CL @CO @MX @PE 
    # @focus
    Scenario: 14349 [Cart/Checkout][Desktop] Calculate valid shipping
        When I have one item in the cart with 1 units
        When I validate if the product is in the cart
        And I select a valid address
        Then The shipping price is displayed

    @Cart @Desktop @CL @CO @MX @PE
    # @focus
    Scenario: 14350 [Cart/Checkout][Desktop] Calculate valid shipping without required fields
        When I have one item in the cart with 1 units
        And I do not fill the required fields
        Then The shipping price is not displayed

    @Cart @Desktop @CL @CO @PE
    # @focus
    Scenario: 14351 [Cart/Checkout][Desktop] Calculate valid shipping without Comuna field
        When I have one item in the cart with 1 units
        And I do not fill the comuna field
        Then The shipping price is not displayed

    # # @Cart @Desktop @focus
    # Scenario: 00000 [Cart][Desktop] Validate Promo 3x2 Red Power - More for Less
    #     Given I have 3 units of the Red Power
    #     Then I see full price and free units
    #     And The purchase are according to the promotion rules

    # # @Cart @Desktop @focus
    # # ! Scenario not working: broken layout when changing cart from last scenario
    # Scenario: 00000 [Cart][Desktop] Validate Promo Buy Together
    #     Given I have 1 unit of 2 promotion products
    #     Then I see both products with the right prices
    #     And The purchase are according to the Buy Together rules