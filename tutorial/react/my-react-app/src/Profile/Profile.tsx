import './Profile.css'

type ProfileProps = {
    imgUrl: string
    fullName: string
    description: string
    role: string
};

export default function Profile({ imgUrl, fullName, description, role }: ProfileProps) {

    return (
        <div className="profile">
            <img className="logo" src={imgUrl} alt="Hero Image" />
            <h2>{fullName}</h2>
            <p>{description}</p>
            {/* ternary operator */}
            {/* (true) ? 'Display this if true' : 'Display this if false'
            The above equivalent to the following if-else statement:
            if (true) {
                // Display this if true
            } else {
                // Display this if false
            } */}

            {!role || role !== 'admin' ? <p>User</p> : <p>Admin User</p>}
        </div>
    )
}

