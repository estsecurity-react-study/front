import React from "react"

import { AccordionItemProps, AccordionItem as ESAccordionItem } from "@eds/ui"

const Accordion: React.FC<AccordionItemProps> = (props) => {
  return <ESAccordionItem {...props} />
}

export default Accordion
