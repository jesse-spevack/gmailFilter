# gmailFilter
A Google Apps Script for Creating Filters

## Usage
1. Go to Google Apps Script Editer and click the `Trigger` icon (it looks like a clock and is immediately to the right of the `save` button and to the left of the `run` button.
[![Screen_Shot_2018-09-12_at_9.32.16_AM.png](https://s22.postimg.cc/dvxkujnqp/Screen_Shot_2018-09-12_at_9.32.16_AM.png)](https://postimg.cc/image/ctnec04x9/)

2. Click `No triggers set up. Click here to add one now.`
[![Screen_Shot_2018-09-12_at_9.31.55_AM.png](https://s22.postimg.cc/iul39bc6p/Screen_Shot_2018-09-12_at_9.31.55_AM.png)](https://postimg.cc/image/3lv5vjii5/)

3. Set up the script to run at whatever interval feels right to you. I recommend every 5 minutes.
[![Screen_Shot_2018-09-12_at_9.32.16_AM.png](https://s22.postimg.cc/dvxkujnqp/Screen_Shot_2018-09-12_at_9.32.16_AM.png)](https://postimg.cc/image/ctnec04x9/)

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
