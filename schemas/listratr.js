// listr=listratr=user
// schema

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var ListRatr = mongoose.model('ListRatr', new Schema ({
	// basic information
	id : ObjectId,
	email : String,
	firstName : String,
	lastName : String,
	dateJoined : Date,
	profilePicture : {type : String, default : ""},
	// auth
	password : String,

	//* LIST INFORMATION *//
	
	// array of listId
	lists : [ObjectId],
	// array of listId the listratr likes
	likes : [ObjectId],
	// list listratr has voted
	votes : {
		// array of listId listratr has updvoted
		up : [ObjectId],
		// array of listId listratr has updvoted
		down : [ObjectId]
	},

	// ouath information
	facebook  : {
	        isLinked : {
	        	type : Boolean,
	        	default : false
	        },
	        profile : Object,
	        accessToken : String,
	        refreshToken : String
	},
	// nComments is the total number of comments accross 
	// all items in the list
	nComments : {
		type : Number,
		default : 0
	},
	comments : [{type : ObjectId}]
}));

module.exports = ListRatr;