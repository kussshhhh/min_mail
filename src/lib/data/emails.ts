export interface Message {
    sender: string;
    senderEmail: string;
    content: string;
    timestamp: string;
  }
  
  export interface Email {
    id: string;
    sender: string;
    senderEmail: string;
    subject: string;
    preview: string;
    timestamp: string;
    important: boolean;
    thread: Message[];
  }
  
  export const emails: Email[] = [
    {
      id: "1",
      sender: "John Doe",
      senderEmail: "john.doe@company.com",
      subject: "Project Update: Q2 Roadmap",
      preview: "I wanted to share the latest on our Q2 roadmap. We’ve made significant progress on...",
      timestamp: "10:30AM",
      important: true,
      thread: [
        {
          sender: "John Doe",
          senderEmail: "john.doe@company.com",
          content:
            "I wanted to share the latest on our Q2 roadmap. We’ve made significant progress on the project timeline and resource allocation. Please review the attached document and let me know your feedback.",
          timestamp: "10:30AM",
        },
        {
          sender: "User Name",
          senderEmail: "user@example.com",
          content: "Thanks for the update, John! The timeline looks good, but I have some questions about the resource allocation. Can we discuss this in our next meeting?",
          timestamp: "11:00AM",
        },
      ],
    },
    {
      id: "2",
      sender: "Sarah Johnson",
      senderEmail: "sarah.johnson@company.com",
      subject: "Meeting Notes: Product Strategy",
      preview: "Attached are the notes from our product strategy meeting yesterday. Key takeaways include...",
      timestamp: "Yesterday",
      important: false,
      thread: [
        {
          sender: "Sarah Johnson",
          senderEmail: "sarah.johnson@company.com",
          content:
            "Attached are the notes from our product strategy meeting yesterday. Key takeaways include focusing on user feedback and prioritizing the new feature launch. Please review and let me know if I missed anything.",
          timestamp: "Yesterday",
        },
      ],
    },
    {
      id: "3",
      sender: "Design Team",
      senderEmail: "design.team@company.com",
      subject: "New Brand Assets Available",
      preview: "The updated brand assets are now available in the shared drive. Please use these for all new...",
      timestamp: "May 10",
      important: true,
      thread: [
        {
          sender: "Design Team",
          senderEmail: "design.team@company.com",
          content:
            "The updated brand assets are now available in the shared drive. Please use these for all new projects moving forward. Let us know if you need any specific formats.",
          timestamp: "May 10",
        },
      ],
    },
    {
      id: "4",
      sender: "Michael Chen",
      senderEmail: "michael.chen@company.com",
      subject: "Feedback on Presentation Draft",
      preview: "I’ve reviewed the presentation draft and have some suggestions. Overall it looks great, but...",
      timestamp: "May 9",
      important: false,
      thread: [
        {
          sender: "Michael Chen",
          senderEmail: "michael.chen@company.com",
          content:
            "I’ve reviewed the presentation draft and have some suggestions. Overall it looks great, but I think we should add more data to support our claims on slide 3. What do you think?",
          timestamp: "May 9",
        },
      ],
    },
    {
      id: "5",
      sender: "HR Department",
      senderEmail: "hr@company.com",
      subject: "Important: Benefits Change",
      preview: "Please review our benefits package that will take effect next month. The main...",
      timestamp: "May 8",
      important: true,
      thread: [
        {
          sender: "HR Department",
          senderEmail: "hr@company.com",
          content:
            "Please review our benefits package that will take effect next month. The main changes include updated health insurance options and an increase in vacation days. Contact us with any questions.",
          timestamp: "May 8",
        },
      ],
    },
  ];