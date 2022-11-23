@Promotions @Desktop @MTO
Feature: Cart Promotion tests Esika Chile - Desktop MTO
    As a customer, I want to test the cart promotion functionalities on Esika CL - Desktop with Consultants URL

    Background:
        Given At Desktop
        And I set the Consultant cookie for TienditaLiam


    @Promotions @Desktop @MTO
    Scenario: 23472 [Promotion][Desktop][MTO] Validate Promo More for Less
        When I have 3 units of the product
        Then I see full price and free units
        And The purchase are according to the promotion rules
        And I check the consultant cookie for TienditaLiam

    @Promotions @Desktop @MTO
    Scenario: 23474 [Promotion][Desktop][MTO] Validate Promo Not Free Ship
        When I have one item in the cart with 1 units promotion
        And I select a valid address
        Then The shipping price is not free
        And I check the consultant cookie for TienditaLiam

    @Promotions @Desktop @MTO
    Scenario: 23475 [Promotion][Desktop][MTO] Validate Promo Free Ship
        When I have one item in the cart with 6 units promotion
        And I select a valid address
        Then The shipping price is free
        And I check the consultant cookie for TienditaLiam

    @Promotions @Desktop @MTO
    Scenario: 23473 [Promotion][Desktop][MTO] Validate Promo Buy Together
        When I have 1 unit of 2 promotion products
        Then I see both products with the right prices
        And The purchase are according to the Buy Together rules
        And I check the consultant cookie for TienditaLiam