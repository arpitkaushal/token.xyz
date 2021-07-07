# v1.0 - implementation discussion - also recorded 

To do 
- next token number kaise assign hoga  blocking/non blocking - simulatenous hits kaise handle hoga
- unique qr se claim karna ek token wali request ko
- node.js ki padhai / flask me kar lo bhai nahi to jo mann ho
- collections 
- some links
  - on multithreadedness of node - https://blog.logrocket.com/node-js-multithreading-what-are-worker-threads-and-why-do-they-matter-48ab102f8b10/
  - https://nodejs.org/en/docs/guides/blocking-vs-non-blocking/


mongoDB schema - 
baseURL = token.xyz/event/

whenever we want to mark an activity as end - GET "/tokennumber/end" - requires login of the admin

**event object** is bound to a user id
{
    "start time": "",
    "end time" : "",
    "totalTokens" : ""
    "token" : [
        "token object 1",
        "token object 2",
    ]
}

v1.1 with microservices
end points 
new qr generated - admin wali side se hit hoga - kinda of automatically once the last qr was fetched by token i-1
the above qr is verified/claimed - this happens when user submits the form with this unique string embeded in form data


**token object**
{
    <!-- "unique string/ object id" : "embedded in qr link ", keep it decoupled from the db, some microservice v0.1 mein object me daal ke rakh do-->
    "claimed":"",
    "registered time" : "jis time pe bande ne scan kar ke submit kiya tha",
    "token" : "jo bhi token number hai, kuch glocal variable + 1",
    "otp" : "5 letter digit to uniquely identify a person",
    "serving time start" : " ye initially balnk hai, aur fir jab admin ne kha ki ha ye aa gaya=, and i'm serving him now, then he hits the button that is mapped to GET "\token\start" and it needs the admin to be logged in (cookies and authentication) time pe admin ke paas vo banda physically pohocha",
    "end time" : "ye bhi intially blank hai, when the admin presses green button for end mapped to GET "\token\end" and then hum db me aakar update kar dete hai ye wala field",
    "details set by the admin" : { // fields can be optional, a user could choose to enter no data, and still be assigned a token
        "phone number":"bascially hamara form jo appear hota hai after scanning the qr, ye wala to optional bhi ho sakta hai"   // ye by default ek field rahega
        "foo" : "bar",  // admin ne baad me jo bhi add kiya
        "hee" : "lo"    // admin added
    },
    <!-- "time elapsed" : "after the event is ended, `end time - start time`", -->
}




# server implementation doubt

Requests    - >  HTTP Server (Hosting Platform)
                5
                 Thread // Mihir
                    Node.js
                Thread  // Arpit
                    Node.js 

        app.js

        x = 1

        def landpage_page(form):
            x = form[val]


non blocking db 



















# v2.0 - features discussion - recorded on OBS
on hitting token.xyz a person should be able to just start an event. Basically our URL should allow someone to create an event instantly. 
Okay we can have a button that says "Create Event" and an input box that says "join an existing event" and we could enter something like "midas" to join the event. However just going over would let us check the event queue and not actually enter ourselves into the queue.
we can enter the queue but only if we're authorized (so maybe like we can have version of token.xyz with google login where people sign in using their organization id. And in this organization, like our own college, we can have midas, 2degree, teapost, all these events on the dashboard and can just enter in the queue given we have made the payment before hand??) okay this can extend to become an ultraProMax version of token.xyz for which we'll have to extend the functionality

49*3/60

Grocers pe pehle se book akrke aana organisation mein? is our app useful?

mcdonald's in an organization, very fast takeways and walkins both avialble, how to handle, how to keep users dated. - doctors ki book keeping, we're not better than zomato, but we're a customizable zomato, custom stats as plugin, custom 


semster registration - allow admin to add more fields at time of registratoin, people after scanning qr they enter all their info as requested by the admin, and then they get assigned a token number. 


presets rakh sakte - barber, doctor, restaturant, student afairs office - you can still customize these presets, else you have your blank slate  - basically google forms with live telecasting. in case of mcdonalds, this google form is erved by different websites which they handle later via their delivery persons.