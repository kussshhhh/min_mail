export interface Email {
    id: string;
    sender: string;
    subject: string;
    preview: string;
    timestamp: string;
    important: boolean;
  }
  
  export const emails: Email[] = [
    {
      id: "1",
      sender: "John Doe",
      subject: "Project Update: Q2 Roadmap",
      preview: "I wanted to share the latest on our Q2 roadmap. We’ve made significant progress on...",
      timestamp: "10:30AM",
      important: true,
    },
    {
      id: "2",
      sender: "Sarah Johnson",
      subject: "Meeting Notes: Product Strategy",
      preview: "Attached are the notes from our product strategy meeting yesterday. Key takeaways include...",
      timestamp: "Yesterday",
      important: false,
    },
    {
      id: "3",
      sender: "Design Team",
      subject: "New Brand Assets Available",
      preview: "The updated brand assets are now available in the shared drive. Please use these for all new...",
      timestamp: "May 10",
      important: true,
    },
    {
      id: "4",
      sender: "Michael Chen",
      subject: "Feedback on Presentation Draft",
      preview: "I’ve reviewed the presentation draft and have some suggestions. Overall it looks great, but...",
      timestamp: "May 9",
      important: false,
    },
    {
      id: "5",
      sender: "HR Department",
      subject: "Important: Benefits Change",
      preview: "Please review our benefits package that will take effect next month. The main...",
      timestamp: "May 8",
      important: true,
    },
  ];