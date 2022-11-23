@Login @Mobile @CL @CO @MX @PE
Feature: Login and Logout tests Esika - Mobile
    As a customer, I want to test the login and logout functionalities on Esika - Mobile

    Background:
        Given At Mobile

    # @focus
    Scenario: 23427 [Login][Mobile] Success Login Error
        Given A user enters to the login page
        When I log in using an incorrect password and email
        Then Must be informed that the email is incorrect

    # @focus
    Scenario: 23428 [Login][Mobile] Login with incorrect email
        Given A user enters to the login page
        When I log in using an incorrect email
        Then Must be informed that the email is incorrect

    # @focus
    Scenario: 23429 [Login][Mobile] Login with incorrect password
        Given A user enters to the login page
        When I log in using an incorrect password
        Then Must be informed that the data access are wrong

    # @focus
    Scenario: 23430 [Login][Mobile] Login with invalid email format
        Given A user enters to the login page
        When I log in using invalid format email
        Then Must be informed that the email is incorrect
    
    # @focus
    Scenario: 23431 [Login][Mobile] Success Login
        Given I am on the homepage with the correct URL
        And I click on the icon to Login Mobile
        When I log in using the correct email and password
        Then I am correctly logged in

    # @Login @Mobile
    # todo: Refactor > Log out was not working.
    # Scenario: 0000 [Login][Mobile] Loggout
    #     Given A user enters to the login page
    #     When I do Loggout from the site
    #     Then I must not be logged into the site
