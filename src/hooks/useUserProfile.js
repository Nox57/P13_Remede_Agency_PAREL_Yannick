import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserProfile } from '../reducers/userSlice'

const useUserProfile = () => {
    const dispatch = useDispatch()
    const { token } = useSelector((state) => state.user)

    useEffect(() => {
        if (token) {
            dispatch(fetchUserProfile())
        }
    }, [token, dispatch])
}

export default useUserProfile
