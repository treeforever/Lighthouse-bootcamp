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
    for (var key in this.playlists) {
      var item = this.playlists[key];
      console.log(`${item.id}: ${item.name} - ${item.tracks.length} tracks`);
    }
  },

  printTracks: function () {
    for (var key in this.tracks){
      this.printSingleTrack(this.tracks[key]);
    }
  },

  printPlaylist: function (playlistId) {
    var playId = this.playlists[playlistId];
    console.log(`${playId.id}: ${playId.name} - ${playId.tracks.length} tracks`);

    playId.tracks.forEach(function (trackId) {
      console.log(trackId + ": " + this.tracks[trackId].name + " by " + this.tracks[trackId].artist + " (" + this.tracks[trackId].album + ")")
    }.bind(this));
  },

  uid: function () {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },

  lowerCaseFound: function (subject, term) {
    return subject.toLowerCase().search(term) !== -1;
  },

  addTrackToPlaylist: function (trackId, playlistId) {
    if (!this.tracks.hasOwnProperty(trackId)) {
      return;
    }
    
    if (!this.playlists.hasOwnProperty(playlistId)) {
      return;
    }

    if (this.playlists[playlistId].tracks.indexOf(trackId) !== -1) {
      return;
    }

    this.playlists[playlistId].tracks.push(trackId);
  },

  addTrack: function (name, artist, album) {
    var newId = this.uid();

    this.tracks[newId] = {
      id: newId,
      name: name,
      artist: artist,
      album: album
    };
  },

  addPlaylist: function (name) {
    var newId = this.uid();

    this.playlists[newId] = {
      id: newId,
      name: name,
      tracks: []
    };
  },

  printSingleTrack: function (t) {
    console.log(t.id + ": " + t.name + " by " + t.artist + " (" + t.album + ")");
  },

  printSearchResults: function(query) {
    var newQ = query.toLowerCase();

    for (var key in this.tracks) {
      var track = this.tracks[key];

      if (this.lowerCaseFound(track.name, newQ) ||
          this.lowerCaseFound(track.artist, newQ) ||
          this.lowerCaseFound(track.album, newQ)) {
        console.log(track);
      }
    }
  }
}

library.printPlaylist("p01");
