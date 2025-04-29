import Radios from "@/components/helpers/Radios";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

export default function Filter() {
  return (
    <div className="flex flex-col gap-5 mr-10 mt-10 overflow-y-scroll">
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ArrowDownwardIcon />}>
          <h1>Genre</h1>
        </AccordionSummary>
        <AccordionDetails>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Type</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="classical"
                control={<Radio />}
                label="Classical"
              />
              <FormControlLabel value="rock" control={<Radio />} label="Rock" />
              <FormControlLabel value="pop" control={<Radio />} label="Pop" />
            </RadioGroup>
          </FormControl>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ArrowDownwardIcon />}>
          <h1>Genre</h1>
        </AccordionSummary>
        <AccordionDetails>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Type</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="classical"
                control={<Radio />}
                label="Classical"
              />
              <FormControlLabel value="rock" control={<Radio />} label="Rock" />
              <FormControlLabel value="pop" control={<Radio />} label="Pop" />
            </RadioGroup>
          </FormControl>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
