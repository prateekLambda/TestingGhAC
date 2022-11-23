@Footer @Mobile @CL @CO @MX @PE
Feature: Footer tests Belcorp - Mobile
	As a customer, I want to test the Ésika Chile Footer component - Mobile

	Background:
		Given At Mobile
		Given I access to any page that is not checkout or my Account

	# @Footer @Mobile @Android @focus
	# Scenario: 11835 [Footer][Android] Validate footer layout
	# 	When I check the footer
	# 	Then it must be located at the end of the page Android

	# @Footer @Mobile @Android @focus
	Scenario: 11829 [Footer][Android] Validate social media link
		When I check the footer
		Then it must have 3 icons of social media Facebook, Instagram, Youtube with their respective links Android

	# @Footer @Mobile @Android @focus
	# todo: part of this scenario is pending
	Scenario: 11830 [Footer][Android] Validate list container
		When I check the footer
		Then it must have 3 list container sections Nuestras marcas, Legal, Contáctanos with their respective subsections Android

	# @Footer @Mobile @Android @focus
	Scenario: 11831 [Footer][Android] Validate payment icons
		When I check the footer
		Then it must have a text with 2 payment icons Android

	# @Footer @Mobile @Android @focus
	Scenario: 11836 [Footer][Android] Validate benefits
		When I check the footer
		Then it must have benefits icons and texts Android