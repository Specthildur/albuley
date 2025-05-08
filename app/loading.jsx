import Header from "@/components/header/Header";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function Loading() {
    return (
        <>
            <Header base></Header>
            <div className="m-auto w-max h-dvh flex place-items-center">
                <Box sx={{ display: "flex" }}>
                    <CircularProgress color="black" />
                </Box>
            </div>
        </>
    );
}
