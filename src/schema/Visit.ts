import { IVisit,Household } from "../types/Visit"
import { connection, Schema } from "mongoose"

export default class VisitModel {
    private static VisitSchema: Schema = new Schema(
      {
        from: {
          type: Date,
          required: true,
        },
        to: {
          type: Date,
          required: false,
        },
        table: {
          type: String,
          required: true,
        },
        households: [Household]
      },
      { timestamps: true }
    )
    
    public static createModel = (tenantId:string,) => {
        const mongoConnection = connection.useDb(tenantId);
        return mongoConnection.model<IVisit>('Visit', VisitModel.VisitSchema);
    }
}