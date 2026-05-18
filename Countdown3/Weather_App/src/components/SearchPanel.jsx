import { Alert, Box, Button, Paper, Stack, TextField, Typography } from "@mui/material";

const SearchPanel = ({ error, isLoading, location, onLocationChange, onSubmit }) => {
    return (
        <Paper className="searchPanel" elevation={0}>
            <Stack spacing={3}>
                <Box>
                    <Typography variant="overline" color="text.secondary">
                        Local conditions
                    </Typography>
                    <Typography variant="h3" component="h1" className="pageTitle">
                        Weather App
                    </Typography>
                </Box>

                <Box component="form" className="searchForm" onSubmit={onSubmit}>
                    <TextField
                        fullWidth
                        label="City or location"
                        placeholder="Try Atlanta, New York, or Seattle"
                        value={location}
                        onChange={(e) => onLocationChange(e.target.value)}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        disabled={isLoading}
                    >
                        {isLoading ? "Loading" : "Search"}
                    </Button>
                </Box>

                {error && <Alert severity="error">{error}</Alert>}
            </Stack>
        </Paper>
    );
};

export default SearchPanel;
