import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  Calendar, 
  Video, 
  FileText, 
  ChevronRight, 
  Play, 
  Clock, 
  CheckCircle2, 
  Menu, 
  X,
  Github,
  Twitter,
  ExternalLink,
  User,
  Phone
} from 'lucide-react';
import { COURSE_DATA } from './data';
import { cn } from './lib/utils';

export default function App() {
  const [activeTab, setActiveTab] = useState<'intro' | 'mentors' | 'syllabus' | 'schedule' | 'lectures' | 'assignments'>('intro');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSessionId, setActiveSessionId] = useState<string | null>(null);

  const tabs = [
    { id: 'intro', label: 'Giới thiệu', icon: BookOpen },
    { id: 'mentors', label: 'Mentor', icon: User },
    { id: 'syllabus', label: 'Lộ trình', icon: FileText },
    { id: 'schedule', label: 'Lịch trình', icon: Calendar },
    { id: 'lectures', label: 'Bài giảng', icon: Video },
    { id: 'assignments', label: 'Bài tập', icon: CheckCircle2 },
  ] as const;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-bottom border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center">
                <span className="font-display font-black text-2xl tracking-tighter text-[#1e40af]">HDPE</span>
              </div>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2",
                    activeTab === tab.id 
                      ? "bg-indigo-50 text-indigo-600" 
                      : "text-slate-600 hover:bg-slate-100"
                  )}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg"
              >
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-bottom border-slate-200 overflow-hidden"
            >
              <div className="px-4 py-4 space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setActiveTab(tab.id);
                      setIsMenuOpen(false);
                    }}
                    className={cn(
                      "w-full px-4 py-3 rounded-xl text-left text-sm font-medium flex items-center gap-3",
                      activeTab === tab.id 
                        ? "bg-indigo-50 text-indigo-600" 
                        : "text-slate-600 hover:bg-slate-50"
                    )}
                  >
                    <tab.icon className="w-5 h-5" />
                    {tab.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        <AnimatePresence mode="wait">
          {activeTab === 'intro' && (
            <motion.section
              key="intro"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-12"
            >
              <div className="max-w-3xl">
                <h1 className="font-display text-4xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
                  {COURSE_DATA.title}
                </h1>
                <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                  {COURSE_DATA.subtitle}
                </p>
                <div className="flex flex-wrap gap-4">
                  <button 
                    onClick={() => setActiveTab('syllabus')}
                    className="bg-indigo-600 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 flex items-center gap-2"
                  >
                    Khám phá Lộ trình <ChevronRight className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={() => setActiveTab('lectures')}
                    className="bg-white border border-slate-200 text-slate-900 px-8 py-4 rounded-2xl font-semibold hover:bg-slate-50 transition-all flex items-center gap-2"
                  >
                    Xem Bài giảng <Video className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h2 className="font-display text-2xl font-bold">Thông tin khóa học & Liên hệ</h2>
                  <p className="text-slate-600 leading-relaxed">
                    {COURSE_DATA.description}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm">
                        <User className="w-4 h-4 text-indigo-600" />
                      </div>
                      <div>
                        <div className="text-slate-400 text-xs">Trưởng dự án</div>
                        <div className="font-bold text-slate-900">Lê Quốc Trung</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm">
                        <Phone className="w-4 h-4 text-indigo-600" />
                      </div>
                      <div>
                        <div className="text-slate-400 text-xs">Điện thoại</div>
                        <div className="font-bold text-slate-900">0333904229</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm">
                        <FileText className="w-4 h-4 text-indigo-600" />
                      </div>
                      <div>
                        <div className="text-slate-400 text-xs">Email</div>
                        <div className="font-bold text-slate-900">quoctrungql3@gmail.com</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100 sm:col-span-2">
                      <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm">
                        <BookOpen className="w-4 h-4 text-indigo-600" />
                      </div>
                      <div>
                        <div className="text-slate-400 text-xs">Địa chỉ</div>
                        <div className="font-bold text-slate-900">Đại học FPT Hà Nội</div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 bg-indigo-50 border border-indigo-100 rounded-3xl">
                    <h3 className="font-bold text-indigo-900 mb-2 flex items-center gap-2">
                      <BookOpen className="w-5 h-5" />
                      Sứ mệnh
                    </h3>
                    <p className="text-indigo-700 italic">
                      "{COURSE_DATA.mission}"
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-white border border-slate-100 rounded-2xl shadow-sm">
                      <div className="text-indigo-600 font-bold text-2xl mb-1">4+</div>
                      <div className="text-slate-500 text-sm">Học phần</div>
                    </div>
                    <div className="p-4 bg-white border border-slate-100 rounded-2xl shadow-sm">
                      <div className="text-indigo-600 font-bold text-2xl mb-1">10+</div>
                      <div className="text-slate-500 text-sm">Bài giảng</div>
                    </div>
                    <div className="p-4 bg-white border border-slate-100 rounded-2xl shadow-sm">
                      <div className="text-indigo-600 font-bold text-2xl mb-1">5+</div>
                      <div className="text-slate-500 text-sm">Dự án thực tế</div>
                    </div>
                    <div className="p-4 bg-white border border-slate-100 rounded-2xl shadow-sm">
                      <div className="text-indigo-600 font-bold text-2xl mb-1">∞</div>
                      <div className="text-slate-500 text-sm">Tự học linh hoạt</div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl">
                    <img 
                      src="https://picsum.photos/seed/course-hero/1200/800" 
                      alt="Course Preview" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>
            </motion.section>
          )}

          {activeTab === 'mentors' && (
            <motion.section
              key="mentors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-12"
            >
              <div className="text-center max-w-2xl mx-auto">
                <h2 className="font-display text-3xl font-bold mb-4">Đội ngũ Mentor</h2>
                <p className="text-slate-600">Những người sẽ đồng hành và hỗ trợ bạn trong suốt hành trình chinh phục kỹ năng ghi chú.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {COURSE_DATA.mentors.map((mentor) => (
                  <div key={mentor.id} className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition-all group">
                    <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                      <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0 shadow-lg group-hover:scale-105 transition-transform">
                        <img 
                          src={mentor.avatar} 
                          alt={mentor.name} 
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="text-center md:text-left space-y-3">
                        <div>
                          <h3 className="font-bold text-xl text-slate-900">{mentor.name}</h3>
                          <div className="text-indigo-600 font-medium text-sm">{mentor.role}</div>
                        </div>
                        <p className="text-slate-600 text-sm leading-relaxed">{mentor.bio}</p>
                        <div className="flex flex-wrap justify-center md:justify-start gap-2 pt-2">
                          {mentor.specialties.map((spec) => (
                            <span key={spec} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full">
                              {spec}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>
          )}

          {activeTab === 'syllabus' && (
            <motion.section
              key="syllabus"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2 className="font-display text-3xl font-bold mb-4">Lộ trình học tập</h2>
                <p className="text-slate-600">Một con đường có cấu trúc để làm chủ kỹ năng ghi chú và quản lý tri thức.</p>
              </div>
              <div className="space-y-6">
                {COURSE_DATA.sessions.map((session, index) => (
                  <div 
                    key={session.id}
                    className="bg-white border border-slate-200 rounded-3xl p-8 hover:border-indigo-200 transition-colors shadow-sm"
                  >
                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center font-bold shrink-0">
                        {index + 1}
                      </div>
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-xl font-bold mb-2">{session.title}</h3>
                          <p className="text-slate-600">{session.description}</p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {session.lectures.map((lecture) => (
                            <span 
                              key={lecture.id}
                              className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full"
                            >
                              {lecture.title}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>
          )}

          {activeTab === 'schedule' && (
            <motion.section
              key="schedule"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              className="max-w-3xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2 className="font-display text-3xl font-bold mb-4">Lịch trình học tập</h2>
                <p className="text-slate-600">Lộ trình đề xuất để bạn tự học một cách hiệu quả.</p>
              </div>
              <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                {COURSE_DATA.schedule.map((item, index) => (
                  <div key={item.week} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-indigo-600 text-slate-500 group-[.is-active]:text-indigo-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[45%] p-6 rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between mb-2">
                        <time className="font-display font-bold text-indigo-600">Buổi {item.week}</time>
                        <span className="text-xs text-slate-400">{item.date}</span>
                      </div>
                      <div className="text-slate-900 font-semibold">{item.topic}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>
          )}

          {activeTab === 'lectures' && (
            <motion.section
              key="lectures"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-12"
            >
              <AnimatePresence mode="wait">
                {!activeSessionId ? (
                  <motion.div
                    key="session-list"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="space-y-12"
                  >
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                      <div>
                        <h2 className="font-display text-3xl font-bold mb-2">Bài giảng</h2>
                        <p className="text-slate-600">Học tập theo lộ trình 4 Session chuyên sâu.</p>
                      </div>
                    </div>

                    <div className="space-y-8">
                      {COURSE_DATA.sessions.map((session, sIndex) => (
                        <div key={session.id} className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow">
                          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                            <div className="flex items-center gap-6">
                              <div className="w-14 h-14 bg-indigo-600 text-white rounded-2xl flex items-center justify-center text-xl font-bold shadow-lg shadow-indigo-100 shrink-0">
                                {sIndex + 1}
                              </div>
                              <div>
                                <h3 className="text-2xl font-bold text-slate-900">{session.title}</h3>
                                <p className="text-slate-500 mt-1">{session.description}</p>
                              </div>
                            </div>
                            <button 
                              onClick={() => setActiveSessionId(session.id)}
                              className="px-8 py-4 bg-indigo-50 text-indigo-600 rounded-2xl font-bold hover:bg-indigo-100 transition-all flex items-center gap-2 shrink-0"
                            >
                              Xem chi tiết bài học <ChevronRight className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="session-detail"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-12"
                  >
                    <button 
                      onClick={() => setActiveSessionId(null)}
                      className="flex items-center gap-2 text-slate-500 hover:text-indigo-600 font-medium transition-colors mb-8"
                    >
                      <X className="w-4 h-4" /> Quay lại danh sách Session
                    </button>

                    {activeSessionId === 'session-1' ? (
                      <div className="max-w-4xl mx-auto space-y-12">
                        <div className="text-center space-y-4">
                          <span className="px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-sm font-bold uppercase tracking-wider">Session 1</span>
                          <h2 className="font-display text-4xl font-bold text-slate-900">Awakening – Đánh thức tư duy ghi nhớ</h2>
                        </div>

                        {/* Overview */}
                        <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
                          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <div className="w-1 h-8 bg-indigo-600 rounded-full"></div>
                            Mục tiêu của session này
                          </h3>
                          <ul className="space-y-4">
                            {[
                              "Hiểu cách trí nhớ con người hoạt động",
                              "Nhận ra vì sao chúng ta quên rất nhanh sau khi học",
                              "Học phương pháp ghi chép Cornell Notes",
                              "Biết cách học để nhớ lâu hơn"
                            ].map((goal, i) => (
                              <li key={i} className="flex items-start gap-3 text-slate-700">
                                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                                {goal}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Memory Challenge */}
                        <div className="bg-slate-900 text-white rounded-3xl p-10 shadow-xl overflow-hidden relative">
                          <div className="relative z-10 space-y-8">
                            <div className="text-center space-y-2">
                              <h3 className="text-2xl font-bold">Memory Challenge – Kiểm tra trí nhớ của bạn</h3>
                              <p className="text-slate-400">Sinh viên có 30 giây để ghi nhớ các từ sau. Sau 30 giây, hãy viết lại tất cả những gì bạn nhớ được.</p>
                            </div>

                            <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
                              {[
                                "72", "Chiếc lược", "Con mèo", "Cầu Cổng Vàng", "Quả táo",
                                "Chìa khóa", "Laptop", "Bánh mì", "Elon Musk", "1995",
                                "Cây dù", "Everest", "Sa mạc", "Ly cà phê", "Màu tím"
                              ].map((word, i) => (
                                <div key={i} className="bg-white/10 p-3 rounded-xl text-center text-sm font-medium backdrop-blur-sm">
                                  {word}
                                </div>
                              ))}
                            </div>

                            <div className="grid md:grid-cols-2 gap-8 pt-8 border-t border-white/10">
                              <div className="space-y-4">
                                <h4 className="font-bold text-indigo-400 uppercase text-xs tracking-widest">Bảng điểm</h4>
                                <div className="space-y-2 text-sm">
                                  <div className="flex justify-between"><span>12–15 từ</span><span className="text-emerald-400 font-bold">Rất tốt</span></div>
                                  <div className="flex justify-between"><span>8–11 từ</span><span className="text-indigo-400 font-bold">Trung bình</span></div>
                                  <div className="flex justify-between"><span>5–7 từ</span><span className="text-amber-400 font-bold">Yếu</span></div>
                                  <div className="flex justify-between"><span>&lt;5 từ</span><span className="text-rose-400 font-bold">Quên phần lớn</span></div>
                                </div>
                              </div>
                              <div className="flex flex-col items-center justify-center gap-4">
                                <div className="text-5xl font-black text-indigo-500">30s</div>
                                <button className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-xl font-bold transition-all">Bắt đầu thử thách</button>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* How Memory Works */}
                        <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
                          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <div className="w-1 h-8 bg-indigo-600 rounded-full"></div>
                            Cơ chế hoạt động của trí nhớ
                          </h3>
                          <p className="text-slate-600 mb-8">Trí nhớ không phải là một kho lưu trữ tĩnh, mà là một quy trình gồm 3 giai đoạn chính. Nếu một trong các giai đoạn này thất bại, trí nhớ sẽ trở nên yếu kém.</p>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                              { title: "Encoding", desc: "Ghi nhận thông tin" },
                              { title: "Storage", desc: "Lưu trữ thông tin trong não" },
                              { title: "Retrieval", desc: "Truy xuất thông tin khi cần" }
                            ].map((stage, i) => (
                              <div key={i} className="bg-indigo-50 p-6 rounded-2xl text-center space-y-2">
                                <div className="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-4">{i+1}</div>
                                <h4 className="font-bold text-slate-900">{stage.title}</h4>
                                <p className="text-slate-500 text-sm">{stage.desc}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Forgetting Curve */}
                        <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
                          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <div className="w-1 h-8 bg-indigo-600 rounded-full"></div>
                            Đường cong quên lãng (The Forgetting Curve)
                          </h3>
                          <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                              <p className="text-slate-600">Khám phá bởi Hermann Ebbinghaus, đường cong này cho thấy tốc độ chúng ta mất thông tin nếu không có sự can thiệp.</p>
                              <div className="space-y-3 bg-amber-50 p-6 rounded-2xl border border-amber-100">
                                <div className="flex justify-between text-sm"><span>Sau 20 phút:</span><span className="font-bold text-amber-700">Quên ~40%</span></div>
                                <div className="flex justify-between text-sm"><span>Sau 1 giờ:</span><span className="font-bold text-amber-700">Quên &gt;50%</span></div>
                                <div className="flex justify-between text-sm"><span>Sau 24 giờ:</span><span className="font-bold text-amber-700">Còn ~30-40%</span></div>
                              </div>
                              <p className="text-slate-600 text-sm italic">Việc ôn tập thông tin đúng thời điểm giúp làm chậm quá trình quên lãng. Đây là lý do chúng ta cần áp dụng Spaced Repetition.</p>
                            </div>
                            <div className="aspect-square bg-slate-100 rounded-2xl flex items-center justify-center">
                              <span className="text-slate-400 text-sm">[Biểu đồ đường cong quên lãng]</span>
                            </div>
                          </div>
                        </div>

                        {/* Strategy */}
                        <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
                          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <div className="w-1 h-8 bg-indigo-600 rounded-full"></div>
                            Chiến lược học tập hiệu quả
                          </h3>
                          <div className="space-y-8 relative before:absolute before:left-4 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-100">
                            {[
                              { step: "Bước 1", title: "Học lần đầu để hiểu", desc: "Tập trung tối đa để nắm bắt bản chất vấn đề." },
                              { step: "Bước 2", title: "Ôn lại ngay sau khi học", desc: "Dành 5-10 phút để xem lại những gì vừa ghi chép." },
                              { step: "Bước 3", title: "Ôn lại sau 24 giờ", desc: "Thời điểm vàng để củng cố trước khi thông tin bị xóa sạch." },
                              { step: "Bước 4", title: "Ôn lại giãn cách", desc: "Lặp lại sau 3 ngày, 1 tuần, 1 tháng để ghi nhớ vĩnh viễn." }
                            ].map((item, i) => (
                              <div key={i} className="relative pl-10">
                                <div className="absolute left-0 top-1 w-8 h-8 bg-white border-2 border-indigo-600 rounded-full flex items-center justify-center z-10">
                                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                                </div>
                                <h4 className="font-bold text-indigo-600 text-sm mb-1">{item.step}</h4>
                                <h5 className="font-bold text-slate-900 mb-1">{item.title}</h5>
                                <p className="text-slate-500 text-sm">{item.desc}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Cornell Method */}
                        <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
                          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <div className="w-1 h-8 bg-indigo-600 rounded-full"></div>
                            Phương pháp Ghi chú Cornell
                          </h3>
                          <p className="text-slate-600 mb-8">Một hệ thống chia trang giấy thành 3 phần giúp tối ưu hóa việc học và ôn tập:</p>
                          
                          <div className="grid grid-cols-3 grid-rows-[300px_100px] gap-4 mb-8">
                            <div className="bg-indigo-50 border-2 border-dashed border-indigo-200 rounded-2xl flex items-center justify-center text-center p-4">
                              <div className="space-y-2">
                                <div className="font-bold text-indigo-600">Cue Column</div>
                                <div className="text-xs text-slate-500">Từ khóa / Câu hỏi</div>
                              </div>
                            </div>
                            <div className="col-span-2 bg-slate-50 border-2 border-dashed border-slate-200 rounded-2xl flex items-center justify-center text-center p-4">
                              <div className="space-y-2">
                                <div className="font-bold text-slate-900">Note-taking Area</div>
                                <div className="text-xs text-slate-500">Nội dung chính của bài học</div>
                              </div>
                            </div>
                            <div className="col-span-3 bg-emerald-50 border-2 border-dashed border-emerald-200 rounded-2xl flex items-center justify-center text-center p-4">
                              <div className="space-y-2">
                                <div className="font-bold text-emerald-700">Summary</div>
                                <div className="text-xs text-slate-500">Tóm tắt nội dung chính cuối trang</div>
                              </div>
                            </div>
                          </div>

                          <div className="bg-slate-50 p-6 rounded-2xl">
                            <h4 className="font-bold mb-4">Cách ôn tập bằng Cornell:</h4>
                            <ol className="list-decimal list-inside space-y-3 text-slate-600 text-sm">
                              <li>Che phần <strong>Note-taking area</strong> lại.</li>
                              <li>Chỉ nhìn vào phần <strong>Cue column</strong>.</li>
                              <li>Cố gắng nhớ lại và giải thích nội dung tương ứng.</li>
                              <li>Mở phần ghi chú để kiểm tra lại độ chính xác.</li>
                            </ol>
                          </div>
                        </div>

                        {/* Deep Processing */}
                        <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
                          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <div className="w-1 h-8 bg-indigo-600 rounded-full"></div>
                            Deep Processing – Xử lý sâu
                          </h3>
                          <p className="text-slate-600 mb-8">Thay vì học thụ động (chỉ đọc và chép), hãy chủ động xử lý thông tin để não bộ phải làm việc:</p>
                          <div className="grid grid-cols-2 gap-4">
                            {[
                              "Giải thích lại bằng lời của mình",
                              "Đặt câu hỏi “Tại sao?”",
                              "Tự kiểm tra (Active Recall)",
                              "Kết nối với kiến thức cũ"
                            ].map((item, i) => (
                              <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                                <CheckCircle2 className="w-5 h-5 text-indigo-600" />
                                <span className="font-medium text-slate-700 text-sm">{item}</span>
                              </div>
                            ))}
                          </div>
                          <p className="text-slate-500 text-sm mt-8 italic">Não bộ càng hoạt động tích cực, thông tin càng được lưu giữ lâu hơn.</p>
                        </div>

                        {/* Mindset */}
                        <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
                          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                            <div className="w-1 h-8 bg-indigo-600 rounded-full"></div>
                            Lời khuyên về tư duy (Mindset)
                          </h3>
                          <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-rose-50 p-8 rounded-3xl border border-rose-100 space-y-4">
                              <div className="text-3xl">❌</div>
                              <div className="space-y-4">
                                <div>
                                  <div className="text-rose-400 text-xs font-bold uppercase tracking-widest mb-1">Đừng hỏi</div>
                                  <div className="text-rose-900 font-bold text-lg">“Ghi đủ chưa?”</div>
                                </div>
                                <div>
                                  <div className="text-rose-400 text-xs font-bold uppercase tracking-widest mb-1">Đừng hỏi</div>
                                  <div className="text-rose-900 font-bold text-lg">“Có slide không?”</div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-emerald-50 p-8 rounded-3xl border border-emerald-100 space-y-4">
                              <div className="text-3xl">✅</div>
                              <div className="space-y-4">
                                <div>
                                  <div className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-1">Hãy hỏi</div>
                                  <div className="text-emerald-900 font-bold text-lg">“Mình đã hiểu chưa?”</div>
                                </div>
                                <div>
                                  <div className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-1">Hãy hỏi</div>
                                  <div className="text-emerald-900 font-bold text-lg">“Mình có thể giải thích lại không?”</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : activeSessionId === 'session-2' ? (
                      <div className="max-w-4xl mx-auto space-y-12">
                        <div className="text-center space-y-4">
                          <span className="px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-sm font-bold uppercase tracking-wider">Session 2</span>
                          <h2 className="font-display text-4xl font-bold text-slate-900">Structuring – Nghệ thuật Cornell & Tư duy chắt lọc</h2>
                        </div>

                        {/* Overview */}
                        <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
                          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <div className="w-1 h-8 bg-indigo-600 rounded-full"></div>
                            Mục tiêu của session này
                          </h3>
                          <ul className="space-y-4">
                            {[
                              "Hiểu cách tổ chức thông tin khi ghi chép",
                              "Áp dụng phương pháp Cornell Notes hiệu quả",
                              "Học quy tắc 5R để học sâu hơn",
                              "Biết cách sử dụng AI để gợi ý keyword"
                            ].map((goal, i) => (
                              <li key={i} className="flex items-start gap-3 text-slate-700">
                                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                                {goal}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Cornell Structure */}
                        <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
                          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <div className="w-1 h-8 bg-indigo-600 rounded-full"></div>
                            Cấu trúc Ghi chú Cornell
                          </h3>
                          <p className="text-slate-600 mb-8">Phương pháp Cornell giúp bạn tổ chức kiến thức một cách khoa học, biến những trang ghi chú hỗn độn thành một hệ thống tri thức có cấu trúc rõ ràng.</p>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                              { title: "Notes", desc: "Ghi nội dung chính của bài giảng" },
                              { title: "Cues", desc: "Từ khóa hoặc câu hỏi ôn tập" },
                              { title: "Summary", desc: "Tóm tắt nội dung trong 3 dòng" }
                            ].map((part, i) => (
                              <div key={i} className="bg-indigo-50 p-6 rounded-2xl text-center border border-indigo-100">
                                <h4 className="font-bold text-indigo-600 mb-2">{part.title}</h4>
                                <p className="text-slate-500 text-sm">{part.desc}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* 5R Method */}
                        <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
                          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <div className="w-1 h-8 bg-indigo-600 rounded-full"></div>
                            Phương pháp học tập 5R
                          </h3>
                          <div className="grid md:grid-cols-2 gap-6">
                            {[
                              { r: "Record", desc: "Ghi chép lại nội dung bài học một cách đầy đủ và rõ ràng." },
                              { r: "Reduce", desc: "Rút gọn nội dung thành các từ khóa chính và câu hỏi quan trọng." },
                              { r: "Recite", desc: "Che phần notes, nhìn vào cues và tự nói lại kiến thức bằng lời của mình." },
                              { r: "Reflect", desc: "Liên hệ kiến thức mới với những gì đã biết để hiểu sâu hơn." },
                              { r: "Review", desc: "Ôn tập định kỳ để củng cố trí nhớ và ngăn chặn sự quên lãng." }
                            ].map((item, i) => (
                              <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-indigo-200 transition-colors">
                                <div className="flex items-center gap-3 mb-2">
                                  <div className="w-7 h-7 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xs font-bold">{i+1}</div>
                                  <h4 className="font-bold text-slate-900">{item.r}</h4>
                                </div>
                                <p className="text-slate-500 text-sm">{item.desc}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Practice Activity */}
                        <div className="bg-rose-50 border-2 border-dashed border-rose-200 rounded-3xl p-8">
                          <h3 className="text-2xl font-bold text-rose-900 mb-4">Thực hành: Tư duy chắt lọc</h3>
                          <div className="space-y-4">
                            <p className="text-rose-800">Hãy đọc một bài báo bất kỳ và sử dụng cấu trúc Cornell để tóm tắt các ý chính sau:</p>
                            <ul className="grid md:grid-cols-2 gap-4">
                              {[
                                "Sự kiện chính đang diễn ra",
                                "Mục tiêu và các thiệt hại liên quan",
                                "Phản ứng của các bên liên quan",
                                "Lý do hoặc quan điểm từ phía đối lập"
                              ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-rose-700 text-sm">
                                  <div className="w-1.5 h-1.5 bg-rose-400 rounded-full"></div>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* AI Support */}
                        <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
                          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <div className="w-1 h-8 bg-indigo-600 rounded-full"></div>
                            Sử dụng AI hỗ trợ ghi chép
                          </h3>
                          <div className="space-y-6">
                            {[
                              { step: "1", title: "Chọn công cụ", desc: "Sử dụng ChatGPT, Gemini hoặc Claude." },
                              { step: "2", title: "Cung cấp dữ liệu", desc: "Tải lên hình ảnh ghi chú hoặc dán đường dẫn nội dung cần xử lý." },
                              { step: "3", title: "Ra lệnh (Prompt)", desc: "Yêu cầu AI gợi ý các từ khóa (keywords) hoặc tóm tắt ý chính theo cấu trúc Cornell." }
                            ].map((item, i) => (
                              <div key={i} className="flex gap-4 p-6 bg-emerald-50 rounded-2xl border border-emerald-100">
                                <div className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold shrink-0">{item.step}</div>
                                <div>
                                  <h4 className="font-bold text-emerald-900">{item.title}</h4>
                                  <p className="text-emerald-700 text-sm">{item.desc}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                          <div className="mt-8 p-6 bg-amber-50 rounded-2xl border-l-4 border-amber-400">
                            <h4 className="font-bold text-amber-900 mb-2">Lưu ý quan trọng:</h4>
                            <ul className="space-y-2 text-sm text-amber-800">
                              <li>• Đặt câu hỏi rõ ràng và cụ thể để nhận kết quả tốt nhất.</li>
                              <li>• Tuyệt đối không copy 100% từ AI, hãy dùng nó làm gợi ý để tự viết lại.</li>
                              <li>• Không sử dụng AI để gian lận trong học tập và thi cử.</li>
                            </ul>
                          </div>
                        </div>

                        {/* TED Talk Practice */}
                        <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
                          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <div className="w-1 h-8 bg-indigo-600 rounded-full"></div>
                            Thực hành: Ghi chú TED Talk
                          </h3>
                          <p className="text-slate-600 mb-6">Chọn một video TED Talk bạn yêu thích và thực hành ghi chú trực tiếp.</p>
                          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                            <h4 className="font-bold mb-4">Yêu cầu bài tập:</h4>
                            <p className="text-slate-500 text-sm mb-4">Sử dụng một trang giấy trắng hoặc ứng dụng ghi chú, chia làm 3 phần Cornell và hoàn thiện:</p>
                            <div className="flex gap-3">
                              {["Cues", "Notes", "Summary"].map(tag => (
                                <span key={tag} className="px-4 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-600">{tag}</span>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Peer Review */}
                        <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
                          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <div className="w-1 h-8 bg-indigo-600 rounded-full"></div>
                            Hoạt động: Đánh giá đồng đẳng
                          </h3>
                          <div className="grid md:grid-cols-3 gap-6">
                            {[
                              { title: "Đầy đủ ý", desc: "Nội dung có bao quát hết các luận điểm chính không?" },
                              { title: "Rõ ràng", desc: "Bố cục có dễ nhìn và dễ theo dõi không?" },
                              { title: "Súc tích", desc: "Thông tin có được chắt lọc ngắn gọn, tránh rườm rà không?" }
                            ].map((item, i) => (
                              <div key={i} className="p-6 bg-indigo-50 rounded-2xl text-center space-y-2 border border-indigo-100">
                                <h4 className="font-bold text-indigo-900">{item.title}</h4>
                                <p className="text-indigo-700 text-xs">{item.desc}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Key Takeaways */}
                        <div className="bg-indigo-600 text-white rounded-3xl p-10 text-center space-y-6">
                          <h3 className="text-2xl font-bold">Giá trị của Cornell Notes</h3>
                          <p className="text-indigo-100">Phương pháp này không chỉ là ghi chép, mà là một tư duy tổ chức tri thức.</p>
                          <div className="flex flex-wrap justify-center gap-4">
                            {[
                              "Tổ chức thông tin rõ ràng",
                              "Học tập chủ động",
                              "Ôn tập hiệu quả trước kỳ thi"
                            ].map((pill, i) => (
                              <span key={i} className="px-6 py-2 bg-white/10 rounded-full text-sm font-bold backdrop-blur-sm">
                                {pill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : activeSessionId === 'session-3' ? (
                      <div className="max-w-4xl mx-auto space-y-12">
                        <div className="text-center space-y-4">
                          <span className="px-4 py-1.5 bg-cyan-50 text-cyan-600 rounded-full text-sm font-bold uppercase tracking-wider">Session 3</span>
                          <h2 className="font-display text-4xl font-bold text-slate-900">Visualizing – Mindmap & Bức tranh toàn cảnh</h2>
                        </div>

                        {/* Overview */}
                        <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
                          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <div className="w-1 h-8 bg-cyan-600 rounded-full"></div>
                            Mục tiêu của session này
                          </h3>
                          <ul className="space-y-4">
                            {[
                              "Hiểu mindmap là gì",
                              "Biết cách tổ chức kiến thức bằng bản đồ tư duy",
                              "Học cách kiểm tra logic của mindmap",
                              "Sử dụng AI để phân tích cấu trúc mindmap"
                            ].map((goal, i) => (
                              <li key={i} className="flex items-start gap-3 text-slate-700">
                                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                                {goal}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* What is a Mindmap */}
                        <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
                          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <div className="w-1 h-8 bg-cyan-600 rounded-full"></div>
                            Mindmap là gì?
                          </h3>
                          <p className="text-slate-600 mb-8">Mindmap là bản đồ tư duy giúp tổ chức thông tin theo cấu trúc mạng lưới, mô phỏng cách não bộ liên kết các ý tưởng một cách tự nhiên.</p>
                          
                          <div className="bg-cyan-50 rounded-2xl p-10 flex flex-col items-center">
                            <div className="px-6 py-3 bg-cyan-600 text-white rounded-xl font-bold shadow-lg mb-10">Central Idea</div>
                            <div className="grid grid-cols-2 gap-20 w-full">
                              <div className="flex flex-col items-center gap-4">
                                <div className="px-4 py-2 bg-white border-2 border-cyan-600 text-cyan-600 rounded-lg font-bold">Main Branch 1</div>
                                <div className="space-y-2">
                                  <div className="px-3 py-1 bg-white border border-slate-200 rounded text-xs text-slate-500">Detail 1.1</div>
                                  <div className="px-3 py-1 bg-white border border-slate-200 rounded text-xs text-slate-500">Detail 1.2</div>
                                </div>
                              </div>
                              <div className="flex flex-col items-center gap-4">
                                <div className="px-4 py-2 bg-white border-2 border-cyan-600 text-cyan-600 rounded-lg font-bold">Main Branch 2</div>
                                <div className="space-y-2">
                                  <div className="px-3 py-1 bg-white border border-slate-200 rounded text-xs text-slate-500">Detail 2.1</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Problems */}
                        <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
                          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <div className="w-1 h-8 bg-cyan-600 rounded-full"></div>
                            Các vấn đề thường gặp
                          </h3>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                              { icon: "🔍", title: "Thiếu chi tiết", desc: "Nhánh quá sơ sài" },
                              { icon: "♻️", title: "Ý trùng lặp", desc: "Nội dung bị lặp lại" },
                              { icon: "⚖️", title: "Không cân đối", desc: "Nhánh dài nhánh ngắn" },
                              { icon: "📍", title: "Sai cấp độ", desc: "Ý lớn đặt ở nhánh nhỏ" }
                            ].map((item, i) => (
                              <div key={i} className="p-4 bg-rose-50 border border-rose-100 rounded-2xl text-center space-y-2">
                                <div className="text-2xl">{item.icon}</div>
                                <h4 className="font-bold text-rose-900 text-sm">{item.title}</h4>
                                <p className="text-rose-700 text-[10px] leading-tight">{item.desc}</p>
                              </div>
                            ))}
                          </div>
                          <div className="mt-8 p-6 bg-slate-50 rounded-2xl text-center border border-slate-200">
                            <h4 className="font-bold text-cyan-700">“MINDMAP CỦA BẠN ĐÃ THỰC SỰ LOGIC CHƯA?”</h4>
                          </div>
                        </div>

                        {/* AI Support */}
                        <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
                          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <div className="w-1 h-8 bg-cyan-600 rounded-full"></div>
                            AI hỗ trợ phân tích Mindmap
                          </h3>
                          <div className="grid md:grid-cols-2 gap-4">
                            {[
                              { title: "Kiểm tra phân cấp", desc: "Xác định xem Central → Main → Detail có logic không." },
                              { title: "Phát hiện thiếu sót", desc: "Gợi ý các khía cạnh bạn có thể đã bỏ quên." },
                              { title: "Loại bỏ trùng lặp", desc: "Tìm ra các ý bị lặp lại gây nhiễu hệ thống." },
                              { title: "Mở rộng ý tưởng", desc: "Gợi ý thêm các nhánh con để đào sâu kiến thức." }
                            ].map((item, i) => (
                              <div key={i} className="flex gap-4 p-5 bg-emerald-50 rounded-2xl border border-emerald-100">
                                <div className="w-8 h-8 bg-emerald-600 text-white rounded-lg flex items-center justify-center shrink-0">
                                  <CheckCircle2 className="w-5 h-5" />
                                </div>
                                <div>
                                  <h4 className="font-bold text-emerald-900 text-sm">{item.title}</h4>
                                  <p className="text-emerald-700 text-xs mt-1">{item.desc}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Steps */}
                        <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
                          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                            <div className="w-1 h-8 bg-cyan-600 rounded-full"></div>
                            4 Bước kiểm tra Mindmap với AI
                          </h3>
                          <div className="space-y-6">
                            {[
                              { step: "1", title: "Chuyển Mindmap thành văn bản", desc: "Viết lại cấu trúc sơ đồ dưới dạng danh sách gạch đầu dòng (Outline)." },
                              { step: "2", title: "Yêu cầu AI phân tích cấu trúc", desc: "Sử dụng prompt: 'Hãy phân tích tính logic và đầy đủ của cấu trúc mindmap sau...'" },
                              { step: "3", title: "Xem các gợi ý thiếu sót", desc: "AI sẽ chỉ ra các nhánh chưa cân đối hoặc các ý còn mập mờ." },
                              { step: "4", title: "Tự điều chỉnh lại sơ đồ", desc: "Dựa trên phản hồi, hãy vẽ lại hoặc bổ sung để hoàn thiện." }
                            ].map((item, i) => (
                              <div key={i} className="flex gap-6 items-start">
                                <div className="w-10 h-10 bg-cyan-600 text-white rounded-full flex items-center justify-center font-bold shrink-0 shadow-md">{item.step}</div>
                                <div className="pt-1">
                                  <h4 className="font-bold text-slate-900">{item.title}</h4>
                                  <p className="text-slate-500 text-sm">{item.desc}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Example */}
                        <div className="bg-amber-50 border-2 border-amber-200 rounded-3xl p-8">
                          <h3 className="text-2xl font-bold text-amber-900 mb-4">Ví dụ thực tế</h3>
                          <div className="space-y-4">
                            <p className="text-amber-800 font-medium">Vấn đề: Nhánh "Ghi chú" quá rộng</p>
                            <p className="text-amber-700 text-sm">Giả sử bạn có một mindmap về "Học tập" và nhánh "Ghi chú" chỉ có 2 ý nhỏ. AI sẽ phát hiện:</p>
                            <ul className="space-y-2">
                              {[
                                "Thiếu ví dụ cụ thể: Bạn chưa nêu các phương pháp như Cornell hay Mindmap.",
                                "Chi tiết không cân đối: Nhánh 'Ghi chú' quá mỏng so với nhánh 'Ôn thi'.",
                                "Nội dung chưa rõ: 'Ghi chú' là hành động hay là tài liệu? Cần làm rõ."
                              ].map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-amber-800 text-sm">
                                  <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-1.5 shrink-0"></div>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Conclusion */}
                        <div className="bg-cyan-600 text-white rounded-3xl p-10 space-y-8">
                          <h3 className="text-2xl font-bold text-center">Kết luận</h3>
                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
                              <h4 className="font-bold text-amber-300 mb-3">AI giúp bạn</h4>
                              <ul className="space-y-2 text-sm text-cyan-50">
                                <li>• Kiểm tra logic chặt chẽ</li>
                                <li>• Phát hiện các "lỗ hổng" kiến thức</li>
                                <li>• Hoàn thiện cấu trúc hệ thống</li>
                              </ul>
                            </div>
                            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
                              <h4 className="font-bold text-amber-300 mb-3">Bạn quyết định</h4>
                              <ul className="space-y-2 text-sm text-cyan-50">
                                <li>• Giữ trọng tâm vào mục tiêu</li>
                                <li>• Điều chỉnh hệ thống theo cách hiểu riêng</li>
                              </ul>
                            </div>
                          </div>
                          <p className="text-center font-bold text-lg">AI là trợ thủ, nhưng bạn là người làm chủ tri thức!</p>
                        </div>
                      </div>
                    ) : activeSessionId === 'session-4' ? (
                      <div className="max-w-4xl mx-auto space-y-12">
                        <div className="text-center space-y-4">
                          <span className="px-4 py-1.5 bg-violet-50 text-violet-600 rounded-full text-sm font-bold uppercase tracking-wider">Session 4</span>
                          <h2 className="font-display text-4xl font-bold text-slate-900">Retaining – Ghi nhớ lâu dài với Spaced Repetition</h2>
                        </div>

                        {/* Overview */}
                        <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
                          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <div className="w-1 h-8 bg-violet-600 rounded-full"></div>
                            Mục tiêu của session này
                          </h3>
                          <ul className="space-y-4">
                            {[
                              "Hiểu vì sao trí nhớ suy giảm theo thời gian",
                              "Học cách ôn tập hiệu quả",
                              "Áp dụng Spaced Repetition (Lặp lại giãn cách)",
                              "Sử dụng flashcards để ghi nhớ"
                            ].map((goal, i) => (
                              <li key={i} className="flex items-start gap-3 text-slate-700">
                                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                                {goal}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Why Spaced Repetition Works */}
                        <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
                          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <div className="w-1 h-8 bg-violet-600 rounded-full"></div>
                            Tại sao Spaced Repetition hiệu quả?
                          </h3>
                          <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                              <p className="text-slate-600">Trí nhớ suy giảm theo thời gian nếu không được củng cố. Ôn tập đúng lúc giúp củng cố kết nối trí nhớ mạnh mẽ hơn.</p>
                              <div className="space-y-3 bg-violet-50 p-6 rounded-2xl border border-violet-100">
                                <div className="flex justify-between text-sm"><span>Lần 1:</span><span className="font-bold text-violet-700">Ngay sau khi học</span></div>
                                <div className="flex justify-between text-sm"><span>Lần 2:</span><span className="font-bold text-violet-700">Sau 1 ngày</span></div>
                                <div className="flex justify-between text-sm"><span>Lần 3:</span><span className="font-bold text-violet-700">Sau 1 tuần</span></div>
                                <div className="flex justify-between text-sm"><span>Lần 4:</span><span className="font-bold text-violet-700">Sau 1 tháng</span></div>
                              </div>
                            </div>
                            <div className="aspect-video bg-slate-100 rounded-2xl flex items-center justify-center relative overflow-hidden">
                              <div className="absolute inset-0 flex items-end justify-around px-4 pb-4">
                                <div className="w-8 bg-violet-200 rounded-t-lg h-[20%]"></div>
                                <div className="w-8 bg-violet-300 rounded-t-lg h-[40%]"></div>
                                <div className="w-8 bg-violet-400 rounded-t-lg h-[60%]"></div>
                                <div className="w-8 bg-violet-500 rounded-t-lg h-[80%]"></div>
                                <div className="w-8 bg-violet-600 rounded-t-lg h-[100%]"></div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Flashcard Technique */}
                        <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
                          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <div className="w-1 h-8 bg-violet-600 rounded-full"></div>
                            Kỹ thuật thiết kế Flashcards
                          </h3>
                          <div className="grid grid-cols-2 gap-4">
                            {[
                              { title: "Câu hỏi rõ ràng", icon: "❓" },
                              { title: "Trả lời ngắn gọn", icon: "⚡" },
                              { title: "Không sao chép", icon: "✍️" },
                              { title: "Một ý duy nhất", icon: "🎯" }
                            ].map((item, i) => (
                              <div key={i} className="p-6 bg-slate-50 border border-slate-100 rounded-2xl text-center space-y-2">
                                <div className="text-2xl">{item.icon}</div>
                                <h4 className="font-bold text-slate-900 text-sm">{item.title}</h4>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Learning System */}
                        <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
                          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                            <div className="w-1 h-8 bg-violet-600 rounded-full"></div>
                            Hệ thống học tập toàn diện
                          </h3>
                          <div className="flex flex-wrap justify-center items-center gap-4 text-sm font-bold">
                            <span className="px-4 py-2 bg-slate-100 rounded-xl">Cornell Notes</span>
                            <ChevronRight className="w-4 h-4 text-slate-300" />
                            <span className="px-4 py-2 bg-slate-100 rounded-xl">Tóm tắt</span>
                            <ChevronRight className="w-4 h-4 text-slate-300" />
                            <span className="px-4 py-2 bg-slate-100 rounded-xl">Tạo câu hỏi</span>
                            <ChevronRight className="w-4 h-4 text-slate-300" />
                            <span className="px-4 py-2 bg-slate-100 rounded-xl">Flashcards</span>
                          </div>
                          <div className="mt-10 p-8 bg-violet-600 text-white rounded-2xl text-center">
                            <h4 className="text-xl font-bold mb-2">Active Recall + Spaced Repetition</h4>
                            <p className="text-violet-100 text-sm">Công thức vàng để làm chủ mọi kiến thức.</p>
                          </div>
                        </div>

                        {/* Course Summary */}
                        <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
                          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                            <div className="w-1 h-8 bg-violet-600 rounded-full"></div>
                            Tổng kết khóa học Deep Learner
                          </h3>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                              { s: "1", t: "Awakening", d: "Nhận thức cách học" },
                              { s: "2", t: "Structuring", d: "Tổ chức với Cornell" },
                              { s: "3", t: "Visualizing", d: "Bức tranh Mindmap" },
                              { s: "4", t: "Retaining", d: "Ghi nhớ lâu dài" }
                            ].map((item, i) => (
                              <div key={i} className="p-4 bg-violet-50 rounded-2xl text-center space-y-1">
                                <div className="text-[10px] font-bold text-violet-400 uppercase">Session {item.s}</div>
                                <div className="font-bold text-slate-900 text-sm">{item.t}</div>
                                <div className="text-[10px] text-slate-500">{item.d}</div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Commitment */}
                        <div className="bg-emerald-50 border-2 border-emerald-200 rounded-3xl p-8">
                          <h3 className="text-2xl font-bold text-emerald-900 mb-6">Kế hoạch 21 ngày</h3>
                          <div className="space-y-4">
                            {[
                              { tag: "Hàng ngày", text: "Dành 15 phút ôn tập Flashcards." },
                              { tag: "Mỗi 2 ngày", text: "Thực hiện các bài kiểm tra ngắn." },
                              { tag: "Hàng tuần", text: "Vẽ một Mindmap tổng kết kiến thức." }
                            ].map((item, i) => (
                              <div key={i} className="flex gap-4 items-center">
                                <span className="px-3 py-1 bg-emerald-600 text-white rounded-full text-[10px] font-bold uppercase shrink-0">{item.tag}</span>
                                <p className="text-emerald-800 text-sm">{item.text}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Survey */}
                        <div className="bg-amber-50 border-2 border-amber-200 rounded-3xl p-8 text-center space-y-4">
                          <h3 className="text-2xl font-bold text-amber-900">Khảo sát cuối khóa học</h3>
                          <p className="text-amber-800 text-sm">Ý kiến của bạn giúp chúng tôi cải thiện khóa học tốt hơn.</p>
                          <a href="https://forms.gle/FatDKqfDvRLqkJQ2A" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-xl font-bold transition-all">Làm khảo sát ngay</a>
                        </div>

                        {/* Final Message */}
                        <div className="bg-slate-900 text-white rounded-3xl p-12 text-center space-y-8">
                          <h3 className="text-3xl font-bold">Thông điệp cuối cùng</h3>
                          <p className="text-slate-400 max-w-lg mx-auto">Deep Learner không giúp bạn học nhanh hơn. Nó giúp bạn học sâu hơn, thông minh hơn và bền vững hơn.</p>
                          <div className="flex justify-center gap-6">
                            {["Học sâu", "Học thông minh", "Học bền vững"].map(tag => (
                              <span key={tag} className="text-xs font-bold text-violet-400 uppercase tracking-widest">{tag}</span>
                            ))}
                          </div>
                          <p className="text-slate-500 italic text-sm">— Đội ngũ Deep Learner Project —</p>
                        </div>
                      </div>
                    ) : (
                      <div className="text-center py-20 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200">
                        <h3 className="text-xl font-bold text-slate-400">Nội dung chi tiết cho {activeSessionId} đang được cập nhật...</h3>
                        <p className="text-slate-400 mt-2">Vui lòng quay lại sau hoặc xem Session 1, 2, 3 & 4.</p>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.section>
          )}

          {activeTab === 'assignments' && (
            <motion.section
              key="assignments"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-4xl mx-auto space-y-8"
            >
              <div className="text-center mb-12">
                <h2 className="font-display text-3xl font-bold mb-4">Bài tập thực hành</h2>
                <p className="text-slate-600">Áp dụng kiến thức của bạn vào thực tế thông qua các dự án cụ thể.</p>
              </div>

              <div className="grid gap-6">
                {COURSE_DATA.assignments.map((assignment) => (
                  <div 
                    key={assignment.id}
                    className="bg-white border border-slate-200 rounded-3xl p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-indigo-200 transition-colors shadow-sm"
                  >
                    <div className="space-y-4 max-w-2xl">
                      <div className="flex items-center gap-3">
                        <div className="px-3 py-1 bg-indigo-50 text-indigo-600 text-xs font-bold rounded-full uppercase tracking-wider">
                          Dự án
                        </div>
                        <span className="text-slate-400 text-sm flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          Hạn nộp: {assignment.dueDate}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold">{assignment.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{assignment.description}</p>
                    </div>
                    <div className="shrink-0 flex flex-col items-center md:items-end gap-4">
                      <div className="text-center md:text-right">
                        <div className="text-3xl font-bold text-slate-900">{assignment.points}</div>
                        <div className="text-slate-400 text-sm uppercase tracking-widest">Điểm</div>
                      </div>
                      <button className="w-full md:w-auto px-6 py-3 bg-slate-900 text-white rounded-xl font-medium hover:bg-slate-800 transition-colors flex items-center justify-center gap-2">
                        Nộp bài <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-indigo-600 rounded-3xl p-10 text-white text-center space-y-6">
                <h3 className="text-2xl font-bold">Sẵn sàng bắt đầu hành trình của bạn?</h3>
                <p className="text-indigo-100 max-w-xl mx-auto">
                  Tham gia cùng hàng trăm học viên đã thay đổi cách học tập và làm việc thông qua chương trình tự học của chúng tôi.
                </p>
                <div className="flex justify-center gap-4">
                  <button className="bg-white text-indigo-600 px-8 py-4 rounded-2xl font-bold hover:bg-indigo-50 transition-all">
                    Đăng ký ngay
                  </button>
                </div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="col-span-2 space-y-6">
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center">
                  <span className="font-display font-black text-2xl tracking-tighter text-[#1e40af]">HDPE</span>
                </div>
              </div>
              <p className="text-slate-500 max-w-sm">
                Deep Learner - Note Taking và Quản lý tri thức trong thời đại số. Giúp bạn làm chủ tư duy và công cụ để học tập hiệu quả hơn.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-slate-400 hover:text-indigo-600 transition-colors"><Twitter /></a>
                <a href="#" className="text-slate-400 hover:text-indigo-600 transition-colors"><Github /></a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6">Liên kết nhanh</h4>
              <ul className="space-y-4 text-slate-500">
                <li><button onClick={() => setActiveTab('intro')} className="hover:text-indigo-600 transition-colors">Giới thiệu</button></li>
                <li><button onClick={() => setActiveTab('syllabus')} className="hover:text-indigo-600 transition-colors">Lộ trình</button></li>
                <li><button onClick={() => setActiveTab('lectures')} className="hover:text-indigo-600 transition-colors">Bài giảng</button></li>
                <li><button onClick={() => setActiveTab('assignments')} className="hover:text-indigo-600 transition-colors">Bài tập</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6">Thông tin liên hệ</h4>
              <ul className="space-y-4 text-slate-500 text-sm">
                <li className="flex flex-col">
                  <span className="font-semibold text-slate-900">Trưởng dự án:</span>
                  <span>Lê Quốc Trung</span>
                </li>
                <li className="flex flex-col">
                  <span className="font-semibold text-slate-900">SĐT:</span>
                  <a href="tel:0333904229" className="hover:text-indigo-600 transition-colors">0333904229</a>
                </li>
                <li className="flex flex-col">
                  <span className="font-semibold text-slate-900">Email:</span>
                  <a href="mailto:quoctrungql3@gmail.com" className="hover:text-indigo-600 transition-colors">quoctrungql3@gmail.com</a>
                </li>
                <li className="flex flex-col">
                  <span className="font-semibold text-slate-900">Địa chỉ:</span>
                  <span>Đại học FPT Hà Nội</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-100 mt-12 pt-8 text-center text-slate-400 text-sm">
            © {new Date().getFullYear()} HDPE Learning Group. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
