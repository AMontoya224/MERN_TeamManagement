const { Player } = require( '../models/player.model' );


const getAllPlayers = ( request, response ) => {
    Player.find( {} )
        .then( players => response.status( 200 ).json( players ) )
        .catch( err => {
            response.statusMessage = 'There was an error executing the find.';
            return response.status( 400 ).json( err ) 
        });
};

const getPlayer = ( request, response ) => {
    Player.findOne( {_id:request.params.id} )
        .then( player => response.status( 200 ).json( player ) )
        .catch( err => {
            response.statusMessage = 'There was an error executing the findOne.';
            return response.status( 400 ).json( err ) 
        });
};

const createPlayer = ( request, response ) => {
    const { name, position } = request.body;
    const status = ['Undecided', 'Undecided', 'Undecided'];

    Player.create({
        name,
        position,
        status
    })
        .then( player => response.status( 201 ).json( player ) )
        .catch( err => {
            response.statusMessage = 'There was an error executing the insert.';
            return response.status( 400 ).json( err ) 
        });
};

const updatePlayer = ( request, response ) => {
    Player.findOneAndUpdate( {_id: request.params.id}, request.body, { runValidators: true, new: true } )
        .then( updatedPlayer => response.status( 202 ).json( updatedPlayer ) )
        .catch( err => {
            response.statusMessage = 'There was an error executing the update.';
            return response.status( 400 ).json( err ) 
        });
};

const deletePlayer = ( request, response ) => {
    Player.deleteOne( { _id: request.params.id } )
        .then( () => response.status( 204 ).end() )
        .catch( err => {
            response.statusMessage = "There was an error executing the delete. ";
            return response.status( 400 ).json( err )
        });
}

const PetController = {
    getAllPlayers,
    getPlayer,
    createPlayer,
    updatePlayer,
    deletePlayer
};

module.exports = PetController;