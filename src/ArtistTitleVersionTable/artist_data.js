export const ARTIST_DATA_SCHEMA = {
    Artist: {type: "string"},
    Song: {type: "string"},
    //Year: {type: "select", options: ["60s", "70s", "80s", "90s"]}
    Year: {type: "multi-select", options: ["60s", "70s", "80s", "90s"]}
};

const ARTIST_DATA = [
    {
        "Id": 1,
        "Rank": 1,
        "Artist": "Bob Dylan",
        "Song": "Like A Rolling Stone",
        "Year": 1965
    },
    {
        "Id": 2,
        "Rank": 2,
        "Artist": "The Rolling Stones",
        "Song": "(I Can't Get No) Satisfaction",
        "Year": 1965
    },
    {
        "Id": 3,
        "Rank": 3,
        "Artist": "John Lennon",
        "Song": "Imagine",
        "Year": 1971
    },
    {
        "Id": 4,
        "Rank": 4,
        "Artist": "Marvin Gaye",
        "Song": "What's Going On",
        "Year": 1971
    },
    {
        "Id": 5,
        "Rank": 5,
        "Artist": "Aretha Franklin",
        "Song": "Respect",
        "Year": 1967
    },
    {
        "Id": 6,
        "Rank": 6,
        "Artist": "The Beach Boys",
        "Song": "Good Vibrations",
        "Year": 1966
    },
    {
        "Id": 7,
        "Rank": 7,
        "Artist": "Chuck Berry",
        "Song": "Johnny B. Goode",
        "Year": 1958
    },
    {
        "Id": 8,
        "Rank": 8,
        "Artist": "The Beatles",
        "Song": "Hey Jude",
        "Year": 1968
    },
    {
        "Id": 9,
        "Rank": 9,
        "Artist": "Nirvana",
        "Song": "Smells Like Teen Spirit",
        "Year": 1991
    },
    {
        "Id": 10,
        "Rank": 10,
        "Artist": "Ray Charles",
        "Song": "What'd I Say",
        "Year": 1959
    }
]

export default ARTIST_DATA;