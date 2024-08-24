import { Link } from "react-router-dom";

function Lobby() {
    return (
        <div>
            {/* header */}
            <div className="flex">
                <p className="text-8xl flex-1">Lobby</p>
                <div className="flex-1 content-center">
                    <Link to="/" className="btn btn-blue">Leave</Link>
                </div>
            </div>
        </div>
    )
}

export default Lobby;