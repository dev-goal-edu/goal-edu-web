import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-pink-50 to-blue-50 font-sans">
      <header className="border-b border-gray-200 py-2 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-4">
          <Link href="/" className="flex-shrink-0">
            <img
              src="https://goal-edu.com/wp-content/uploads/2025/04/image.png?w=728"
              alt="GoalEDU"
              className="h-12 w-auto"
            />
          </Link>

          <div className="flex items-center gap-6">
            <nav className="hidden md:flex space-x-6 text-sm uppercase tracking-wide font-medium">
              <Link href="/about" className="hover:text-pink-500 transition">About</Link>
              <Link href="/contact" className="hover:text-pink-500 transition">Contact Us</Link>
            </nav>

            <div className="flex items-center space-x-3">
              <a
                href="https://www.instagram.com/goaleducation"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-pink-500"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.336 3.608 1.311.975.975 1.249 2.242 1.311 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.336 2.633-1.311 3.608-.975.975-2.242 1.249-3.608 1.311-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.336-3.608-1.311-.975-.975-1.249-2.242-1.311-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.336-2.633 1.311-3.608.975-.975 2.242-1.249 3.608-1.311 1.266-.058 1.646-.07 4.85-.07zM12 0C8.741 0 8.332.014 7.052.072 5.766.13 4.668.332 3.667.932c-1 .6-1.8 1.4-2.4 2.4-.6 1-.8 2.1-.86 3.385C.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.058 1.285.26 2.383.86 3.385.6 1 1.4 1.8 2.4 2.4 1 .6 2.1.8 3.385.86 1.28.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 1.285-.058 2.383-.26 3.385-.86 1-.6 1.8-1.4 2.4-2.4.6-1 .8-2.1.86-3.385.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.668-.072-4.948-.058-1.285-.26-2.383-.86-3.385-.6-1-1.4-1.8-2.4-2.4-1-.6-2.1-.8-3.385-.86C15.668.014 15.259 0 12 0z" />
                  <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/people/Goal-EDU/61575157477576/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-pink-500"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.99h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.99C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a
                href="https://www.threads.com/@goaleducation"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-pink-500"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16.3 11.3c-.1 0-.2-.1-.2-.1-.1-2.6-1.5-4-3.9-4-1.4 0-2.6.6-3.3 1.7l1.3.9c.5-.8 1.4-1 2-1 .8 0 1.4.2 1.7.7.3.3.5.8.5 1.3-.7-.1-1.4-.2-2.2-.1-2.2.1-3.7 1.4-3.6 3.2 0 .9.5 1.7 1.3 2.2.7.4 1.5.6 2.4.6 1.2-.1 2.1-.5 2.7-1.3.5-.6.8-1.4.9-2.4.6.3 1 .8 1.2 1.3.4.9.4 2.4-.8 3.6-1.1 1.1-2.3 1.5-4.3 1.5-2.1 0-3.8-.7-4.8-2S5.7 14.3 5.7 12c0-2.3.5-4.1 1.5-5.4 1.1-1.3 2.7-2 4.8-2 2.2 0 3.8.7 4.9 2 .5.7.9 1.5 1.2 2.5l1.5-.4c-.3-1.2-.8-2.2-1.5-3.1-1.3-1.7-3.3-2.6-6-2.6-2.6 0-4.7.9-6 2.6C4.9 7.2 4.3 9.3 4.3 12s.6 4.8 1.9 6.4c1.4 1.7 3.4 2.6 6 2.6 2.3 0 4-.6 5.3-2 1.8-1.8 1.7-4 1.1-5.4-.4-.9-1.2-1.7-2.3-2.3zm-4 3.8c-1 .1-2-.4-2-1.3 0-.7.5-1.5 2.1-1.6h.5c.6 0 1.1.1 1.6.2-.2 2.3-1.3 2.7-2.2 2.7z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@GoalEDUTalks"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-pink-500"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21.8 8.001c0 0-.195-1.378-.795-1.985-.76-.797-1.613-.801-2.004-.847-2.799-.202-6.997-.202-6.997-.202h-.009c0 0-4.198 0-6.997.202-.391.046-1.244.05-2.004.847-.6.607-.795 1.985-.795 1.985S2 9.62 2 11.238v1.517c0 1.618.2 3.237.2 3.237s.195 1.378.795 1.985c.761.797 1.76.771 2.205.855 1.6.153 6.8.201 6.8.201s4.203-.006 7.001-.209c.391-.047 1.243-.051 2.004-.847.6-.607.795-1.985.795-1.985s.2-1.618.2-3.237v-1.517c0-1.618-.2-3.237-.2-3.237zM9.935 14.594l-.001-5.62 5.404 2.82-5.403 2.8z" />
                </svg>
              </a>
              <a
                href="https://www.xiaohongshu.com/user/profile/63e34bd800000000260128f6"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-pink-500"
              >
                <img
                  src="https://goal-edu.com/wp-content/uploads/2025/04/XiaohongshuLOGO-e1763367027201.png"
                  alt="Xiaohongshu"
                  className="w-5 h-5"
                />
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm uppercase tracking-wide text-pink-500 mb-4">Plan Smart, Learn Smarter.</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-pink-500 leading-tight">
              Your Child’s Future Starts Here.
            </h1>
          </div>
          <div className="space-y-6">
            <img
              src="https://goal-edu.com/wp-content/uploads/2025/04/Down-load-now.png"
              alt="GoalEDU app download"
              className="w-full rounded-lg shadow-lg"
            />
            <p className="text-lg font-semibold text-gray-800">About GoalEDU: Revolutionizing Education Planning</p>
            <p className="text-gray-600">
              <strong>GoalEDU is an AI-powered EdTech platform designed to simplify school admissions, personalize learning pathways, and provide actionable insights for parents, students, and educators.</strong> With a global reach and a commitment to innovation, GoalEDU is reshaping the way education is planned and managed.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://apps.apple.com/hk/app/goaledu/id6752772681?l=en-GB"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://goal-edu.com/wp-content/uploads/2025/09/2-1024x341.png"
                  alt="Download on App Store"
                  className="h-12 w-auto"
                />
              </a>
              <a
                href="/android?utm=2025inno4life"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://goal-edu.com/wp-content/uploads/2025/09/1-1024x341.png"
                  alt="Get it on Google Play"
                  className="h-12 w-auto"
                />
              </a>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-2">Connect with me:</p>
              <a
                href="https://api.whatsapp.com/send?phone=85264058432&text=..."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full text-sm hover:bg-gray-800"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.011719 2C6.5057187 2 2.0234844 6.478375 2.0214844 11.984375C2.0204844 13.744375 2.4814687 15.462563 3.3554688 16.976562L2 22L7.2324219 20.763672C8.6914219 21.559672 10.333859 21.977516 12.005859 21.978516L12.009766 21.978516C17.514766 21.978516 21.995047 17.499141 21.998047 11.994141C22.000047 9.3251406 20.962172 6.8157344 19.076172 4.9277344C17.190172 3.0407344 14.683719 2.001 12.011719 2zM12.009766 4C14.145766 4.001 16.153109 4.8337969 17.662109 6.3417969C19.171109 7.8517969 20.000047 9.8581875 19.998047 11.992188C19.996047 16.396187 16.413812 19.978516 12.007812 19.978516C10.674812 19.977516 9.3544062 19.642812 8.1914062 19.007812L7.5175781 18.640625L6.7734375 18.816406L4.8046875 19.28125L5.2851562 17.496094L5.5019531 16.695312L5.0878906 15.976562C4.3898906 14.768562 4.0204844 13.387375 4.0214844 11.984375C4.0234844 7.582375 7.6067656 4 12.009766 4zM8.4765625 7.375C8.3095625 7.375 8.0395469 7.4375 7.8105469 7.6875C7.5815469 7.9365 6.9355469 8.5395781 6.9355469 9.7675781C6.9355469 10.995578 7.8300781 12.182609 7.9550781 12.349609C8.0790781 12.515609 9.68175 15.115234 12.21875 16.115234C14.32675 16.946234 14.754891 16.782234 15.212891 16.740234C15.670891 16.699234 16.690438 16.137687 16.898438 15.554688C17.106437 14.971687 17.106922 14.470187 17.044922 14.367188C16.982922 14.263188 16.816406 14.201172 16.566406 14.076172C16.317406 13.951172 15.090328 13.348625 14.861328 13.265625C14.632328 13.182625 14.464828 13.140625 14.298828 13.390625C14.132828 13.640625 13.655766 14.201187 13.509766 14.367188C13.363766 14.534188 13.21875 14.556641 12.96875 14.431641C12.71875 14.305641 11.914938 14.041406 10.960938 13.191406C10.218937 12.530406 9.7182656 11.714844 9.5722656 11.464844C9.4272656 11.215844 9.5585938 11.079078 9.6835938 10.955078C9.7955938 10.843078 9.9316406 10.663578 10.056641 10.517578C10.180641 10.371578 10.223641 10.267562 10.306641 10.101562C10.389641 9.9355625 10.347156 9.7890625 10.285156 9.6640625C10.223156 9.5390625 9.737625 8.3065 9.515625 7.8125C9.328625 7.3975 9.131125 7.3878594 8.953125 7.3808594C8.808125 7.3748594 8.6425625 7.375 8.4765625 7.375z" />
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <p className="text-sm uppercase tracking-wide text-pink-500">Why Choose GoalEDU?</p>
            <h2 className="text-3xl md:text-4xl font-bold text-pink-500 leading-tight">
              Simplify school admissions, personalize learning paths, and manage extracurricular activities – All in one place.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-pink-500">AI-Powered Personalization</h3>
              <p className="text-gray-600 text-sm">
                GoalEDU leverages cutting-edge AI technology to create tailored learning pathways and school recommendations for every student. By analyzing academic performance, extracurricular interests, and long-term goals, the app provides customized suggestions that align with each student&apos;s unique needs.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-pink-500">Integrated Education Ecosystem</h3>
              <p className="text-gray-600 text-sm">
                Gone are the days of juggling multiple platforms for education planning. GoalEDU combines school admissions, academic planning, extracurricular activity management, and child portfolio creation into one seamless platform. Parents can compare schools, track application statuses, and organize their child&apos;s academic achievements all in one place.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-pink-500">Actionable Insights and Progress Tracking</h3>
              <p className="text-gray-600 text-sm">
                GoalEDU’s analytics tools provide real-time insights into student progress and performance. Parents and students receive data-driven suggestions to improve academic outcomes, such as identifying gaps in learning or opportunities for growth. The platform also tracks key milestones, such as completed applications, scheduled extracurricular activities, and academic achievements.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-pink-500">Global Localization and Multi-Language Support</h3>
              <p className="text-gray-600 text-sm">
                Designed for a global audience, GoalEDU adapts to the specific needs of different regions and education systems. The platform supports multiple languages, including English, Chinese, and more, making it accessible to diverse users. It also incorporates region-specific school admission requirements and processes to provide localized guidance.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div></div>
            <h2 className="text-3xl md:text-5xl font-bold text-pink-500 leading-tight">Get Started Today</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/lKYlcuTYY8Y"
                title="GoalEDU video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-4">
              <p className="text-lg font-semibold text-gray-800">Join the Future of Education Planning.</p>
              <p className="text-gray-600">
                GoalEDU supports multi-lingual platforms and region-specific admission systems, making it your global partner in education planning.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 space-y-12">
          <div>
            <p className="text-sm uppercase tracking-wide text-purple-500 mb-4">Meet Our Team</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="space-y-2">
                <p className="text-lg font-medium text-pink-500">Leading Digital Innovation in EdTech</p>
                <p className="text-gray-600 text-sm">
                  With 25+ years of experience in the financial sector, Kenny specializes in digital transformation and software development. His expertise in cybersecurity, operational efficiency, and innovative solutions drives GoalEDU&apos;s technological advancements.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <img
                  src="https://goal-edu.com/wp-content/uploads/2025/04/kenny-wong.png"
                  alt="Kenny Wong"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-800">Kenny Wong</p>
                  <p className="text-sm text-gray-500">Head of Software Development</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <p className="text-lg font-medium text-pink-500">Shaping the Future of EdTech</p>
                <p className="text-gray-600 text-sm">
                  Vincent combines expertise in digital transformation and enterprise solutions to lead GoalEDU&apos;s growth. His strategic vision ensures the platform delivers impactful, tech-driven education solutions globally.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <img
                  src="https://goal-edu.com/wp-content/uploads/2025/04/vincent-icon.jpg"
                  alt="Vincent Lau"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-800">Vincent Lau</p>
                  <p className="text-sm text-gray-500">Head of Business Development</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <p className="text-lg font-medium text-pink-500">Driving Innovation in EdTech</p>
                <p className="text-gray-600 text-sm">
                  With 25+ years of experience in financial services and technology, Catherine excels at creating innovative solutions for operational efficiency. Her leadership drives GoalEDU&apos;s mission to transform education with cutting-edge technology.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <img
                  src="https://goal-edu.com/wp-content/uploads/2025/04/catherine-icon-1.jpg"
                  alt="Catherine Cheng"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-800">Catherine Cheng</p>
                  <p className="text-sm text-gray-500">General Manager</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          <div className="grid md:grid-cols-2 gap-12">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">FAQ</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <details className="group">
                  <summary className="font-semibold text-gray-800 cursor-pointer">What is GoalEDU?</summary>
                  <p className="mt-2 text-gray-600 text-sm">
                    GoalEDU is an AI-powered education planning platform designed to simplify school admissions, manage extracurricular activities, and track academic progress. It provides parents, students, and educators with personalized recommendations and actionable insights to make informed decisions.
                  </p>
                </details>
                <details className="group">
                  <summary className="font-semibold text-gray-800 cursor-pointer">How does the AI-powered personalization work?</summary>
                  <p className="mt-2 text-gray-600 text-sm">
                    GoalEDU&apos;s AI analyzes data such as academic performance, interests, and goals to recommend schools, extracurricular activities, and learning pathways tailored to each student. The recommendations evolve over time based on user interactions and updates.
                  </p>
                </details>
              </div>
              <div className="space-y-4">
                <details className="group">
                  <summary className="font-semibold text-gray-800 cursor-pointer">How can schools benefit from GoalEDU?</summary>
                  <p className="mt-2 text-gray-600 text-sm">
                    GoalEDU streamlines the admissions process for schools, allowing administrators to manage applications, communicate with parents, and track student performance efficiently. It reduces manual work and improves engagement with prospective students. GoalEDU offers partnership opportunities for schools to promote their programs and connect with prospective students. Contact us to learn more about partnership options.
                  </p>
                </details>
                <details className="group">
                  <summary className="font-semibold text-gray-800 cursor-pointer">Can I manage extracurricular activities on GoalEDU?</summary>
                  <p className="mt-2 text-gray-600 text-sm">
                    Absolutely! GoalEDU helps parents and students discover, plan, and schedule extracurricular activities while tracking progress and achievements.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200 py-8 px-4 sm:px-6 lg:px-8 mt-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-lg font-bold text-pink-500 mb-2">AI is Revolutionizing Education Planning</h2>
            <p className="text-gray-600 text-sm">
              Discover how AI-powered tools like GoalEDU are transforming the way students and parents plan for the future.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Contact Information</h3>
            <p className="text-gray-600 text-sm">Need help or have questions? We&apos;re here to assist you!</p>
            <p className="text-gray-600 text-sm mt-2">
              <strong>Email:</strong>{' '}
              <a href="mailto:info@goal-edu.com" className="text-pink-500 hover:underline">
                info@goal-edu.com
              </a>
            </p>
            <p className="text-gray-600 text-sm mt-1">
              <strong>Phone:</strong> +852 6405 8432
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Quick Links</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <Link href="/about" className="text-gray-500 hover:text-pink-500">
                  ABOUT
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-500 hover:text-pink-500">
                  PRIVACY POLICY
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-500 hover:text-pink-500">
                  CONTACT US
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}