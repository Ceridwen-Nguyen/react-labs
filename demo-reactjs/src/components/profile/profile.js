import './profile.css'

function Profile() {
    return (
        <div className='outer-wrapper'>
            <div className='wrapper'>
                <img className='profile-image' src="/profile.png"/> 
                <div className='profile-content'>
                    <div className='profile-item'>Họ tên: Nguyễn Ngọc Bảo Trân</div>
                    <div className='profile-item'>Giới tính: Nữ</div>
                    <div className='profile-item'>Địa chỉ: Hồ Chí Minh</div>
                    <div className='profile-item'>Số điện thoại: 0908 371 326</div>
                    <div className='profile-item'>Email: tran.nguyenceridwen@gmail.com</div>
                    <div className='profile-item'>Facebook/Zalo: Salmon</div>
                </div>
            </div>
        </div>
    )
}

export default Profile