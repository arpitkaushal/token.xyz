Backend - 
Database Choice - mongoDB
    1. Queue implementation
       1. `Dynamic` - 
    2. User Data Store


Event
Admin
Customers - SMS token.xyz/midas/123
    1. Secret (appended with the SMS, and also available to the admin) - Privacy (option) - SMS what your alias is. 
       1. Why do we need it at all? Like a password thingy.
       2. To handle someone faking `token SMS` from our service
       3. Alias - Join some random wholesome 2-3 words  (like a new repl )
       4. optional ( feel like this should be mandatory ) feature for admin - whereever you need some authentication
       5. Add on option for custom alias? (System alais will still stay)
       6. Alternative to point 5, admin ka rough location from their IP ( South India or North India)
    2. Customer screen will only show token numbers - not name or alias or anything




Frontend 

1. Admin
   1. His activity would be significantly larger - real time connection with the database
      1. But on the customer side, we want to minimize that.
   2. Ways to get a token?
      1. Manually entries should be available on admin side
      2. QR Code - with secret and token encoded - what is it? It is just a URL.
         1. sample url : `token.xyz/midas?token=103&unique=sadoiSAdsaFSAfasd` we also have an alias object with a token number, parameter : `claimed`, `served`,`token`, `secret`,`alias/password`
            1. involving the token in URL parmas is bad in the case where people just hoard QRs and don't fill anything, can be selling in the black. 
            2. token should be assigned to this object after the customer confirms
         2. We scanned the QR, and we're (cutomer) redirected to a page where they enter some contact info (where they'll get a confimation).
            1. Scanend the QR, redirected to page - very small page, minimal, just two (one for getting the QR URL, and second for confirming that thier token has been assigned, show SMS info on this screen as well - and recomend them to take a screenshot) GET req, and one post request
            2. What if they're slow? They open the page and don't enter info.
            3. When they enter their info and confirm, on admin side we shows ki token was availed successfully and then the new QR is generated.
            4. Cancel option on token, below it. 
         3. Secret is generated for every token object.
2. Customer
   1. Token number 
      1. Currently active token number - real time implementation?? 
         1. Page refreshing? No, something like `Facebook messages on a chrome browser` - Server Push, socket.io protocol.
         2. Whenever a session with a customer ends - Inform database of the same, trigger a push to customer side of the website to update.
         3. `Time elpased` for this token - frontend logic only
      2. Their token number
         1. Estimated time for their turn
   2. Event Stats (Global) (available on scrolling up twice - specifically requested) - real time?
      1. Beause otherwise the screen would be very simple
      2. Real time? 
         1. GET requests only (for customers), so doable we think. 
         2. In order of minutes - whenever a token ends.



Remote booking??? very far fetched
1. kuch aa raha 



SMS - Think of a case where you don't even have the SMS
1. Token number
2. URL where they can see updates (token encoded) sampleURL : `token.xyz/midas/191`
3. Secret/Alias (human readable, for authentication)
   1. South India person to Hindi
   2. Or simple OTP kind of 4-5 digits

Why SMS? - Keep it optional wonly, but by default it would entered.
1. To permanently (for loss of a better word) convey the live updates page URL
   1. Non tech savvy people, saving screenshot,m and keeping tab open and all would be too much. 
2. for manual entry (customer on admin's devices) that identity can be unique.
3. The queue has changed. - Optional Switch button to get updates your turn will approximately be in 10 mins, the update to tell about changes in the queue.

So, if someone chooses not to share number - assumption  (quite valid!) - this privacy conscious person can be assumed to be tech savvy to handle our other procedure, 
   1. then on confirmation scren, we'll show them SMS wala info, and a copy button (to have it on their clipboard)
   2. Live updates page button, which opens in a new tab by default.

Product Designing is like clockwork.
Watch movie - Hugo (2001)


Form has just one field (Contact info) which is also optional. So basically just a confirm button.