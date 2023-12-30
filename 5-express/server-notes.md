# Servers Lesson
## How the web works

### How data is transported through the web
(Slide resources from: https://course-api.com/)
![Client and server relationship](https://course-api.com/images/slides/slide-4.png)
A browser or client will send a request to a server. Requesting a piece of data on the server, which the server responds with that data. The server is responsible for serving data, sending the resource back to the client.
* Client sends HTTP Request message
* Server sends HTTP Response message

### HTTP Messages
![HTTP Messages](https://course-api.com/images/slides/slide-5.png)
The general structure for both messages are similar.

#### Request Message
* Start line
  * Method
  * URL
  * HTTP Version
* Optional Headers
  * Meta information about request
  * Key-value pairs
* Optional Body / payload
  * Reading data, request mesg does not need a body
  * Manipulating data, request mesg does need a body

#### Response Message
* Start line
  * HTTP Version
  * Status Code
    * Result of the request
  * Status Text
* Optional Headers
  * Information about our message
  * Key-value pairs
* Optional Body / payload
  * Reading data, request mesg does not need a body
  * Manipulating data, request mesg does need a body

Reminder:
> * Request Messages are sent by the client
> * Response Messages are sent by the server

#### HTTP Methods
![HTTP Methods](https://course-api.com/images/slides/slide-6.png)
Methods help us communicate what we want to do

### API VS SSR

#### API - Application Programming Intereface
In HTTP, APIs are used to set up an http interface to interact with our data. The data is sent with JSON, Javascript Object Notation.
* API - Json
* Send Data
* res.json()

#### SSR - Server Side Rendering
Setup templates and send back entire HTML, CSS, JS ourselves.
* SSR - Template
* Send Template
* res.render()