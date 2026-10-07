import React from 'react';
export const Age = (props) => {

    return (
        <div id='age'>
            <h2>Users by age</h2>
            {props.users.map((user) => {
                if (user.godini > 18) {
                    return (
                        <p key={user.ime}>
                            {user.ime} {user.prezime}, {user.adresa}, {user.godini} god.
                        </p>
                    )
                } else {
                    return <p key={user.ime}>Less than 18</p>
                }
            })}
        </div>
    )

}