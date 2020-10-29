Feature: Homepage

    Automated tests for Google website homepage

    Scenario: Access the Homepage
        Given I access the DEV URL
        When I click on the Close button from the Loyalty overlay
        And I click on Accept All Cookies button
        And I click on Get Deals Email Sign-Up button
        Then I validate that the "Travel deals so good, you'll want to hug your inbox." text is displayed
        When I type "gabriela.muresanu@lola.tech" in the Enter your email address input field
        And I click on Get Deals button
        Then I validate that the following success message "You are successfully signed up for our newsletter." is displayed
        When I click on the Travelers dropdown
        Then I validate that "1" is displayed by default for Adults
        And I validate that the Search button is displayed
        And I validate that the Search button is disabled

    @AdultsDropdown
    Scenario: Increment Adults
        Given I access the DEV URL
        When I click on the Close button from the Loyalty overlay
        And I click on Accept All Cookies button
        When I click on the Travelers dropdown
        And I click on Increment Adults button "5" times

    @GetDealsEmail
    Scenario: Delete email address if any
        Given I access the DEV URL
        When I click on the Close button from the Loyalty overlay
        And I click on Accept All Cookies button
        And I click on Get Deals Email Sign-Up button
        When I type "gabriela.muresanu@lola.tech" in the Enter your email address input field
        And I delete email address from the Email input field

    @AccessUrl
    Scenario: Access the URL
        Given I access the following URL "https://www-devnexusrebr.okd.allegiantair.com/booking/timeline5f9abeb08abc6/flights?tt=ROUNDTRIP&o=ABE&d=SFB&ta=1&tc=0&tis=0&til=0&ds=2020-11-06&de=2020-11-08&c=0&h=0"
        Then I wait for the Select Flights title to be displayed
        When I click on Accept All Cookies button from Flights page
        And I print flights prices from Departing list
        And I print the Flight number from Departing list
        And I print the Flight depart time from Departing list
        And I print the Flight arrive time from Departing list
        And I print the Seats available text for both Departing and Returning list
        When I click on Continue button from Flights page
        Then I wait for the Bundle page to be displayed
        Given I get the current URL
        Then I select "Allegiant Bonus" Bundle
        When I calculate "Allegiant Total" bundle discount
        And I get "Allegiant Total" bundle
        And I click on Continue button from Bundles page
        # Then I wait for the Travelers page to be displayed
        # And I add First Name for both travelers
        Then I wait for the Travelers page to be displayed
        And I add "Traveler" in the First Name field
        And I add "One" in the Last Name field
        And I select adult Gender
        And I choose Month "February"
        And I choose Day "3"
        And I add "1989" year DOB
        When I click on Continue button from Travelers page
        Then I wait for the Seats page to be displayed

    @TravelersDetails
    Scenario: Fill in traveler required data
        Given I access the following URL "https://www-devnexusrebr.okd.allegiantair.com/booking/timeline5f9ab70f4e0d3/travelers"
        Then I wait for the Travelers page to be displayed
        And I add "Traveler" in the First Name field
        And I add "One" in the Last Name field
        And I select adult Gender
        And I choose Month "February"
        And I choose Day DOB
        And I add "1989" year DOB
        When I click on Accept All Cookies button from Travelers page
        And I click on Continue button from Travelers page
        Then I wait for the Seats page to be displayed






