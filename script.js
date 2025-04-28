const parValues = [4, 5, 4, 3, 4, 3, 4, 5, 4, 4, 4, 3, 5, 4, 5, 3, 4, 4];

const players = [
  {
    id: 1,
    name: "Scottie Scheffler",
    country: "🇺🇸 United States",
    description: "World No. 1 golfer known for his consistent performance on the PGA Tour.",
    image: "/Users/khatran/Desktop/GDE426 - Final Project/playerImages/ScottieS.jpeg",
    position: 1,
    total: "-11",
    thru: "F",
    scores: {
      1: [4, 3, 6, 4, 3, 3, 3, 4, 4, 4, 4, 4, 4, 3, 5, 3, 4, 4],
      2: [4, 5, 4, 2, 4, 4, 4, 5, 3, 4, 4, 2, 5, 4, 5, 3, 5, 4],
      3: [3, 5, 5, 3, 5, 3, 4, 5, 4, 4, 5, 3, 6, 4, 5, 3, 4, 5],
      4: [4, 4, 3, 3, 4, 3, 4, 5, 4, 4, 4, 2, 5, 4, 5, 2, 4, 3]
    }
  },
  {
    id: 2,
    name: "Rory McIlroy",
    country: "🇬🇧 Northern Ireland",
    description: "Four-time major champion with a powerful driving game.",
    image: "/Users/khatran/Desktop/GDE426 - Final Project/playerImages/RoryM.jpeg",
    position: 3,
    total: "-8",
    thru: "F",
    scores: {
      1: [4, 4, 4, 3, 4, 3, 4, 5, 4, 4, 4, 3, 5, 4, 5, 3, 4, 4],
      2: [4, 5, 4, 3, 4, 3, 4, 5, 4, 4, 4, 3, 5, 4, 5, 3, 4, 4],
      3: [3, 4, 4, 2, 4, 2, 4, 4, 3, 4, 4, 2, 5, 3, 4, 2, 3, 3],
      4: [4, 5, 4, 3, 5, 3, 4, 5, 4, 5, 4, 3, 5, 4, 5, 3, 4, 4]
    }
  },
  {
    id: 3,
    name: "Jon Rahm",
    country: "🇪🇸 Spain",
    description: "Powerful player with multiple major championships.",
    image: "/Users/khatran/Desktop/GDE426 - Final Project/playerImages/JonR.jpeg",
    position: 5,
    total: "-5",
    thru: "F",
    scores: {
      1: [4, 5, 4, 3, 4, 3, 4, 5, 4, 4, 4, 3, 5, 4, 5, 3, 4, 4],
      2: [4, 5, 5, 3, 5, 3, 4, 5, 4, 4, 5, 3, 6, 4, 5, 3, 4, 5],
      3: [3, 4, 4, 2, 4, 2, 4, 4, 3, 4, 4, 2, 5, 3, 4, 2, 3, 3],
      4: [4, 5, 4, 3, 5, 3, 4, 5, 4, 5, 4, 3, 5, 4, 5, 3, 4, 4]
    }
  }
];

const holeData = {
    1: {
      name: "Tea Olive",
      image: "/Users/khatran/Desktop/GDE426 - Final Project/holeImages/hole-map-1.jpg",
      description: "The Masters requires precision from the first shot on No. 1. The perfect tee shot will either carry the bunker on the right side or safely find the fairway to the left of it. The most penal misses off the tee on 'Tea Olive' are in the wooded areas on either side of the fairway, but particularly on the right side."
    },
    2: {
      name: "Pink Dogwood",
      image: "/Users/khatran/Desktop/GDE426 - Final Project/holeImages/hole-map-2.jpg",
      description: "As one of the best scoring opportunities on the course, hitting the fairway on No. 2 is imperative. Misses on the left side will encounter a steep slope into the adjacent trees and could bring bogey or worse into play. However, a successful gamble on the left side of the fairway could be rewarded with a middle-iron into the green after a roll down the hill."
    },
    3: {
        name: "Flowering Peach",
        image: "/Users/khatran/Desktop/GDE426 - Final Project/holeImages/hole-map-3.jpg",
        description: "Many players will opt to hit driver on the short par-4 third with the majority of tee shots ending up 50-60 yards short of the green. From there, birdies can be had, but misses in the fairway bunkers or in the trees right of the fairway make this a very difficult hole."
      },
      4: {
        name: "Flowering Crab Apple",
        image: "/Users/khatran/Desktop/GDE426 - Final Project/holeImages/hole-map-4.jpg",
        description: "Correctly judging the wind is paramount on 'Flowering Crab Apple'. Par can be saved from the greenside bunkers, but the difficulty depends on the day's hole location."
      },
      5: {
        name: "Magnolia",
        image: "/Users/khatran/Desktop/GDE426 - Final Project/holeImages/hole-map-5.jpg",
        description: "The primary goal from the tee box on No. 5 is to avoid the penal fairway bunkers, the depths of which make it very difficult to advance the ball toward the green with the second shot. Few players can carry these bunkers off the tee, so many opt to hit less than driver to take them out of play, which leaves a longer approach."
      },
      6: {
        name: "Juniper",
        image: "/Users/khatran/Desktop/GDE426 - Final Project/holeImages/hole-map-6.jpg",
        description: "The downhill tee shot at No. 6 plays 7 to 8 yards shorter than the 180 yards listed on the scorecard. The strategy on this hole is heavily influenced by the hole location, but misses long are generally better as players benefit from the flatter chipping area beyond the green."
      },
      7: {
        name: "Pampas",
        image: "/Users/khatran/Desktop/GDE426 - Final Project/holeImages/hole-map-7.jpg",
        description: "“Pampas” presents a real birdie opportunity for players who find the fairway off the tee. The fairway slopes from left to right, directing tee shots toward the right side and the adjacent trees. From there, a special approach is required to earn a birdie chance."
      },
      8: {
        name: "Yellow Jasmine",
        image: "/Users/khatran/Desktop/GDE426 - Final Project/holeImages/hole-map-8.jpg",
        description: "Length off the tee on No. 8 is a big advantage in reaching this par 5 in two. The ideal tee shot will safely find the left side of the fairway, and aggressive drives will play closer to the fairway bunker to leave the best possible angle into the green for the second shot."
      },
      9: {
        name: "Carolina Cherry",
        image: "/Users/khatran/Desktop/GDE426 - Final Project/holeImages/hole-map-9.jpg",
        description: "The final tee shot of the first nine favors a right-to-left shot shape to follow the contours of the fairway. Misses in the right trees offer better sight lines toward the green, but misses left of the ninth fairway usually leave players with little chance of reaching the green in regulation."
      },
      10: {
        name: "Camellia",
        image: "/Users/khatran/Desktop/GDE426 - Final Project/holeImages/hole-map-10.jpg",
        description: "Much like the previous hole, the ideal opening tee shot of the second nine will move from right-to-left to follow the shape of the 10th fairway. Accurate tee shots can take advantage of a speed slot in the fairway to leave a short iron into the elevated green. Heavily wooded areas flank both sides of the fairway, making accuracy off the tee a priority."
      },
      11: {
        name: "White Dogwood",
        image: "/Users/khatran/Desktop/GDE426 - Final Project/holeImages/hole-map-11.jpg",
        description: "No. 11 has historically played as the most difficult hole at the Masters Tournament, and it starts with an exacting tee shot. The ideal tee drive will travel more than 325 yards up the left side of the fairway. Power off the tee helps on “White Dogwood.” When a player is between 175 and 200 yards out on the left side, he has a 77% chance of making par or better. When a player is 200 yards to 225 yards out his chances of making bogey increase from 18% to 25%."
      },
      12: {
        name: "Golden Bell",
        image: "/Users/khatran/Desktop/GDE426 - Final Project/holeImages/hole-map-12.jpg",
        description: "On No. 12, the wind and hole location are the two points of emphasis for what is the shortest tee shot at the Masters. Just 51% of players hit the green in regulation on this hole to give themselves a birdie putt. The safe play is to find the middle of the green, safely carrying the front bunker. But even shots that find the sand are preferable to catching the grassy slope in front of the green that almost always deposits the ball into Rae's Creek."
      },
      13: {
        name: "Azalea",
        image: "/Users/khatran/Desktop/GDE426 - Final Project/holeImages/hole-map-13.jpg",
        description: "The first real scoring opportunity on the second nine, “Azalea” provides the ultimate risk-reward opportunity. Players who successfully hug the left treeline with their tee shot are rewarded with a flatter lie and a shorter approach to the green, but a tributary of Rae's Creek will errant drives that drift too far to the left. The safer shot is to aim right, but this leaves a longer approach from the steep slope that frames the right side of the fairway. The No. 13 has historically played as the third-easiest hole at Augusta National with 39% of players making birdie or better."
      },
      14: {
        name: "Chinese Fir",
        image: "/Users/khatran/Desktop/GDE426 - Final Project/holeImages/hole-map-14.jpg",
        description: "On No. 14, players who find the fairway are rewarded with a great scoring opportunity, but those who are forced to play from the trees that line either side of “Chinese Fir” will gladly take par and move on. Driver is not required off the tee for the longer hitters as the ideal target is 290 yards out in the left-center of the fairway. From there, players have an 88% chance of making par or better."
      },
      15: {
        name: "Firethorn",
        image: "/Users/khatran/Desktop/GDE426 - Final Project/holeImages/hole-map-15.jpg",
        description: "On No. 15, the goal is to drive the ball up the right half of the fairway to avoid maneuvering past the trees along the left side on the second shot. Players that drive the ball 300-plus yards will see their birdie odds jump from 29% to 58% by finding the right side of the fairway versus the center. On the other side, drives that end up short of the trees on the left side result in a birdie or better only 31% of the time."
      },
      16: {
        name: "Redbud",
        image: "/Users/khatran/Desktop/GDE426 - Final Project/holeImages/hole-map-16.jpg",
        description: "The strategy on the 16th tee is determined by the day's wind and hole location, but hitting the green is paramount. The pond in front of the green punishes any shots that come up short, so long and right of the putting surface are generally the safest places to miss."
      },
      17: {
        name: "Nandina",
        image: "/Users/khatran/Desktop/GDE426 - Final Project/holeImages/hole-map-17.jpg",
        description: "The tee shot on No. 17 is predominantly uphill and straight through a chute of trees. The goal is simple: find the center of the fairway - particularly the right center where the lie is the flattest. From there, a player has a 72% chance of making par or better"
      },
      18: {
        name: "Holly",
        image: "/Users/khatran/Desktop/GDE426 - Final Project/holeImages/hole-map-18.jpg",
        description: "The finishing hole at Augusta National presents perhaps the narrowest tee shot on the golf course. The trees on either side of the 18th fairway frame a small target area between the fairway bunkers and the right treeline. Some players will hit less than driver to take these bunkers out of play, but the ideal tee shot will challenge them to get a clear view of the uphill second shot into the green."
      }
  };
  
  let currentHole = 1;
  
  function updateHoleView() {
    const hole = holeData[currentHole];
    $('#current-hole').text(currentHole);
    $('#hole-name').text(hole.name);
    $('#hole-image').attr('src', hole.image);
    $('#hole-image').attr('alt', `Augusta National Hole ${currentHole}: ${hole.name}`);
    $('#hole-description').text(hole.description);
  }

let currentPlayer = players[0];
let currentRound = 1;

function renderScorecard() {
  const scores = currentPlayer.scores[currentRound];
  const total = scores.reduce((a, b) => a + b, 0);

  $('#par-row').html('<td>Par</td>' + parValues.map((p, i) => `<td data-hole="${i+1}">${p}</td>`).join('') + '<td>-</td>');

  const scoreCells = scores.map((score, i) => {
    const par = parValues[i];
    let className = 'par';
    if (score === par - 2) className = 'eagle';
    else if (score === par - 1) className = 'birdie';
    else if (score === par + 1) className = 'bogey';
    else if (score >= par + 2) className = 'double-bogey';
    return `<td class="hole-score ${className}" data-hole="${i+1}">${score}</td>`;
  }).join('');

  $('#score-row').html(`<td>R${currentRound}</td>${scoreCells}<td>${total}</td>`);
}

function updatePlayerInfo() {
  $('#player-name').text(currentPlayer.name);
  $('#player-country').text(currentPlayer.country);
  $('#player-desc').text(currentPlayer.description);
  $('#player-img').attr('src', currentPlayer.image);
  $('#player-position').text(currentPlayer.position);
  $('#player-total').text(currentPlayer.total);
  $('#player-thru').text(currentPlayer.thru);
}

function populatePlayerDropdown() {
  const dropdown = $('#player-dropdown');
  dropdown.empty();
  dropdown.append('<option value="">-- Select a Player --</option>');
  
  players.forEach(player => {
    dropdown.append(`<option value="${player.id}">${player.name}</option>`);
  });
  
  dropdown.val(currentPlayer.id);
}

$(document).ready(function () {
  populatePlayerDropdown();
  updatePlayerInfo();
  renderScorecard();
  
  $('#round-dropdown').on('change', function () {
    currentRound = Number($(this).val());
    renderScorecard();
  });
  
  $('#player-dropdown').on('change', function () {
    const playerId = Number($(this).val());
    if (playerId) {
      currentPlayer = players.find(p => p.id === playerId);
      updatePlayerInfo();
      renderScorecard();
    }
  });

  updateHoleView();
  
  // Hole navigation
  $('#prev-hole').click(function() {
    currentHole = currentHole > 1 ? currentHole - 1 : 18;
    updateHoleView();
  });
  
  $('#next-hole').click(function() {
    currentHole = currentHole < 18 ? currentHole + 1 : 1;
    updateHoleView();
  });
  
  // Make hole numbers clickable in scorecard
  $('#scorecard').on('click', 'td[data-hole]', function() {
    currentHole = parseInt($(this).attr('data-hole'));
    updateHoleView();
  });
  
});