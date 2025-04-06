import { pgTable, serial, varchar, text, boolean } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"



export const aiOutput = pgTable("aiOutput", {
	id: serial().primaryKey().notNull(),
	formData: varchar().notNull(),
	aiResponse: text(),
	templateSlug: varchar().notNull(),
	createdBy: varchar().notNull(),
	createdAt: varchar(),
});

export const userSubscription = pgTable("userSubscription", {
	id: serial().primaryKey().notNull(),
	email: varchar(),
	userName: varchar(),
	active: boolean(),
	paymentId: varchar(),
	joinDate: varchar(),
});
