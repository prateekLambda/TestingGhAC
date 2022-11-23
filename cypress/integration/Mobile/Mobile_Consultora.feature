@ConsultoraPage @Mobile
Feature: Consultora Page tests - Mobile
    As a customer, I want to test the Consultora Page functionalities - Mobile
    Background:
        Given At Mobile
        Given I am on the Consultant page

    @ConsultoraPage @Mobile @CL @CO @MX @PE
    # @focus
    Scenario: 17517 [Consultant Page][Mobile] Search non-existent consultant
        When I search for a non-existent consultant
        Then I must be see the No Result message

    @ConsultoraPage @Mobile @CL @CO @MX @PE
    # @focus
    Scenario: 17518 [Consultant Page][Mobile] Consultant search result button "Mostrar más consultoras"
        When I make a valid consultant search
        Then I must be able to click the pagination button Mobile

    @ConsultoraPage @Mobile @CL @CO @MX @PE
    # @focus
    Scenario: 17514 [Consultant page][Mobile] Search for a consultant randomly - Console
        When I click on Asignarme una consultora button
        Then random consultant information is displayed on a modal
    
    @ConsultoraPage @Mobile @CL @CO @MX @PE
    # @focus
    Scenario: 17515 [Consultant Page][Mobile] Consultant search result information
        When I make a valid consultant search
        And I check the information result
        Then it must display the results for number, name, last name, and region
    
    @ConsultoraPage @Mobile @CL @CO @MX @PE
    # @focus
    Scenario: 17516 [Consultant Page][Mobile] Consultant search result button "Compra conmigo"
        When I make a real and valid consultant search
        And I click on Compre conmigo button Mobile
        Then the url must contain the following parameter Store in the final part for Consultant Page

