# LegalPro Consulting - Professional Legal Services Platform

## Overview

This is a modern full-stack web application for LegalPro Consulting, a legal services company specializing in business formation, corporate legal services, and compliance. The platform serves as a professional website showcasing their services and allowing potential clients to submit contact inquiries.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Database**: PostgreSQL with Drizzle ORM
- **Session Management**: Express sessions with PostgreSQL store
- **API Design**: RESTful API architecture
- **Development**: TypeScript throughout the stack

### Database Design
The application uses a PostgreSQL database with the following schema:
- **users**: User authentication and management
- **contact_submissions**: Client inquiry form submissions with fields for contact information and service requests

## Key Components

### Frontend Components
1. **Landing Page Sections**: Hero, Services, Pricing, About, Testimonials, Contact
2. **Navigation**: Responsive navigation with smooth scrolling
3. **Contact Form**: Validated form for client inquiries
4. **UI Library**: Comprehensive set of reusable components (buttons, forms, dialogs, etc.)

### Backend Services
1. **Contact Management**: API endpoints for handling client inquiries
2. **Database Storage**: PostgreSQL database with Drizzle ORM for persistent data storage
3. **Request Logging**: Middleware for API request monitoring

### Shared Resources
- **Schema Definitions**: Shared TypeScript types and Zod schemas between frontend and backend
- **Type Safety**: End-to-end type safety with TypeScript

## Data Flow

1. **Client Interaction**: Users browse the website and fill out contact forms
2. **Form Validation**: Client-side validation using React Hook Form and Zod schemas
3. **API Communication**: Forms submit to Express.js API endpoints
4. **Data Persistence**: Contact submissions are stored in PostgreSQL via Drizzle ORM
5. **Response Handling**: Success/error states managed through TanStack Query

## External Dependencies

### Core Technologies
- **Database**: Neon Database (PostgreSQL serverless)
- **Hosting**: Replit deployment platform
- **Fonts**: Google Fonts (Playfair Display, Inter)
- **Icons**: Lucide React icons

### Development Tools
- **Package Manager**: npm
- **Type Checking**: TypeScript compiler
- **Database Migrations**: Drizzle Kit
- **Build Process**: Vite + esbuild

## Deployment Strategy

### Development Environment
- **Port**: Application runs on port 5000
- **Hot Reload**: Vite development server with HMR
- **Database**: Environment variable configuration for database URL

### Production Deployment
- **Build Process**: Vite builds frontend assets, esbuild bundles server code
- **Static Assets**: Frontend builds to `dist/public` directory
- **Server**: Express serves both API routes and static frontend assets
- **Scaling**: Replit autoscale deployment target

### Environment Configuration
- **Development**: Uses tsx for TypeScript execution
- **Production**: Compiled JavaScript execution
- **Database**: Requires `DATABASE_URL` environment variable

## Changelog

```
Changelog:
- June 20, 2025. Initial setup
- June 20, 2025. Added PostgreSQL database integration with Drizzle ORM
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```