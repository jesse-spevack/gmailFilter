# gmailFilter
A Google Apps Script for Creating Filters

## Usage
1. Set this script to run every 10 minutes.
2. Label an email in your gmail inbox as: `filter`

## About
When run, this script will go through your inbox and find all threads labeled 'filter'.
The script will get the sender of each thread marked 'filter' and create a new gmail filter to be applied to future emails from the same sender.
The filter will mark the email as read and archive it. Lastly, the script will apply these same actions to the thread labeled 'filter'.

## To Do
1. Better logging - e.g. to spreadsheet
2. More filter options - e.g. based on additional criteria than just the sender
3. Turn this into an add on
4. Generate reports with summaries of number of filters created over a period of time
5. Prevent duplicate filters from getting created
