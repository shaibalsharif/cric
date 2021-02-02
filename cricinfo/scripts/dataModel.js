var cricInfoDataModel = {
    wicket: 10,
    ball: 120,
    initValue: {
        balls: 0,
        runs: 0,
        wickets: 0
    }
};
var comm=[];

var currentGameData = {
    mainScore: {
        wickets: 0,
        balls: 0,
        runs: 0
    },
    commentry: [],
    winnigTeam: "",
    losing: "",
    tossWinner: "",
    runRate: 0.0
};

var oldGamesData = [];