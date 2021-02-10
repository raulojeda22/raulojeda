import React, { Component } from 'react';
import './Challenges.css';
import challenges from "./challenges.json";

function sha512(str) {
    return crypto.subtle.digest("SHA-512", new TextEncoder("utf-8").encode(str)).then(buf => {
        return Array.prototype.map.call(new Uint8Array(buf), x => (('00' + x.toString(16)).slice(-2))).join('');
    });
}

class Challenges extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            name: "Name",
            description: "Description",
            flag: "flag{}",
            submitted: false,
            correctFlag: false,
            inputFlag: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.openModal = this.openModal.bind(this);
    }
    handleChange(e) {
        this.setState({ inputFlag: e.target.value });
    }
    handleSubmit(e) {
        e.preventDefault();
        this.setState({ submitted: true });
        sha512(this.state.inputFlag).then((flag) => {
            this.setState({ correctFlag: (flag === this.state.flag) });
        });
    }
    openModal(chall) {
        this.setState({
            show: true,
            name: chall.name,
            description: chall.description,
            flag: chall.flag
        })
    }
    closeModal() {
        this.setState({
            show: false
        })
    }
    render() {
        document.body.style.background = "black";
        return (
            <div id="challenges">
                {   this.state.show &&
                    <div className="modal">
                        <div className="closeButton">
                            <button onClick={(e) => this.closeModal()}>X</button>
                        </div>
                        <div className="challDesc">
                            <h3>{this.state.name}</h3>
                            <p>{this.state.description}</p>
                        </div>
                        <div className="postFlag">
                            <form onSubmit={this.handleSubmit}>
                                <input size="9" value={this.state.inputFlag} onChange={this.handleChange} className="submitFlag" placeholder="flag{3x4mpl3}"></input>
                                <button>Submit flag</button>
                            </form>
                            {this.state.submitted && this.state.correctFlag &&
                                <div className="correctFlag easy">
                                    You solved it! :D
                                </div>
                            }
                            {this.state.submitted && !this.state.correctFlag &&
                                <div className="correctFlag hard">
                                    Ooops, wrong flag :(
                                </div>
                            }
                        </div>
                    </div>
                }

                <div className="challengePageTitle">
                    <h2 className="insane">CTF Challenges by Raulet @raul_ojeda22</h2>
                </div>
                { challenges.challenges.categories && challenges.challenges.categories.map((category, index) =>
                    <div className="challengeCategory" key={index}>
                        <h2>{category.title}</h2>
                        <nav id="challengeList">
                            { category.list && category.list.length !== 0 && category.list.map((challenge, j) =>
                                <button key={j} className={challenge.difficulty} onClick={(e) => this.openModal(challenge)} >{challenge.name}</button>
                            )}
                        </nav>
                    </div>
                )}
            </div>
        )
    }
}

export default Challenges;