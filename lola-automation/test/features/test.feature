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