import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between mx-[100px] mt-[50px] border-b-2 pb-[16px]'>

            <h1 className="text-4xl font-bold">Cafe Knowledge</h1>
            <img src={profile} alt="" />
            
        </div>
    );
  
};

export default Header;