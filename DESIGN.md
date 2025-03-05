# Cadratec Next.js Project Design Document

## Table of Contents
1. [Project Overview](#project-overview)
2. [Technical Stack](#technical-stack)
3. [Project Structure](#project-structure)
4. [Security Implementation](#security-implementation)
5. [Database Design](#database-design)
6. [Authentication & Authorization](#authentication--authorization)
7. [Frontend Architecture](#frontend-architecture)
8. [API Architecture](#api-architecture)
9. [Development & Deployment](#development--deployment)

## Project Overview
Cadratec is a Next.js-based web application built with modern web technologies and best practices. The application follows a full-stack architecture with robust security measures and a clean, modular codebase structure.

## Technical Stack

### Core Technologies
- **Frontend Framework**: Next.js 15.1.7
- **Programming Language**: TypeScript
- **UI Framework**: React 18.2.0
- **Styling**: Tailwind CSS with custom configurations
- **State Management**: Zustand
- **Form Handling**: React Hook Form with Zod validation
- **Data Fetching**: TanStack React Query
- **Authentication**: NextAuth.js
- **Database ORM**: Prisma

### UI Components
- Radix UI components for accessible, unstyled components
- Custom components built with Tailwind CSS
- Framer Motion for animations
- Recharts for data visualization
- Sonner for toast notifications

## Project Structure

```
📁 cadratec-next/
├── 📁 src/                        # Source directory - Main application code
│   ├── 📁 app/                    # Next.js app router directory
│   │   ├── 📁 (auth)/            # Authentication related routes
│   │   │   ├── 📁 login/         # Login pages
│   │   │   └── 📁 register/      # Registration pages
│   │   ├── 📁 (dashboard)/       # Protected dashboard routes
│   │   │   ├── 📁 admin/        # Admin dashboard
│   │   │   └── 📁 client/       # Client dashboard
│   │   ├── 📁 api/              # API routes
│   │   └── 📁 public/           # Public pages
│   │
│   ├── 📁 components/           # Reusable React components
│   │   ├── 📁 ui/              # UI components (buttons, inputs, etc.)
│   │   ├── 📁 forms/           # Form components
│   │   ├── 📁 layouts/         # Layout components
│   │   ├── 📁 dashboard/       # Dashboard-specific components
│   │   └── 📁 shared/          # Shared components
│   │
│   ├── 📁 lib/                 # Core utilities and configurations
│   │   ├── 📁 auth/           # Authentication utilities
│   │   ├── 📁 api/            # API utilities
│   │   ├── 📁 db/             # Database utilities
│   │   ├── 📁 validation/     # Validation schemas
│   │   └── 📁 utils/          # Helper functions
│   │
│   ├── 📁 hooks/              # Custom React hooks
│   │   ├── 📁 auth/          # Authentication hooks
│   │   ├── 📁 data/          # Data fetching hooks
│   │   └── 📁 ui/            # UI-related hooks
│   │
│   ├── 📁 types/             # TypeScript type definitions
│   │   ├── 📁 api/          # API types
│   │   ├── 📁 auth/         # Authentication types
│   │   └── 📁 models/       # Data model types
│   │
│   └── 📁 styles/           # Global styles and theme
│
├── 📁 prisma/               # Database ORM
│   ├── schema.prisma       # Database schema
│   ├── migrations/         # Database migrations
│   └── seed.ts            # Database seeding
│
├── 📁 public/              # Static assets
│   ├── 📁 images/         # Image assets
│   ├── 📁 fonts/          # Font files
│   └── 📁 icons/          # Icon assets
│
├── 📁 scripts/             # Utility scripts
│   ├── 📁 db/             # Database scripts
│   └── 📁 deployment/     # Deployment scripts
│
├── 📁 tests/               # Testing directory
│   ├── 📁 unit/           # Unit tests
│   ├── 📁 integration/    # Integration tests
│   └── 📁 e2e/            # End-to-end tests
│
├── 📁 docs/                # Documentation
│   ├── api.md             # API documentation
│   ├── setup.md           # Setup guide
│   └── deployment.md      # Deployment guide
│
├── 📄 .env.example         # Example environment variables
├── 📄 .gitignore          # Git ignore rules
├── 📄 package.json        # Project dependencies
├── 📄 tsconfig.json       # TypeScript configuration
├── 📄 next.config.js      # Next.js configuration
└── 📄 README.md           # Project overview
```

### Key Directory Explanations

#### Source Code Organization (`src/`)
- **app/**: Next.js 13+ app router implementation with route groups
- **components/**: Modular, reusable React components organized by domain
- **lib/**: Core utilities, configurations, and business logic
- **hooks/**: Custom React hooks for shared functionality
- **types/**: TypeScript type definitions for better type safety
- **styles/**: Global styling and theming configurations

#### Database Management (`prisma/`)
- Prisma schema and migrations
- Database seeding scripts
- Type-safe database operations

#### Static Assets (`public/`)
- Optimized images and media files
- Font files and icon assets
- Public documents and resources

#### Development Tools (`scripts/`)
- Database management scripts
- Deployment automation
- Development utilities

#### Testing Infrastructure (`tests/`)
- Comprehensive test suites
- Testing utilities and mocks
- Test configuration

#### Documentation (`docs/`)
- Technical documentation
- API specifications
- Setup and deployment guides

### Best Practices
1. **Route Groups**: Using Next.js route groups (in parentheses) for logical route organization
2. **Component Organization**: Structured by domain and responsibility
3. **Type Safety**: Comprehensive TypeScript types for all features
4. **Testing**: Dedicated test directories for different testing levels
5. **Documentation**: Detailed documentation for all major features

## Security Implementation

### Authentication Security
1. **JWT-based Authentication**
   - Secure token handling through NextAuth.js
   - Separate authentication flows for admin and client users
   - Protected route middleware

   ```typescript
   // pages/api/auth/[...nextauth].ts
   import NextAuth from 'next-auth'
   import { PrismaAdapter } from '@auth/prisma-adapter'
   import CredentialsProvider from 'next-auth/providers/credentials'
   import { compare } from 'bcryptjs'
   import { prisma } from '@/lib/prisma'

   export default NextAuth({
     adapter: PrismaAdapter(prisma),
     providers: [
       CredentialsProvider({
         name: 'credentials',
         credentials: {
           email: { label: 'Email', type: 'email' },
           password: { label: 'Password', type: 'password' }
         },
         async authorize(credentials) {
           if (!credentials?.email || !credentials?.password) {
             throw new Error('Invalid credentials')
           }

           const user = await prisma.user.findUnique({
             where: { email: credentials.email }
           })

           if (!user || !user.hashedPassword) {
             throw new Error('Invalid credentials')
           }

           const isValid = await compare(credentials.password, user.hashedPassword)

           if (!isValid) {
             throw new Error('Invalid credentials')
           }

           return user
         }
       })
     ],
     session: {
       strategy: 'jwt',
       maxAge: 30 * 24 * 60 * 60 // 30 days
     },
     jwt: {
       secret: process.env.NEXTAUTH_JWT_SECRET
     }
   })
   ```

2. **Route Protection**
   ```typescript
   // middleware.ts
   import { getToken } from "next-auth/jwt"
   import { NextResponse } from "next/server"
   import type { NextRequest } from "next/server"

   export async function middleware(request: NextRequest) {
     const token = await getToken({ req: request })
     const isAuthPage = ["/auth/login", "/auth/admin/login"].includes(request.nextUrl.pathname)

     // Protect admin routes
     if (request.nextUrl.pathname.startsWith("/admin")) {
       if (!token || token.type !== "admin") {
         return NextResponse.redirect(
           new URL("/auth/admin/login", request.url)
         )
       }
     }

     // Protect client routes
     if (request.nextUrl.pathname.startsWith("/dashboard")) {
       if (!token || token.type !== "client") {
         return NextResponse.redirect(
           new URL("/auth/login", request.url)
         )
       }
     }

     return NextResponse.next()
   }

   export const config = {
     matcher: ["/admin/:path*", "/dashboard/:path*"]
   }
   ```

3. **Password Security**
   ```typescript
   // lib/auth.ts
   import { hash, compare } from 'bcryptjs'

   export const hashPassword = async (password: string): Promise<string> => {
     return await hash(password, 12)
   }

   export const verifyPassword = async (
     password: string,
     hashedPassword: string
   ): Promise<boolean> => {
     return await compare(password, hashedPassword)
   }

   // Usage in API route
   // pages/api/auth/signup.ts
   import { hashPassword } from '@/lib/auth'

   export async function POST(req: Request) {
     try {
       const { email, password } = await req.json()
       
       // Validate password strength
       if (password.length < 8) {
         return new Response(
           JSON.stringify({ error: 'Password must be at least 8 characters' }),
           { status: 400 }
         )
       }

       const hashedPassword = await hashPassword(password)
       
       const user = await prisma.user.create({
         data: {
           email,
           hashedPassword
         }
       })

       return new Response(JSON.stringify({ user }))
     } catch (error) {
       return new Response(
         JSON.stringify({ error: 'Something went wrong' }),
         { status: 500 }
       )
     }
   }
   ```

### Environment Security
```typescript
// lib/env.ts
import { z } from 'zod'

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  NEXTAUTH_SECRET: z.string().min(1),
  NEXTAUTH_URL: z.string().url(),
  JWT_SECRET: z.string().min(1),
  // Add other environment variables here
})

// Validate environment variables at runtime
export const env = envSchema.parse({
  DATABASE_URL: process.env.DATABASE_URL,
  NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
  NEXTAUTH_URL: process.env.NEXTAUTH_URL,
  JWT_SECRET: process.env.JWT_SECRET,
})

// Example .env file structure (DO NOT COMMIT ACTUAL VALUES)
```
env
# .env.example
DATABASE_URL="postgresql://..."
NEXTAUTH_SECRET="your-secret-here"
NEXTAUTH_URL="http://localhost:3000"
JWT_SECRET="your-jwt-secret"
```

### API Security
```typescript
// lib/api-middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import rateLimit from 'express-rate-limit'

// Rate limiting configuration
export const rateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
})

// CORS configuration
export const corsHeaders = {
  'Access-Control-Allow-Origin': process.env.ALLOWED_ORIGIN,
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization'
}

// API route protection example
export async function withProtection(
  req: NextRequest,
  handler: (req: NextRequest) => Promise<NextResponse>
) {
  try {
    // Apply rate limiting
    await rateLimiter(req)

    // Verify authentication
    const token = await getToken({ req })
    if (!token) {
      return new NextResponse(
        JSON.stringify({ error: 'Unauthorized' }),
        { status: 401 }
      )
    }

    // Apply CORS
    const response = await handler(req)
    Object.entries(corsHeaders).forEach(([key, value]) => {
      response.headers.set(key, value)
    })

    return response
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ error: 'Internal Server Error' }),
      { status: 500 }
    )
  }
}
```

## Database Design
- Prisma ORM for type-safe database operations
- Secure database connection handling
- Migration management
- Data validation and sanitization

## Authentication & Authorization

### User Types
1. **Admin Users**
   - Full system access
   - Administrative dashboard access
   - User management capabilities

2. **Client Users**
   - Limited access to specific features
   - Personal dashboard access
   - Restricted functionality

### Authentication Flow
1. Login request
2. Credential verification
3. JWT token generation
4. Session management
5. Protected route access

## Frontend Architecture

### Component Structure
- Atomic design principles
- Reusable component library
- Consistent styling with Tailwind CSS
- Responsive design implementation

### State Management
- Zustand for global state
- React Query for server state
- Local component state where appropriate

## API Architecture

### API Routes
- RESTful API design
- Protected endpoints
- Rate limiting
- Error handling

### Data Flow
1. Client request
2. Middleware processing
3. Authentication verification
4. Business logic execution
5. Response handling

## Development & Deployment

### Development Environment
- Next.js development server
- Hot reloading
- TypeScript compilation
- ESLint configuration

### Build Process
```bash
npm run build  # Production build
npm run dev    # Development server
npm run lint   # Code linting
```

### Deployment Considerations
- Environment variable management
- Database migrations
- Build optimization
- Performance monitoring

## Performance Optimization
- Server-side rendering
- Static site generation where applicable
- Image optimization
- Code splitting
- Bundle size optimization

## Monitoring and Maintenance
- Error tracking
- Performance monitoring
- Regular security updates
- Database backups
- Code quality maintenance

## Future Considerations
1. Implement additional security measures
2. Enhance performance optimization
3. Add more automated testing
4. Improve documentation
5. Scale infrastructure as needed 



src/app/
├── (admin)/           # Admin dashboard and features
│   ├── dashboard/
│   ├── users/
│   ├── orders/
│   └── settings/
├── (auth)/            # Authentication pages
│   ├── login/
│   ├── admin/
│   └── error/
├── (client)/          # Client dashboard and features
│   ├── dashboard/
│   ├── documents/
│   └── settings/
├── (marketing)/       # Public marketing pages
│   ├── page.tsx      # Home page
│   ├── about/
│   └── contact/
├── api/              # API routes
└── layout.tsx        # Root layout