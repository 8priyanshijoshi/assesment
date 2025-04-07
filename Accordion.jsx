import React, { useState } from "react";

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ border: "1px solid #ccc", marginBottom: "10px", padding: "10px" }}>
      <div
        style={{ cursor: "pointer", fontWeight: "bold" }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
      </div>
      {isOpen && <div style={{ marginTop: "5px" }}>{content}</div>}
    </div>
  );
};

const Accordion = () => {
  const items = [
    { title: "What is your return policy?", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates eligendi commodi sit " },
    { title: "How do i track my order?", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates eligendi commodi sit " },
    { title: "Can i purchase item again?", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates eligendi commodi sit " },
  ];

  return (
    <div>
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default Accordion;