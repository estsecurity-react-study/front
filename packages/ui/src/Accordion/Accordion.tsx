import React from "react"

import { AccordionProps, Accordion as ESAccordion } from "@eds/ui"

const Accordion: React.FC<AccordionProps> = (props) => {
  return <ESAccordion {...props} />
}

export default Accordion
