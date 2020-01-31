# Exercise2: Test Plan
The purpose of the test is to create a test plan for the candidate pipeline part :
1. I am on any job stages.
2. I create any candidate
3. I can retrieve the information about the candidate
4. I can comment the candidate
5. I can … 
 
What particularly interests us in this exercise are the marginal cases that you will mention. 
We expect pragmatism, so avoid too much detail!
 
NB: no code required for this exercice


# Test Plan

## Requirement 1: Displaying all candidate for a specific job stage

**Impact:**
 - UI
 - Public API
 - Performance
 - Compatibility
 
### Expected tests:
**UI Test  (Application Web) :**
 - Check the candidate card  (lastname, firstname, picture, counter)
 - Check that all candidates diplayed correspond to the candidate associated to this job stage
 - Check the candidate is displaying in his assigned status column
 - Check the candidate cards that are not updated since few times has a grey tint
 - Check the weighted average of candidate rating
 - Check the UI elements on this screen (Button add candidate, Action Multiples ...)
    - To be checked with different language (french, english and other supported languages)
 
**Public API Test:**
 - With the right permission, execute get http request to list all candidate for a specific job stage
	 -  check json body 
	 -  query param
- With restricted permission, you arenot allowed to list all candidates

**Performance Test:**
- Load a volume of candidate data for a specific job stage and bench the API request ( time, memory usage, cpu) and the displaying of the screen.

**Compatibiliy test**
 - check the screen displaying with different web browsers

## Requirement 2: Displaying all the candidate informations

**Impact:**
 - UI
 - Public API
 - Compatibility
 
### Expected tests:
**UI Test  (Application Web) :**
 - Check the UI elements on this screen (Edit button, tabs, info candidate (firstname, lastname, picture email)...)
 
**Public API Test:**
 - With the right permission, execute http request to get the cadidate information
	 -  check json body 
	 -  query param
 - With restricted permission, you are not allowed to get the cadidate information

**Compatibiliy Test**
 - check the screen displaying with different web browsers

## Requirement 3: Retrieve all the candidate informations

**Impact:**
 - UI
 - Public API
 - Compatibility
 
### Expected tests:
**UI Test  (Application Web) :**
 - Check the UI elements on this screen (Edit button, tabs, candidate info  (firstname, lastname, picture email)...)
  - To be checked with different language (french, english and other supported languages)
 - Check the list of candidate applications
 - Check the resume and the cover letter is displayed for a candidate
 - Check thaht you can't access to the cadidate informations when the bulk edit (Multiple action button) is activated
 
**Public API Test:**
 - With the right permission, execute http request to get the cadidate information
	 -  check json body 
	 -  query param
 - With restricted permission, you are not allowed to get the cadidate information

**Compatibiliy Test**
- Test the screen displaying on different web browsers

## Requirement 4: Create a new candidate for a specific job stage

**Impact:**
 - UI
 - Public API
 - Compatibility

### Expected tests:
**UI Test  (Application Web) :**
 - Check the UI elements on this screen (Edit button, tabs, candidate info (firstname, lastname, picture email)...)
  - To be checked with different language (french, english and other supported languages)
 - Check the creation of new candidate:
  - Fill all the fields and check that this informations are correctly saved
    - imported files (Resume, picture)
    - application status 
    - field about the candidate information
  - Fill all the minimum mandatory fields and check that this information are correctly saved
    - Check the notification is created after the record 
  - Check error case for each fields:
    - wrong email
    - wrong format for the imported files (Resume, picture)
 - Check the creation of the same candidate on the another job stage

**UI Test  (Chrome extension) :**
 - Check the UI elements on this screen (Edit button, tabs, candidate info (firstname, lastname, picture email)...)
 - Fill all the fields and check that this informations are correctly saved
    - application status 
    - field about the candidate information
    - select a job stage
    - add a comment
- Fill all the minimum mandatory fields and check that this information are correctly saved
  *NB the mandatory field are not the same between chrome extension and application web (Missing email)*

**Public API Test:**
- With the right permission, execute http request to create the new cadidate
	 -  check that the candidate is created 
   -  check the mandatory query parameter
 - With restricted permission, you are not allowed to create the cadidate information

**Compatibiliy Test**
- Test the screen displaying on different web browsers

## Requirement 5: Update the candidate informations

**Impact:**
 - UI
 - Public API
 - Compatibility
 - Concurrent action

### Expected tests:
**UI Test  (Application Web) :**
- Edit an exesting candidate and modify the personal information:
  - Check the UI elements on this screen (lastname, firstname, email, phone number, profile picture)
    - To be checked with different language (french, english and other supported languages)
  - Check error case for each fields:
    - wrong email
    - wrong format for the picture imported file
  - Modify all fields and check that this candidate information are corectly saved:
    - Check update notification
    - Check the dashboard card has been updated with the new name
  - Modify status and check in the pipeline that the card move to the right column

**Public API Test:**
- With the right permission, execute http request to update an existing cadidate
	 -  check that the candidate is created 
   -  check the mandatory query parameter
 - With restricted permission, you are not allowed to update an existing candidate

**Compatibiliy Test**
- Test the screen displaying on different web browsers

**Concurrent test**
- Edit the same candidate by several recruiters, and update  the same information (example status) in same time

## Requirement 6: Comment a candidate

**Impact:**
 - UI
 - Public API
 - Concurrent action

### Expected tests:
**UI Test  (Application Web) :**
- Create a new comment and check that the comment is created 
  - Check the comment is displayed and the comment are ordered by time

**Public API Test:**
- With the right permission, execute http request to add a comment to a candidate
	 -  check that the comment is added
   -  check the mandatory query parameter
 - With restricted permission, you are not allowed to add a comment to a candidate

**Concurrent test**
- Add several comment by several recruiters in same time

## Requirement 7: Displayed all emails for a cadidate

**Impact:**
 - UI
 - Public API
 - Compatibility
 - Concurrent action

### Expected tests:
**UI Test  (Application Web) :**
- Check the UI elements on this screen 
    - To be checked with different language (french, english and other supported languages)
- Checks that the mail list are ordered by time

**Public API Test:**
- With the right permission, execute http request to get the candidate email list 
	 -  check that email list 
   -  check the mandatory query parameter
 - With restricted permission, you are not allowed to get the candidate email list 

**Compatibiliy Test**
- Test the screen displaying on different web browsers

## Requirement 8: Send an email to the candidate (bulk action)

**Impact:**
 - UI
 - Public API
 - Concurrent action

### Expected tests:
**UI Test  (Application Web) :**
- Check the UI elements on this screen 
    - To be checked with different language (french, english and other supported languages)
- Send an email to the candidate and check that the email is displayed in the list after sending 
  - Add text
  - Add subject
  - Add attachment
- Check the notification is created when you assign yourself to this application
  - check that the recruiter has been added to the list of notification
  - check that the recruiter receives a mail when a mail is sent from the candidate
- Unfollow the candidate and check that the recruiter has been removed to the list of notification.
- Send an email to the candidate with a template
- Send an email to two candidates with the multiple action

**Public API Test:**
- With the right permission, execute http request to post an email
	 -  check that the email is sent
   -  check the mandatory query parameter
 - With restricted permission, you are not allowed to post an email

**Compatibiliy Test**
- Test the screen displaying on different web browsers

## Requirement 9: Attach document to a candidate 

**Impact:**
 - UI
 - Public API
 - Compatibility
 - Concurrent action

### Expected tests:
**UI Test  (Application Web) :**
- Check the UI elements on this screen 
    - To be checked with different language (french, english and other supported languages)
- Check that all document imported for a candidate are displayed
- Import document with different format and check the restricted format for the imported file

**Public API Test:**
- With the right permission, execute http request to add a document to the candidate
	 -  check that the document is added
   -  check the mandatory query parameter
 - With restricted permission, you are not allowed to add a document to the candidate

**Compatibiliy Test**
- Test the upload file document with different web browser

## Requirement 10: Add a rating to a candidate

**Impact:**
 - UI
 - Concurrent action

### Expected tests:
**UI Test  (Application Web) :**
- Check the UI elements on this screen (tab add a rating and modify the criteria rating)
    - To be checked with different language (french, english and other supported languages)
- Add a criteria rating
- Delete a criteria rating unused
- Delete a criteria rating used to rate a candidate
  - A warning message is displayed 
  - check that the criteria is deleted for the candidate
- Upddate a criteria ratiing
  - The criteria has been updated for the candidate
- Add two rating to the candidate
  - Check that the rating comment is mandatory
  - Check when a rate is record with a commment, this comment is displayed in the comment list
  - Check that the rating displayed in the candidate information matches the weighted average rating
  - Check that the rating displayed in the candidate card (Pipeline) matches the weighted average rating
- Update an existing rate and check this modification changes the rate in the candidate information and the candidate card

**Concurrent test**
- Add or modify the same candidate rate by several recruiters

## Requirement 11: Change status for a candidate with the pipeline screen (bulk action)

**Impact:**
 - UI
 - Concurrent action

### Expected tests:
**UI Test  (Application Web) :**
 - Move the candidate card to another status check that the status has changed for this candidate
 - Check that you can't move with the drag and drop when the multiple action (bulk action) is activated
 - Use the multiple action to change the status of two candidate cards:
  -  Check that the candidate card are moved in the right column
  -  Diplay candidate information for each moved candidate to check the status

**Concurrent test**
- Use the bulk action or the card to change/mowe in same time, the same candidate, by two recruiters

## Requirement 12: Move a candidate to another job stage (bulk action)

**Impact:**
 - UI
 - Public API
 - Concurrent action

### Expected tests:
**UI Test  (Application Web) :**
 - With the candidate information screen move a candidate to another job stage
  - Check that the candidate is moved in a right job stage
 - With the multiple action move a candidate to another job stage
  - Check that all the candidatare moved in a right job stage

**Public API Test:**
- With the right permission, execute http request to move a candidate to another job stage
	 -  Check that the candidate is moved in a right job stage
   -  check the mandatory query parameter
 - With restricted permission, you are not allowed to move a candidate to another job stage

**Concurrent test**
- Move the same candidate to another job stage, by two recruiters in same time

## Requirement 13: Archive a candidate to another job stage (bulk action)

**Impact:**
 - UI
 - Public API
 - Concurrent action

### Expected tests:
**UI Test  (Application Web) :**
 - With the candidate information screen archive a candidate 
  - Check that the candidate is archived
 - With the multiple action archive a candidate
  - Check that all the candidatare are archived

**Public API Test:**
- With the right permission, execute http request to archive a candidate
	 -  Check that the candidate is archived
   -  check the mandatory query parameter
 - With restricted permission, you are not allowed to archive a candidate 

**Concurrent test**
- Archive the same candidate, by two recruiters in same time

## Requirement 14: Add a column to the pipeline

**Impact:**
 - UI

### Expected tests:
**UI Test  (Application Web) :**
 - Add a status column to the pipeline
  - Check that new column is diplayed in the pipeline
  - Check that the new status has been added to dropdown list

## Requirement 15: Remove a column to the pipeline 

**Impact:**
 - UI

### Expected tests:
**UI Test  (Application Web) :**
 - Remove a status column to the pipeline
 - Check that you are not allowed to remove status columns that contains candidate