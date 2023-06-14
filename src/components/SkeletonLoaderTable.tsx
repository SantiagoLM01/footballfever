import { Skeleton } from '@mui/material'

const SkeletonLoaderTable = ({ rowsNum, colsNum }: { rowsNum: number, colsNum: number }): any => {
    return (
        [...Array(rowsNum)].map((_, index) => (
            <tr key={index} className={`border hover:bg-gray-100 hover:dark:bg-slate-600 cursor-pointer p-32`}>
                {[...Array(colsNum)].map((_, index) => (
                    <td key={index} className='py-5 px-5'> <Skeleton variant="rectangular" width={100} height={20}></Skeleton></td>
                ))}
            </tr>
        ))

    )
}

export default SkeletonLoaderTable