@MyAccountTest @Desktop @CL @CO @MX @PE
Feature: My Account - Desktop
	As a customer, I want to test the My Account functionalities on Esika CL - Desktop

    Background:
        Given At Desktop
        # todo: access throw home page after login is full developed
        And I access the login page to My Account
		And I log in using the correct email and password to My Account
        # todo: add this step after login is full developed
        # And I Access the profile page

	# @MyAccount @Desktop @focus
    Scenario: 15391 [My Account][Desktop] Validate login to My Account
        # Then I see the profile page
        
	# @MyAccount @Desktop @focus
	Scenario: 15392 [My Account][Desktop] Edit personal data - Gender F
		When I edit my personal data - Gender F
		Then I check if the personal data was edited correctly - Gender F

	# @MyAccount @Desktop @focus
	Scenario: 15393 [My Account][Desktop] Edit personal data - Gender M
		When I edit my personal data - Gender M
		Then I check if the personal data was edited correctly - Gender M

	# @MyAccount @Desktop @focus
	Scenario: 15394 [My Account][Desktop] Add a new address
        And I Access the address page
		And I access the new address page
		When I add a new address
		Then I check if the address was added correctly

	# @MyAccount @Desktop @focus
	Scenario: 15395 [My Account][Desktop] Edit an address
        And I Access the address page
		When I edit an address
		Then I check if the address was edited correctly

	# @MyAccount @Desktop @focus
	Scenario: 15396 [My Account][Desktop] Check my orders
        When I Access my orders page
		Then I check that I am in the correct page

	# @MyAccount @Desktop @focus
	Scenario: 15397 [My Account][Desktop] Delete address
        And I Access the address page
		When I delete the address
		Then An alert message is shown on the screen