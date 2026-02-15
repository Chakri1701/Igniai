import { neon } from '@neondatabase/serverless'
import { drizzle } from 'drizzle-orm/neon-http'
import * as schema from './schema.js'

let db = null

export function getDb() {
  if (!db) {
    if (!process.env.DATABASE_URL) {
      throw new Error(
        'DATABASE_URL is not defined. Please add it to your .env.local file'
      )
    }
    
    const sql = neon(process.env.DATABASE_URL)
    db = drizzle(sql, { schema })
  }
  
  return db
}

// For backward compatibility - but now it's a function
export { getDb as db }