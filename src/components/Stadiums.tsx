import React from 'react'

const Stadiums = ({ stadiums }: any) => {

    return (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-x-2 gap-y-6 mx-auto place-items-center">
            {stadiums.map((stadium: any, index: number) => (
                <div key={index} className="shadow-xl max-w-sm rounded stadium-img-div">

                    <div className="relative z-0">

                        <img className="h-full w-full" src={stadium.image} alt="Stadium Image" />
                        <div className="stadiumInformation absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
                            <h5>Country: {stadium.country}</h5>
                            <p>City: {stadium.city}</p>
                            <p>Capacity: {stadium.capacity}</p>
                        </div>
                        <div className="stadiumOverlay font-bold text-center relative flex justify-center flex-col select-none whitespace-nowrap">
                        </div>

                    </div>


                    <h4 className="font-bold py-2">{stadium.name}</h4>

                </div>
            ))}
        </div>
    )
}

export default Stadiums