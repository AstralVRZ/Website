new Webamp({
    initialTracks: [
        {metaData: {artist: "Izar", title: "Born of a Star",},
        url: "/Audio/Born of a Star - Izar.m4a",},

        {metaData: {artist: "Jammin' Sam Miller", title: "Donkey Kong Country - Aquatic Ambience [Restored]",},
        url: "/Audio/Aquatic Ambience.mp3",},

        {metaData: {artist: "jackie extreme",title: "bizarre love triangle",},
        url: "https://files.catbox.moe/6eg3j3.mp3",},

        {metaData: {artist: "machine girl",title: "glass ocean",},
        url: "https://files.catbox.moe/n2qbnf.mp3",},
    ],
    initialSkin: {url: "/Webamp/spaceskin.wsz"},
}).renderWhenReady(app);