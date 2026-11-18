import React from "react";
import "./Cards.css";
import { Target, Leaf, Cpu, HeartHandshake } from "lucide-react";

const PRINCIPLES = [
  {
    id: 1,
    num: "01",
    tag: "PURPOSE",
    title: "Purpose & Precision",
    description: "We engineer with purpose, precision, and passion.",
    icon: Target,
  },
  {
    id: 2,
    num: "02",
    tag: "SUSTAINABILITY",
    title: "Progress & Ecology",
    description: "Sustainability and progress go hand in hand.",
    icon: Leaf,
  },
  {
    id: 3,
    num: "03",
    tag: "INNOVATION",
    title: "Interactive Systems",
    description: "Innovative tools & technologies unlock interactivity that feels magical.",
    icon: Cpu,
  },
  {
    id: 4,
    num: "04",
    tag: "PEOPLE",
    title: "Creative Culture",
    description: "People do their best creative work when they feel safe & supported.",
    icon: HeartHandshake,
  },
];

const FuturisticCards = () => {
  return (
    <div className="card-container">
      {PRINCIPLES.map((card) => {
        const Icon = card.icon;
        return (
          <div key={card.id} className="principle-card">
            <div className="principle-card-top">
              <span className="principle-num">{card.num}</span>
              <div className="principle-icon-box">
                <Icon size={20} />
              </div>
            </div>
            <div className="principle-tag">{card.tag}</div>
            <h3 className="principle-title">{card.title}</h3>
            <p className="principle-desc">{card.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default FuturisticCards;
