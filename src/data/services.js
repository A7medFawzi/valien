export const services = {
  title: 'AI Automation Services',
  highlights: [
    { label: 'Make Business Ease', text: 'Simplify your process with automation.' },
    { label: 'Insights Drive Growth', text: 'Leverage actionable data to scale with AI.' },
  ],
  features: [
    {
      icon: 'database',
      title: 'Data-driven',
      text: 'Turn raw data into actionable insights that drive smarter decisions and measurable growth.',
    },
    {
      icon: 'chart',
      title: 'Efficient Growth',
      text: 'Work smarter, not harder. Unlock faster results and lower costs with AI-powered efficiency.',
    },
  ],
  workflow: {
    title: 'Workflow Automation & Optimization',
    text: 'Streamline repetitive tasks & keep your business running on autopilot.',
  },
  customModels: {
    title: 'Custom AI Model Development',
    text: 'Get AI solutions built around your unique needs.',
  },
  chatbots: {
    title: 'Chatbots & virtual assistants',
    text: 'Engage customers 24/7 with intelligent virtual assistants.',
  },
  tags: [
    { icon: 'graph', label: 'Data-Driven Decisions' },
    { icon: 'smiley', label: 'Personalized Experiences' },
    { icon: 'gear', label: 'Automation' },
    { icon: 'stack', label: 'Scalable Solutions' },
    { icon: 'lightning', label: 'Real-Time Insights' },
    { icon: 'robot', label: 'Virtual Assistance' },
    { icon: 'money', label: 'Cost Effective' },
    { icon: 'rocket', label: 'Faster Innovation' },
  ],
};

/** Code shown in the "Custom AI Model Development" card. */
export const sampleCode = `class AutomationAgent:
    def __init__(self, activation_limit):
        self.activation_limit = activation_limit
        self.current_mode = "idle"

    def evaluate_task(self, workload_value):
        if workload_value > self.activation_limit:
            self.current_mode = "engaged"
            return "Automation agent has been successfully activated!"
        else:
            return "No activation needed. Agent stays idle."

    def get_current_mode(self):
        return f"Current operational mode: {self.current_mode}"`;
