import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Role } from 'src/auth/utils/role.enum';

@Schema({
  timestamps: true,
})
export class User extends Document {
  @Prop()
  name: string;

  @Prop({ unique: [true, 'Invalid email entered'] })
  email: string;

  @Prop()
  password: string;

  @Prop({ type: String , enum: Role, default: Role.USER})
  role: Role;
  
}

export const UserSchema = SchemaFactory.createForClass(User);