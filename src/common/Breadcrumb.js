import React from 'react';

const breadcrumb = {
  backgroundColor: 'white',
  border: '1px solid rgba(0, 0, 0, 0.125)',
  borderRadius: '0.37rem',
  padding: '10px'
}

const Breadcrumb = (props) => {

  const { crumbs } = props

  const isLast = (index) => {
    return index === props.crumbs.length - 1;
  }
  const selected = crumb => {
    console.log(crumb, 'selected crumb');
  }
  if (crumbs.length <= 1) {
    return null;
  } else
    return (
      <nav aria-label="breadcrumb" className="">
        <ol className="breadcrumb" style={breadcrumb}>
          {
            crumbs.map((crumb, ci) => {
              const disabled = isLast(ci) ? 'disabled' : '';

              return (
                <li
                  key={ci}
                  className="breadcrumb-item align-items-center"
                >
                  <button className={`btn btn-link ${disabled}`} onClick={() => selected(crumb)}>
                    {crumb}
                  </button>
                </li>
              );
            })
          }
        </ol>
      </nav>
    );
}

export default Breadcrumb;