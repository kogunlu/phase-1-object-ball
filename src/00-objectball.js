const gameObject = {
    home: {
    teamName: 'Brooklyn Nets',
    colors: ['Black', 'White'],
    players: {
        AlanAnderson: {Number: 0, Shoe: 16, Points: 22, Rebounds: 12, Assists: 12, Steals: 3, Blocks: 1, SlumDunks: 1},
        ReggieEvans: {Number: 30, Shoe: 14, Points: 12, Rebounds: 12, Assists: 12, Steals: 12, Blocks: 12, SlumDunks: 7},
        BrookLopez: {Number: 11, Shoe: 17, Points: 17, Rebounds: 19, Assists: 10, Steals: 3, Blocks: 1, SlumDunks: 15},
        MasonPlumlee: {Number: 1, Shoe: 19, Points: 26, Rebounds: 12, Assists: 6, Steals: 3, Blocks: 8, SlumDunks: 5},
        JasonTerry: {Number: 31, Shoe: 15, Points: 19, Rebounds: 2, Assists: 2, Steals: 4, Blocks: 11, SlumDunks: 1}
    }  
},
    away : {
    teamName: 'Charlotte Hornets', 
    colors: ['Turquoise', 'Purple'], 
    players: {
        JeffAdrien: { Number: 4, Shoe: 18, Points: 10, Rebounds: 1, Assists: 1, Steals: 2, Blocks: 7, SlumDunks: 2},
        BismakBiyombo: {Number: 0, Shoe: 16, Points: 12, Rebounds: 4, Assists: 7, Steals: 7, Blocks: 15, SlumDunks: 10},
        DeSagnaDiop: {Number: 2, Shoe: 14, Points: 24, Rebounds: 12, Assists: 12, Steals: 4, Blocks: 5, SlumDunks: 5},
        BenGordon: {Number: 8, Shoe: 15, Points: 33, Rebounds: 3, Assists: 2, Steals: 1, Blocks: 1, SlumDunks: 0},
        BrendanHaywood: {Number: 33, Shoe: 15, Points: 6, Rebounds: 12, Assists: 12, Steals: 22, Blocks: 5, SlumDunks: 12}
        }
    }
}


function homeTeamName(){
    return gameObject.home.teamName
}

function numPointsScored(playerName){
   const playersListHome = gameObject.home.players
   const playersListAway = gameObject.away.players


    if(playerName in playersListHome){
        if(playerName === 'AlanAnderson'){
            return playersListHome.AlanAnderson.Points
        }else if(playerName === 'ReggieEvans'){
            return playersListHome.ReggieEvans.Points
        }else if(playerName === 'JasonTerry'){
            return playersListHome.JasonTerry.Points
        }else if(playerName === 'BrookLopez'){
            return playersListHome.BrookLopez.Points
        }else if(playerName === 'MasonPlumlee'){
            return playersListHome.MasonPlumlee.Points
        }
    }else if(playerName in playersListAway){
        if(playerName === 'JeffAdrien'){
            return playersListAway.JeffAdrien.Points
        }else if(playerName === 'BismakBiyombo'){
            return playersListAway.BismakBiyombo.Points
        }else if(playerName === 'DeSagnaDiop'){
            return playersListAway.DeSagnaDiop.Points
        }else if(playerName === 'BenGordon'){
            return playersListAway.BenGordon.Points
        }else if(playerName === 'BrendanHaywood'){
            return playersListAway.BrendanHaywood.Points
        }
    }
}

function shoeSize(playerName){
    const playersListHome = gameObject.home.players
    const playersListAway = gameObject.away.players


    if(playerName in playersListHome){
        if(playerName === 'AlanAnderson'){
            return playersListHome.AlanAnderson.Shoe
        }else if(playerName === 'ReggieEvans'){
            return playersListHome.ReggieEvans.Shoe
        }else if(playerName === 'JasonTerry'){
            return playersListHome.JasonTerry.Shoe
        }else if(playerName === 'BrookLopez'){
            return playersListHome.BrookLopez.Shoe
        }else if(playerName === 'MasonPlumlee'){
            return playersListHome.MasonPlumlee.Shoe
        }
    }else if(playerName in playersListAway){
        if(playerName === 'JeffAdrien'){
            return playersListAway.JeffAdrien.Shoe
        }else if(playerName === 'BismakBiyombo'){
            return playersListAway.BismakBiyombo.Shoe
        }else if(playerName === 'DeSagnaDiop'){
            return playersListAway.DeSagnaDiop.Shoe
        }else if(playerName === 'BenGordon'){
            return playersListAway.BenGordon.Shoe
        }else if(playerName === 'BrendanHaywood'){
            return playersListAway.BrendanHaywood.Shoe
        }
    }
}

function teamColors(teamName){
    if(teamName === gameObject.home.teamName){
        return gameObject.home.colors
    }else if(teamName === gameObject.away.teamName){
        return gameObject.away.colors
    }
}

function playerNumbers(teamName){
    const playersListHome = gameObject.home.players
    const playersListAway = gameObject.away.players
    if(teamName === gameObject.home.teamName){
        return [playersListHome.AlanAnderson.Number, playersListHome.BrookLopez.Number, playersListHome.JasonTerry.Number, playersListHome.MasonPlumlee.Number, playersListHome.ReggieEvans.Number]
    }else if (teamName === gameObject.away.teamName){
        return [playersListAway.BenGordon.Number, playersListAway.BismakBiyombo.Number, playersListAway.BrendanHaywood.Number, playersListAway.DeSagnaDiop.Number, playersListAway.JeffAdrien.Number]
    }
}

function playerStats(playerName){
    const playersListHome = gameObject.home.players
    const playersListAway = gameObject.away.players

    if(playerName in playersListHome){
        if(playerName === 'AlanAnderson'){
            return playersListHome.AlanAnderson
        }else if(playerName === 'ReggieEvans'){
            return playersListHome.ReggieEvans
        }else if(playerName === 'JasonTerry'){
            return playersListHome.JasonTerry
        }else if(playerName === 'BrookLopez'){
            return playersListHome.BrookLopez
        }else if(playerName === 'MasonPlumlee'){
            return playersListHome.MasonPlumlee
        }
    }else if(playerName in playersListAway){
        if(playerName === 'JeffAdrien'){
            return playersListAway.JeffAdrien
        }else if(playerName === 'BismakBiyombo'){
            return playersListAway.BismakBiyombo
        }else if(playerName === 'DeSagnaDiop'){
            return playersListAway.DeSagnaDiop
        }else if(playerName === 'BenGordon'){
            return playersListAway.BenGordon
        }else if(playerName === 'BrendanHaywood'){
            return playersListAway.BrendanHaywood
        }
    }
}

function bigShoeRebounds(){
    const shoeNumbersOfHome = (Object.values(gameObject.home.players).map(function(item){
        return(item.Shoe)
    }))// We got shoe numbers of all players in home team
    
    const biggestShoeOfHomePlayers = shoeNumbersOfHome.reduce( (preValue, curValue) => {
        if(preValue > curValue){
            return preValue
        }else{
            return curValue
        }
    })// We found the biggest number of shoe numbers in home team

    const shoeNumbersOfAway = (Object.values(gameObject.away.players).map(function(item){
        return(item.Shoe)
    }))
    
    const biggestShoeOfAwayPlayers = shoeNumbersOfAway.reduce( (preValue, curValue) => {
        if(preValue > curValue){
            return preValue
        }else{
            return curValue
        }
    })

    if(biggestShoeOfHomePlayers > biggestShoeOfAwayPlayers){
        const shoeOwnersStats = Object.values(gameObject.home.players).find(function(item){
            if(item.Shoe === biggestShoeOfHomePlayers){
                return item.Rebounds
            }
        })
        return `Biggest shoe number is: ${biggestShoeOfHomePlayers} and his rebound socre is: ${shoeOwnersStats.Rebounds}`
    }else{
        const shoeOwnersStats = Object.values(gameObject.away.players).find(function(item){
            if(item.Shoe === biggestShoeOfAwayPlayers){
                return item.Rebounds
            }
        })
        return `Biggest shoe number is: ${biggestShoeOfAwayPlayers} and his rebound socre is: ${shoeOwnersStats.Rebounds}`
    } //We found rebound score of biggest shoe owner. 
}

function mostPointsScored(){
    const biggestScoreHome = Object.values(gameObject.home.players).map(function(item){
        return item.Points // We returned an array of scores belong to each player
    }).reduce(function(value1, value2){
        if(value1 > value2){
            return value1
        }else{
            return value2
        }
    },0)        // We returned the biggest among those scores.

    const whoseScoreIsThisHome = Object.values(gameObject.home.players).find((item) => {
        if(item.Points === biggestScoreHome){
            return item
        }
    })      // We returned the whole stats of the most scored person since this stats are VALUE and player name is KEY

    function getKeyByValue(object,value){
        return Object.keys(object).find(key => object[key] === value)
    }       // We created a function that finds the key (playerName in our case) by looking value (whole stats in our case) in an object(home.players)

    const mostScoredPlayerHome = getKeyByValue(gameObject.home.players,whoseScoreIsThisHome)  // By using the function, we found who is this person in home team

    const biggestScoreAway = Object.values(gameObject.away.players).map(function(item){
        return item.Points // We returned an array of scores belong to each player
    }).reduce(function(value1, value2){
        if(value1 > value2){
            return value1
        }else{
            return value2
        }
    },0)   

    const whoseScoreIsThisAway = Object.values(gameObject.away.players).find((item) => {
        if(item.Points === biggestScoreAway){
            return item
        }
    })     

    const mostScoredPlayerAway = getKeyByValue(gameObject.away.players,whoseScoreIsThisAway) 

    if(biggestScoreHome > biggestScoreAway){
        return `Most scored person is ${mostScoredPlayerHome} from Home Team with ${biggestScoreHome} points` 
    }else{
        return `Most scored person is ${mostScoredPlayerAway} from Away Team with ${biggestScoreAway} points` 
    }
}

function winningTeam(){
    const pointsOfHome = Object.values(gameObject.home.players).map(function(player){
        return player.Points        // We returned an array which includes each players score number
    }).reduce(function(preValue,curValue){
        return preValue + curValue      // We returned a value which is total of these scores.
    },0)

    const pointsOfAway = Object.values(gameObject.away.players).map(function(player){
        return player.Points        // We returned an array which includes each players score number
    }).reduce(function(preValue,curValue){
        return preValue + curValue      // We returned a value which is total of these scores.
    },0)

    if(pointsOfHome > pointsOfAway){
        return `Winner is home team! Their score is: ${pointsOfHome}`
    }else if(pointsOfAway > pointsOfHome){
        return `Winner is away team! Their score is: ${pointsOfAway}`
    }else{
        return 'Scores are equal! What a match..'
    }

}

function playerWithLongestName(){
    const longestNameHome = Object.keys(gameObject.home.players).map(function(nameOfPlayer){
        return nameOfPlayer.length  // We created an array which has lengths of names in home team
    }).reduce(function(length1, length2){
        if(length1 > length2){
            return length1
        }else{
            return length2
        }
    },0)        // We found the longest one 

    const longestNameAway = Object.keys(gameObject.away.players).map(function(nameOfPlayer){
        return nameOfPlayer.length  
    }).reduce(function(length1, length2){
        if(length1 > length2){
            return length1
        }else{
            return length2
        }
    },0)      

    function whoseNameIsThisHome(number){
      return Object.keys(gameObject.home.players).find(function(item){
            if(item.length === number ){
                return item
            }
        })
    } // We created a function to find the owner of the longest name
    function whoseNameIsThisAway(number){
        return Object.keys(gameObject.away.players).find(function(item){
              if(item.length === number ){
                  return item
              }
          })
      }

    if(longestNameHome > longestNameAway){
        //return `The longest name belongs to: ${whoseNameIsThisHome(longestNameHome)} from Home team with ${longestNameHome} chars `
        return whoseNameIsThisHome(longestNameHome)
    }else{
       // return `The longest name belongs to: ${whoseNameIsThisAway(longestNameAway)} from Away team with ${longestNameAway} chars `
       return whoseNameIsThisAway(longestNameAway)
    }
    
}

function doesLongNameStealATon(){
    if(playerWithLongestName() === mostStealPlayer()){
        return true
    }else{
        return false
    }
}

function mostStealPlayer(){
    const mostStealHome = Object.values(gameObject.home.players).map(function(item){
        return item.Steals // We returned an array of steals belong to each player
    }).reduce(function(value1, value2){
        if(value1 > value2){
            return value1
        }else{
            return value2
        }
    },0)        // We returned the biggest among those steals

    const whoIsThisSteallerHome = Object.values(gameObject.home.players).find((item) => {
        if(item.Steals === mostStealHome){
            return item
        }
    })      // We returned the whole stats of the most stealer person since this stats are VALUE and player name is KEY

    function getKeyByValue(object,value){
        return Object.keys(object).find(key => object[key] === value)
    }       // We created a function that finds the key (playerName in our case) by looking value (whole stats in our case) in an object(home.players)

    const mostStealedPlayerHome = getKeyByValue(gameObject.home.players, whoIsThisSteallerHome)  // By using the function, we found who is this person in home team

    const mostStealAway = Object.values(gameObject.away.players).map(function(item){
        return item.Steals // We returned an array of scores belong to each player
    }).reduce(function(value1, value2){
        if(value1 > value2){
            return value1
        }else{
            return value2
        }
    },0)   

    const whoIsThisSteallerAway = Object.values(gameObject.away.players).find((item) => {
        if(item.Steals === mostStealAway){
            return item
        }
    })     

    const mostStealedPlayerAway = getKeyByValue(gameObject.away.players,whoIsThisSteallerAway) 

    if(mostStealHome > mostStealAway){
        return mostStealedPlayerHome
    }else{
        return  mostStealedPlayerAway
    }
}

// node ./src/00-objectball.js 

console.log(doesLongNameStealATon())    // True!
