import * as mongoose from 'mongoose'
import * as bcrypt from 'bcrypt'
import {environment} from '../common/environment'

export interface todoItem extends mongoose.Document{
  name: string
}

export interface User extends mongoose.Document {
  name: string,
  email: string,
  password: string,
  todoList: todoItem[],
  profiles: string[],
  matches(password: string): boolean,
  hasAny(...profiles: string[]): boolean
}

export interface UserModel extends mongoose.Model<User> {
  findByEmail(email: string, projection?: string): Promise<User>
}

const todoSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true
  }
})

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 80,
    minlength: 3
  },
  email: {
    type: String,
    unique: true,
    match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    required: true
  },
  todoList:{
    type: [todoSchema],
    required:false,
    select:false,
    default:[]
  },
  password: {
    type: String,
    select: false,
    required: true
  },  
  profiles :{
    type: [String],
    required: false
  }
})

userSchema.statics.findByEmail = function(email: string, projection: string){
  return this.findOne({email}, projection) //{email: email}
}

userSchema.methods.matches = function(password: string): boolean {
  return bcrypt.compareSync(password, this.password)
}

userSchema.methods.hasAny = function(...profiles: string[]) : boolean {
  return profiles.some(profile => this.profiles.indexOf(profile)!== -1)
}

const hashPassword = (obj, next)=>{
  bcrypt.hash(obj.password, environment.security.saltRounds)
        .then(hash=>{
          obj.password = hash
          next()
        }).catch(next)
}

const saveMiddleware = function (next){
  const user: User = this
  if(!user.isModified('password')){
    next()
  }else{
    hashPassword(user, next)
  }
}

const updateMiddleware = function (next){
  if(!this.getUpdate().password){
    next()
  }else{
    hashPassword(this.getUpdate(), next)
  }
}

userSchema.pre('save', saveMiddleware)
userSchema.pre('findOneAndUpdate', updateMiddleware)
userSchema.pre('update', updateMiddleware)

 export const User = mongoose.model<User, UserModel>('User', userSchema)
