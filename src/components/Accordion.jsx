import { AccordionDetails, Grid } from '@mui/material';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';

export const MyAccordion = ({title, fiddleSrc}) => {
    return (
        <Grid sx = {{mx:5, mb:1}} >
            <Accordion>
                <AccordionSummary
                // expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                >
                    {title}
                </AccordionSummary>
                <AccordionDetails sx = {{textAlign:'left'}}>
                    <iframe width="100%" height="300" src={fiddleSrc} allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe> 
                </AccordionDetails>
            </Accordion>
        </Grid>
    )
}