@Header @Mobile @CL @CO @MX @PE
Feature: Header Mobile tests Belcorp - Mobile
	As a customer, I want to test the Ésika Chile Header component - Mobile

	Background:
		Given At Mobile
		Given I access to any page that is not checkout or my Account

	# @Mobile @Header @focus
	Scenario: 11941 [Header][Mobile] Validate navigation bar
		When I check the navigation bar Mobile
		Then I see three buttons with Ésika, Lbel and Cyzone names and its respective links Mobile

	# @Mobile @Header @focus
	Scenario: 11942 [Header][Mobile] Validate top bar "Find a consultant"
		When on header, the user selects the Find a consultant option Mobile
		Then the button has the right text that takes the user to the page to choose a consultant Mobile

	# @Mobile @Header @focus
	Scenario: 11947 [Header][Mobile] Validate search bar placeholder
		When I check the search bar Mobile
		Then the placeholder is Estoy buscando... Mobile

	# @Mobile @Header @focus
	#  todo: when login is ready and user has a history search
	# Scenario: 0000 [Header][Mobile] Validate search bar history behavior
	#     When I select the search bar field
	# 	Then I must be redirected to the search result page after click

	# @Mobile @Header @focus
	Scenario: 13688 [Header][Mobile] Validate the search bar without suggestions
		When I type on the search bar field Mobile
		Then it must appear Sin sugerencias Mobile

	# @Mobile @Header @focus
	Scenario: 11943 [Header][Mobile] Validate button Become a consultant
		When I click Quiero ser consultora button on the header menu
		Then the button has the right text and icon that takes the user to the page to choose a consultant

	# @Mobile @Header @focus
	Scenario: 13689 [Header][Mobile] Validate the most searched terms behavior
		When I type on the search bar field valid character Mobile
		Then I click on a most searched terms and redirect to the respective pages Mobile

	# @Mobile @Header @focus
	Scenario: 17472 [Header][Mobile] Test the search bar with a non-existing product
		When I search for a non-existent product Mobile
		Then it must load the OOPS page

	# @Navigation @Mobile @focus
	Scenario: 17473 [Header][Mobile] Test the search bar with an existent product
		When I search for an existent product Mobile
		Then it must return a product

	# @Mobile @Header @focus
	Scenario: 11944 [Header][Mobile] Validate menu chips layout
		When I check the menu chips
		# todo: name and URL must be code after definition categorie names
		Then must contain nine menu chips labels, with the same name as the categories names
		And the menu chip labels must have the right URL

	# @Mobile @Header @focus
	Scenario: 11945 [Header][Mobile] Validate hamburguer menu
		When I click the hamburguer menu
		Then menu opens showing 10 categories and the title Explora las categorías

	# @Mobile @Header @focus
	Scenario: 11946 [Header][Mobile] Validate hamburguer submenu
		When  In the menu, I select a category that has a second-level menu
		Then must contain two banners, a close button on all pages of the menu
		# todo: arrow title should be code after fixing title bug (title menu is written on ::before)
		# And must be a back arrow with the title of the respect menu that will return

# @Navigation @Mobile @focus @erro
# todo:should be automated after categories and link definition
# Scenario: 0000 [Home][Mobile] Browse for categories
# 	Then I verify the categories available on menu Mobile