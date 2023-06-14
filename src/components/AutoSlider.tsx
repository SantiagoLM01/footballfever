
const AutoSlider = ({sliderWords} : { sliderWords : string[]}) => {
    return (
        <div className="slider">

            <div className="slider-track">

                {sliderWords.map((sliderWord, index) => (
                    <div key={index} className='slide'>
                        <h1 className="grid rounded-2xl items-center text-center text-2xl font-bold h-full text-green-500 dark:bg-slate-600">{sliderWord.toLocaleUpperCase()}</h1>
                    </div>
                ))}



            </div>


        </div>
    )
}

export default AutoSlider