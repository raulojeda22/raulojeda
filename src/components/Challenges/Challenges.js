import React, { Component } from 'react';
import './Challenges.css';

class Challenges extends Component {
    render() {
        document.body.style.backgroundColor = "black";
        return (
            <div id="challenges">
                <div className="challengeCategory">
                    <h2>Reverse engineering</h2>
                    <nav id="challengeList">
                        {/* <a target="_blank" className="easy" rel="noopener noreferrer" href="/ctf/misc/hacking-grades">Hacking Grades - Easy</a> */}
                    </nav>
                </div>
                <div className="challengeCategory">
                    <h2>Cryptography</h2>
                    <nav id="challengeList">
                        {/* <a target="_blank" className="easy" rel="noopener noreferrer" href="/ctf/misc/hacking-grades">Hacking Grades - Easy</a> */}
                    </nav>
                </div>
                <div className="challengeCategory">
                    <h2>Web exploitation</h2>
                    <nav id="challengeList">
                        {/* <a target="_blank" className="easy" rel="noopener noreferrer" href="/ctf/misc/hacking-grades">Hacking Grades - Easy</a> */}
                    </nav>
                </div>
                <div className="challengeCategory">
                    <h2>Programming</h2>
                    <nav id="challengeList">
                        {/* <a target="_blank" className="easy" rel="noopener noreferrer" href="/ctf/misc/hacking-grades">Hacking Grades - Easy</a> */}
                    </nav>
                </div>
                <div className="challengeCategory">
                    <h2>Misc</h2>
                    <nav id="challengeList">
                        <a target="_blank" className="easy" rel="noopener noreferrer" href="/ctf/misc/hacking-grades/index.html">Hacking Grades - Easy</a>
                    </nav>
                </div>
            </div>
        )
    }
}

export default Challenges;