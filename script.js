/* 
    TODO for students
        General Setup:
            - This object is framed for you to fill out the values to help customize your game.
            - This will alter the browser to display your game title. The "Quick Notes" modal will also detail your information along with the description (desc) of what your game is about. It is important to highlight key commands that you want the player to use.
            - The startingRoomDescription will display what the player sees upon coming to your project.

        Do NOT alter the name of this object.

        Both exports are required in order for this project to run.

        - index.html should be running in your browser through the build process.
            - use your browsers console throughout testing.
*/

export const gameDetails = {   
    title: 'The Select Room Game',
    desc: 'Welcome to the world of David Sykes. Please play the game and have fun.',
    author: 'David Sykes',
    cohort: 'SBPT-May-cohort-2023',
    startingRoomDescription: 'This game is designed for you to enjoy. Please play and have fun. You can choose from the commands below to enter the different rooms. You have nine commands that are from Inspect to Play Again. Have fun and enjoy the game.',
    playerCommands: [
        // replace these with your games commands as needed
        'Inspect', 'View', 'Look', 'Pickup', 'Move','Enter','Returns', 'Finish', 'Play Again',
    ]
    // Commands are basic things that a player can do throughout the game besides possibly moving to another room. This line will populate on the footer of your game for players to reference. 
    // This shouldn't be more than 6-8 different commands.
}

// Your code here

export const domDisplay = (playerInput) => {
    /* 
        TODO: for students
        - This function must return a string.  // Working on
        - This will be the information that is displayed within the browsers game interface above the users input field.

        - This function name cannot be altered. 
        - "playerInput" is whatever text the user is typing within the input field in the browser after hitting the ENTER key.
            - test this out with a console log.

        What your player should be able to do (checklist):
            - move between rooms
            - view current room
            - pickup moveable items
                - there should be at least 2 items that cannot be moved.
            - view player inventory
        
        Stretch Goals:
            - drop items in "current room" (if a player picks up an item in one room and moves to another, they should be able to remove it from their inventory)
            - create win/lose conditions.
                - this could be a puzzle that may require an item to be within the players inventory to move forward, etc.

        HINTS:
            - consider the various methods that are available to use.
            - arrays are a great way to hold "lists".
            - You are not limited to just the exported function. Build additional functions and don't forget to hold the return within a variable.
            - Review notes!
                - Have them open as you build.
                - break down each problem into small chunks
                    - What is the process of picking up an item exactly? ex: Look. Pick from a list of items. Put into players list of items... 
    */

    // Your code here
    
    //creating objects for each room

    let room1 = {
        bigRoom:"king Size",
        littleRoom: "Smaller Room",
        sizeofRoom:"Large Room",
        roomSize:"Large Room"
    }
    let room2 = {
        bigRoom:"king Size",
        littleRoom: "Smaller Room",
        sizeofRoom:"Large Room",
        roomSize:"Large Room"
    }
    let room3 = {
        bigRoom:"king Size",
        littleRoom: "Smaller Room",
        sizeofRoom:"Large Room",
        roomSize:"Large Room"
    }
    let room4 = {
        bigRoom:"king Size",
        littleRoom: "Smaller Room",
        sizeofRoom:"Large Room",
        roomSize:"Large Room"
    }
    // Creating the classes for each room

    class runRoom{
        constructor(){
            this.inspect;
            this.desc;
        }
    }


//creating a state machine

let game = {
    big: ['Large Room'],
    smallerroom: ['lightroom'],
    largeroom: ['next to largest room', 'smaller room'],
    smallestroom: ['littlestroom']


}


    // Trying to create a function that returns a string
    
    domDisplay(inspect, view, look, pickup, move, enter, returns, Finish, playagain );{
        let playerInput = `${inspect} ${view} ${pickup} ${move} ${enter} ${returns} ${Finish}${playagain}`; 
        console.log(`Please enter in a command: ${inspect} ${view}${look}${pickup}${move}${enter}${returns}${Finish}${playagain}`);
        return "Please enter in a command"
    }
} 

