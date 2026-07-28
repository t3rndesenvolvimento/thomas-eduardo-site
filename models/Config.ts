import mongoose, { Schema, Document } from "mongoose"

export interface IConfig extends Document {
  pixKey?: string
  hourlyRate?: number
  whatsappPhone?: string
  emailNotification?: string
  updatedAt: Date
}

const ConfigSchema = new Schema<IConfig>({
  pixKey: { type: String, default: "" },
  hourlyRate: { type: Number, default: 150 },
  whatsappPhone: { type: String, default: "5511977070209" },
  emailNotification: { type: String, default: "contato@thomaseduardo.com.br" },
  updatedAt: { type: Date, default: Date.now },
})

export default mongoose.models.Config || mongoose.model<IConfig>("Config", ConfigSchema)
