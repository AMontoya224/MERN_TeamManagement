const mongoose = require( 'mongoose' );


const PlayerSchema = new mongoose.Schema(
    {
        name: { 
            type : String,
            required : [true, 'The name is required' ],
            minlength : [2, 'The name must be at least 2 characters long']
        },
        position: { 
            type: String
        },
        status: { 
            type : Array
        }
    }, 
    { timestamps: true } 
);

module.exports.Player = mongoose.model( 'Player', PlayerSchema );