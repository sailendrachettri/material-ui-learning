import NavigateNextIcon from "@mui/icons-material/NavigateNext"
import { Box, Breadcrumbs, Link, Typography } from "@mui/material"

export const MuiBreadcrums = () => {
    return (
        <>
            <Box m={2}>
                <Breadcrumbs aria-label="breadcrumb"
                    maxItems={2}
                    // itemsAfterCollapse={2}
                    itemsBeforeCollapse={2}
                    separator={<NavigateNextIcon fontSize="small" />}>

                    <Link underline="hover" href="#">Home</Link>
                    <Link underline="hover" href="#">Catalog</Link>
                    <Link underline="hover" href="#">Accessories</Link>

                    <Typography color='text.primary'>Shoes</Typography>
                </Breadcrumbs>
            </Box>
        </>
    )
}
