import React,{useState} from 'react'
import data from './data'
import OpenModal from './OpenModal'
import './popStyle.css'

const Pop = () => {

    const [show,setShow] = useState(false);
    const [url,setUrl] = useState('')

    const handleChange=(ele)=>{
        setUrl(ele);
        setShow(!show)
    }

    const HandleModal=()=>{
        setShow(!show)
    }

    return (
        <>
            <div className="container">
                <div className="row mt-4 pop mb-4">
                    <div className="col-12 col-md-6 offset-md-3">
                        <div className="heading-one">Ceiling POP</div>
                    </div>
                </div>
                <div className="row mt-4">
                    {
                        data.map((item) => {
                            return (
                                <div key={item.id} className="col-12 col-sm-4 my-3">
                                    <img src={item.url} alt={item.name} className="modal-img" onClick={() => { handleChange(item.url) }} />
                                </div>
                            )
                        })

                    }
                </div>
            </div>
            <OpenModal value={url} showValue={show} HandleModal={HandleModal} />
        </>
    )
}

export default Pop;