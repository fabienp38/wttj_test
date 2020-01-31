# Exercice2: Test Plan
The purpose of the test is to create a test plan for the candidate pipeline part :
1. I am on any job offers.
2. I create any candidate
3. I can retrieve the information about the candidate
4. I can comment the candidate
5. I can … 
 
What particularly interests us in this exercise are the marginal cases that you will mention. 
We expect pragmatism, so avoid too much detail!
 
NB: no code required for this exercice


# Test Plan

## Requirement 1: Displaying all candidate for a specific job offer

**Impact:**
 - UI ( screen; candidate board fo ar specific job offer)
 - Public API
 - Performance
 - Compatibility
 
### Expected test:
**UI Test  (Application Web) :**
 - Check the candidate card  (nam, picture, counter)
 - Check that all candidates diplayed correspond to the candidate associated to this offer
 - Check the candidate is displaying in his assigned status column
 - Check the candidate cards that are not updated since few times has a grey tint
 - Check the weighted average of candidate rating
 - Check the UI elements on this screen (Button add candidate, Action Multiples ...)
    - To be checked with different language (french, english and other supported languages)
 
**Public API Test:**
 - With the right permission, execute get http request to list all candidate for a specific job offer
	 -  check json body 
	 -  query param
- With restricted permission, you arenot allowed to list all candidates

**Performance Test:**
- Load a volume of candidate data for a specific job offer and bench the API request ( time, memory usage, cpu) and the displaying of the screen.

**Compatibiliy test**
-Test the screen displaying on different web browsers

## Requirement 2: Displaying all the candidate informations

**Impact:**
 - UI ( screen; candidate board fo ar specific job offer)
 - Public API
 - Compatibility
 
### Expected test:
**UI Test  (Application Web) :**
 - Check the UI elements on this screen (Edit button, tabs, info candidate (firstname, lastname, picture email)...)
 
**Public API Test:**
 - With the right permission, execute http request to get the cadidate information
	 -  check json body 
	 -  query param
- With restricted permission, you arenot allowed to get the cadidate information

**Compatibiliy test**
-Test the screen displaying on different web browsers

## Requirement 3: Displaying all the candidate informations

**Impact:**
 - UI ( screen; candidate board fo ar specific job offer)
 - Public API
 - Compatibility
 
### Expected test:
**UI Test  (Application Web) :**
 - Check the UI elements on this screen (Edit button, tabs, info candidate (firstname, lastname, picture email)...)
  - To be checked with different language (french, english and other supported languages)
 - Check the list of candidate applications
 - Check the resume and the cover letter is displayed for a candidate
 
**Public API Test:**
 - With the right permission, execute http request to get the cadidate information
	 -  check json body 
	 -  query param
- With restricted permission, you arenot allowed to get the cadidate information

**Compatibiliy test**
-Test the screen displaying on different web browsers