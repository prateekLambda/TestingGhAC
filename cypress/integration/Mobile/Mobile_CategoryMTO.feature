@Category @Mobile @MTO @CL @CO @MX @PE
Feature: Category tests Belcorp - Mobile Mto
	As a customer, I want to test the Category component - Mobile with Consultants URL

	Background:
		Given At Mobile
		And I add the consultants store Store
		When I access the Maquillaje category page

	# @focus
	Scenario: 15337 [Category][Mobile][MTO] Validate Consultants bar
		And it must appear Mobile

	# @focus
	Scenario: 15338 [Category][Mobile][MTO] Validate Consultants URL
		Then the url must contain the following parameter Store in the final part

	# @focus
	# Scenario: 17535 [Category][Mobile][MTO] Validate Category Main Banner
	# 	Then there is one category banner-image Mobile
	# 	Then the url must contain the following parameter Store in the final part

	# @focus
	Scenario: 17536 [Category][Mobile][MTO] Validate show more button layout
		When I scroll to the end of the page
		Then it has a button with the text Ver más productos
		Then the url must contain the following parameter Store in the final part

	# @focus
	Scenario: 17537 [Category][Mobile][MTO] Validate "Perfumes" breadcrumb
		When I check the breadcrumb
		Then it has a home icon and the name of the Maquillaje category structure
		And I must be redirected to the Maquillaje category page selected after click
		Then the url must contain the following parameter Store in the final part

	# @focus
	Scenario: 19248 [Category][Mobile][MTO] Validate Product Card
		When I check the product card
		Then it has image, title, price and button
		Then the url must contain the following parameter Store in the final part

	# @focus
	Scenario: 19247 [Category][Mobile][MTO] Validate "Sort by" options
		When I click on the "Ordenar por" option Mobile
		Then it must appear a list with the options "relevancia", "Ventas", "Más reciente", "Descuento", "Precio más alto" and "Precio más bajo"
		Then the url must contain the following parameter Store in the final part

	# @focus
	Scenario: 19249 [Category][Mobile][MTO] Validate Sort by Ventas
		When I click on the "Ordenar por" option Mobile
		And I sort by "Ventas"
		Then The url must be reset to sort by "Ventas"
		Then the url must contain the following parameter Store in the final part

	# @focus
	Scenario: 19250 [Category][Mobile][MTO] Validate Sort by Más reciente
		When I click on the "Ordenar por" option Mobile
		And I sort by "Más reciente"
		Then I validate the page sorting by "Más reciente"
		Then the url must contain the following parameter Store in the final part