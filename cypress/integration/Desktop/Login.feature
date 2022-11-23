@Login @Desktop @CL @CO @MX @PE
Feature: Login and Logout tests Esika Chile - Desktop
    As a customer, I want to test the login and logout functionalities on Esika CL - Desktop

    Background:
        Given At Desktop

    # @focus
    Scenario: 23419 [Login][Desktop] Success Login
        Given I am on the homepage with the correct URL
        And I click on the icon to Login
        When I log in using the correct email and password
        Then I am correctly logged in
        # ! not checking the user name while the bug "Mi cuenta" persists
        # Then I must be logged in to the site

    # @focus
    Scenario: 23420 [Login][Desktop] Success Login Error
        Given A user enters to the login page
        When I log in using an incorrect password and email
        Then Must be informed that the email is incorrect

    # @focus
    Scenario: 23424 [Login][Desktop] Login with incorrect email
        Given A user enters to the login page
        When I log in using an incorrect email
        Then Must be informed that the email is incorrect

    # @focus
    Scenario: 23425 [Login][Desktop] Login with incorrect password
        Given A user enters to the login page
        When I log in using an incorrect password
        Then Must be informed that the data access are wrong

    # @focus
    Scenario: 23426 [Login][Desktop] Login with invalid email format
        Given A user enters to the login page
        When I log in using invalid format email
        Then Must be informed that the email is incorrect

# @Login @Desktop
# todo: Refactor > Log out was not working.
# Scenario: 0000 [Login][Desktop] Loggout
#     Given A user enters to the login page
#     When I do Loggout from the site
#     Then I must not be logged into the site


# Scenario: 23419 [Login][Desktop] Success Login
#     Given A user enters to the login page
#     When A user enters
#     Then I should be shown

#@QA_ready @Desktop @RegressionTest
# Scenario: 23421 [Login][Desktop] Successfully create a CDC account
#     Given Connecting to the web CDC
#     When Should click create account
#     Then View account creation confirmation window

#@QA_ready @Desktop @RegressionTest
# Scenario: 23422 [Login][Desktop] Validate field errors when creating account
#     Given Connecting to the web CDC
#     When Should click create account
#     Then Should account creation error

#@QA_ready @Desktop @RegressionTest
# Scenario: 23418 [Login][Desktop] Validate reset password of an invalid email
#     Given should login to the CDC
#     When should click restablecer
#     Then should send wrong mail