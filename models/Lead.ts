import mongoose, { Schema, Document } from "mongoose"

/* ─── Proposal subdocument ───────────────────────────────────────────────── */

export interface IProposal {
  clientName: string
  clientCompany?: string
  greeting: string
  projectTitle: string
  projectTag: string
  readingTime: string
  objective: string
  problem: string
  solution: string
  expectedResult: string
  included: string[]
  notIncluded: string[]
  totalValue: string
  paymentTerms: string
  deadline: string
  estimatedWeeks: number
  personalNote: string
  paymentLink?: string
  status?: "pending" | "aprovada"
  signature?: {
    name: string
    date: Date
  }
}

const ProposalSchema = new Schema<IProposal>(
  {
    clientName: String,
    clientCompany: String,
    greeting: String,
    projectTitle: String,
    projectTag: String,
    readingTime: String,
    objective: String,
    problem: String,
    solution: String,
    expectedResult: String,
    included: [String],
    notIncluded: [String],
    totalValue: String,
    paymentTerms: String,
    deadline: String,
    estimatedWeeks: Number,
    personalNote: String,
    paymentLink: String,
    status: {
      type: String,
      default: "pending",
      enum: ["pending", "aprovada"],
    },
    signature: {
      name: String,
      date: Date,
    },
  },
  { _id: false },
)

/* ─── Lead document ──────────────────────────────────────────────────────── */

export interface ILead extends Document {
  name: string
  email: string
  phone: string
  company: string
  role: string
  service: string
  painPoint: string
  budget: string
  status: "novo" | "contatado" | "proposta"
  proposal?: IProposal
  createdAt: Date
}

const LeadSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  company: { type: String, required: true },
  role: { type: String, required: true },
  service: { type: String, required: true },
  painPoint: { type: String, required: true },
  budget: { type: String, required: true },
  status: {
    type: String,
    default: "novo",
    enum: ["novo", "contatado", "proposta"],
  },
  proposal: { type: ProposalSchema, default: undefined },
  createdAt: { type: Date, default: Date.now },
})

export default mongoose.models.Lead ||
  mongoose.model<ILead>("Lead", LeadSchema)
