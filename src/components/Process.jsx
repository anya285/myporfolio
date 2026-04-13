import React from 'react';
import { Target, Lightbulb, Video, Rocket } from 'lucide-react';
import './Process.css';

const steps = [
  {
    id: '01',
    title: 'Understanding Brand',
    desc: 'We dive deep into your voice, goals, and target audience.',
    icon: <Target size={24} />
  },
  {
    id: '02',
    title: 'Content Strategy',
    desc: 'Planning the script, hooks, and optimal posting schedule.',
    icon: <Lightbulb size={24} />
  },
  {
    id: '03',
    title: 'Editing & Optimization',
    desc: 'Crafting the video with dynamic cuts, pacing, and captions.',
    icon: <Video size={24} />
  },
  {
    id: '04',
    title: 'Delivery & Review',
    desc: 'Publishing and analyzing performance to improve further.',
    icon: <Rocket size={24} />
  }
];

const Process = () => {
  return (
    <section id="process" className="section-padding process-section">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading">My <span className="accent-text">Workflow</span></h2>
          <p className="section-subheading">
            A proven 4-step process to transform your ideas into highly engaging social media content.
          </p>
        </div>
        
        <div className="process-container">
          <div className="process-line"></div>
          {steps.map((step, index) => (
            <div key={step.id} className={`process-step ${index % 2 !== 0 ? 'step-alt' : ''}`}>
              <div className="process-content glass-card">
                <span className="step-number">{step.id}</span>
                <div className="step-icon">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
              <div className="process-node"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
