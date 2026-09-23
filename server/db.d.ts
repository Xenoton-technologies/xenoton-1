export interface ContactSubmissionData {
  name: string
  email: string
  phone?: string | null
  company?: string | null
  projectType: string
  message: string
}

export interface ContactSubmissionResult {
  id: number
  name: string
  email: string
  created_at: string
}

export function ensureTableExists(): Promise<void>
export function saveContactSubmission(data: ContactSubmissionData): Promise<ContactSubmissionResult>

