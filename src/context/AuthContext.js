import { useState, createContext, useEffect } from "react"
import { Token, User } from "@/api"

const userCtrl = new User();
const tokenCtrl = new Token();

export const AuthContext = createContext()

export function AuthProvider(props){    
    const {children} = props
    const [user, setUser] = useState(null)
    const [token, setToken] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        (async () => {
            const token = tokenCtrl.getToken()

            if(!token){
                logout();
                setLoading(false);
                return
            }

            if(tokenCtrl.hasExpired(token)) {
                logout()
            }else {
                await login(token)
            }
        })()
    }, [])

    const login = async (token) => {
        try {
            tokenCtrl.setToken(token) //Setea el token en el localstorage
            const response = await userCtrl.getMe(); //Obteniento datos del usuario
            setUser(response) //Setea los datos del usuario
            setToken(token) //Seteo el valor de token en el stateToken
            setLoading(false) //Se hizo un setLoading false
        } catch (error) {
            console.error(error)
            setLoading(false)
        }
    }

    const logout = () => {
        tokenCtrl.removeToken();
        setToken(null)
        setUser(null)
    }

    const updateUser = (key, value) => {
        setUser({
            ...user,
            [key]: value,
        })
    }

    const data = {
        accessToken: token,
        user,
        login,
        logout,
        updateUser,
    }

    if(loading) return null

    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
}
