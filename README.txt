***CONTROLS***
 
***SOCKET.IO***
This section serves as a brief introduction to socket.io. This application handles client to client communication by passing information along the path of Client1=>Server=>Client2. The data is passed using socket.io. You will notice that inside the app.js file there is a section that resembles:
 
io.on('connection, function(socket){
	************************
	socket.on('event'), function(data){
 
	});
	socket.on('disconnect', function(){
	************************
	});
});
 
This is where we will be focusing for now, specifically on the portion:
 
socket.on('event'), function(data){
***misc code***
});
 
This is how socket.io handles events, with a listener. socket.on('event') means that when the event 'event' occurs, this section will be triggered and run the next section, being ,function(data){. The function is what you would expect, just declaring the function below it. The bit inside the () is more important. This is where the variable is indicated. Events can be emitted along with data that can be used. An example would be if you emitted an event called 'numbers' and sent along the values 1, 2, and 3. This could be listened for with:
 
socket.on('numbers'), function(x,y,z){
 
In summary, the first line is simply detecting the event if it matches, then knowing to look for data sent with it. Within the {} is the code to go with the function. In our app nearly all the decision making and such is handled client side, and as such most of the listeners simply emitted a new event when triggered. Event emitters is the other half of socket.io, they emit the events that the listeners are listening for. There are a few type of emitters, such as:
 
1. socket.broadcast.emit('event', data);
 
2. socket.emit('event', data);
 
3. io.emit('event', data);
 
The first thing to notice is the area within the () is the same for each. The first value, 'event', is the name of the event being emitted. This should match the 'event' area on the listener you want to trigger. The second is data, and can actually be much larger when needed, to follow with the numbers example above:
 
socket.broadcast.emit('numbers', 1, 2, 3);
 
Now the differences. Emitter #1 is the one used (as of now) in the app, and the keyword broadcast (on the server side) tells the server to only emit the event to the clients that did not trigger the listener. In example:
 
Client 1 emits an event using -
	x = 3;
	socket.emit('eventA', x);
 
Server hears event using -
	socket.on('eventA', function(data){
	socket.broadcast.emit('eventB', data);
	});
 
This means that even though Client 1 and Client 2 have the listener -
	socket.on('eventB', function(data){
	y = data;
	});
 
Only Client 2 will have its y variable set to the value of 3.
 
This will most likely be the one you need, however onto the others. Emitter #2 (again, on the server side) will mean the event will only be sent to the client who triggered the listener. Emitter #3 (server only) will emit the event to any and all connected sockets when triggered, regardless of which socket triggered it.
 
If you want to emit an event from the client side, it's the same as in the above example, or:
 
socket.emit('event', data);
 
This will emit an event to be detected solely by the server. 
 
It should be noted that while I described how the io.emit and socket.broadcast.emit emitters work server side, I never actually thought to try them client side. So while I assume it would cause errors, it might work in it's own unique way. 




***DATABASE***

The database itself is not very complicated. Join statements will come about through the image attribute. The database can be made with any schema, so long as the app.js query code accurately reflects this.
Image attribute is a varchar (variable character) field that will hold the URL of the image itself. I recommend getting a cloud storage service such as S3 (AWS) in order to store the images,
and having the database refer to the URLs produced by the storage service. Currently, the database is divided by card type, with table consisting of the relevant information for each accordingly.
As stated before this design is not hard set, and can be modified to your preference or specification. In order to make the query process more efficient, please use the Java file in the 'Database'
folder of the project. This folder will also contain the database itself, along with the CSV files for each card type. 




