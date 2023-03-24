import React from 'react'

const FrontCard = (props) => {

    const circleButtonStyle = "rounded-full bg-medium_grey bg-opacity-20 w-[50px] h-[50px] text-light_grey hover:bg-opacity-100 hover:text-white transition-colors focus:bg-orange focus:text-white"

    return (
        <section className={`transition-transform duration-300 ${props.mainCardStyle} ${props.hideFrontCard === true ? "[transform:rotateY(180deg)] [perspective:1000px] [transform-style:preserve-3d]" : ""}`}>
            <div className={`${circleButtonStyle} grid items-center justify-center`}>
                <img src="/public/images/icon-star.svg" alt="star-icon" />
            </div>

            <div className='grid gap-4'>
                <p className='font-medium text-white text-3xl'>How did we do?</p>
                <p className='text-medium_grey'>
                    Please let us know how we did with your support
                    request. All feedback is appreciated to help us 
                    improve our offering!
                </p>
            </div>

            <form onSubmit={props.handleSubmit} className='grid gap-8'>
                <div className='flex justify-between'>
                    <button type='button' onClick={props.getButtonValues} value="1" className={circleButtonStyle}>1</button>
                    <button type='button' onClick={props.getButtonValues} value="2" className={circleButtonStyle}>2</button>
                    <button type='button' onClick={props.getButtonValues} value="3" className={circleButtonStyle}>3</button>
                    <button type='button' onClick={props.getButtonValues} value="4" className={circleButtonStyle}>4</button>
                    <button type='button' onClick={props.getButtonValues} value="5" className={circleButtonStyle}>5</button>
                </div>
                <button type='submit' className='bg-orange w-full tracking-widest rounded-full h-[40px] text-white hover:bg-white hover:text-orange transition-colors'>SUBMIT</button>
            </form>
        </section>
    )
}

export default FrontCard