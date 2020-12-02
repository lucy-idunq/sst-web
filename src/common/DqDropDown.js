import React from 'react'
import ph from '../upload/luvph.jpg'

const DqDropDown = props => {
    const { menuTitle, src } = props
    return (
        <div class="dropdown">
            <div id="dropdownMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ cursor: 'pointer' }}>
                <img src={ph} alt='ph' className="rounded-circle" width={100} height={100} />
            </div>
            <div class="dropdown-menu" aria-labelledby="dropdownMenu">
                {
                    !menuTitle ?
                        <div class="dropdown-item" >log out</div>
                        :
                        menuTitle.map((v, k) => {
                            return (
                                <div className="dropdown-item">{v.label} </div>
                            )

                        })
                }
            </div>
        </div>
    )
}
export default DqDropDown;

// <DqDropDown menuTitle={menuTitle} />
// const menuTitle = [{ label: "change password" }, { label: "log out" }]