@Desktop @Category @CL @CO @MX @PE
Feature: Category tests Belcorp - Desktop
	As a customer, I want to test the Category Page - Desktop

	Background:
		Given At Desktop
		Given I access the Perfumes category page

	# @Desktop @Category
	Scenario: 17454 [Category][Desktop] Validate Product Card
		When I check the product card
		Then it has image, title, price and button

	# @Desktop @Category @focus
	Scenario: 17841 [Category][Desktop] Validate Order by Ventas
		When I click on the "Ordenar por" option
		And I sort by "Ventas"
		Then The url must be reset to sort by "Ventas"

	# @Desktop @Category @focus
	Scenario: 17842 [Category][Desktop] Validate Order by Más reciente
		When I click on the "Ordenar por" option
		And I sort by "Más reciente"
		Then I validate the page sorting by "Más reciente"

	# @Desktop @Category @focus
	Scenario: 13171 [Category][Desktop] Validate "Sort by" options
		When I click on the "Ordenar por" option
		Then it must appear a list with the options "relevancia", "Ventas", "Más reciente", "Descuento", "Precio más alto" and "Precio más bajo"

	# @Desktop @Category @focus
	# Scenario: 13168 [Category][Desktop] Validate Category Main Banner
	# 	Then there is one category banner-image

	# @Desktop @Category @focus
	Scenario: 13169 [Category][Desktop] Validate show more button layout
		When I scroll to the end of the page
		Then it has a button with the text Ver más productos

	# @Desktop @Category @focus
	Scenario: 13170 [Category][Desktop] Validate "Perfumes" breadcrumb
		When I check the breadcrumb
		Then it has a home icon and the name of the Perfumes category structure
		And I must be redirected to the Perfumes category page selected after click

	