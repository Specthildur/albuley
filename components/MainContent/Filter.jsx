"use client";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  FormControl,
} from "@mui/material";
import { ArrowDropDownSharp } from "@mui/icons-material";
import { useParam } from "@/app/state/useParams";
import { useState } from "react";

const years = [
  "1950s",
  "1960s",
  "1970s",
  "1980s",
  "1990s",
  "2000s",
  "2010s",
  "2020s",
];

const genre = [
  "Rock",
  "Pop",
  "Classical",
  "Rythem & Blues",
  "Jaz",
  "Electronic",
  "Hip-hop",
  "Heavy Metal",
];

export default function Filter() {
  const [yearValue, setYearValue] = useState(false);
  const [genreValue, setGenreValue] = useState(false);
  const paramStore = useParam();

  function handleCheck(e) {}
  return (
    <div className="flex flex-col sm:gap-2 md:gap-5 md:mr-10 sm:mt-5 md:mt-10 overflow-y-scroll xs:mx-4">
      <Accordion>
        <AccordionSummary expandIcon={<ArrowDropDownSharp />}>
          Year
        </AccordionSummary>
        <AccordionDetails>
          <FormControl sx={{ m: 1, mt: -2 }}>
            {years.map((e, i) => (
              <FormControlLabel label={e} key={e} control={<Checkbox />} />
            ))}
          </FormControl>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ArrowDropDownSharp />}>
          Genre
        </AccordionSummary>
        <AccordionDetails>
          <FormControl sx={{ m: 1, mt: -2 }}>
            {genre.map((e, i) => (
              <FormControlLabel label={e} key={e} control={<Checkbox />} />
            ))}
          </FormControl>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
