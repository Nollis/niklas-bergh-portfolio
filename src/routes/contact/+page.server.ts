import { fail } from '@sveltejs/kit';
import { z } from 'zod';
import type { Actions } from './$types';

// Validation schema for contact form
const contactSchema = z.object({
	name: z.string().min(2, 'Name must be at least 2 characters'),
	email: z.string().email('Please enter a valid email address'),
	subject: z.string().optional(),
	message: z.string().min(10, 'Message must be at least 10 characters')
});

export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData();

		const data = {
			name: formData.get('name'),
			email: formData.get('email'),
			subject: formData.get('subject'),
			message: formData.get('message')
		};

		// Validate form data
		const result = contactSchema.safeParse(data);

		if (!result.success) {
			const errors = result.error.flatten().fieldErrors;
			return fail(400, { errors, data });
		}

		// Log to server console (placeholder for email/API integration)
		console.log('Contact form submission:', {
			name: result.data.name,
			email: result.data.email,
			subject: result.data.subject || '(no subject)',
			message: result.data.message,
			timestamp: new Date().toISOString()
		});

		// TODO: Integrate with email service (SendGrid, Resend, etc.)
		// await sendEmail(result.data);

		return { success: true };
	}
};

