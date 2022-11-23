@ConsultoraPage @Desktop
Feature: Consultora Page tests Esika - Desktop
    As a customer, I want to test the Consultora Page functionalities - Desktop
    Background:
        Given At Desktop
        Given I am on the Consultant page

    @ConsultoraPage @Desktop @CL @CO @MX @PE
    # @focus
    Scenario: 17509 [Consultant page][Desktop] Search for a consultant randomly - Console
        When I click on Asignarme una consultora button
        Then random consultant information is displayed on a modal
    
    @ConsultoraPage @Desktop @CL @CO @MX @PE
    # @focus
    Scenario: 17510 [Consultant Page][Desktop] Consultant search result information
        When I make a valid consultant search
        And I check the information result
        Then it must display the results for number, name, last name, and region
    
    @ConsultoraPage @Desktop @CL @CO @MX @PE
    # @focus
    Scenario: 17511 [Consultant Page][Desktop] Consultant search result button "Compra conmigo"
        When I make a real and valid consultant search
        And I click on Compre conmigo button
        Then the url must contain the following parameter Store in the final part for Consultant Page

    @ConsultoraPage @Desktop @CL @CO @MX @PE
    # @focus
    Scenario: 17512 [Consultant Page][Desktop] Search non-existent consultant
        When I search for a non-existent consultant
        Then I must be see the No Result message

    @ConsultoraPage @Desktop @CL @CO @MX
    # @focus
    Scenario: 17513 [Consultant Page][Desktop] Consultant search result pagination
        When I make a valid consultant search
        And I check the pagination element
        Then I must be able to click the pagination button


        
