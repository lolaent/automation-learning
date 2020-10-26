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
        Given I access the following URL "https://www-intnexusrebr.okd.allegiantair.com/booking/timeline5f96d43d13c5c/flights?tt=ROUNDTRIP&o=ABE&d=SFB&ta=1&tc=0&tis=0&til=0&ds=2020-10-28&de=2020-10-29&c=0&h=0"
        Then I wait for the Select Flights title to be displayed
        And I print flights prices from Departing list
        And I print the Flight number from Departing list
        And I print the Flight depart time from Departing list
        And I print the Flight arrive time from Departing list
        And I print the Seats available text for both Departing and Returning list


