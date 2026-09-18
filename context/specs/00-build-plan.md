# Build Plan

Ordered list of units to build this application.

## Build Order Principles

- **Dependencies first**: If feature B requires feature A to exist, A comes first. Never build on top of something that doesn't exist yet.
- **Security before functionality**: Auth and access control always come before the features they protect.
- **Backend before frontend wiring**: Build the API routes and data structures first, then wire the UI to them.
- **UI shells before real data**: Build the component structure with placeholder data first, then connect it to real API calls.
- **Install dependencies just in time**: Only install a package in the unit where it first unlocks real behavior.

## Units

### Unit 01: Authentication Setup
- **Goal**: Set up user authentication, session management, and protected route access.
- **Spec**: `context/specs/01-auth-setup.md`
- **Dependencies**: None
- **Status**: [ ] Pending

### Unit 02: Database Schema & Models
- **Goal**: Define database schema, models/migrations, and client connection.
- **Spec**: `context/specs/02-database-schema.md`
- **Dependencies**: Unit 01
- **Status**: [ ] Pending

### Unit 03: [Next Feature]
- **Goal**: [Describe the concrete output of this unit]
- **Spec**: `context/specs/03-[feature-name].md`
- **Dependencies**: Unit 02
- **Status**: [ ] Pending
