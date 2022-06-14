import { Outlet } from 'react-router-dom';
const AuthLayouts = () => {
    return (
        <>
            <div>Esto es el layout</div>
            <Outlet />
        </>
    )
}

export default AuthLayouts