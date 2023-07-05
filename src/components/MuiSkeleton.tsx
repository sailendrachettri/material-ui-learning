import { Avatar, Box, Skeleton, Stack, Typography } from '@mui/material'
import { useEffect, useState } from 'react'

export const MuiSkeleton = () => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000);
    }, [])

    return (
        <>
            {/* 
            <Stack spacing={3} width='250px'>
                <Skeleton />
                <Skeleton variant='text' />
                <Skeleton variant='circular' width={40} height={40} />
                <Skeleton variant='rectangular' width={250} height={125} />

                <Skeleton animation='wave' />
                <Skeleton variant='text' animation='wave' />
                <Skeleton variant='circular' width={40} height={40} animation='wave' />
                <Skeleton variant='rectangular' width={250} height={125} animation='wave' />

                <Skeleton animation={false} />
                <Skeleton variant='text' animation={false} />
                <Skeleton variant='circular' width={40} height={40} animation={false} />
                <Skeleton variant='rectangular' width={250} height={125} animation={false} />

            </Stack>
             */}

            <Box sx={{ width: '250px' }}>
                {
                    loading ? (<Skeleton variant='rectangular' width={256} height={144} animation='wave' />)
                        : (<img src="https://source.unsplash.com/random/256x144" alt="skeleteon" width={256} height={144} />)
                }

                <Stack direction='row' spacing={1} sx={{ width: '100%', marginTop: '12px' }}>
                    {
                        loading ? (<Skeleton variant='circular' width={40} height={40} animation='wave' />)
                            : (<Avatar>V</Avatar>)
                    }
                </Stack>

                <Stack sx={{ width: '80%' }}>
                    {
                        loading ? (
                            <>
                                <Typography variant='body1'>
                                    <Skeleton variant='text' width='100%' animation='wave' />
                                </Typography>
                                <Typography variant='body2'>
                                    <Skeleton variant='text' width='100%' animation='wave' />
                                </Typography>
                            </>
                        )
                            : (
                                <>
                                    <Typography variant='body1'>React MUI Tutotial</Typography>
                                </>
                            )
                    }
                </Stack>
            </Box>
        </>
    )
}
