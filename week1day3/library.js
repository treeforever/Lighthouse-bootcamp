var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },
  printPlaylists: function () {

             for (var key in this.playlists){
               printItem(playLists[key]);
             }

             function printItem(item) {
               console.log(`${item.id}: ${item.name} - ${item.tracks.length} tracks`);
             }
            },

  printTracks: function () {
              var tracks = this.tracks;
              for (var key in tracks){
                printSingleTrack(tracks[key]);
              }
            },
  printPlaylist: function (playlistId) {
              if(this.tracks.hasOwnProperty(playlistId)){
                var track = this.tracks[playlistId];
                printSingleTrack(track);
              }else{
                var playId = this.playlists[playlistId];
                console.log(`${playId.id}: ${playId.name} - ${playId.tracks.length} tracks`);
              }
            },

  addTrackToPlaylist: function (trackId, playlistId) {
              if(this.tracks.hasOwnProperty(trackId) &&
                 this.playlists.hasOwnProperty(playlistId) &&
                 this.playlists[playlistId].tracks.indexOf(trackId) === -1){
                    this.playlists[playlistId].tracks.push(trackId);
                    return this.playlists[playlistId].tracks;
              }
            },

  addTrack: function (name, artist, album) {

              var newId = uid();

              this.tracks[newId] = {};
              this.tracks[newId].id = newId;
              this.tracks[newId].name = name;
              this.tracks[newId].artist = artist;
              this.tracks[newId].album = album;


              this.tracks[newId] = {
                id: newId,
                name: name,
                artist: artist,
                album: album
              };

              return this.tracks;
            },

 addPlaylist: function (name) {

              var newId = uid();

              this.playlists[newId] = {
                id: newId,
                name: name,
                tracks: []
              };

              return this.playlists;
            },

  printSearchResults: function(query) {
              var newQ = query.toLowerCase();

              for (var key in this.tracks) {

                var track = this.tracks[key];

                if(lowerCaseFound(track.name, newQ) ||
                   lowerCaseFound(track.artist, newQ) ||
                   lowerCaseFound(track.album, newQ)) {
                  console.log(track);
                }
              }
            }
}
function lowerCaseFound(subject, term) {
  return subject.toLowerCase().search(term) !== -1;
}

function uid() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

function printSingleTrack(t) {
  console.log(t.id + ": " + t.name + " by " + t.artist + " (" + t.album + ")");
}

library.printPlaylists();
