function Profile() {
    return (
        <div>
            <h1>Profile card</h1>
            <ProfileCard
                /* eis me hmne kuchh props pass kiya hai */

                name="Ritik"
                age={22}
                greeting={
                    <div>
                        <strong>Hi Ritik, have a wonderful day</strong>
                    </div>
                }
            >
                <p>Hobbies : cricket</p>
                <button>contact</button>
            </ProfileCard>

            <ProfileCard
                name="Ankit"
                age={22}
                greeting={
                    <div>
                        <strong>Hi Ankit, have a wonderful day</strong>
                    </div>
                }
            >
                <p>Hobbies : Reading books</p>
                <button>contact</button>
            </ProfileCard>

        </div>
    )
}

export default Profile;

// *---------------------------------------ProfileCard function----------------------
function ProfileCard(props) {
    return (
        <>
            <h2>Name : {props.name}</h2>
            <p>Age : {props.age}</p>
            <p>{props.greeting}</p>
            <div>{props.children}</div>
        </>
    )
}