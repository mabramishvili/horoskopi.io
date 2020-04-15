import Grid from '@material-ui/core/Grid';
import {useEffect} from "react";

export default function ZodiacGrid(props) {

    return (
        <Grid item lg={3} sm={4} xs={6}>
            {props.children}
        </Grid>
    );
}
