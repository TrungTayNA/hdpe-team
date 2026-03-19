export interface Module {
  id: string;
  title: string;
  description: string;
  topics: string[];
}

export interface Lecture {
  id: string;
  title: string;
  duration: string;
  thumbnail: string;
  videoUrl: string;
  description: string;
}

export interface Assignment {
  id: string;
  title: string;
  dueDate: string;
  description: string;
  points: number;
}

export interface ScheduleItem {
  week: number;
  topic: string;
  date: string;
}

export interface Mentor {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  specialties: string[];
}

export interface Session {
  id: string;
  title: string;
  description: string;
  lectures: Lecture[];
}

export const COURSE_DATA = {
  title: "Kỹ năng Ghi chú & Quản lý Tri thức Cá nhân",
  subtitle: "Trở thành người học sâu (Deep Learner) trong kỷ nguyên số.",
  description: "Khóa học này được thiết kế để giúp bạn xây dựng hệ thống quản lý tri thức hiệu quả, từ việc ghi chú thông minh đến việc kết nối các ý tưởng để tạo ra giá trị mới. Chúng tôi tập trung vào các phương pháp hiện đại như Zettelkasten, Second Brain và các công cụ hỗ trợ mạnh mẽ.",
  mission: "Sứ mệnh của chúng tôi là giúp người học làm chủ kỹ năng ghi chú và quản lý tri thức cá nhân để trở thành người học sâu (Deep Learner) trong kỷ nguyên số.",
  sessions: [
    {
      id: "session-1",
      title: "Session 1: Awakening – Đánh thức tư duy ghi nhớ",
      description: "Nền tảng về khoa học não bộ, cơ chế ghi nhớ và lý do tại sao phương pháp học truyền thống thường thất bại.",
      lectures: [
        {
          id: "lec-1-1",
          title: "Đường cong quên lãng Ebbinghaus & Cách khắc phục",
          duration: "18:20",
          thumbnail: "https://picsum.photos/seed/ebbinghaus/800/450",
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          description: "Hiểu về tốc độ mất thông tin của não bộ và các thời điểm vàng để ôn tập nhằm giữ lại 90% kiến thức."
        },
        {
          id: "lec-1-2",
          title: "Nguyên lý xử lý sâu (Deep Processing)",
          duration: "15:45",
          thumbnail: "https://picsum.photos/seed/processing/800/450",
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          description: "Tại sao việc 'đọc đi đọc lại' là vô ích? Khám phá cách não bộ mã hóa thông tin thông qua việc liên kết ý nghĩa."
        },
        {
          id: "lec-1-3",
          title: "Tư duy của một Deep Learner",
          duration: "12:10",
          thumbnail: "https://picsum.photos/seed/learner/800/450",
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          description: "Thay đổi tâm thế từ người tiêu thụ thông tin sang người kiến tạo tri thức."
        }
      ]
    },
    {
      id: "session-2",
      title: "Session 2: Structuring – Nghệ thuật Cornell & tư duy chắt lọc",
      description: "Làm chủ hệ thống ghi chú khoa học nhất thế giới và cách biến thông tin hỗn loạn thành cấu trúc logic.",
      lectures: [
        {
          id: "lec-2-1",
          title: "Hệ thống Cornell: Cấu trúc 3 phần hoàn hảo",
          duration: "22:10",
          thumbnail: "https://picsum.photos/seed/cornell-structure/800/450",
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          description: "Phân tích vai trò của Cues (Từ khóa), Notes (Nội dung) và Summary (Tổng kết) trong việc tối ưu hóa trí nhớ."
        },
        {
          id: "lec-2-2",
          title: "Quy tắc 5R: Quy trình xử lý thông tin chuẩn",
          duration: "20:30",
          thumbnail: "https://picsum.photos/seed/5r/800/450",
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          description: "Record, Reduce, Recite, Reflect, Review - 5 bước biến một buổi nghe giảng thành tài sản tri thức vĩnh viễn."
        },
        {
          id: "lec-2-3",
          title: "Kỹ thuật đặt câu hỏi (Cues Column)",
          duration: "14:15",
          thumbnail: "https://picsum.photos/seed/questions/800/450",
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          description: "Cách đặt những câu hỏi 'đắt' để kích thích tư duy phản biện và tự kiểm tra kiến thức."
        }
      ]
    },
    {
      id: "session-3",
      title: "Session 3: Visualizing – Mindmap & bức tranh toàn cảnh",
      description: "Sử dụng sức mạnh của hình ảnh và màu sắc để kết nối các ý tưởng, tạo ra cái nhìn tổng thể về kiến thức.",
      lectures: [
        {
          id: "lec-3-1",
          title: "Nguyên tắc Mindmap chuẩn Tony Buzan",
          duration: "24:15",
          thumbnail: "https://picsum.photos/seed/mindmap-rules/800/450",
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          description: "Sử dụng từ khóa, nhánh cong và hình ảnh trung tâm để mô phỏng cách làm việc tự nhiên của não bộ."
        },
        {
          id: "lec-3-2",
          title: "Visual Thinking cho người không biết vẽ",
          duration: "18:50",
          thumbnail: "https://picsum.photos/seed/visual/800/450",
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          description: "Sử dụng các hình khối cơ bản và mũi tên để biểu diễn các mối quan hệ phức tạp giữa các khái niệm."
        },
        {
          id: "lec-3-3",
          title: "Kết nối tri thức (Connecting the Dots)",
          duration: "16:20",
          thumbnail: "https://picsum.photos/seed/dots/800/450",
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          description: "Cách nhìn ra sợi dây liên kết giữa các môn học khác nhau để tạo ra những ý tưởng đột phá."
        }
      ]
    },
    {
      id: "session-4",
      title: "Session 4: Retaining – Khắc sâu kiến thức dài hạn",
      description: "Chiến lược ôn tập thông minh để kiến thức không bao giờ bị mai một theo thời gian.",
      lectures: [
        {
          id: "lec-4-1",
          title: "Active Recall: Sức mạnh của việc truy hồi",
          duration: "26:00",
          thumbnail: "https://picsum.photos/seed/recall/800/450",
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          description: "Tại sao việc tự kiểm tra lại hiệu quả gấp 10 lần việc đọc lại? Cách áp dụng Active Recall vào mọi môn học."
        },
        {
          id: "lec-4-2",
          title: "Spaced Repetition & Hệ thống Leitner",
          duration: "22:40",
          thumbnail: "https://picsum.photos/seed/spaced/800/450",
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          description: "Xây dựng lịch trình ôn tập giãn cách để tối ưu hóa nỗ lực và thời gian."
        },
        {
          id: "lec-4-3",
          title: "Xây dựng hệ thống Second Brain",
          duration: "20:15",
          thumbnail: "https://picsum.photos/seed/secondbrain/800/450",
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          description: "Tổng hợp Cornell, Mindmap và SRS thành một hệ thống quản lý tri thức cá nhân bền vững."
        }
      ]
    }
  ],
  assignments: [
    {
      id: "asgn-1",
      title: "Thực hành Ghi chú Cornell",
      dueDate: "Tuần 2, Chủ Nhật",
      description: "Ghi chú một bài giảng hoặc chương sách bất kỳ bằng phương pháp Cornell, đảm bảo đủ 3 phần: Cues, Notes, Summary.",
      points: 100
    },
    {
      id: "asgn-2",
      title: "Xây dựng bộ Flashcard cá nhân",
      dueDate: "Tuần 4, Chủ Nhật",
      description: "Tạo ít nhất 20 flashcard cho một chủ đề bạn đang học, áp dụng nguyên tắc Active Recall.",
      points: 150
    }
  ],
  schedule: [
    { week: 1, topic: "Awakening – Đánh thức tư duy ghi nhớ", date: "15h, 09/03/2026" },
    { week: 2, topic: "Structuring – Nghệ thuật Cornell & tư duy chắt lọc: Thực hành phương pháp ghi chú Cornell", date: "15h, 10/03/2026" },
    { week: 3, topic: "Visualizing – Mindmap & bức tranh toàn cảnh: Chuyển ghi chú thành tư duy hình ảnh", date: "15h, 11/03/2026" },
    { week: 4, topic: "Retaining – Khắc sâu kiến thức dài hạn: Ôn tập bằng flashcard & spaced repetition", date: "15h, 12/03/2026" }
  ],
  mentors: [
    {
      id: "mentor-1",
      name: "Lê Quốc Trung",
      role: "Trưởng dự án",
      bio: "Chịu trách nhiệm quản lý tổng thể dự án và phát triển nền tảng website học tập.",
      avatar: "https://i.postimg.cc/W3KcgptL/z7593221300143-ffef728ed994f024f8b720c367f27444.jpg",
      specialties: ["Project Management", "Web Development", "Knowledge Management"]
    },
    {
      id: "mentor-2",
      name: "Hà Quang Duy",
      role: "Phó trưởng nhóm",
      bio: "Phụ trách hình ảnh, sản phẩm, biên tập video và thiết kế sáng tạo cho khóa học.",
      avatar: "https://i.postimg.cc/FKY4RJsB/Screenshot-2026-03-06-160843.png",
      specialties: ["Video Editing", "Product Design", "Graphic Design"]
    },
    {
      id: "mentor-3",
      name: "Trần Phú Mạnh",
      role: "Thành viên",
      bio: "Xây dựng nội dung giáo án, thiết kế slide bài giảng và tài liệu học tập.",
      avatar: "https://i.postimg.cc/HxfsH9wz/Screenshot-2026-03-06-161958.png",
      specialties: ["Curriculum Design", "Slide Design", "Content Creation"]
    },
    {
      id: "mentor-4",
      name: "Quách Xuân Thành",
      role: "Thành viên",
      bio: "Quản lý checklist công việc, xây dựng phiếu phản hồi và hỗ trợ thiết kế.",
      avatar: "https://i.postimg.cc/sxdybDzp/Screenshot-2026-03-06-155230.png",
      specialties: ["Operations", "Feedback Systems", "Design Support"]
    },
    {
      id: "mentor-5",
      name: "Đào Phương Vinh",
      role: "Thành viên",
      bio: "Phụ trách truyền thông, xây dựng bản demo sản phẩm và thiết kế hình ảnh.",
      avatar: "https://i.postimg.cc/nc1ZwJP4/Screenshot-2026-03-06-160054.png",
      specialties: ["Communications", "Product Demo", "Visual Design"]
    }
  ]
};
