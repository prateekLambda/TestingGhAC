@Desktop @Header @CL @CO @MX @PE
Feature: Header tests Belcorp - Desktop
	As a customer, I want to test the Chile Header component - Desktop

	Background:
		Given At Desktop
		Given I access to any page that is not checkout or my Account

	# @Desktop @Header @focus
	Scenario: 11893 [Header][Desktop] Validate navigation bar
		When I check the navigation bar
		Then I see three buttons with Ésika, Lbel and Cyzone names and its respective links

	# @Desktop @Header @focus
	Scenario: 11899 [Header][Desktop] Validate top bar "Find a consultant"
		When the user selects the Find a consultant option
		Then the button has the right text that takes the user to the page to choose a consultant

	# @Desktop @Header @focus
	Scenario: 11896 [Header][Desktop] Validate button Become a consultant
		When I check the header
		Then the button Be a consultant is on the header, with the text Quiero ser una consultora

	# @Desktop @Header @focus
	Scenario: 11894 [Header][Desktop] Validate search bar placeholder
		When I check the search bar
		Then the placeholder is Estoy buscando...

	# @Desktop @Header @focus
	Scenario: 11895 [Header][Desktop] Validate Brand logo behavior
		When I click on the Brand logo
		Then I am redirected to Brands home page

	# @Desktop @Header @focus
	#  todo: when login is ready and user has a history search
	# Scenario: 0000 [Header][Desktop] Validate search bar history behavior
	#     When I select the search bar field
	# 	Then I must be redirected to the search result page after click

	# @Desktop @Header @focus
	Scenario: 13686 [Header][Desktop] Validate the search bar without suggestions
		When I type on the search bar field
		Then it must appear Sin sugerencias

	# @Desktop @Header @focus
	Scenario: 13687 [Header][Desktop] Validate the most searched terms behavior
		When I type on the search bar field valid character
		Then I click on a most searched terms and redirect to the respective pages

	# @Navigation @Desktop @focus
	Scenario: 17470 [Header][Desktop] Test the search bar with a non-existing product
		When I search for a non-existent product
		Then it must load the OOPS page

	# @Navigation @Desktop @focus
	Scenario: 17471 [Header][Desktop] Test the search bar with an existent product
		When I search for an existent product
		Then it must return a product

	# @Desktop @Header @focus
	# todo: "tree category" should be refactored after categories updated
	Scenario: 11897 [Header][Desktop] Validate menu and submenu
		When I hover over the menu title
		Then is a tree category with the second and third levels, and two images with titles and descriptions on every category section

# @Navigation @Desktop @focus
# todo:should be automated after categories and link definition
# Scenario: 0000 [Home][Desktop] Browse for categories
# 	Then I verify the categories available on menu