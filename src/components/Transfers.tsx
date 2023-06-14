import React from 'react'

const Transfers = ({ transfers }: any) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center mt-10 gap-x-10 gap-y-5 lg:gap-x-8">

            {transfers.map((transferPlayer: any, index: number) => (
                <div key={index} className="relative text-white shadow-lg w-full md:rounded-3xl h-full">

                    <div className={`absolute h-full w-full z-0 md:rounded-3xl bg-cover bg-no-repeat bg-center`} style={{ backgroundImage: `url(${transferPlayer.player.banderaWebp})` }}></div>
                    <div className="absolute top-0 left-0 w-full h-full md:rounded-3xl" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}></div>
                    <div className="relative">
                        <picture>
                            <source srcSet={transferPlayer.player.photoWebp} type="image/webp" />
                            <img className="mx-auto" src={transferPlayer.player.photoPNG} alt="" />
                        </picture>
                        <h3>
                            Name: <span className="font-bold">{transferPlayer.player.name}</span>
                        </h3>
                    </div>

                    <div className="mb-5 relative">
                        <h3> Transfer Date: <span className="font-bold">{transferPlayer.transfers[0].date}</span></h3>

                        <div className="flex gap-2 place-items-center mt-2 justify-center">
                            <div>
                                <img src={transferPlayer.transfers[0].teams.out.logo} alt="" />
                                <h5 className="font-bold">{transferPlayer.transfers[0].teams.out.name}</h5>
                            </div>
                            <div className="w-16">
                                <picture>
                                    <source srcSet='images/webp/arrow-right.webp' type="image/webp" />
                                    <img src="images/normal/arrow-right.png" alt="Arrow Rigth" />
                                </picture>
                                <p>{transferPlayer.transfers[0].type}</p>
                            </div>
                            <div>
                                <img src={transferPlayer.transfers[0].teams.in.logo} alt="" />
                                <h5 className="font-bold">{transferPlayer.transfers[0].teams.in.name}</h5>
                            </div>

                        </div>
                    </div>

                </div>
            ))}


        </div>
    )
}

export default Transfers