import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from './users';

export const UserView = () => {
    const users = useSelector((state) => state.users)
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(fetchUsers());
    }, [])
    return (
        <>
            <div>List Of users</div>
            {users.error != '' && <div>{users.error}</div>}
            {users.loading && <div>loading</div>}
            {!users.loading && users.error === '' && users.users.length != 0 && <div>{users.users.map((data) => {
                return <div>{data.name}</div>
            })
            }</div>}
        </>
    )

}
