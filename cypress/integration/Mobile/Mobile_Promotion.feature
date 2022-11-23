@Promotions @Mobile
Feature: Promotion tests Esika Chile - Mobile
    As a customer, I want to test the Promotion functionalities on Esika CL - Mobile
    Background:
        Given At Mobile

    @Promotions @Mobile
    Scenario: 23476 [Promotion][Mobile] Validate Promo More for Less
        When I have 3 units of the product
        Then I see full price and free units
        And The purchase are according to the promotion rules

    @Promotions @Mobile
    Scenario: 23477 [Promotion][Mobile] Validate Promo Buy Together
        When I have 1 unit of 2 promotion products
        Then I see both products with the right prices
        And The purchase are according to the Buy Together rules

    @Promotions @Mobile
    Scenario: 23478 [Cart][Mobile] Validate Promo Not Free Ship
        When I have one item in the cart with 1 units promotion
        And I select a valid address
        Then The shipping price is not free

    @Promotions @Mobile
    Scenario: 23479 [Cart][Mobile] Validate Promo Free Ship
        When I have one item in the cart with 6 units promotion
        And I select a valid address
        Then The shipping price is free