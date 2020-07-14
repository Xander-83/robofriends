import React from 'react';

const Card = ({id, name, email}) => {
    return (
        
        <div className='tc bg-light-blue dib pa3 ma2 grow br3 bw2 shadow-5'>
            <h2>RoboFriends</h2>
            <img alt='robots' src={`https://robohash.org/${id}?200x200`} />
        <div>
        <h2>{name}</h2>
                <p><h5>{email}</h5></p>
</div>
</div>

    );
   
}


export default Card;