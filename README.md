# Cadratec Client Portal

A modern, secure, and feature-rich client portal built with Next.js 15.1.7 and TypeScript.

## 🚀 Tech Stack

- **Framework**: [Next.js 15.1.7](https://nextjs.org/) - React framework with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Static type checking
- **Database**: [MySQL](https://www.mysql.com/) with [Prisma ORM](https://www.prisma.io/)
- **Authentication**: [NextAuth.js](https://next-auth.js.org/) - Secure, JWT-based auth
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with [Radix UI](https://www.radix-ui.com/)
- **State Management**: [Zustand](https://zustand-demo.pmnd.rs/) - Lightweight state management
- **Forms**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) validation
- **API Layer**: [TanStack Query](https://tanstack.com/query/latest) - Data fetching & caching

## ✨ Key Features

- 🔐 Secure Authentication & Role-based Authorization
- 🎨 Modern UI with Dark/Light Mode
- 📱 Fully Responsive Design
- 🚀 Server-Side Rendering
- 🔍 Type-Safe Database Queries
- 📊 Interactive Dashboard
- 🔄 Real-time Updates
- 📝 Document Management

## 🏗️ Project Structure

```
src/
├── app/                  # Next.js App Router
│   ├── (auth)/          # Authentication Routes
│   ├── (dashboard)/     # Protected Dashboard Routes
│   ├── (marketing)/     # Public Marketing Pages
│   └── api/             # API Routes
├── components/          # React Components
│   ├── ui/             # UI Components
│   ├── forms/          # Form Components
│   └── shared/         # Shared Components
├── lib/                # Core Utilities
│   ├── auth/          # Authentication Logic
│   ├── db/            # Database Utilities
│   └── utils/         # Helper Functions
├── hooks/             # Custom React Hooks
├── types/             # TypeScript Types
└── styles/            # Global Styles
```

## 🛠️ Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-org/cadratec-client.git
   cd cadratec-client
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.example .env
   ```
   Update the following in your .env:
   ```env
   DATABASE_URL="mysql://root:@localhost:3306/cadratec"
   NEXTAUTH_SECRET="your-secret-key"
   NEXTAUTH_URL="http://localhost:3000"
   ```

4. **Set up the database:**
   - Install and start XAMPP
   - Create a new database named 'cadratec'
   - Run the following commands:
   ```bash
   npm run prisma:generate   # Generate Prisma client
   npm run prisma:push      # Push database schema
   npx prisma db seed      # Seed initial data
   ```

5. **Start the development server:**
   ```bash
   npm run dev
   ```

## 🔒 Security Features

1. **Authentication & Authorization:**
   ```typescript
   // Role-based route protection
   export default async function AdminDashboardPage() {
     const session = await getServerSession(authOptions)
     
     if (!session) {
       redirect('/auth/admin/login')
     }
     
     if (session.user.role !== 'ADMIN') {
       redirect('/auth/admin/login')
     }
     
     // Protected content here
   }
   ```

2. **Input Validation:**
   ```typescript
   // Zod schema validation
   const loginSchema = z.object({
     email: z.string().email({
       message: "Please enter a valid email address",
     }),
     password: z.string().min(8, {
       message: "Password must be at least 8 characters long",
     }),
   })
   ```

3. **SQL Injection Prevention:**
   ```typescript
   // Type-safe Prisma queries
   const user = await db.user.findUnique({
     where: { email: credentials.email },
     select: {
       id: true,
       email: true,
       password: true,
       role: true,
     },
   })
   ```

4. **XSS Protection:**
   ```typescript
   // Content Security Policy
   const securityHeaders = [
     {
       key: 'Content-Security-Policy',
       value: "default-src 'self'; script-src 'self' 'unsafe-inline'",
     }
   ]
   ```

## 💡 Code Examples

1. **Theme Switching:**
   ```typescript
   export function ThemeSwitcher() {
     const { theme, setTheme } = useTheme()
     
     return (
       <Button
         variant="ghost"
         size="icon"
         onClick={() => setTheme(theme === "light" ? "dark" : "light")}
       >
         <Sun className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
         <Moon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
       </Button>
     )
   }
   ```

2. **Protected API Routes:**
   ```typescript
   export async function GET(req: Request) {
     const session = await getServerSession(authOptions)
     
     if (!session) {
       return new Response("Unauthorized", { status: 401 })
     }
     
     const documents = await db.document.findMany({
       where: { userId: session.user.id }
     })
     
     return Response.json(documents)
   }
   ```

3. **Form Handling:**
   ```typescript
   export function LoginForm() {
     const form = useForm({
       resolver: zodResolver(loginSchema),
       defaultValues: {
         email: "",
         password: "",
       },
     })
     
     async function onSubmit(data: z.infer<typeof loginSchema>) {
       const result = await signIn("credentials", {
         ...data,
         redirect: false,
       })
     }
     
     return (
       <form onSubmit={form.handleSubmit(onSubmit)}>
         {/* Form fields */}
       </form>
     )
   }
   ```

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run test` - Run tests
- `npm run prisma:generate` - Generate Prisma client
- `npm run prisma:push` - Push database changes
- `npm run prisma:studio` - Open Prisma Studio

## 🔑 Default Credentials

1. **Admin User:**
   - Email: admin@cadratec.com
   - Password: admin123

2. **Demo User:**
   - Email: user@cadratec.com
   - Password: user123

## 🌟 Best Practices

- ✅ Type-safe code with TypeScript
- ✅ Component modularity and reusability
- ✅ Performance optimization with React best practices
- ✅ Accessibility standards (WCAG 2.1)
- ✅ SEO optimization
- ✅ Code splitting and lazy loading
- ✅ Error boundaries for graceful error handling
- ✅ Responsive design principles
- ✅ Clean code architecture

## 🚀 Deployment

The application is optimized for deployment on various platforms:

1. **Hostinger:**
   - Upload build files
   - Configure MySQL database
   - Set environment variables
   - Update domain settings

2. **Vercel:**
   - Connect GitHub repository
   - Configure environment variables
   - Deploy automatically

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧 Support

For support:
- Email: support@cadratec.com
- Open an issue in the repository
- Documentation: [Project Wiki](https://github.com/your-org/cadratec-client/wiki)

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)
- [NextAuth.js](https://next-auth.js.org/)
- [Prisma](https://www.prisma.io/)
