import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

export const MuiTable = () => {
    return (
        <>
            <TableContainer component={Paper} sx={{ maxHeight: '300px' }}>
                <Table aria-label='Simple table' stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell>First Name</TableCell>
                            <TableCell>Last Name</TableCell>
                            <TableCell align='center'>Email</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            tableData.map((row) => (
                                <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell>{row.id}</TableCell>
                                    <TableCell>{row.first_name}</TableCell>
                                    <TableCell>{row.last_name}</TableCell>
                                    <TableCell align='center'>{row.email}</TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}


const tableData = [{
    "id": 1,
    "first_name": "Lucine",
    "last_name": "Rosenberger",
    "email": "lrosenberger0@blinklist.com",
    "gender": "Female",
    "ip_address": "236.223.141.65"
}, {
    "id": 2,
    "first_name": "Cecilio",
    "last_name": "Fishbourn",
    "email": "cfishbourn1@prnewswire.com",
    "gender": "Male",
    "ip_address": "175.212.117.206"
}, {
    "id": 3,
    "first_name": "Dagny",
    "last_name": "Breitling",
    "email": "dbreitling2@newyorker.com",
    "gender": "Male",
    "ip_address": "228.185.245.216"
}, {
    "id": 4,
    "first_name": "Micheil",
    "last_name": "Sydney",
    "email": "msydney3@slashdot.org",
    "gender": "Male",
    "ip_address": "73.23.145.223"
}, {
    "id": 5,
    "first_name": "Townie",
    "last_name": "Bignal",
    "email": "tbignal4@paginegialle.it",
    "gender": "Male",
    "ip_address": "144.171.8.48"
}, {
    "id": 6,
    "first_name": "Avery",
    "last_name": "Goldine",
    "email": "agoldine5@weather.com",
    "gender": "Male",
    "ip_address": "216.17.50.226"
}, {
    "id": 7,
    "first_name": "Saree",
    "last_name": "Sporrij",
    "email": "ssporrij6@canalblog.com",
    "gender": "Female",
    "ip_address": "204.43.246.181"
}, {
    "id": 8,
    "first_name": "Reine",
    "last_name": "Sproston",
    "email": "rsproston7@ameblo.jp",
    "gender": "Female",
    "ip_address": "102.37.140.119"
}, {
    "id": 9,
    "first_name": "Galen",
    "last_name": "Squibb",
    "email": "gsquibb8@salon.com",
    "gender": "Male",
    "ip_address": "62.167.214.65"
}, {
    "id": 10,
    "first_name": "Deloria",
    "last_name": "Cordier",
    "email": "dcordier9@tripod.com",
    "gender": "Female",
    "ip_address": "19.196.163.84"
}]