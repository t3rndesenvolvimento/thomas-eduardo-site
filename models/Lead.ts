import mongoose, { Schema, Document } from "mongoose"

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
  status: { type: String, default: "novo", enum: ["novo", "contatado", "proposta"] },
  createdAt: { type: Date, default: Date.now },
})

export default mongoose.models.Lead || mongoose.model<ILead>("Lead", LeadSchema)
