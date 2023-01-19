import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';
import { comparePassword, savePassword } from '../helpers/functionBcrypt.js';

const AdministrativosSchema = new Schema({
   name: {
      type: String,
      required: true,
   },
   email: {
      type: String,
      required: true,
      unique: true,
   },
   dni: {
      type: String,
      required: true,
      unique: true,
   },
   password: {
      type: String,
      required: true,
      trim: true,
   },
   escuelaId: {
      type: Schema.Types.ObjectId,
      ref: 'Escuela',
   },
   preceptorId: [
      {
         type: Schema.Types.ObjectId,
         ref: 'Preceptor',
      },
   ],
   role: {
      type: String,
      default: 'Administrativo',
   },
   token: {
      type: String,
   },
   confirmado: {
      type: Boolean,
      default: false,
   },
});
savePassword(AdministrativosSchema);
comparePassword(AdministrativosSchema);
const Administrativo = model('Administrativo', AdministrativosSchema);
export default Administrativo;
