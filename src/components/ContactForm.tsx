import { useState, type FormEvent } from "react"
import { ArrowRight, CheckCircle2, Loader2, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type Status = "idle" | "loading" | "success" | "error"

interface FormState {
  name: string
  email: string
  phone: string
  company: string
  projectType: string
  message: string
}

const INITIAL_STATE: FormState = {
  name: "",
  email: "",
  phone: "",
  company: "",
  projectType: "",
  message: "",
}

const PROJECT_TYPES = [
  "New Website",
  "Web Application",
  "Mobile App",
  "Custom Software",
  "UI/UX Design",
  "Other",
]

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export function ContactForm() {
  const [form, setForm] = useState<FormState>(INITIAL_STATE)
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})
  const [status, setStatus] = useState<Status>("idle")
  const [errorMessage, setErrorMessage] = useState<string>("")

  const update = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  const validate = () => {
    const next: Partial<Record<keyof FormState, string>> = {}
    if (!form.name.trim()) next.name = "Name is required."
    if (!form.email.trim()) next.email = "Email is required."
    else if (!isValidEmail(form.email)) next.email = "Enter a valid email address."
    if (!form.projectType) next.projectType = "Select a project type."
    if (!form.message.trim()) next.message = "Tell us a little about your project."
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setStatus("loading")
    setErrorMessage("")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      })

      const data = await res.json().catch(() => ({}))

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to submit enquiry. Please try again.")
      }

      setStatus("success")
      setForm(INITIAL_STATE)
    } catch (err: unknown) {
      setStatus("error")
      if (err instanceof Error) {
        setErrorMessage(err.message)
      } else {
        setErrorMessage("Something went wrong. Please try again.")
      }
    }
  }

  if (status === "success") {
    return (
      <div className="flex min-h-[420px] flex-col items-center justify-center rounded-lg border border-border bg-card p-10 text-center">
        <CheckCircle2 className="h-10 w-10 text-success" strokeWidth={1.5} />
        <h3 className="mt-6 text-xl font-semibold text-foreground">Enquiry Sent</h3>
        <p className="mt-3 max-w-sm text-sm leading-[1.7] text-muted-foreground">
          Thank you for reaching out. Our team will review your requirements and
          get back to you shortly.
        </p>
        <Button variant="outline" size="sm" className="mt-8" onClick={() => setStatus("idle")}>
          Send Another Enquiry
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-lg border border-border bg-card p-6 md:p-8">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="font-mono-label mb-2 block text-muted-foreground">
            Name
          </label>
          <Input
            id="name"
            placeholder="Enter your name"
            value={form.name}
            hasError={!!errors.name}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            onChange={(e) => update("name", e.target.value)}
          />
          {errors.name && (
            <p id="name-error" className="mt-2 text-xs text-destructive">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="font-mono-label mb-2 block text-muted-foreground">
            Email
          </label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={form.email}
            hasError={!!errors.email}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            onChange={(e) => update("email", e.target.value)}
          />
          {errors.email && (
            <p id="email-error" className="mt-2 text-xs text-destructive">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="font-mono-label mb-2 block text-muted-foreground">
            Phone
          </label>
          <Input
            id="phone"
            type="tel"
            placeholder="Enter your phone number"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="company" className="font-mono-label mb-2 block text-muted-foreground">
            Company
          </label>
          <Input
            id="company"
            placeholder="Enter your company name"
            value={form.company}
            onChange={(e) => update("company", e.target.value)}
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="projectType" className="font-mono-label mb-2 block text-muted-foreground">
            Project Type
          </label>
          <Select value={form.projectType} onValueChange={(v) => update("projectType", v)}>
            <SelectTrigger id="projectType" aria-invalid={!!errors.projectType}>
              <SelectValue placeholder="Select your requirement" />
            </SelectTrigger>
            <SelectContent>
              {PROJECT_TYPES.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.projectType && <p className="mt-2 text-xs text-destructive">{errors.projectType}</p>}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="font-mono-label mb-2 block text-muted-foreground">
            Message
          </label>
          <Textarea
            id="message"
            placeholder="Tell us about your project, requirements, and goals."
            value={form.message}
            hasError={!!errors.message}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
            onChange={(e) => update("message", e.target.value)}
          />
          {errors.message && (
            <p id="message-error" className="mt-2 text-xs text-destructive">
              {errors.message}
            </p>
          )}
        </div>
      </div>

      {status === "error" && (
        <div className="mt-5 flex items-center gap-2 rounded-md border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-destructive">
          <AlertCircle className="h-4 w-4 shrink-0" />
          {errorMessage || "Something went wrong. Please try again."}
        </div>
      )}

      <Button type="submit" size="lg" className="mt-8 w-full sm:w-auto" disabled={status === "loading"}>
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending
          </>
        ) : (
          <>
            Send Enquiry
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </>
        )}
      </Button>
    </form>
  )
}
