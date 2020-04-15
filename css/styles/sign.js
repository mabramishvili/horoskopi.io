import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    tabBar: {
        color: '#060606',
        backgroundColor: 'white',
        boxShadow: 'none',
        marginTop: '80px'
    },
    tabPanel: {
        marginTop: '30px',
        fontFamily: 'sylafen_bpg, sans-serif',
        fontSize: '20px'
    },
    tab: {
        fontSize: '16px'
    },
    year: {
        fontWeight: 'bold',
        color: 'green',
        fontSize: '18px'
    },
    goBack: {
        background: 'transparent',
        '&:hover': {
            background: 'transparent',
        },
    }
}));

export default useStyles;
