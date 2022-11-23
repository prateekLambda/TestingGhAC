@MyAccountTest @Mobile @CL @CO @MX @PE
Feature: My Account tests Esika CL - Mobile
	As a customer, I want to test the My Account functionalities on Esika CL - Mobile

    Background:
        Given At Mobile
        # todo: access throw home page after login is full developed
        And I access the login page to My Account
		And I log in using the correct email and password to My Account

    # @MyAccount @Mobile @focus
    Scenario: 15398 [My Account][Mobile] Validate login to My Account
        Then I see the profile page - Mobile

	# @MyAccount @Mobile @focus
	Scenario: 15399 [My Account][Mobile] Edit personal data - Gender F
        And I Access the profile page - Mobile
		When I edit my personal data - Gender F
		Then I check if the personal data was edited correctly - Gender F

	# @MyAccount @Mobile @focus
	Scenario: 15400 [My Account][Mobile] Edit personal data - Gender M
        And I Access the profile page - Mobile
		When I edit my personal data - Gender M
		Then I check if the personal data was edited correctly - Gender M

	# @MyAccount @Mobile @focus
	Scenario: 15401 [My Account][Mobile] Add a new address
		And I Access the address page
        When I access the new address page - Mobile
		And I add a new address
		Then I check if the address was added correctly

	# @MyAccount @Mobile @focus
	Scenario: 15402 [My Account][Mobile] Edit an address
		And I Access the address page
		And I edit an address
		Then I check if the address was edited correctly

	# @MyAccount @Mobile @focus
	Scenario: 15403 [My Account][Mobile] Check my orders
        And I Access my orders page
		Then I check that I am in the correct page mobile

    # @MyAccount @Mobile @focus
	Scenario: 15404 [My Account][Mobile] Delete address
        And I Access the address page
		When I delete the address
		Then An alert message is shown on the screen