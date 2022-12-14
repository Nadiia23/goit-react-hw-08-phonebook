import { TailSpin } from "react-loader-spinner";
import s from './loader.module.css'

const Loader = () => {
    return (
        <div className={s.loaderThumb}>
            <TailSpin
                height="80"
                width="80"
                color="#426e86"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    )    
}

export default Loader;