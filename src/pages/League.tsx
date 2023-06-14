import { useNavigate, useParams } from 'react-router-dom';
import useAxios from "../hooks/useAxios"
import { useState, useEffect } from 'react';
import SkeletonLoaderTable from '../components/SkeletonLoaderTable';
import { Skeleton } from '@mui/material';

const League = () => {

  const navigate = useNavigate();

  const params = useParams();

  const [selectedTeamPlayers, setSelectedTeamPlayers] = useState<any>(null)


  const { data, loading, error } = useAxios(params.id)

  useEffect(() => {
    if (error != null) navigate('/error')

    setSelectedTeamPlayers(data?.teams[0])
  }, [loading])

  const handleSelectedTeam = (teamId: number) => {
    setSelectedTeamPlayers(data?.teams?.filter((team: any) => team.id === teamId)[0]);
  };

  const getPlayerAge = (playerDateOfBirth: string): number => {
    const playerDateBirth = new Date(playerDateOfBirth)
    const nowDate = new Date();

    const yearDifference: number = nowDate.getFullYear() - playerDateBirth.getFullYear()

    return (playerDateBirth.getMonth() < nowDate.getMonth() ? yearDifference : yearDifference - 1)
  }

  return (
    <>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10" >
        <div>
          <h2 className="text-center font-bold text-4xl">Teams</h2>

          <div className='lg:hidden flex flex-wrap gap-4 mt-5 justify-center'>

            {loading ? Array(16).fill(0).map((_, index) => (
              <Skeleton key={index} animation="wave" variant="circular" width={60} height={60}/>
            )) : data?.teams?.map((team: any) => (
              <button onClick={() => handleSelectedTeam(team.id)} className={`shadow p-2 rounded-full hover:scale-150 transition-all duration-300 ${selectedTeamPlayers?.id === team.id ? 'bg-gray-200 dark:bg-slate-700' : ''}`} key={team.id}>
                <img className="w-10" src={team.crest} alt="Imagen Equipo" />

              </button>
            ))}

          </div>

          <div className='max-h-[1000px] overflow-y-auto mt-4 styledScroll hidden lg:block'>
            <table className="table-auto w-full">
              <thead className='sticky top-0 bg-slate-50 dark:bg-slate-500'>
                <tr>
                  <th className="px-5 py-2">Name</th>
                  <th className="px-5 py-2">Stadium</th>
                  <th className="px-5 py-2">Founded</th>
                  <th className="px-5 py-2">Logo</th>
                </tr>
              </thead>
              <tbody>
                {loading ? <SkeletonLoaderTable rowsNum={15} colsNum={4}></SkeletonLoaderTable> : data?.teams?.map((team: any) => {
                  if (team.squad.length > 0) {
                    return (
                      <tr key={team.id} onClick={() => handleSelectedTeam(team.id)} className={`border hover:bg-gray-100 hover:dark:bg-slate-700 cursor-pointer ${selectedTeamPlayers?.id === team.id ? 'bg-gray-200 dark:bg-slate-600' : ''}`}>
                        <td className="px-4 py-2">{team.name}</td>
                        <td className="px-4 py-2">{team.venue}</td>
                        <td className="px-4 py-2">{team.founded}</td>
                        <td className="px-4 py-2">
                          <img className="w-10" src={team.crest} alt="Imagen Equipo" />
                        </td>
                      </tr>
                    )
                  }
                })}

              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h2 className="text-center font-bold text-4xl">Players</h2>
          <div className="max-h-[1000px] overflow-y-auto mt-4 styledScroll">
            <table className="table-auto w-full">
              <thead className='sticky top-0 bg-slate-50 dark:bg-slate-500 text-sm'>
                <tr >
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Age</th>
                  <th className="px-4 py-2">Nationality</th>
                  <th className="px-4 py-2">Position</th>
                </tr>
              </thead>
              <tbody>
                {loading ? <SkeletonLoaderTable rowsNum={15} colsNum={4} ></SkeletonLoaderTable> : selectedTeamPlayers?.squad.map((player: any) => (
                  <tr key={player.id} className="border-y text-sm md:text-base">
                    <td className="px-4 py-2 ">{player.name}</td>
                    <td className="px-4 py-2">{getPlayerAge(player.dateOfBirth)}</td>
                    <td className="px-4 py-2">{player.nationality}</td>
                    <td className="px-4 py-2">{player.position}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>


      </section >
    </>

  )
}

export default League