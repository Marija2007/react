import React from 'react';

export const Adress = (props) => {

    return (
        <div id='adress'>
            <h2>Users from Skopje</h2>
            {props.users
                .filter((user) => user.adresa === 'Skopje')
                .map((user) => (
                    <p key={user.ime}>
                        {user.ime} {user.prezime}, {user.adresa}, {user.godini} god.
                    </p>
                ))}
        </div>
    )

}