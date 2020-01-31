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

StackEdit stores your files in your browser, which means all your files are automatically saved locally and are accessible **offline!**


## Use case: Displaying all candidate for a specific job offer

**Impact:**
 - UI ( screen; candidate board fo ar specific job offer)
 - Public API
 - Performance
 - Compatibility
 
### Expected test:
**UI Test  (Application Web) :**
 - Check the candidate card  (nam, picture, counter)
 - Check that all candidate diplayed correspond to the candidate associated to this offer
 - Check the  candidate is displaying in his assigned status
 - Check that candidate card not updated since few times has a grey tint
 - Check element of this screen (Button add candidate, Action Multiples ...)
 
**Public Api Test:**
 - With the right permission, execute get http request to list all candidate for a specific job offer
	 -  check json body 
	 -  query param

**Performance Test:**
- Load a volume of candidate for a specific job offer and bench the api request ( time, memory usage, cpu) and the displaying of the screen.

