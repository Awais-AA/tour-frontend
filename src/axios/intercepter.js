import {refresh} from '../features/auth/authSlice';
import {privateAxios} from './axios'


const setupIntercepter=async(store)=>{
    
   
    
   


    privateAxios.interceptors.request.use(
        config=>{
            const token= store.getState().auth.user?.token
            if(!(config.headers['Authorization'])){

                config.headers['Authorization']=`Bearer ${token}`
                
            }
            return config
        },
        error=>Promise.reject(error)
    
    )
    
    privateAxios.interceptors.response.use(
        response=>response,
        async(error)=>{
            const config=error.config

            if(error?.response?.status===403 && !(config?.sent)){
                config.sent=true
                await store.dispatch(refresh())
                
                const newAccessToken=await store.getState().auth.user?.token
                config.headers['Authorization']=`Bearer ${newAccessToken}`
                return privateAxios(config)
                

            }


            return Promise.reject(error)
        }
    
    )
    return true

}
export default setupIntercepter