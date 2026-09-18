# Unit 02: Database Schema & Models

## Goal

Set up database connection, schema definitions, migrations, and database client utilities.

## Design

Database and data access decisions:
- Tables / collections, relationships, indices, and constraints matching `context/architecture.md`.
- Soft delete / timestamps / audit fields conventions.

## Implementation

### Database Connection & Client
- Configure database client singleton with connection pooling and environment variables.

### Schema & Models
- Define entities, columns/fields, primary/foreign keys, and indexes.

### Seed & Migration Scripts
- Setup migration runner or scripts for initializing and updating the database.
- Provide initial seed data for local testing.

## Dependencies

- Database driver / ORM package (install when implementing this unit)

## Verify when done

- [ ] Database client connects cleanly
- [ ] Schema migrations run without errors
- [ ] CRUD operations work on core models
- [ ] Seed script executes and populates test data
- [ ] No TypeScript or linter errors
- [ ] No console errors
