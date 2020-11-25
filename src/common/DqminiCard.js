import React from 'react';

const DqminiCard = props => {
    const { style, title, text, icon } = props

    const defaultStyle = {
        width: 'auto',
        cursor: 'pointer',
        boxShadow: '3px 3px',

    }

    return (
        <div className="card" style={{ ...defaultStyle }}>
            <div className="card-body">
                <h5 class="card-title">{title}</h5>
                {/* <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                <div>{icon}</div>
                <span class="card-text">{text}</span>

            </div>
        </div>
    )
}

export default DqminiCard;