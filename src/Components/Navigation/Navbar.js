import React from 'react';

import useResponsiveSize from '../../helper/responsive_size'

const Navbar = props => {
    const { Open } = props
    const size = useResponsiveSize();
    return (
            <div className="d-flex justify-content-between align-items-center border border-danger">
                <div>
                    <span className="border rounded p-2" style={{ fontSize: 25, }} onClick={Open}>
                        <i class="fas fa-bars" /> </span>
                </div>
                <div>
                    <ul className="d-flex">
                        <li className="nav-item nav-link">Language</li>
                        <li className="nav-item nav-link">noti</li>
                        {
                            size.width < 1024 ?
                                <li className="nav-item nav-link"><i className="far fa-user" /></li> :
                                <li className="nav-item nav-link">{"user_name"}</li>
                        }
                    </ul>
                </div>
            </div>
            // {/* <span> width:{size.width}px / height:{size.height}px</span> */}
    )
}
export default Navbar;

// const Navbar = props => {
//     const { Open } = props

//     return (
//         <div className="bg-secondary border border-danger d-block w-100">
//             <div className="d-flex flex-row justify-content-between align-items-center">
//                 <div>
//                     <span className="border rounded p-2" style={{ fontSize: 25, }} onClick={Open}>
//                         <i class="fas fa-bars" />
//                     </span>
//                 </div>
//                 <div className="d-flex">
//                     <div className="px-2">Language</div>
//                     <div className="px-2">Account Setting</div>
//                 </div>
//             </div>
//         </div>

//     )
// }
// export default Navbar;