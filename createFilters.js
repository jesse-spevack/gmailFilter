/*
  This function is meant to run on a time-based trigger (I have it set for every 10 minutes).

  When run, the function will create a filter
  for all emails with the same sender as the email thread labeled 'filter'.

  The filter will automatically mark all future emails from the sender as read and archive them.

  The script will apply the same actions (mark as read, and archive) to the email labeled fitler.

  For this function to run correctly you must enable the Advanced Gmail Service
  see: https://developers.google.com/apps-script/advanced/gmail
*/
function createFilters() {
  // Wrap the entire function in a try / catch, in case there is an error, log it.
  try {

    // Get the most recent 50 threads in your inbox
    var threads = GmailApp.search("in:inbox", 0, 50);

    // If there are threads
    if (threads.length > 0) {

      // For each thread
      for (var t=threads.length-1; t>=0; t--) {

        // Get the labels of the thread
        var labels = threads[t].getLabels();

        // For each label
        for (var i in labels) {

          // If the label name is 'filter'
          // If you'd like to use a different filter name, just change the string 'filter' below to whatever you want.
          if (labels[i].getName() == 'filter') {

            // Get the current thread we are iterating over
            var thread = threads[t];

            // Get the first message in the thread
            var message = thread.getMessages()[0];

            // Get the sender's email address
            var from = message.getFrom();

            // Create a new filter object
            var filter = Gmail.newFilter();

            /*
               Filters in gmail have criteria
               The criteria is the basis on which the filter is applied (e.g. the rule that enables the filter's action).
               In this case the criteria is that the email is sent from the same address as the sender of the current thread.
            */
            filter.criteria = Gmail.newFilterCriteria();
            filter.criteria.from = from;

            /*
               Filters in gmail have actions
               The action is what will be performed when the criteria is met.
               In this case the action is that the email is marked as read and archived.
            */
            filter.action = Gmail.newFilterAction();
            filter.action.removeLabelIds = ['INBOX', 'UNREAD'];

            // Log that the filter was created
            Logger.log("Creating Filter " + message.getDate() + "::" + message.getSubject() + " :: " + from);

            /*
              get the email address of the person whose account is running the script
              In my case, this would be me. In your case, this will be your email.
              We could also just use the string 'myemail@example.com', but I'm trying to avoid putting my personal email
              in this code.
            */
            var me = Session.getEffectiveUser().getEmail();

            // Create the filter
            Gmail.Users.Settings.Filters.create(filter, me)

            // Mark the thread as read and archive it
            thread.markRead().moveToArchive();
          }
        }
      }
    }
  } catch (e) {
    Logger.log(e.toString());
  }
}
