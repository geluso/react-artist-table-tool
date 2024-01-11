import { useState } from "react";
import ARTIST_DATA from "./artist_data";
import EditableCell from "./EditableCell";

function ArtistTitleVersionTable() {
    let [data, setData] = useState(ARTIST_DATA);
    let [editCells, setEditCells] = useState(new Set());

    let [filterArtist, setFilterArtist] = useState('');
    let [filterSong, setFilterSong] = useState('');
    let [minYear, setMinYear] = useState('');
    let [maxYear, setMaxYear] = useState('');

    const toggleEdit = (editId) => {
        if (editCells.has(editId)) {
            console.log('removing', editId);
            let filtered = new Set([...editCells].filter(id => id !== editId));
            setEditCells(filtered);
        } else {
            console.log('adding', editId);
            let newEditCells = new Set([...editCells, editId]);
            setEditCells(newEditCells);
        }
    }

    const save = (id, property, value) => {
        console.log('saving', id, property, value);
        let newData = data.map(song => {
            if (song.Id !== id) {
                return song;
            }
            let updatedSong = {...song};
            updatedSong[property] = value;

            // TODO: fire a network request to perform
            // UPDATE songs SET property=value WHERE song.id = id
            fetch("/api/songs/" + id, {
                method: "PUT",
                data: {[property]: value},
            })

            return updatedSong;
        });

        setData(newData);
    }

    const handleChangeFilterArtist = (ev) => {
        let artist = ev.target.value;
        setFilterArtist(artist);
        setData(ARTIST_DATA.filter(song => song.Artist.toLowerCase().includes(artist.toLowerCase())))
    }

    const handleChangeFilterSong = (ev) => {
        let song = ev.target.value;
        setFilterSong(song);
        setData(ARTIST_DATA.filter(song => song.Song.toLowerCase().includes(song.toLowerCase())))
    }

    const handleChangeMinYear = (ev) => {
        let year = parseInt(ev.target.value) || '';
        setMinYear(year);
        if (year === '' || year < 1900) {
            setData(ARTIST_DATA)
        } else {
            setData(ARTIST_DATA.filter(song => song.Year >= year));
        }
    }

    const handleChangeMaxYear = (ev) => {
        let year = parseInt(ev.target.value) || '';
        setMaxYear(year);
        if (year === '' || year < 1900) {
            setData(ARTIST_DATA)
        } else {
            setData(ARTIST_DATA.filter(song => song.Year <= year));
        }
    }

    const reset = () => {
        setFilterArtist('');
        setFilterSong('');
        setMinYear('');
        setMaxYear('');
        setData(ARTIST_DATA)
    }

    return <div>
        <div>
            <input value={filterArtist} onChange={handleChangeFilterArtist} placeholder="artist" />
            <input value={filterSong} onChange={handleChangeFilterSong} placeholder="song" />
            <input value={minYear} onChange={handleChangeMinYear} placeholder="min year" />
            <input value={maxYear} onChange={handleChangeMaxYear} placeholder="max year" />
            <button>filter</button>
            <button onClick={reset}>clear</button>
        </div>

        <table border="1">
            <thead>
                <tr>
                    <th>Rank</th>
                    <th>Artist</th>
                    <th>Song</th>
                    <th>Year</th>
                </tr>
            </thead>
            <tbody>
                {data.map((row, index) => {
                    return <tr key={index}>
                        <td>{row.Rank}</td>
                        <EditableCell toggle={toggleEdit} data={row} property="Artist" editCells={editCells} save={save} />
                        <EditableCell toggle={toggleEdit} data={row} property="Song" editCells={editCells} save={save} />
                        <EditableCell toggle={toggleEdit} data={row} property="Year" editCells={editCells} save={save} />
                    </tr>
                })}
            </tbody>
        </table>
    </div>
}

export default ArtistTitleVersionTable;